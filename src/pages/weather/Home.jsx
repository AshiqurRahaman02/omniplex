import { Oval } from "react-loader-spinner";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

// components
import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";

import { ToastContainer, toast } from "react-toastify";

import "../../styles/weather.css";

function Home() {
	const mapRef = useRef(null);

	const [input, setInput] = useState("");
	const [weather, setWeather] = useState({
		loading: true,
		data: {},
		error: false,
	});
	const [location, setLocation] = useState(null);

	useEffect(() => {
		const watchId = userLocationWeather();

		return () => {
			navigator.geolocation.clearWatch(watchId);
		};
	}, []);

	const userLocationWeather = () => {
		const watchId = navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setLocation({ latitude, longitude });

				const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
				const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

				axios
					.get(apiUrl, {
						params: {
							lat: latitude,
							lon: longitude,
							appid: apiKey,
							units: "metric",
						},
					})
					.then((res) => {
						setWeather({ data: res.data, loading: false, error: false });
					})
					.catch((error) =>
						console.error("Error fetching weather data:", error)
					);
			},
			(error) => console.error("Error getting location:", error.message)
		);
		return watchId;
	};

	const toDateFunction = () => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const WeekDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const currentDate = new Date();
		const date = `${
			WeekDays[currentDate.getDay()]
		} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
		return date;
	};

	const search = async (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			getWeather();
		}
	};

	const getWeather = async () => {
		setInput("");
		setWeather({ ...weather, loading: true });
		const url = "https://api.openweathermap.org/data/2.5/weather";
		const api_key = process.env.REACT_APP_WEATHER_API_KEY;
		await axios
			.get(url, {
				params: {
					q: input,
					units: "metric",
					appid: api_key,
				},
			})
			.then((res) => {
				console.log("res", res);
				setLocation({
					latitude: res.data.coord.lat,
					longitude: res.data.coord.lon,
				});
				setWeather({ data: res.data, loading: false, error: false });
			})
			.catch((error) => {
				setWeather({ ...weather, data: {}, error: true });
				setInput("");
				console.log("error", error);
			});
	};

	// useEffect(() => {
	// 	if (location && location.latitude && location.longitude) {
	// 		const { latitude, longitude } = location;
	//   mapRef.current.setView([latitude, longitude], mapRef.current.getZoom());

	// 	}
	// }, [location]);

	const ChangeMapView = () => {
		const map = useMap();
		if (location) {
			map.setView([location.latitude, location.longitude], map.getZoom());
		}
		return null;
	};
	return (
		<div>
			<Nav />
			<div className="weather-app">
				<div>
					<h1 className="app-name">Weather App</h1>
					<div className="search-bar">
						<input
							type="text"
							className="city-search"
							placeholder="Enter City Name.."
							name="query"
							value={input}
							autoComplete="false"
							onChange={(event) => setInput(event.target.value)}
							onKeyPress={search}
						/>
					</div>
					<div>
						{weather.loading && (
							<>
								<br />
								<br />
								<Oval
									type="Oval"
									color="black"
									height={100}
									width={100}
								/>
							</>
						)}
						{weather.error && (
							<>
								<br />
								<br />
								<span className="error-message">
									<FontAwesomeIcon icon={faFrown} />
									<span style={{ fontSize: "20px" }}>
										City not found
									</span>
								</span>
							</>
						)}
						{weather && weather.data && weather.data.main && (
							<div>
								<div className="city-name">
									<h2>
										{weather.data.name},{" "}
										<span>{weather.data.sys.country}</span>
									</h2>
								</div>
								<div className="date">
									<span>{toDateFunction()}</span>
								</div>
								<div className="icon-temp">
									<img
										className=""
										src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
										alt={weather.data.weather[0].description}
									/>
									{Math.round(weather.data.main.temp)}
									<sup className="deg">°C</sup>
								</div>
								<div className="des-wind">
									<p>
										{weather.data.weather[0].description.toUpperCase()}
									</p>
									<p>Wind Speed: {weather.data.wind.speed}m/s</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div>
					{location && weather && weather.data && weather.data.main && (
						<MapContainer
							center={[location.latitude, location.longitude]}
							zoom={10}
							style={{ height: "400px", width: "400px" }}
							ref={mapRef}
							className="leaflet-container"
						>
							<ChangeMapView />
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={[location.latitude, location.longitude]}>
								<Popup>
									<div>
										<h2>Current Weather</h2>
										<p>
											Temperature:{" "}
											{Math.round(weather.data.main.temp)}
											°C
										</p>
										<p>
											Sky Type:{" "}
											{weather.data.weather[0].description.toUpperCase()}
										</p>
									</div>
								</Popup>
							</Marker>
						</MapContainer>
					)}
				</div>
			</div>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Home;
