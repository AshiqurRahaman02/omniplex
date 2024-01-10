import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/netflix.css";
import changeFavicon from "../../utils/FaviconUtils";

const NetFlixLogo = "/assets/netflix/images/logo.svg";

const icons = ["https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229", "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4", "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e", "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTxO1HAzIh18LDAY7Igs6qQ3GhmsclmpCllWnoojeSDD0lMm9hUCp-C4VGo3cT40xfg_7SpIoY6pmRIl-W7B5CN8kvXCBqM7n8_f.png?r=a4b", "https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVc9oEhkrJHdxJJOoZNIZt9QaP4XpllFOJ-Xgklgvm-F0tC5x7Fei7B15Cd0SFjDQb8r4O_5yxpbB_EQCUsmQwTTgzrQ_mE8TWwT1Tnk8WDuFXUezAUnNm2VEHKmEdZvoi0ffjE0N8lFeJEvq4E.png?r=bd7"];

const navList = [
	"Home",
	"TV Shows",
	"Movies",
	"New & Popular",
	"My List",
	"Browse by Language",
];

function Browser() {
	const [displaySearch, setDisplaySearch] = useState(false);
	const [scrolling, setScrolling] = useState(false);
	const imageUrl =
		"https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABepkXuzGaDhQEUpOtCrCzwvPWkC15bY5t_FaLWDAzDEqOI2Ntnc6w29lnpDIJucYrumhQyivBBoWybfGCjud29SzF8wDiyHX49Fi.webp?r=036";
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

	return (
		<div>
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
							src="https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTpPlf6SJrH4bmOAW57AdC6HVZibzWfdpR4wxZUb0lQihDvFCtpZMswQPLO0-mLHlGmk5PThPkCiIQy8fi2U0HulTJ-it7BI-mMa28RFs1d26ZepeDAJfUn3VZtdJGA_9pyutctsdCICbj4MIUXGe3a4W_Qf3mXzjA-O_GVhK6f8p9UJu46g7g.webp?r=950"
							alt=""
						/>
						<p>
							In this fictionalized account, a Swedish tech entrepreneur
							and his partners set out to revolutionize the music
							industry with a legal streaming platform.
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
							<button>
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
			</div>
		</div>
	);
}

export default Browser;
