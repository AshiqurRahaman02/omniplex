import React, { useEffect, useRef, useState } from "react";

function Content({ data, text, className, setActiveInfo ,type}) {
	const categoriesContainerRef = useRef(null);
	const handlePrev = () => {
		categoriesContainerRef.current.scrollLeft -=
			categoriesContainerRef.current.offsetWidth;
	};

	const handleNext = () => {
		categoriesContainerRef.current.scrollLeft +=
			categoriesContainerRef.current.offsetWidth;
	};
	return (
		<div id="netfilx-content" className={className}>
			<h2>{text}</h2>
			<div>
				<button onClick={handlePrev} id="previous">
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
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<div id="all-data" ref={categoriesContainerRef}>
					{data.map((ele, i) => {
						return (
							<div>
								<img src={ele.mainThambnail} alt="" />
								{type && type === "watching" && <progress  value={2+Math.floor(Math.random()*7)} max="10"></progress>}
								<div id="data-info">
									<div>
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												// stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
											>
												<path
													d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
													fill="currentColor"
												></path>
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												// stroke-width="1.5"
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
												// stroke-width="1.5"
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
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												// stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
												onClick={() => {
													if (setActiveInfo) {
														setActiveInfo(ele);
														window.scrollTo({
															top: 0,
															behavior: "smooth",
														});
													}
												}}
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="m19.5 8.25-7.5 7.5-7.5-7.5"
												/>
											</svg>
										</div>
									</div>
									<p>
										<span>
											{Math.floor(90 + Math.random() * 9)}% Match
										</span>{" "}
										<span>
											{ele.duration
												? ele.duration
												: ele.seasons?.length > 1
												? ele.seasons?.length + " seasons"
												: ele.seasons[0]?.episodes?.length +
												  " episodes"}
										</span>
									</p>
									<p>
										<span>{ele.genres[0]}</span>
										<span
											style={{
												width: "5px",
												height: "5px",
												borderRadius: "50%",
												background: "gray",
											}}
										></span>
										<span>{ele.genres[1]}</span>
										<span
											style={{
												width: "5px",
												height: "5px",
												borderRadius: "50%",
												background: "gray",
											}}
										></span>
										<span>{ele.genres[2]}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<button onClick={handleNext} id="next">
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
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Content;
