
import React, { useEffect, useState } from "react";
import {   useNavigate } from "react-router-dom";

const loading = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24,
];

function Contents({ activeCategory, setActiveCategory }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	const [contents, setContents] = useState([]);
	const [pageToken, setPageToken] = useState("");

	useEffect(() => {
		setIsLoading(true);
		setContents([]);
		getVideos();
	}, [activeCategory]);

	const getVideos = () => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&videoCategoryId=${activeCategory}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

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
	const getMoreVideos = () => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&videoCategoryId=${activeCategory}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

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
	const getChannels = async (videos) => {
		let ids = "";

		let contents = [];

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
				duration: durationConverter(item.contentDetails.duration),
				title: truncateTitle(item.snippet.title, 75),
				channelTitle: item.snippet.channelTitle,
				viewCount: viewsConverter(item.statistics.viewCount),
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
					setIsLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const findThambnailAndSetContents = (channels, contents) => {
		const contentsWithChannelLogo = contents.map((content) => {
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

		setContents((pre) => [...pre, ...contentsWithChannelLogo]);
		setIsLoading(false);
	};

	const handleScroll = () => {
		const scrollY = window.scrollY || window.pageYOffset;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollY + windowHeight >= documentHeight - 2000 && !isLoading) {
			getMoreVideos();
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
	const debouncedScroll = debounce(handleScroll, 1000);
	useEffect(() => {
		window.addEventListener("scroll", debouncedScroll);

		return () => {
			window.removeEventListener("scroll", debouncedScroll);
		};
	}, [isLoading, debouncedScroll]);

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
		const matches = durationString.match(durationRegex);

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
		<div id="contents">
			<div>
				{isLoading
					? loading.map((c, index) => (
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
					  ))
					: contents.map((content, index) => (
							<div key={index}>
								<div className="thambnail-img" onClick={()=>navigate(`/watch?v=${content.videoId}`)}>
									<img src={content.thumbnails} alt="" />
									<span>{content.duration}</span>
								</div>
								<div>
									<div className="creator-logo">
										<img src={content.channelLogo} alt="" />
									</div>
									<div>
										<div className="title"  onClick={()=>navigate(`/watch?v=${content.videoId}`)}>
											<p>{content.title}</p>
										</div>
										<div className="channel-name">
											<p>{content.channelTitle}</p>
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
	);
}

export default Contents;
