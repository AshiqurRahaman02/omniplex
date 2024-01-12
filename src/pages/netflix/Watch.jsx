import React from "react";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
	defaultLayoutIcons,
	DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { PlayIcon } from '@vidstack/react/icons';

function Watch() {
	return (
		<div>
			<MediaPlayer
				title="Sprite Fight"
				src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
				playsinline
                autoplay
                style={{width :"100%", maxHeight:"99.6vh",overflow :"hidden"}}
			>
				<MediaProvider />
				<DefaultVideoLayout
					thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
					icons={defaultLayoutIcons}
				/>
                {/* <PlayIcon size={40} /> */}
			</MediaPlayer>
		</div>
	);
}

export default Watch;
