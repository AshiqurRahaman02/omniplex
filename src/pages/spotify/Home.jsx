import React, { useEffect, useState } from "react";
import changeFavicon from "../../utils/FaviconUtils";

import "../../styles/spotify.css";
import { Link, useNavigate } from "react-router-dom";

import Playlists from "../../components/spotify/Playlists";
import Collection from "../../components/spotify/Collection";
import Artist from "../../components/spotify/Artist";

import library from "../../constant/spotify/library";

import dinnerPlaylists from "../../constant/spotify/dinner";
import sleepPlaylists from "../../constant/spotify/sleep";
import trendingPlaylists from "../../constant/spotify/trending";
import playlistCollection from "../../constant/spotify/playlistCollection";
import artist from "../../constant/spotify/artist";
import { Slider } from "@mui/material";

let leftBottomLinks = [
	{
		text: "Legal",
		to: "https://www.spotify.com/in-en/legal/end-user-agreement/",
	},
	{ text: "Privacy Center", to: "https://www.spotify.com/in-en/privacy" },
	{
		text: "Privacy Policy",
		to: "https://www.spotify.com/in-en/legal/privacy-policy/",
	},
	{
		text: "Cookies",
		to: "https://www.spotify.com/in-en/legal/cookies-policy/",
	},
	{
		text: "About Ads",
		to: "https://www.spotify.com/in-en/legal/privacy-policy/#s3",
	},
	{
		text: "Accessibility ",
		to: "https://www.spotify.com/in-en/accessibility",
	},
	{
		text: "Cookies",
		to: "https://www.spotify.com/in-en/legal/cookies-policy/",
	},
];

