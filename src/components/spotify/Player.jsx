import React, { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import { Slider } from "@mui/material";

function Player({ song, isPlaying, setIsPlaying }) {
	const audioRef = useRef();
	const [currentTime, setCurrentTime] = useState(0);
	const [volume, setVoulume] = useState(100);

	useEffect(() => {
		let interval;

		const handleInterval = () => {
			setCurrentTime(audioRef.current.seek());
		};

		if (isPlaying) {
			interval = setInterval(handleInterval, 500);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isPlaying]);

	const getDuration = () => {
		console.log(audioRef);
		let timeInSeconds = audioRef.current?._howler._duration || 0;
		return getTime(timeInSeconds) || "0:00";
	};

	const dragHandler = (e) => {
		console.log(e.target);
		const seekTime = parseFloat(e.target.value);
		setCurrentTime(seekTime);
		audioRef.current.seek(seekTime);
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};
	const handleOnLoad = () => {
		const duration = audioRef.current.duration();
		console.log("Duration:", duration);
	};
	return (
		<div
			style={{
				backgroundColor: "transparent",
				backgroundImage: "none",
			}}
			id="playing-container"
		>
			<div>
				<div>
					<img
						src={
							song.img ||
							"https://i.scdn.co/image/ab67616d000048517dd8f95320e8ef08aa121dfe"
						}
						alt=""
					/>
				</div>
				<div>
					<p>{song.name || "You Never Know"}</p>
					<p>{song.owner || "BLACKPINK"}</p>
				</div>
				<div>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						class="Svg-sc-ytk21e-0 kPpCsU"
					>
						<path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
					</svg>
				</div>
			</div>
			<div>
				<div>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						class="Svg-sc-ytk21e-0 kPpCsU"
					>
						<path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
						<path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
					</svg>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						class="Svg-sc-ytk21e-0 kPpCsU"
					>
						<path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
					</svg>
					<button onClick={() => setIsPlaying((pre) => !pre)}>
						{isPlaying ? (
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 16 16"
								class="Svg-sc-ytk21e-0 dYnaPI"
							>
								<path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
							</svg>
						) : (
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 16 16"
								class="Svg-sc-ytk21e-0 kPpCsU"
							>
								<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
							</svg>
						)}
					</button>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						class="Svg-sc-ytk21e-0 kPpCsU"
					>
						<path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
					</svg>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						class="Svg-sc-ytk21e-0 kPpCsU"
					>
						<path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
					</svg>
				</div>
				<div>
					<span>{getTime(currentTime) || "0:00"}</span>
					<ReactHowler
						src={song.src}
						ref={audioRef}
						playing={isPlaying}
						loop={false}
						volume={volume / 100}
						onEnd={() => setIsPlaying(false)}
						onLoad={handleOnLoad}
					/>
					<Slider
						aria-label="Temperature"
						min={0}
						max={audioRef.current?._howler._duration}
						value={currentTime}
						onChange={(e) => dragHandler(e)}
						// size="small"
						id="slider"
						style={{
							width: "500px",
							color: "#1fdf64",
							padding: "0",
						}}
					/>
					<span>{getDuration()}</span>
				</div>
			</div>
			<div>
				<svg
					data-encore-id="icon"
					role="img"
					aria-hidden="true"
					viewBox="0 0 16 16"
					class="Svg-sc-ytk21e-0 kPpCsU"
				>
					<path d="M11.196 8 6 5v6l5.196-3z"></path>
					<path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
				</svg>
				<svg
					data-encore-id="icon"
					role="img"
					aria-hidden="true"
					viewBox="0 0 16 16"
					class="Svg-sc-ytk21e-0 kPpCsU"
				>
					<path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
				</svg>
				<svg
					data-encore-id="icon"
					role="img"
					aria-hidden="true"
					viewBox="0 0 16 16"
					class="Svg-sc-ytk21e-0 kPpCsU"
				>
					<path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
				</svg>
				<svg
					data-encore-id="icon"
					role="presentation"
					aria-hidden="true"
					class="Svg-sc-ytk21e-0 kPpCsU"
					viewBox="0 0 16 16"
				>
					<path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
					<path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
				</svg>
				<svg
					data-encore-id="icon"
					role="presentation"
					aria-label="Volume medium"
					aria-hidden="true"
					id="volume-icon"
					viewBox="0 0 16 16"
					class="Svg-sc-ytk21e-0 dAOlPY"
				>
					<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
				</svg>
				<Slider
					aria-label="Temperature"
					value={volume}
					onChange={(e) => setVoulume(e.target.value)}
					size="small"
					id="slider"
					style={{ width: "100px", color: "#1fdf64" }}
				/>
				<svg
					data-encore-id="icon"
					role="img"
					aria-hidden="true"
					viewBox="0 0 16 16"
					class="Svg-sc-ytk21e-0 kPpCsU"
				>
					<path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path>
					<path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path>
				</svg>
			</div>
		</div>
	);
}

export default Player;
