import React from "react";

import "../../styles/netflix.css";

const NetFlixLogo = "assets/netflix/images/logo.svg";

function Home() {
	return (
		<div className="netflix-body">
			<div className="main">
				<nav className="netflix-nav">
					<span>
						<img width="53" src={NetFlixLogo} alt="" />
					</span>
					<div className="select-language">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
								fill="currentColor"
							></path>
						</svg>
						<select name="" id="">
							<option value="">English</option>
							<option value="">हिन्दी</option>
						</select>
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
						<button>Sign In</button>
					</div>
				</nav>
				<div className="box"></div>
				<div className="hero">
					<span>Unlimited movies, TV shows and more</span>
					<span>Watch anywhere. Cancel anytime.</span>
					<span>
						Ready to watch? Enter your email to create or restart your
						membership.
					</span>
					<div className="hero-buttons">
						<input type="text" placeholder="Email Address" required />
						<button>Get Started &gt;</button>
					</div>
				</div>

				<div className="separation"></div>
			</div>

			<section className="first">
				<div>
					<span>Enjoy on your TV</span>
					<span>
						Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
						Blu-ray players and more.
					</span>
				</div>

				<div className="secImg">
					<img
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
						alt=""
					/>
					<video
						src="assets/netflix/videos/first-loop.m4v"
						autoPlay
						loop
						muted
						playsInline
					></video>
				</div>
			</section>
			<div className="separation"></div>

			<section className="first second">
				<div className="secImg">
					<img
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
						alt=""
					/>
                    <div className="download">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" /> 
                        <div>
                            <p style={{fontSize:"16px"}}>Stranger Things</p>
                            <p style={{fontSize:"13px",color:'blue',marginRight:"50px"}}>Downloading...</p>
                        </div>
                        <img src="assets/netflix/images/download-icon.gif" alt="" />
                    </div>
				</div>
				<div>
					<span>Download your shows to watch offline</span>
					<span>
						Save your favourites easily and always have something to
						watch.
					</span>
				</div>
			</section>

			<div className="separation"></div>

			<section className="first third">
				<div>
					<span>Watch everywhere</span>
					<span>
						Stream unlimited movies and TV shows on your phone, tablet,
						laptop, and TV.
					</span>
				</div>

				<div className="secImg">
					<img
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
						alt=""
					/>
					<video
						src="assets/netflix/videos/second-loop.m4v"
						autoPlay
						loop
						muted
						playsInline
					></video>
				</div>
			</section>
			<div className="separation"></div>

			<section className="first second">
				<div className="secImg">
					<img
						src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
						alt=""
					/>
				</div>
				<div>
					<span>Create profiles for kids</span>
					<span>
						Send children on adventures with their favourite characters in
						a space made just for them—free with your membership.
					</span>
				</div>
			</section>

			<div className="separation"></div>

			<section className="faq">
				<h2>Frequently Asked Questions</h2>
				<div className="faqbox">
					<span>What is NetFlix</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 4V20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4 12H20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div className="faqbox">
					<span>How much does Netflix cost?</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 4V20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4 12H20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div className="faqbox">
					<span>What can I watch on Netflix?</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 4V20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4 12H20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div className="faqbox">
					<span>Where can I watch?</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 4V20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4 12H20"
							stroke="#141B34"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
                <div className="hero">
					<span></span>
					<span></span>
					<span>
						Ready to watch? Enter your email to create or restart your
						membership.
					</span>
					<div className="hero-buttons">
						<input type="text" placeholder="Email Address" required />
						<button>Get Started &gt;</button>
					</div>
				</div>
			</section>
			<div className="separation"></div>

			<footer className="netflix-footer">
				<div className="questions">Questions? Call 000-800-919-1694</div>
				<div className="footer">
					<div className="footer-item">
						<a href="faq">Investor Relations</a>
						<a href="faq">Jobs</a>
						<a href="faq">Ways to Watch</a>
						<a href="faq">Terms of Use</a>
					</div>

					<div className="footer-item">
						<a href="faq">Help Centre</a>
						<a href="faq">Account</a>
						<a href="faq">Speed Test</a>
						<a href="faq">Legal Notices</a>
					</div>
					<div className="footer-item">
						<a href="faq">Media Centre</a>
						<a href="faq">Privacy</a>
						<a href="faq">Cookie Preferences</a>
						<a href="faq">Corporate</a>
					</div>

					<div className="footer-item">
						<a href="faq">Contact Us</a>
						<a href="faq">Speed Test</a>
						<a href="faq">Legal Notices</a>
						<a href="faq">Only on Netflix</a>
					</div>
				</div>
                <div className="select-language">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
								fill="currentColor"
							></path>
						</svg>
						<select name="" id="">
							<option value="">English</option>
							<option value="">हिन्दी</option>
						</select>
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
                    <p>Netflix India</p>
			</footer>

            
		</div>
	);
}

export default Home;
