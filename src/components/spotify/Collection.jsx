import React from "react";

function Collection({ collection, setSong, setIsPlaying }) {
	return (
		<div id="playlistCollection">
			<div>
				<div>
					<img src={collection.image} alt="" />
				</div>
				<div>
					<span>{collection.type}</span>
					<h1>{collection.name}</h1>
					<p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
						<span>{collection.owner}</span>{" "}
						<span
							style={{
								width: "5px",
								height: "5px",
								borderRadius: "50%",
								background: "gray",
								marginTop: "5px",
							}}
						></span>{" "}
						<span>{collection.likes}</span>{" "}
						<span
							style={{
								width: "5px",
								height: "5px",
								borderRadius: "50%",
								background: "gray",
								marginTop: "5px",
							}}
						></span>{" "}
						<span>{collection.songs.length} songs</span>{" "}
						<span
							style={{
								width: "5px",
								height: "5px",
								borderRadius: "50%",
								background: "gray",
								marginTop: "5px",
							}}
						></span>{" "}
						<span>{collection.totalTime}</span>
					</p>
				</div>
			</div>
			<div>
				<div>
					<div style={{ gap: "20px" }}>
						<button
							onClick={() => {
								setSong(collection.songs[0]);
								setIsPlaying(true);
							}}
						>
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

						<svg
							data-encore-id="icon"
							role="img"
							aria-hidden="true"
							viewBox="0 0 24 24"
							class="Svg-sc-ytk21e-0 cqasRA"
							style={{ width: 30, height: 30, fill: "#1ed760" }}
						>
							<path d="M8.667 1.912a6.257 6.257 0 0 0-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 0 0 3.09 0l7.956-9.482a6.188 6.188 0 0 0 1.382-5.234l-.49.097.49-.099a6.303 6.303 0 0 0-5.162-4.98h-.002a6.24 6.24 0 0 0-5.295 1.65.623.623 0 0 1-.848 0 6.257 6.257 0 0 0-2.91-1.568z"></path>
						</svg>

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
					<div>
						Lists{" "}
						<svg
							data-encore-id="icon"
							role="img"
							aria-hidden="true"
							viewBox="0 0 16 16"
							class="Svg-sc-ytk21e-0 cAMMLk"
							style={{ width: 16 }}
						>
							<path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
						</svg>
					</div>
				</div>
				<div id="songs">
					<table>
						<thead>
							<tr>
								<th style={{ textAlign: "end", paddingRight: "10px" }}>
									#
								</th>
								<th>Title</th>
								<th>Album</th>
								<th>Date added</th>
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
								</th>
							</tr>
						</thead>
						<tbody>
							{collection.songs.map((song, i) => (
								<tr key={i}>
									<td
										style={{ textAlign: "end", paddingRight: "10px" }}
										onClick={() => {
											setSong(collection.songs[0]);
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
									<td>{song.album}</td>
									<td>{song.date}</td>
									<td>{song.duration}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Collection;
