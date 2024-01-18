import { Oval } from "react-loader-spinner";
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

// components
import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";

import { ToastContainer, toast } from "react-toastify";

import "../../styles/weather.css";

function Home() {
	const [input, setInput] = useState("");
	const [weather, setWeather] = useState({
		loading: true,
		data: {},
		error: true,
	});

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
			getWeather()
		}
	};

    const getWeather =  async()=>{
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
					setWeather({ data: res.data, loading: false, error: false });
				})
				.catch((error) => {
					setWeather({ ...weather, data: {}, error: true });
					setInput("");
					console.log("error", error);
				});
    }

	return (
		<div>
            <Nav/>
			<div className="weather-app">
				<h1 className="app-name">Weather App</h1>
				<div className="search-bar">
					<input
						type="text"
						className="city-search"
						placeholder="Enter City Name.."
						name="query"
						value={input}
						onChange={(event) => setInput(event.target.value)}
						onKeyPress={search}
					/>
				</div>
				{weather.loading && (
					<>
						<br />
						<br />
						<Oval type="Oval" color="black" height={100} width={100} />
					</>
				)}
				{weather.error && (
					<>
						<br />
						<br />
						<span className="error-message">
							<FontAwesomeIcon icon={faFrown} />
							<span style={{ fontSize: "20px" }}>City not found</span>
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
							<p>{weather.data.weather[0].description.toUpperCase()}</p>
							<p>Wind Speed: {weather.data.wind.speed}m/s</p>
						</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39361.503633381384!2d88.12366607634293!3d25.010821174617426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafdc4bb4f265f%3A0xd2f3ad3661f39c5a!2sMalda%2C%20West%20Bengal%20732101!5e0!3m2!1sen!2sin!4v1705595017292!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				)}
			</div>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Home;
