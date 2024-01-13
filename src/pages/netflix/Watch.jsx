import React, { useEffect, useState, useRef } from "react";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
	defaultLayoutIcons,
	DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import changeFavicon from "../../utils/FaviconUtils";
import { useNavigate } from "react-router-dom";
import popular from "../../constant/netflix/popular";

const videos = [
	"/assets/netflix/videos/Lookism.mp4",
	"/assets/netflix/videos/GRAN TURISMO.mp4",
	"/assets/netflix/videos/HI PAPA.mp4",
	"/assets/netflix/videos/Money Heist_ Korea - Joint Economic Area.mp4",
	"/assets/netflix/videos/ONE PIECE.mp4",
	"/assets/netflix/videos/Peaky Blinders.mp4",
	"/assets/netflix/videos/Society of the Snow.mp4",
	"/assets/netflix/videos/The Good Doctor.mp4",
	"/assets/netflix/videos/The Playlist.mp4",
	"/assets/netflix/videos/Top Gun_ Maverick.mp4",
];

function Watch() {
	const navigate = useNavigate()
	const [videoSrc, setVideoSrc] = useState(
		"/assets/netflix/videos/Lookism.mp4"
	);
	const [isMute, setIsMute] = useState(true);

	const playerRef = useRef(null);

	useEffect(() => {
		document.title =
			"Netflix India – Watch TV Shows Online, Watch Movies Online";

		changeFavicon(
			"https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
		);


		const searchParams = new URLSearchParams(window.location.search);

		const videoId = searchParams.get("trackId");
		if(!videoId){
			navigate("/netflix")
		}
		else{
			// console.log()
			setVideoSrc(popular[videoId].video)
		}

		setTimeout(() => {
			setIsMute(false);
		}, 1000);
	}, [window.location.search]);

	return (
		<div
			style={{
				backgroundColor: "black",
			}}
		>
			<div
				style={{
					height: "100vh",
					width: "90%",
					margin: "auto",
					maxHeight: "100vh",
					overflow: "hidden",
					padding: 0,
				}}
			>
				<MediaPlayer
					title="Sprite Fight"
					src={videoSrc}
					ref={playerRef}
					playsinline
					autoplay
					muted={isMute}
					style={{ height: "100%", border: "0",color :"red" }}
				>
					<MediaProvider />
					<DefaultVideoLayout
						thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
						icons={defaultLayoutIcons}
					/>
				</MediaPlayer>
			</div>
		</div>
	);
}

export default Watch;