function Home() {
	const navigate = useNavigate();
	const [userLogedIn, setUserLoggedIn] = useState();
	const [dislaySearchLibrary, setDisplaySearchLibrary] = useState(false);

	const [displayCollection, setDisplayCollection] = useState(false);
	const [displayArtist, setDisplayArtist] = useState(false);

	useEffect(() => {
		document.title = "Spotify - Web Player: Music for everyone";
		changeFavicon(
			"https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
		);

		setUserLoggedIn(localStorage.getItem("spotifyLogedIn"));
	}, []);

	return (
		<div className="spotify">
			<div>
				<div id="spotify-left">
					<div id="spotify-nav">
						<svg
							viewBox="0 0 78 24"
							xmlns="http://www.w3.org/2000/svg"
							// width="24"
							height="24"
							style={{ fill: "white", margin: "8px 12px" }}
						>
							<title>Spotify</title>
							<path d="M31.8234 11.0782C29.8042 10.5836 29.4444 10.2376 29.4444 9.50832C29.4444 8.8202 30.077 8.35677 31.0159 8.35677C31.9262 8.35677 32.8296 8.70885 33.7765 9.43308C33.8051 9.45515 33.8407 9.46318 33.8763 9.45816C33.8937 9.45541 33.9104 9.4491 33.9253 9.43962C33.9403 9.43013 33.9532 9.41767 33.9633 9.40299L34.9496 7.97659C34.9691 7.9483 34.9774 7.91361 34.9728 7.87941C34.9682 7.84522 34.9511 7.81402 34.9249 7.79203C33.7982 6.86416 32.5291 6.41378 31.0456 6.41378C28.8653 6.41378 27.3422 7.75591 27.3422 9.67684C27.3422 11.7372 28.6567 12.4654 30.927 13.0292C32.8592 13.4856 33.1854 13.8688 33.1854 14.5529C33.1854 15.3102 32.5262 15.7817 31.4647 15.7817C30.2855 15.7817 29.3239 15.3744 28.2485 14.4185C28.2354 14.4066 28.22 14.3975 28.2033 14.3918C28.1866 14.3861 28.169 14.3839 28.1515 14.3853C28.1339 14.3867 28.1168 14.3917 28.1012 14.4C28.0856 14.4083 28.0719 14.4197 28.0607 14.4335L26.9547 15.7837C26.9322 15.8106 26.921 15.8454 26.9234 15.8806C26.9258 15.9158 26.9416 15.9487 26.9676 15.9722C28.2199 17.1188 29.7587 17.7236 31.4192 17.7236C33.7695 17.7236 35.2877 16.4066 35.2877 14.3683C35.2877 12.645 34.2845 11.6921 31.8234 11.0782ZM42.31 13.3873C42.31 14.8418 41.4363 15.8579 40.185 15.8579C38.9496 15.8579 38.0165 14.7966 38.0165 13.3873C38.0165 11.9789 38.9486 10.9177 40.186 10.9177C41.4165 10.9177 42.31 11.9559 42.31 13.3873ZM40.6041 9.03385C39.5861 9.03385 38.7499 9.44613 38.061 10.2897V9.3408C38.0613 9.30506 38.0476 9.27066 38.023 9.2451C37.9984 9.21955 37.9648 9.20491 37.9296 9.20438H36.1209C36.1033 9.20451 36.086 9.20814 36.0699 9.21507C36.0537 9.222 36.0391 9.23208 36.0268 9.24475C36.0145 9.25742 36.0048 9.27242 35.9982 9.2889C35.9916 9.30538 35.9883 9.32302 35.9884 9.3408V19.8873C35.9884 19.9626 36.0477 20.0237 36.1209 20.0237H37.9296C37.9648 20.0232 37.9984 20.0086 38.023 19.983C38.0476 19.9575 38.0613 19.9231 38.061 19.8873V16.5581C38.7509 17.3515 39.5861 17.7387 40.6041 17.7387C42.4968 17.7387 44.4123 16.2441 44.4123 13.3873C44.4123 10.5295 42.4968 9.03385 40.6041 9.03385ZM49.3235 15.8729C48.0267 15.8729 47.0502 14.8046 47.0502 13.3873C47.0502 11.9649 47.9931 10.9317 49.2938 10.9317C50.5985 10.9317 51.5819 12.001 51.5819 13.4194C51.5819 14.8408 50.6331 15.8729 49.3235 15.8729ZM49.3235 9.03486C46.8862 9.03486 44.9766 10.9608 44.9766 13.4184C44.9766 15.8499 46.8733 17.7557 49.2938 17.7557C51.739 17.7557 53.6545 15.8368 53.6545 13.3873C53.6545 10.9468 51.7529 9.03385 49.3235 9.03385V9.03486ZM58.8592 9.20438H56.8697V7.11795C56.8699 7.10013 56.8667 7.08243 56.8601 7.06589C56.8536 7.04935 56.8439 7.0343 56.8316 7.0216C56.8192 7.00891 56.8046 6.99883 56.7884 6.99195C56.7722 6.98507 56.7548 6.98152 56.7372 6.98153H54.9285C54.8935 6.98205 54.86 6.99655 54.8354 7.02189C54.8108 7.04723 54.797 7.08137 54.797 7.11694V9.20438H53.9273C53.9098 9.20451 53.8925 9.20815 53.8764 9.21509C53.8604 9.22203 53.8458 9.23213 53.8336 9.24481C53.8213 9.25749 53.8117 9.2725 53.8052 9.28898C53.7988 9.30545 53.7956 9.32306 53.7958 9.3408V10.9357C53.7958 11.0099 53.8551 11.0711 53.9273 11.0711H54.797V15.1969C54.797 16.864 55.6055 17.7096 57.2008 17.7096C57.8491 17.7096 58.3868 17.5722 58.8948 17.2763C58.9152 17.2644 58.9322 17.2474 58.944 17.2268C58.9558 17.2061 58.962 17.1827 58.962 17.1589V15.6402C58.962 15.6171 58.9561 15.5944 58.9451 15.5743C58.934 15.5541 58.9181 15.5371 58.8988 15.5249C58.8797 15.5128 58.8578 15.5059 58.8353 15.5048C58.8128 15.5038 58.7904 15.5086 58.7703 15.5188C58.4214 15.6994 58.0853 15.7817 57.7088 15.7817C57.1286 15.7817 56.8687 15.5108 56.8687 14.906V11.0701H58.8592C58.8768 11.07 58.8941 11.0664 58.9102 11.0594C58.9264 11.0525 58.941 11.0424 58.9533 11.0298C58.9656 11.0171 58.9753 11.0021 58.9819 10.9856C58.9885 10.9691 58.9918 10.9515 58.9917 10.9337V9.33879C58.9918 9.32106 58.9885 9.30347 58.9819 9.28705C58.9753 9.27062 58.9655 9.25569 58.9532 9.2431C58.9409 9.23051 58.9263 9.22052 58.9101 9.2137C58.894 9.20689 58.8767 9.20338 58.8592 9.20338V9.20438ZM65.7926 9.21241V8.95662C65.7926 8.20229 66.0743 7.86525 66.7069 7.86525C67.0834 7.86525 67.3869 7.94249 67.7259 8.05885C67.7458 8.06532 67.7669 8.06688 67.7876 8.06339C67.8082 8.0599 67.8277 8.05146 67.8445 8.03879C67.8617 8.02619 67.8757 8.0096 67.8853 7.99041C67.8949 7.97122 67.8999 7.94998 67.8998 7.92845V6.36563C67.9001 6.33654 67.891 6.30815 67.8741 6.28466C67.8572 6.26118 67.8333 6.24384 67.8059 6.23523C67.3194 6.08322 66.8126 6.00877 66.3036 6.01455C64.6333 6.01455 63.7497 6.97952 63.7497 8.80314V9.19635H62.8809C62.8457 9.19662 62.812 9.211 62.7872 9.23637C62.7624 9.26174 62.7485 9.29603 62.7485 9.33177V10.9347C62.7485 11.0099 62.8078 11.0711 62.8809 11.0711H63.7507V17.4348C63.7507 17.51 63.809 17.5702 63.8821 17.5702H65.6908C65.763 17.5702 65.8223 17.51 65.8223 17.4348V11.0701H67.5114L70.098 17.4317C69.8044 18.1008 69.5148 18.2342 69.1214 18.2342C68.8022 18.2342 68.4671 18.1359 68.1232 17.9433C68.1073 17.9346 68.0898 17.9292 68.0718 17.9275C68.0538 17.9257 68.0357 17.9277 68.0184 17.9333C68.0012 17.9395 67.9854 17.9491 67.9719 17.9617C67.9585 17.9743 67.9478 17.9896 67.9403 18.0065L67.3276 19.3858C67.3133 19.4168 67.3112 19.4522 67.3217 19.4848C67.3321 19.5174 67.3544 19.5447 67.3839 19.5613C67.9715 19.9033 68.6389 20.0787 69.3162 20.0689C70.6504 20.0689 71.3888 19.4309 72.0401 17.7136L75.1772 9.39697C75.1851 9.37633 75.1879 9.35406 75.1855 9.33206C75.1831 9.31005 75.1755 9.28896 75.1633 9.27058C75.1514 9.25244 75.1352 9.23756 75.1162 9.22724C75.0973 9.21693 75.0761 9.21149 75.0546 9.2114H73.1718C73.1441 9.21153 73.1172 9.22039 73.0947 9.23674C73.0722 9.25309 73.0553 9.27614 73.0462 9.30268L71.1179 14.9541L69.0058 9.29867C68.9965 9.27304 68.9797 9.25092 68.9576 9.23531C68.9355 9.21971 68.9092 9.21136 68.8823 9.2114H65.7926V9.21241ZM61.7729 9.20438H59.9642C59.929 9.20491 59.8954 9.21955 59.8708 9.2451C59.8462 9.27066 59.8325 9.30506 59.8328 9.3408V17.4348C59.8328 17.51 59.8921 17.5702 59.9652 17.5702H61.7739C61.8461 17.5702 61.9054 17.51 61.9054 17.4348V9.3398C61.9054 9.30406 61.8915 9.26976 61.8666 9.2444C61.8418 9.21903 61.8082 9.20464 61.7729 9.20438ZM60.8775 5.51902C60.5318 5.52114 60.2011 5.6624 59.958 5.91179C59.7148 6.16117 59.5792 6.49829 59.5807 6.84912C59.5798 7.023 59.6127 7.19536 59.6774 7.35636C59.7421 7.51736 59.8375 7.66384 59.958 7.78745C60.0785 7.91105 60.2218 8.00936 60.3797 8.07675C60.5377 8.14414 60.7071 8.1793 60.8785 8.18022C61.2243 8.1781 61.5552 8.0367 61.7983 7.7871C62.0415 7.53749 62.177 7.20012 62.1752 6.84912C62.1752 6.11385 61.5931 5.51902 60.8775 5.51902ZM76.7951 10.0099H76.464V10.4432H76.7951C76.9602 10.4432 77.059 10.3599 77.059 10.2265C77.059 10.0851 76.9602 10.0099 76.7951 10.0099ZM77.0096 10.6278L77.3704 11.1454H77.0659L76.7427 10.6709H76.464V11.1454H76.21V9.77414H76.805C77.1154 9.77414 77.3199 9.93764 77.3199 10.2115C77.3243 10.3067 77.2956 10.4005 77.2389 10.4765C77.1822 10.5526 77.1011 10.6061 77.0096 10.6278ZM76.7279 9.31873C76.0756 9.31873 75.5824 9.85037 75.5824 10.5014C75.5824 11.1514 76.0726 11.676 76.721 11.676C77.3733 11.676 77.8675 11.1444 77.8675 10.4934C77.8675 9.84335 77.3763 9.31873 76.7279 9.31873ZM76.721 11.8064C76.5529 11.806 76.3865 11.7719 76.2315 11.706C76.0764 11.6401 75.9357 11.5437 75.8175 11.4224C75.6993 11.3012 75.6058 11.1573 75.5426 10.9993C75.4794 10.8412 75.4475 10.672 75.449 10.5014C75.449 9.78517 76.0123 9.18833 76.7279 9.18833C76.896 9.18872 77.0624 9.22285 77.2174 9.28874C77.3725 9.35464 77.5132 9.451 77.6314 9.57229C77.7496 9.69358 77.8431 9.8374 77.9063 9.99547C77.9696 10.1535 78.0014 10.3228 77.9999 10.4934C77.9999 11.2096 77.4366 11.8074 76.721 11.8074V11.8064Z M19.0985 10.6382C15.2302 8.34115 8.85004 8.13001 5.15734 9.25061C4.56443 9.4307 3.93745 9.09586 3.75774 8.50285C3.57803 7.90967 3.91237 7.283 4.50579 7.10274C8.74454 5.81575 15.7911 6.06437 20.244 8.70775C20.7776 9.02438 20.9524 9.71333 20.6363 10.2458C20.3199 10.7793 19.6303 10.9549 19.0985 10.6382ZM17.6847 14.3488C14.4602 12.3664 9.54258 11.7923 5.72724 12.9502C5.23257 13.0996 4.71006 12.8208 4.55976 12.327C4.41084 11.8322 4.68965 11.3109 5.1838 11.1605C9.54206 9.83755 14.9602 10.4784 18.6638 12.7544C19.1038 13.0254 19.2424 13.6014 18.9717 14.0407C18.7003 14.481 18.1247 14.6191 17.6847 14.3488ZM16.475 17.5571C13.657 15.8349 10.1104 15.446 5.93306 16.4002C5.53058 16.4923 5.12966 16.2401 5.03782 15.8377C4.94546 15.4352 5.19677 15.0339 5.60011 14.9421C10.1715 13.8972 14.0923 14.3469 17.2554 16.2796C17.6079 16.4949 17.7191 16.9557 17.5034 17.3084C17.2879 17.6619 16.8275 17.7727 16.475 17.5571ZM0 11.9998C0 18.6277 5.37285 24 12 24C18.6277 24 24 18.6277 24 11.9998C24 5.37264 18.6277 0 12 0C5.37285 0 0 5.37264 0 11.9998Z"></path>
						</svg>
						<p>
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
							</svg>{" "}
							<span>Home</span>
						</p>
						<p>
							<svg
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
							</svg>{" "}
							<span>Search</span>
						</p>
					</div>
					<div id="spotify-library">
						<div>
							<p>
								<svg
									data-encore-id="icon"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-hidden="true"
									viewBox="0 0 24 24"
									class="Svg-sc-ytk21e-0 iYxpxA"
								>
									<path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
								</svg>{" "}
								<span>Your Library</span>
							</p>
							<p>
								<svg
									data-encore-id="icon"
									role="img"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
								</svg>
							</p>
						</div>
						{userLogedIn ? (
							<div>
								<p className="playlist-artist">
									<span>Playlists</span>
									<span>Artist</span>
								</p>
								<div id="main-library">
									<p>
										<span>
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												class="Svg-sc-ytk21e-0 dYnaPI CIVozJ8XNPJ60uMN23Yg"
												viewBox="0 0 16 16"
												onClick={() =>
													setDisplaySearchLibrary((pre) => !pre)
												}
											>
												<path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
											</svg>
											<input
												type="search"
												placeholder="Search in your Library"
												style={{
													width: dislaySearchLibrary
														? "230px"
														: "30px",
													border: dislaySearchLibrary
														? "1px solid white"
														: "0px",
													backgroundColor: dislaySearchLibrary
														? "#000000e1"
														: "transparent",
												}}
											/>
										</span>{" "}
										<span>
											Recents{" "}
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												viewBox="0 0 16 16"
												class="Svg-sc-ytk21e-0 cAMMLk"
											>
												<path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
											</svg>
										</span>
									</p>
									{library.map((l, i) => {
										if (l.type === "Artist") {
											return (
												<div
													key={i}
													onClick={() => {setDisplayArtist(true)
													setDisplayCollection(false)}}
													style={{ cursor: "pointer" }}
												>
													<div>
														<img
															src={l.img}
															alt=""
															style={{ borderRadius: "50%" }}
														/>
													</div>
													<div>
														<h4>{l.owner}</h4>
														<p>
															<span>{l.type}</span>{" "}
														</p>
													</div>
												</div>
											);
										}
										return (
											<div
												key={i}
												onClick={() => {setDisplayArtist(false)
												setDisplayCollection(true)}}
												style={{ cursor: "pointer" }}
											>
												<div>
													<img src={l.img} alt="" />
												</div>
												<div>
													<h4>{l.title}</h4>
													<p>
														<span>{l.type}</span>{" "}
														<span
															style={{
																width: "5px",
																height: "5px",
																borderRadius: "50%",
																background: "gray",
															}}
														></span>{" "}
														<span>{l.owner}</span>
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						) : (
							<div>
								<div id="main">
									<div>
										<h4>Create your first playlist</h4>
										<p>It's easy, we'll help you</p>
										<button>Create playlist</button>
									</div>
									<div>
										<h4>Let's find some podcasts to follow</h4>
										<p>We'll keep you updated on new episodes</p>
										<button>Create playlist</button>
									</div>
								</div>
								<div>
									{leftBottomLinks.map((link, index) => (
										<Link to={link.to}>{link.text}</Link>
									))}
								</div>
								<div>
									<button>
										<svg
											style={{
												fill: "white",
												width: "16px",
											}}
											xmlns="http://www.w3.org/2000/svg"
											data-encore-id="icon"
											role="img"
											aria-hidden="true"
											viewBox="0 0 16 16"
											class="Svg-sc-ytk21e-0 kPpCsU"
										>
											<path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
										</svg>
										<span>English</span>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div id="spotify-main">
					<nav
						style={{
							backgroundColor:
								displayCollection || displayArtist
									? "#3D6389"
									: "#121212",
						}}
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF"
								viewBox="0 0 16 16"
								style={{
									cursor: displayCollection || displayArtist ? "pointer" : "no-drop",
								}}
								onClick={() => {setDisplayCollection(false)
								setDisplayArtist(false)}}
							>
								<path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								data-encore-id="icon"
								role="img"
								aria-hidden="true"
								class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF"
								viewBox="0 0 16 16"
							>
								<path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
							</svg>
						</div>
						{userLogedIn ? (
							<div>
								<button>Explore Premium</button>
								<button>Install App</button>
								<div>
									<svg
										data-encore-id="icon"
										role="img"
										aria-hidden="true"
										class="Svg-sc-ytk21e-0 kPpCsU t93PZphItuM19kPhX7tC"
										viewBox="0 0 16 16"
										style={{ cursor: "pointer" }}
									>
										<path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
									</svg>
								</div>
								<div>
									<svg
										data-encore-id="icon"
										role="img"
										aria-hidden="true"
										data-testid="user-icon"
										viewBox="0 0 16 16"
										class="Svg-sc-ytk21e-0 kPpCsU"
										style={{ cursor: "pointer" }}
									>
										<path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path>
									</svg>
								</div>
							</div>
						) : (
							<div>
								<button onClick={() => navigate("/spotify/sign-up")}>
									Sign up
								</button>
								<button onClick={() => navigate("/spotify/sign-in")}>
									Log in
								</button>
							</div>
						)}
					</nav>
					{displayCollection ? (
						<div>
							<Collection collection={playlistCollection} />
						</div>
					) : displayArtist ? (
						<Artist artist={artist} setDisplayCollection={setDisplayCollection}/>
					) : (
						<main>
							<Playlists
								text="Trending Playlists"
								playlists={trendingPlaylists}
								setDisplayCollection={setDisplayCollection}
							/>
							<Playlists
								text="Dinner Playlists"
								playlists={dinnerPlaylists}
								setDisplayCollection={setDisplayCollection}
							/>
							<Playlists
								text="Sleep Playlists"
								playlists={sleepPlaylists}
								setDisplayCollection={setDisplayCollection}
							/>
						</main>
					)}
					{!displayCollection && !displayArtist && (
						<footer>
							<div>
								<div>
									<ul>
										<h4>Company</h4>
										<li>About</li>
										<li>Jobs</li>
										<li>For the Record</li>
									</ul>
									<ul>
										<h4>Communities</h4>
										<li>For Artists</li>
										<li>Developers</li>
										<li>Advertising</li>
										<li>Investors</li>
										<li>Vendors</li>
									</ul>
									<ul>
										<h4>Useful links</h4>
										<li>Support</li>
										<li>Help</li>
										<li>Free Mobile App</li>
									</ul>
								</div>
								<div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											height="16"
											width="16"
											aria-hidden="true"
											viewBox="0 0 16 16"
											data-encore-id="icon"
											class="Svg-sc-ytk21e-0 hOjEcl"
										>
											<path d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 01-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 01-.921-.599 2.477 2.477 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 01.92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 00-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 002.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 00-.923-1.418A3.928 3.928 0 0013.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"></path>
											<path d="M8 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.668 2.668 0 110-5.335 2.668 2.668 0 010 5.335zm4.27-5.978a.96.96 0 100-1.92.96.96 0 000 1.92z"></path>
										</svg>
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											height="16"
											width="16"
											aria-hidden="true"
											viewBox="0 0 16 16"
											data-encore-id="icon"
											class="Svg-sc-ytk21e-0 hOjEcl"
										>
											<path d="M13.54 3.889a2.968 2.968 0 001.333-1.683 5.937 5.937 0 01-1.929.738 2.992 2.992 0 00-.996-.706 2.98 2.98 0 00-1.218-.254 2.92 2.92 0 00-2.143.889 2.929 2.929 0 00-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 01-3.484-.932A8.536 8.536 0 011.532 2.54a2.993 2.993 0 00-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 01-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 001.739 1.048 2.937 2.937 0 01-1.365.056 2.94 2.94 0 001.063 1.5 2.945 2.945 0 001.77.603 5.944 5.944 0 01-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 005.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 001.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 00.738-1.988 8.417 8.417 0 00.246-2.429 6.177 6.177 0 001.508-1.563c-.56.249-1.14.407-1.738.476z"></path>
										</svg>
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											height="16"
											width="16"
											aria-hidden="true"
											viewBox="0 0 16 16"
											data-encore-id="icon"
											class="Svg-sc-ytk21e-0 haNxPq"
										>
											<path d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"></path>
										</svg>
									</div>
								</div>
							</div>
							<hr />
							<p>© 2024 Spotify AB</p>
						</footer>
					)}
				</div>
			</div>
			{userLogedIn ? (
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
								src="https://i.scdn.co/image/ab67616d000048517dd8f95320e8ef08aa121dfe"
								alt=""
							/>
						</div>
						<div>
							<p>You Never Know</p>
							<p>BLACKPINK</p>
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
							<button>
								<svg
									data-encore-id="icon"
									role="img"
									aria-hidden="true"
									viewBox="0 0 16 16"
									class="Svg-sc-ytk21e-0 kPpCsU"
								>
									<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
								</svg>
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
							<span>1:05</span>
							<Slider
								aria-label="Temperature"
								defaultValue={105}
								min={0}
								max={320}
								// size="small"
								id="slider"
								style={{
									width: "500px",
									color: "#1fdf64",
									padding: "0",
								}}
							/>
							<span>3:49</span>
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
							defaultValue={50}
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
			) : (
				<div>
					<div>
						<p>Preview of Spotify</p>
						<p>
							Sign up to get unlimited songs and podcasts with occasional
							ads. No credit card needed.
						</p>
					</div>
					<div>
						<button>Sign up free</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
