import React, { useState } from "react";
import Playlists from "./Playlists";

function Artist({ artist ,setDisplayCollection, setSong, setIsPlaying}) {
	const [displayAllSongs, setDisplayAllSongs] = useState(false);
	return (
		<div id="playlistCollection">
			<div>
				<div><img src={artist.image} alt="" /></div>
				<div>
					<span
						style={{ display: "flex", alignItems: "center", gap: "5px" }}
					>
						<svg
							data-encore-id="icon"
							role="img"
							aria-hidden="true"
							class="Svg-sc-ytk21e-0 gxNUVX b0NcxAbHvRbqgs2S8QDg"
							viewBox="0 0 24 24"
						>
							<path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
						</svg>{" "}
						Verified Aritst
					</span>
					<h1>{artist.name}</h1>
					<p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
						<span>{artist.monthlyListeners} monthly listeners</span>
					</p>
				</div>
			</div>
			<div>
				<div>
					<div style={{ gap: "20px" }}>
						<button 
							onClick={() => {
								setSong(artist.artistPick);
								setIsPlaying(true);
							}}>
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 16 16"
								class="Svg-sc-ytk21e-0 kPpCsU"
								style={{ width: 30, height: 30 }}
							>
								<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
							</svg>
						</button>

						<span style={{padding:"5px 10px",border:"1px solid white",borderRadius:"30px", display:"grid",placeItems:"center",cursor:"pointer"}}>Following</span>

						<svg
							data-encore-id="icon"
							role="img"
							aria-hidden="true"
							viewBox="0 0 24 24"
							class="Svg-sc-ytk21e-0 cqasRA"
							style={{ width: 30, height: 30 }}
						>
							<path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
						</svg>
					</div>
				</div>
				<div id="songs">
					<h2 style={{margin:"10px 0px"}}>Popular</h2>
					<table>
						<thead>
							{/* <th  style={{textAlign:"end",paddingRight:"10px"}}>#</th>
                            <th>title</th>
                            <th>listeners</th>
                            <th>
									<svg
										data-encore-id="icon"
										role="img"
										aria-hidden="true"
										viewBox="0 0 16 16"
										class="Svg-sc-ytk21e-0 dYnaPI"
										style={{ width: 16 }}
									>
										<path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
										<path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
									</svg>
								</th> */}
						</thead>
						<tbody>
							{artist.popularSongs.map((song, i) => {
								if (!displayAllSongs && i > 4) {
									return;
								}
								return (
									<tr key={i}>
										<td
											style={{
												width: "50px",
												textAlign: "end",
												paddingRight: "10px",
											}}
											
							onClick={() => {
								setSong(artist.artistPick);
								setIsPlaying(true);
							}}
										>
											{i + 1}
										</td>
										<td className="title">
											<p>
												<img src={song.img} alt="" />
											</p>
											<p>
												<span>{song.name}</span>
												<br />
												<span>{song.owner}</span>
											</p>
										</td>
										<td>{song.listeners}</td>
										<td>{song.duration}</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<span
						style={{ cursor: "pointer", fontSize: "13px" }}
						onClick={() => setDisplayAllSongs((prev) => !prev)}
					>
						{displayAllSongs ? "Show less" : "Show all"}
					</span>
				</div>
				<div id="artist-pick">
					<h2>Aritst pick</h2>
					<div
						style={{
							backgroundImage: `url(${artist.artistPick.img})`,
                            backgroundSize:"cover",
                            backgroundRepeat: "no-repeat",
							borderImage: `fill 0 linear-gradient(#0001,#000)`,
						}}
					>
                        <p><img src={artist.image} alt="" /><span>My New Favourite</span></p>
						<div>
							<img src={artist.artistPick.thambnail} alt="" />
							<div>
								<h3>{artist.artistPick.name}</h3>
								<p>{artist.artistPick.type}</p>
							</div>
							<button id="playIcon" 
							onClick={() => {
								setSong(artist.artistPick);
								setIsPlaying(true);
							}}> 
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 16 16"
								class="Svg-sc-ytk21e-0 kPpCsU"
								style={{ width: 30, height: 30 }}
							>
								<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
							</svg>
						</button>
						</div>
					</div>
				</div>
                <main>
                    <Playlists text="Discography" playlists={artist.discography} setDisplayCollection={setDisplayCollection}/>
                </main>
                <div id="about">
                    <h2>About</h2>
                    <div>
                        <div>
                            <img src={artist.image} alt="" />
                            <p>{artist.monthlyListeners} monthly listeners</p>
                        </div>
                        <div>
                            <h2>#{artist.rank}</h2>
                            <span>in the world</span>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}

export default Artist;
