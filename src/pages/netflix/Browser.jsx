import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import popular from "../../constant/netflix/popular";
import searches from "../../constant/netflix/searches";
import { movies, shows } from "../../constant/netflix/trending";
import watching from "../../constant/netflix/watching";
// import shows from "../../constant/netflix/trending";

import "../../styles/netflix.css";
import changeFavicon from "../../utils/FaviconUtils";
import Content from "../../components/netflix/Content";
import Trending from "../../components/netflix/Trendin";

const NetFlixLogo = "/assets/netflix/images/logo.svg";


const year = ["2020", "2021", "2022", "2023", "2024"];

const navList = [
	"Home",
	"TV Shows",
	"Movies",
	"New & Popular",
	"My List",
	"Browse by Language",
];

const active = Math.floor(Math.random() * popular.length);
let imageUrl = popular[active]
	? popular[active].thambnail
	: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABepkXuzGaDhQEUpOtCrCzwvPWkC15bY5t_FaLWDAzDEqOI2Ntnc6w29lnpDIJucYrumhQyivBBoWybfGCjud29SzF8wDiyHX49Fi.webp?r=036";

function Browser() {
	const [displaySearch, setDisplaySearch] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const [activeInfo, setActiveInfo] = useState(null);

	useEffect(() => {
		document.title = "Home - Netflix";
		changeFavicon(
			"https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
		);

		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		// Attach the scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Detach the scroll event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (activeInfo) {
			document.title = activeInfo.title + " - Netflix";
		} else {
			document.title = "Home - Netflix";
		}
	}, [activeInfo]);

	return (
		<div style={activeInfo && { overflow: "hidden", maxHeight: "100vh" }}>
			<div>
				<div
					className="main"
					style={{
						backgroundImage: `url(${imageUrl})`,
						backgroundPosition: "top",
						backgroundSize: "100%",
					}}
				>
					<nav
						className="netflix-nav"
						style={{
							maxWidth: "100vw",
							padding: "0px 4vw",
							height: "70px",
							position: "sticky",
							top: 0,
							backgroundColor: scrolling ? "black" : "transparent",
						}}
					>
						<div style={{ display: "flex", gap: "45px" }}>
							<img
								width="53"
								src={NetFlixLogo}
								alt=""
								style={{ width: "90px" }}
							/>
							<span>
								{navList.map((nav, i) => (
									<span key={i}>{nav}</span>
								))}
							</span>
						</div>
						<div className="netflix-nav-second">
							<input
								type="text"
								placeholder="Titles, people, genres"
								style={{
									width: displaySearch ? "230px" : "30px",
									left: displaySearch ? "-200px" : "-10px",
									border: displaySearch ? "1px solid white" : "0px",
									backgroundColor: displaySearch
										? "#000000e1"
										: "transparent",
								}}
							/>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="search-icon ltr-4z3qvp e1svuwfo1"
								data-name="MagnifyingGlass"
								aria-hidden="true"
								onClick={() => setDisplaySearch((pre) => !pre)}
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
									fill="currentColor"
								></path>
							</svg>
							<span>Children</span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="ltr-4z3qvp e1svuwfo1"
								data-name="Bell"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
									fill="currentColor"
								></path>
							</svg>

							<div>
								<img
									src="https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
									alt=""
								/>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="default-ltr-cache-4z3qvp e1svuwfo1"
									data-name="CaretDown"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
					</nav>
					<div className="browse-hero">
						<img
							src={
								popular[active]
									? popular[active].titleImage
									: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTpPlf6SJrH4bmOAW57AdC6HVZibzWfdpR4wxZUb0lQihDvFCtpZMswQPLO0-mLHlGmk5PThPkCiIQy8fi2U0HulTJ-it7BI-mMa28RFs1d26ZepeDAJfUn3VZtdJGA_9pyutctsdCICbj4MIUXGe3a4W_Qf3mXzjA-O_GVhK6f8p9UJu46g7g.webp?r=950"
							}
							alt=""
						/>
						<p>
							{popular[active]
								? popular[active].description
								: "In this fictionalized account, a Swedish tech entrepreneur and his partners set out to revolutionize the music industry with a legal streaming platform."}
						</p>
						<div>
							<button>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="ltr-4z3qvp e1svuwfo1"
									data-name="Play"
									aria-hidden="true"
								>
									<path
										d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
										fill="currentColor"
									></path>
								</svg>
								Play
							</button>
							<button onClick={() => setActiveInfo(popular[active])}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="ltr-4z3qvp e1svuwfo1"
									data-name="CircleI"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
										fill="currentColor"
									></path>
								</svg>
								More Info
							</button>
						</div>
					</div>
				</div>
				<div style={{ backgroundColor: "black" }}>
					<Content
						data={popular}
						text="Popular on netflix"
						setActiveInfo={setActiveInfo}
					/>
					<Content
						data={watching}
						text="Continue Watching for Ashik"
						className="second-content"
						type="watching"
					/>
					<Content
						data={searches}
						text="Top Searches"
						className="second-content"
					/>

					<Trending
						data={movies}
						text="Top 10 Movies in India Today"
						className="second-content"
					/>
				</div>
				{activeInfo && (
					<div id="info-model">
						<div>
							<div
								style={{
									backgroundImage: `url(${
										activeInfo
											? activeInfo.thambnail
											: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABepkXuzGaDhQEUpOtCrCzwvPWkC15bY5t_FaLWDAzDEqOI2Ntnc6w29lnpDIJucYrumhQyivBBoWybfGCjud29SzF8wDiyHX49Fi.webp?r=036"
									})`,
								}}
								className="model-top"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
									onClick={() => setActiveInfo(null)}
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>

								<img
									src={
										activeInfo
											? activeInfo.titleImage
											: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTpPlf6SJrH4bmOAW57AdC6HVZibzWfdpR4wxZUb0lQihDvFCtpZMswQPLO0-mLHlGmk5PThPkCiIQy8fi2U0HulTJ-it7BI-mMa28RFs1d26ZepeDAJfUn3VZtdJGA_9pyutctsdCICbj4MIUXGe3a4W_Qf3mXzjA-O_GVhK6f8p9UJu46g7g.webp?r=950"
									}
									alt=""
								/>
								<div>
									<button>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											class="ltr-4z3qvp e1svuwfo1"
											data-name="Play"
											aria-hidden="true"
										>
											<path
												d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
												fill="currentColor"
											></path>
										</svg>
										Play
									</button>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										/>
									</svg>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
										/>
									</svg>
								</div>
							</div>
							<div className="model-second">
								<div>
									<p>
										<span>
											{Math.floor(90 + Math.random() * 9)}% Match
										</span>{" "}
										<span>{year[Math.floor(Math.random() * 4)]}</span>
										<span>
											{" "}
											{activeInfo.duration
												? activeInfo.duration
												: activeInfo.seasons?.length > 1
												? activeInfo.seasons?.length + " seasons"
												: activeInfo.seasons[0]?.episodes?.length +
												  " episodes"}
										</span>
									</p>
									{activeInfo.rating ? (
										<p>
											<span>{activeInfo.rating[0]}</span>,
											<span>{activeInfo.rating[1]}</span>
										</p>
									) : (
										<p>
											<span>language</span>,<span>tobacco use</span>
										</p>
									)}

									<p>
										<span>{activeInfo.genres[0]}</span>
										<span
											style={{
												width: "5px",
												height: "5px",
												borderRadius: "50%",
												background: "gray",
											}}
										></span>
										<span>{activeInfo.genres[1]}</span>
										<span
											style={{
												width: "5px",
												height: "5px",
												borderRadius: "50%",
												background: "gray",
											}}
										></span>
										<span>{activeInfo.genres[2]}</span>
									</p>
									<p>
										{activeInfo.description
											? activeInfo.description
											: "Inspired by a championship match he sees on TV, junior high schooler Hinata joins a volleyball club and begins training, despite his short height."}
									</p>
								</div>
								<div>
									<p>
										<span>Cast:</span>{" "}
										<span>{activeInfo.casts[0]}</span>,
										<span>{activeInfo.casts[1]}</span>,
										<span>{activeInfo.casts[2]}</span>,
										<span>more</span>
									</p>
									<p>
										<span>Generes:</span>{" "}
										<span>{activeInfo.genres[0]}</span>,{" "}
										<span>{activeInfo.genres[1]}</span>,{" "}
										<span>{activeInfo.genres[2]}</span>
									</p>
									<p>
										<span>This show is:</span> <span>Inspiring</span>,{" "}
										<span>Feel-Good</span>
									</p>
								</div>
							</div>
							{activeInfo.seasons && (
								<div>
									<div>
										<h2>Episodes</h2>{" "}
										{activeInfo.seasons.length > 1 && (
											<select name="" id="">
												<option value="">Haikyu!!</option>
											</select>
										)}
									</div>
									{activeInfo.rating ? (
										<p>
											<span>{activeInfo.rating[0]}</span>,
											<span>{activeInfo.rating[1]}</span>
										</p>
									) : (
										<p>
											<span>language</span>,<span>tobacco use</span>
										</p>
									)}
									<hr />
								</div>
							)}
							{activeInfo.seasons && (
								<div className="episodes">
									{activeInfo.seasons[0].episodes.map((ele, i) => (
										<div>
											<h1>{i + 1}</h1>
											<div>
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="titleCard-playSVG ltr-4z3qvp e1svuwfo1"
													data-name="Play"
													aria-hidden="true"
												>
													<path
														d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
														fill="currentColor"
													></path>
												</svg>
												<img
													src={
														ele.thambnail
															? ele.thambnail
															: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRonK5ja1hOy_LNkwbwlrO61h3C545LIantkT4_11T6NwPVNv6QBJ2bL2AvTZo-Em9AK8RKb0ZK7lrOvPgMaEtWOFKy8kjZ7iG7JXzh70Wptddys8QWf4w3f.webp?r=333"
													}
													alt=""
												/>
											</div>
											<div>
												<p>
													<span>
														{ele.name
															? ele.name
															: `Episode ${i + 1}`}
													</span>{" "}
													<span>{ele.duration}</span>
												</p>
												<p>
													{ele.description
														? ele.description
														: `Inspired by a volleyball hero, young
													Hinata later participates in his first
													match against "the King of the Court." A
													passion and a rivalry are born.`}
												</p>
											</div>
										</div>
									))}
									<hr />
								</div>
							)}

							<div className="more-like-this">
								<h1>More Like This</h1>
								<div>
									{searches.map((ele, i) => {
										if (i > 8) {
											return <></>;
										}
										return (
											<div>
												<div>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														class="titleCard-playSVG ltr-4z3qvp e1svuwfo1"
														data-name="Play"
														aria-hidden="true"
													>
														<path
															d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
															fill="currentColor"
														></path>
													</svg>
													<img
														src={
															ele.mainThambnail
																? ele.mainThambnail
																: "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRonK5ja1hOy_LNkwbwlrO61h3C545LIantkT4_11T6NwPVNv6QBJ2bL2AvTZo-Em9AK8RKb0ZK7lrOvPgMaEtWOFKy8kjZ7iG7JXzh70Wptddys8QWf4w3f.webp?r=333"
														}
														alt=""
													/>
												</div>
												<div>
													<p>
														<span>
															{Math.floor(
																80 + Math.random() * 19
															)}
															% Match
														</span>{" "}
														<span>
															{
																year[
																	Math.floor(Math.random() * 4)
																]
															}
														</span>
													</p>
													<p>{ele.description}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>

							<div className="details">
								<h1>
									About{" "}
									<span>{activeInfo.title || "The Good Doctor"}</span>
								</h1>
								<p>
									<span>Creatore.</span> <span>Navid Charo</span>
								</p>
								<p>
									<span>Cast:</span> Freddie Highmore, Hill Harper,
									Richard Schiff, Christina Chang, Paige Spara, Fiona
									Gubelmann, Will Yun Lee, Antonia Thomas, Nicholas
									Gonzalez, Tamlyn Tomita, Bria Henderson, Noah Galvin,
									Jasika Nicole, Chuku Modu, Beau Garrett
								</p>
								<p>
									<span>Genres:</span> Medical TV Shows, TV Dramas, US
									TV Shows, Social Issue TV Dramas
								</p>
								<p>
									<span>This show is:</span> Emotional
								</p>
								<p>
									<span>Maturity rating:</span>
									U/A 16+ gore Suitable for persons aged 16 and above
									and under parental guidance for people under age of
									16
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Browser;
