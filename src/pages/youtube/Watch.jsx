import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


import "../../styles/youtube.css";
import YoutubeNav from "../../components/youtube/YoutubeNav";

const userLogo = "assets/logo/ashiqur_pic.png";

function Watch() {
	const navigate = useNavigate();
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [currentColor, serCurrentColor] = useState("white");

	const [categories, setCategories] = useState([
		{ title: "All", id: 0 },
		{ title: "Same Channel", id: 1 },
		{ title: "Related", id: 2 },
		{ title: "Recently uploaded", id: 3 },
		{ title: "Watched", id: 4 },
	]);
	const [displayPrevious, setDisplayPrevious] = useState(false);
	const [displayNext, setDisplayNext] = useState(true);
	const [isSideBarVisible, setSideBarVisible] = useState(true);

	const [activeCategory, setActiveCategory] = useState(0);

	const [videosSrc, setVideoSrc] = useState("");
	const [video, setVideo] = useState();
	const [comments, setComments] = useState();
	const [suggestions, setSuggestions] = useState([]);
	const [displayAllDescription, setDisplayAllDescription] = useState(false);

	const categoriesContainerRef = useRef(null);
	const handlePrev = () => {
		setDisplayNext(true);

		categoriesContainerRef.current.scrollLeft -=
			categoriesContainerRef.current.offsetWidth;

		const current = categoriesContainerRef.current.scrollLeft;

		if (current === 0) {
			setDisplayPrevious(false);
		}
	};

	const handleNext = () => {
		setDisplayPrevious(true);
		const previous = categoriesContainerRef.current.scrollLeft;

		categoriesContainerRef.current.scrollLeft +=
			categoriesContainerRef.current.offsetWidth;

		const current = categoriesContainerRef.current.scrollLeft;
		console.log(
			current - previous,
			categoriesContainerRef.current.offsetWidth
		);

		if (
			current - previous + 10 <
			categoriesContainerRef.current.offsetWidth
		) {
			setDisplayNext(false);
		}
	};

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);

		const videoId = searchParams.get("v");
		if (!videoId) {
			navigate("/youtube");
		}

		let src = `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1&enablejsapi=1&modestbranding=1`;
		setVideoSrc(src);

		getVideo(videoId);
		getComments(videoId);
		getVideos(videoId)
	}, [window.location.search]);
	const getVideo = (videoId) => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					let info = data.items[0];
					let video = {
						id: videoId,
						categoryId: info.snippet.categoryId,
						channelTitle: info.snippet.channelTitle,
						videoDescription: info.snippet.description.split("\n"),
						videoTitle: info.snippet.title,
						videoLikes: info.statistics.likeCount,
						videoViewCount: info.statistics.viewCount,
						videoCommentCount: info.statistics.commentCount,
						publishedAt: info.snippet.publishedAt,
					};
					document.title = video.videoTitle;
					getChannel(info.snippet.channelId, video);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getChannel = async (id, video) => {
		const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${id}&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					video.channelLogo = data.items[0].snippet.thumbnails.default.url;
					video.subscriberCount = data.items[0].statistics.subscriberCount;
					setVideo(video);
				} else {
					setVideo(video);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getComments = (videoId) => {
		let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&textFormat=plainText&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					convertComments(data.items);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getVideos = (videoId) => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&videoCategoryId=${activeCategory}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					getChannels(data.items);
					let videos = data.items;

					let contents = [];

					videos.forEach((item, index) => {
						if(item.id === videoId) {
							return;
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

					setSuggestions(contents);
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
					setSuggestions(contents);
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

		setSuggestions((pre) => [...pre, ...contentsWithChannelLogo]);
	};
	const convertComments = (data) => {
		let comments = [];
		data.forEach((item) => {
			let s = item.snippet.topLevelComment.snippet;
			let comment = {
				authorLogo: s.authorProfileImageUrl,
				authorDisplayName: s.authorDisplayName,
				updateDate: s.publishedAt,
				comment: s.textDisplay,
				likes: s.likeCount,
				totalReplies: item.snippet.totalReplyCount,
			};

			comments.push(comment);
		});

		setComments(comments);
	};
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
	function likesConverter(number) {
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

	function dateConverter(inputDate) {
		const currentDate = new Date();
		const inputDateTime = new Date(inputDate);

		let months = {
			1: "Jan",
			2: "Fab",
			3: "Mar",
			4: "Apl",
			5: "May",
			6: "Jun",
			7: "Jul",
			8: "Aug",
			9: "Sep",
			10: "Oct",
			11: "Nov",
			12: "Dec",
		};
		let currentYear = currentDate.getFullYear();
		let inputYear = inputDateTime.getFullYear();
		let date =
			months[inputDateTime.getMonth() + 1] + " " + inputDateTime.getDate();

		if (currentYear === inputYear) {
			return date;
		} else {
			return date + "," + inputYear;
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

	return (
		<div
			id="youtube"
			style={{
				backgroundColor: `var(--bg-dominant-${currentColor})`,
				color: `var(--color-dominant-${currentColor})`,
				paddingBottom: "30px",
			}}
		>
			<YoutubeNav
				currentColor={currentColor}
				setSideBarVisible={setSideBarVisible}
				isSignedIn={isSignedIn}
			/>
			<div id="watch-main">
				<div>
					{videosSrc && (
						<iframe
							id="ytplayer"
							type="text/html"
							width="100%"
							style={{ borderRadius: "10px" }}
							height="490"
							title="video"
							src={videosSrc}
							frameborder="0"
							allowfullscreen
						/>
					)}
					{video && (
						<div id="info">
							<h3>{video.videoTitle}</h3>
							<div>
								<div id="channel-info">
									<div className="creator-logo">
										<img src={video.channelLogo} alt="" />
									</div>
									<div>
										<p>
											{video.channelTitle}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="0"
												stroke="currentColor"
												class="w-5 h-5"
												style={{
													pointerEvents: "none",
													width: "18px",
													height: "18px",
													fill: "gray",
													marginTop: "5px",
												}}
											>
												<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
											</svg>
										</p>
										<p>
											{likesConverter(video.subscriberCount)}{" "}
											subscribers
										</p>
									</div>
									<div>
										<button>Subscribe</button>
									</div>
								</div>
								<div id="video-info">
									<div>
										<p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
												style={{
													pointerEvents: "none",
													width: "24px",
													height: "24px",
												}}
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
												/>
											</svg>{" "}
											&nbsp;
											{likesConverter(video.videoLikes)}
										</p>
										<hr
											style={{
												border: "1px solid gray",
												width: "0px",
												backgroundColor: "#2C2B27",
												height: "24px",
											}}
										/>
										<p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
												style={{
													pointerEvents: "none",
													display: "block",
													width: "24px",
													height: "24px",
												}}
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
												/>
											</svg>
										</p>
									</div>
									<div>
										<p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 0 24 24"
												width="24"
												focusable="false"
												style={{
													pointerEvents: "none",
													fill: `${currentColor}`,
													width: "24px",
													height: "24px",
												}}
											>
												<path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
											</svg>
											Share
										</p>
									</div>
									<div>
										<p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 0 24 24"
												width="24"
												focusable="false"
												style={{
													pointerEvents: "none",
													fill: `${currentColor}`,
													width: "24px",
													height: "24px",
												}}
											>
												<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
											</svg>
											Download
										</p>
									</div>
									<div>
										<p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 0 24 24"
												width="24"
												focusable="false"
												style={{
													pointerEvents: "none",
													fill: `${currentColor}`,
													width: "24px",
													height: "24px",
												}}
											>
												<path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
											</svg>
										</p>
									</div>
								</div>
							</div>
						</div>
					)}
					{video && (
						<div id="description">
							<p>
								<span>{video.videoViewCount} views</span>&nbsp;&nbsp;
								<span>{dateConverter(video.publishedAt)}</span>
							</p>
							{displayAllDescription ? (
								<div>
									{video.videoDescription.map((d, index) => {
										if (d) {
											return <p key={index}>{d}</p>;
										} else {
											return <div id="line-gap"></div>;
										}
									})}
									<span
										onClick={() => setDisplayAllDescription(false)}
									>
										Less
									</span>
								</div>
							) : (
								<div>
									{video.videoDescription.map((d, index) => {
										if (!d || index > 3) {
											return;
										}
										if (d) {
											return <p key={index}>{d}</p>;
										} else {
											return <div id="line-gap"></div>;
										}
									})}
									<span onClick={() => setDisplayAllDescription(true)}>
										More
									</span>
								</div>
							)}
						</div>
					)}
					{video && (
						<div id="comment">
							<div>
								<h2>{video.videoCommentCount} Comments</h2>{" "}
								<p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										enable-background="new 0 0 24 24"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										focusable="false"
										style={{
											pointerEvents: "none",
											display: "block",
											width: "24px",
											height: "24px",
											fill: `${currentColor}`,
										}}
									>
										<path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
									</svg>{" "}
									Sort by
								</p>
							</div>
							<div>
								<div id="user-logo">
									<img src={userLogo} alt="" />
								</div>
								<div>
									<input
										type="text"
										placeholder="Add a comment..."
										style={{
											color: `var(--color-dominant-${currentColor})`,
										}}
									/>
								</div>
							</div>
						</div>
					)}

					{comments && (
						<div id="comments">
							{comments.map((comment) => (
								<div>
									<div id="author-logo">
										<img src={comment.authorLogo} alt="" />
									</div>
									<div>
										<p>
											{comment.authorDisplayName}{" "}
											<span>
												{dateConverter(comment.updateDate)}
											</span>
										</p>
										<p>{comment.comment}</p>
										<div>
											<p>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
													style={{
														pointerEvents: "none",
														width: "20px",
														height: "20px",
														position: "relative",
														top: "5px",
													}}
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
													/>
												</svg>{" "}
												&nbsp;
												{likesConverter(comment.likes)}
											</p>
											<p>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
													style={{
														pointerEvents: "none",
														display: "block",
														width: "20px",
														height: "20px",
														position: "relative",
														top: "1px",
													}}
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
													/>
												</svg>
											</p>
											<p>Reply</p>
										</div>
										{comment.totalReplies > 0 && (
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													class="w-6 h-6"
													style={{
														pointerEvents: "none",
														width: "19px",
														height: "12px",
														position: "relative",
														rotate: "60deg",
														fill: "#3ea6ff",
													}}
												>
													<path d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
												</svg>
												<span
													style={{
														width: "4px",
														height: "4px",
														borderRadius: "50%",
														background: "#3ea6ff",
													}}
												></span>
												<p>{comment.totalReplies} replies</p>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							position: "sticky",
							top: "55px",
							backgroundColor: "#0f0f0f",
							zIndex: 1,
						}}
					>
						{displayPrevious && (
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
						)}
						<div id="yt-categories" ref={categoriesContainerRef}>
							{categories.map((category, index) => (
								<div
									key={index}
									className={
										activeCategory === category.id
											? "activeCategory"
											: "category"
									}
									onClick={() => setActiveCategory(category.id)}
								>
									<p>{category.title}</p>
								</div>
							))}
						</div>
						{displayNext && (
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
						)}
					</div>
					<div id="suggestions">
						{suggestions.length >0 && suggestions.map((content, index) => (
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
												navigate(`/watch?v=${content.videoId}`)
											}
										>
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
				</div>
			</div>
		</div>
	);
}

export default Watch;
