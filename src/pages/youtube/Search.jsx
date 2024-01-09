import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/youtube.css";
import LeftSideBar from "../../components/youtube/LeftSideBar";
import YoutubeNav from "../../components/youtube/YoutubeNav";
import changeFavicon from "../../utils/FaviconUtils";
const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Search() {
	const navigate = useNavigate();
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [currentColor, serCurrentColor] = useState("white");

	const [isSideBarVisible, setSideBarVisible] = useState(true);


	const [contents, setContents] = useState([]);
	const [pageToken, setPageToken] = useState("");

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);

		const search = searchParams.get("search_query");
		if (!search) {
			navigate("/youtube");
		}
		setContents([]);
		document.title = `${search} - YouTube`;

		changeFavicon("https://www.youtube.com/s/desktop/375de707/img/favicon.ico")
		let query = search.split(" ").join("%20");
		console.log(search);
		getSearchVideos(query);
	}, [window.location.search]);

	const getSearchVideos = (query) => {
		const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=24&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					setPageToken(data.nextPageToken);
					getVideos(data.items);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getMoreSearchVideos = () => {
		const searchParams = new URLSearchParams(window.location.search);

		const search = searchParams.get("search_query");
		if (!search) {
			navigate("/youtube");
		}
		let query = search.split(" ").join("%20");

		const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=24&regionCode=IN&&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					setPageToken(data.nextPageToken);
					getChannels(data.items);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getVideos = (videos) => {
		let ids = "";
		videos.forEach((item, index) => {
			if (index === 0) {
				ids += item.id.videoId;
			} else {
				ids += "%2C" + item.id.videoId;
			}
		});
		console.log(ids);

		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					getChannels(data.items);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getChannels = async (videos) => {
		let ids = "";

		let contents = [];
		console.log(videos[0]);

		videos.forEach((item, index) => {
			if (index === 0) {
				ids += item.snippet.channelId;
			} else {
				ids += "," + item.snippet.channelId;
			}

			let content = {
				videoId: item.id,
				channelId: item.snippet.channelId,
				thumbnails: item.snippet.thumbnails.maxres
					? item.snippet.thumbnails.maxres.url
					: item.snippet.thumbnails.medium.url,
				duration: durationConverter(item.contentDetails?.duration),
				title: truncateTitle(item.snippet.title, 100),
				description: truncateTitle(item.snippet.description, 100),
				channelTitle: item.snippet.channelTitle,
				viewCount: viewsConverter(item.statistics?.viewCount),
				publishedAt: timeConverter(item.snippet.publishedAt),
			};
			contents.push(content);
		});

		const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${ids}&regionCode=IN&maxResults=${videos.length}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.items[0]);
				if (data.items) {
					findThambnailAndSetContents(data.items, contents);
				} else {
					setContents(contents);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const findThambnailAndSetContents = (channels, video) => {
		const contentsWithChannelLogo = video.map((content) => {
			const correspondingChannel = channels.find(
				(channel) => channel.id === content.channelId
			);

			if (correspondingChannel) {
				return {
					...content,
					channelLogo: correspondingChannel.snippet.thumbnails.default.url,
				};
			}

			return content;
		});

		console.log(contents, contentsWithChannelLogo);
		setContents((pre) => [...pre, ...contentsWithChannelLogo]);
	};

	function truncateTitle(title, maxLength) {
		if (title.length <= maxLength) {
			return title;
		}

		const truncatedTitle = title.substring(0, maxLength);
		const lastSpaceIndex = truncatedTitle.lastIndexOf(" ");

		if (lastSpaceIndex !== -1) {
			return truncatedTitle.substring(0, lastSpaceIndex) + "...";
		}

		return truncatedTitle + "...";
	}

	const handleScroll = () => {
		const scrollY = window.scrollY || window.pageYOffset;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollY + windowHeight >= documentHeight - 3500) {
			getMoreSearchVideos();
		}
	};
	const debounce = (func, delay) => {
		let timeoutId;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};
	const debouncedScroll = debounce(handleScroll, 100);
	useEffect(() => {
		window.addEventListener("scroll", debouncedScroll);

		return () => {
			window.removeEventListener("scroll", debouncedScroll);
		};
	}, [debouncedScroll]);

	function viewsConverter(number) {
		if (number < 1000) {
			return number.toString();
		} else if (number < 1000000) {
			return (number / 1000).toFixed(1) + "K";
		} else if (number < 1000000000) {
			return (number / 1000000).toFixed(1) + "M";
		} else {
			return (number / 1000000000).toFixed(1) + "B";
		}
	}

	function timeConverter(inputDate) {
		const currentDate = new Date();
		const inputDateTime = new Date(inputDate);
		const timeDifferenceInSeconds = Math.floor(
			(currentDate - inputDateTime) / 1000
		);

		if (timeDifferenceInSeconds < 60) {
			return `${timeDifferenceInSeconds}s ago`;
		} else if (timeDifferenceInSeconds < 3600) {
			const minutes = Math.floor(timeDifferenceInSeconds / 60);
			return `${minutes}m ago`;
		} else if (timeDifferenceInSeconds < 86400) {
			const hours = Math.floor(timeDifferenceInSeconds / 3600);
			return `${hours}h ago`;
		} else if (timeDifferenceInSeconds < 604800) {
			// 604800 seconds in a week
			const days = Math.floor(timeDifferenceInSeconds / 86400);
			return `${days}d ago`;
		} else if (timeDifferenceInSeconds < 2592000) {
			// 2592000 seconds in a month (30 days approximation)
			const weeks = Math.floor(timeDifferenceInSeconds / 604800);
			return `${weeks}w ago`;
		} else if (timeDifferenceInSeconds < 31536000) {
			// 31536000 seconds in a year
			const months = Math.floor(timeDifferenceInSeconds / 2592000);
			return `${months}mo ago`;
		} else {
			const years = Math.floor(timeDifferenceInSeconds / 31536000);
			return `${years}y ago`;
		}
	}

	function durationConverter(durationString) {
		const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
		const matches = durationString?.match(durationRegex);

		if (!matches) {
			return "Invalid duration format";
		}

		const hours = parseInt(matches[1]) || 0;
		const minutes = parseInt(matches[2]) || 0;
		const seconds = parseInt(matches[3]) || 0;

		if (hours > 0) {
			return `${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${
				seconds > 9 ? seconds : `0${seconds}`
			}`;
		} else if (minutes > 0) {
			return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`;
		} else {
			return `${seconds}`;
		}
	}

	return (
		<div
			id="youtube"
			style={{
				backgroundColor: `var(--bg-dominant-${currentColor})`,
				color: `var(--color-dominant-${currentColor})`,
			}}
		>
			<YoutubeNav
				currentColor={currentColor}
				setSideBarVisible={setSideBarVisible}
				isSignedIn={isSignedIn}
			/>
			<header>
				<LeftSideBar
					isSideBarVisible={isSideBarVisible}
					isSignedIn={isSignedIn}
					currentColor={currentColor}
				/>
				<main id="search-main">
					<div id="search-videos">
						<div>
							{contents &&
								contents.map((content, index) => (
									<div key={index}>
										<div
											className="thambnail-img"
											onClick={() =>
												navigate(`/watch?v=${content.videoId}`)
											}
										>
											<img src={content.thumbnails} alt="" />
											<span>{content.duration}</span>
										</div>
										<div>
											<div>
												<div
													className="title"
													onClick={() =>
														navigate(
															`/watch?v=${content.videoId}`
														)
													}
												>
													<p>{content.title}</p>
												</div>
												<div>
													<span className="views">
														{content.viewCount} views
													</span>{" "}
													<span
														style={{
															width: "4px",
															height: "4px",
															borderRadius: "50%",
															background: "gray",
														}}
													></span>
													<span className="upload-date">
														{content.publishedAt}
													</span>
												</div>
												<div id="creator">
													<div className="creator-logo">
														<img
															src={content.channelLogo}
															alt=""
														/>
													</div>
													<div className="channel-name">
														<p>{content.channelTitle}</p>
													</div>
												</div>
												<div>
													<p>{content.description}</p>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
						<div>
							{loading.map((c, index) => {
								if (index > 11) {
									return;
								}
								return (
									<div key={index}>
										<div className="skeleton-loader thambnail-img"></div>
										<div>
											<div className="skeleton-loader creator-logo"></div>
											<div>
												<div className="skeleton-loader title"></div>
												<div className="skeleton-loader channel-name"></div>
												<div>
													<span className="skeleton-loader views"></span>{" "}
													<span
														style={{
															width: "4px",
															height: "4px",
															borderRadius: "50%",
															background: "gray",
														}}
													></span>
													<span className="skeleton-loader upload-date"></span>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</main>
			</header>
		</div>
	);
}

export default Search;
