import React, { useState } from "react";

function Playlists({ text, playlists,setDisplayCollection }) {
	const [showAllPlaylists, setShowAllPlaylists] = useState(false);
	return (
		<div>
			<div>
				<h2>{text}</h2>
				{playlists.length > 5 && (
					<span
						style={{ cursor: "pointer", fontSize: "13px" }}
						onClick={() => setShowAllPlaylists((prev) => !prev)}
					>
						{showAllPlaylists ? "Show less" : "Show all"}
					</span>
				)}
			</div>
			<div>
				{playlists.map((playlist, i) => {
					if (!showAllPlaylists && i > 4) {
						return;
					}
					return (
						<div id="playlist"  onClick={()=>setDisplayCollection(true)} style={{cursor:'pointer'}}>
							<div>
								<img src={playlist.img} alt="" />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									data-encore-id="icon"
									role="img"
									aria-hidden="true"
									viewBox="0 0 24 24"
									class="Svg-sc-ytk21e-0 iYxpxA"
								>
									<path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
								</svg>
							</div>
							<div>
								<h3>{playlist.title}</h3>
								<p>{playlist.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Playlists;
