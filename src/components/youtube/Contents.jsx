import { duration } from "@mui/material";
import React, { useEffect, useState } from "react";

const response = {
	kind: "youtube#videoListResponse",
	etag: "V7iMC5nOSnkAzruIoanZzckMsh8",
	items: [
		{
			kind: "youtube#video",
			etag: "QTGnN35ZNNH-BhimJQhU7v84UjE",
			id: "GCzDnIAl-x4",
			snippet: {
				publishedAt: "2024-01-05T03:00:15Z",
				channelId: "UCSiDGb0MnHFGjs4E2WKvShw",
				title: "How To Make Charcoal At Home - कोयले से पैसे कमाये | Very Easy",
				description:
					"Charcoal From Wood ...घर पर कोयला कैसे बनाये....In This Video We Made Charcoal At Home Using Only Woods.\n\nYe Bhi Check Karo - https://www.youtube.com/watch?v=ApzXZ9LzKes&list=PLs2q0kQKcqma0C44OiJUdaOSoC61Bmloe\n\nSUBSCRIBE : https://youtube.com/MRINDIANHACKER?sub_confirmation=1\n\nFOLLOW KARLO 😘\nInstagram : https://www.instagram.com/dilraj_singh_rawat\nTwitter : https://www.x.com/MR_INDIANHACKER\nFacebook : https://www.facebook.com/mrindianhacker00\n\nImagine charcoal as a tiny superhero with lots of holes in its suit. These holes act like magnets, grabbing bad guys like dirt, yucky chemicals, and even bad breath germs!\nHere's what this charcoal superhero can do:\n1 - Shiny teeth: When you brush with charcoal toothpaste, the superhero grabs stainy yummies stuck on your teeth, making them pearly white!\n2 - Happy tummy: If you ever eat something that doesn't agree with you, charcoal can suck up the bad stuff before it makes your tummy grumpy!\n3 - Clean skin: Like a tiny vacuum, charcoal in face masks grabs dirt and oil that can clog your pores, leaving your skin smooth and happy.\n4 - Fresh air: Special charcoal filters can grab tiny stinky things from the air, making it smell clean and fresh, like after a summer rain!\nRemember: Like any superhero, charcoal needs to be used carefully. Always ask a grown-up before trying anything new, and never eat charcoal unless it's made for food!\n\nSo there you have it, the amazing world of charcoal, the tiny superhero with holes! Pretty cool, right?\n\nThanks for watching! Love you Titanium Army",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/GCzDnIAl-x4/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/GCzDnIAl-x4/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/GCzDnIAl-x4/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/GCzDnIAl-x4/sddefault.jpg",
						width: 640,
						height: 480,
					},
					maxres: {
						url: "https://i.ytimg.com/vi/GCzDnIAl-x4/maxresdefault.jpg",
						width: 1280,
						height: 720,
					},
				},
				channelTitle: "MR. INDIAN HACKER",
				tags: [
					"charcoal",
					"charkol",
					"how to make charcoal at home",
					"activated",
					"how to make charcoal at home in hindi",
					"koyla",
					"making charcoal",
					"DIY charcoal",
					"Charcoal making at home",
					"कोयला बनाना",
					"कोयले का बिजनेस",
					"घर बैठे कमाई करें",
					"mr indian hacker",
					"mr. indian hacker",
					"experiments",
					"experiment",
					"coal",
					"Easy charcoal making process",
					"how to make charcoal",
					"small business ideas",
					"how to make coal",
					"business ideas",
					"business ideas in india",
					"village business ideas",
					"mr indian hacker new video",
				],
				categoryId: "28",
				liveBroadcastContent: "none",
				defaultLanguage: "en-US",
				localized: {
					title: "How To Make Charcoal At Home - कोयले से पैसे कमाये | Very Easy",
					description:
						"Charcoal From Wood ...घर पर कोयला कैसे बनाये....In This Video We Made Charcoal At Home Using Only Woods.\n\nYe Bhi Check Karo - https://www.youtube.com/watch?v=ApzXZ9LzKes&list=PLs2q0kQKcqma0C44OiJUdaOSoC61Bmloe\n\nSUBSCRIBE : https://youtube.com/MRINDIANHACKER?sub_confirmation=1\n\nFOLLOW KARLO 😘\nInstagram : https://www.instagram.com/dilraj_singh_rawat\nTwitter : https://www.x.com/MR_INDIANHACKER\nFacebook : https://www.facebook.com/mrindianhacker00\n\nImagine charcoal as a tiny superhero with lots of holes in its suit. These holes act like magnets, grabbing bad guys like dirt, yucky chemicals, and even bad breath germs!\nHere's what this charcoal superhero can do:\n1 - Shiny teeth: When you brush with charcoal toothpaste, the superhero grabs stainy yummies stuck on your teeth, making them pearly white!\n2 - Happy tummy: If you ever eat something that doesn't agree with you, charcoal can suck up the bad stuff before it makes your tummy grumpy!\n3 - Clean skin: Like a tiny vacuum, charcoal in face masks grabs dirt and oil that can clog your pores, leaving your skin smooth and happy.\n4 - Fresh air: Special charcoal filters can grab tiny stinky things from the air, making it smell clean and fresh, like after a summer rain!\nRemember: Like any superhero, charcoal needs to be used carefully. Always ask a grown-up before trying anything new, and never eat charcoal unless it's made for food!\n\nSo there you have it, the amazing world of charcoal, the tiny superhero with holes! Pretty cool, right?\n\nThanks for watching! Love you Titanium Army",
				},
				defaultAudioLanguage: "en",
			},
			contentDetails: {
				duration: "PT15M6S",
				dimension: "2d",
				definition: "hd",
				caption: "false",
				licensedContent: true,
				contentRating: {},
				projection: "rectangular",
			},
			statistics: {
				viewCount: "1108269",
				likeCount: "134712",
				favoriteCount: "0",
				commentCount: "7284",
			},
		},
	],
	nextPageToken: "CAEQAA",
	pageInfo: {
		totalResults: 174,
		resultsPerPage: 1,
	},
};
// "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/mjQ_ICCIx1Q\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen\u003e\u003c/iframe\u003e"

function Contents({ activeCategory, setActiveCategory }) {
	const [isLoading, setIsLoading] = useState(true);

	const [contents, setContents] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24,
	]);

	useEffect(() => {
		getVideos();
	}, [activeCategory]);

	const getVideos = () => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&videoCategoryId=${activeCategory}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					// setContents(data.items);
					// setIsLoading(false);
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

		videos.forEach((item, index) => {
			if (index === 0) {
				ids += item.snippet.channelId;
			} else {
				ids += "," + item.snippet.channelId;
			}

			let content = {
				channelId: item.snippet.channelId,
				thumbnails: item.snippet.thumbnails.maxres
					? item.snippet.thumbnails.maxres.url
					: item.snippet.thumbnails.medium.url,
				duration: durationConverter(item.contentDetails.duration),
				title:
					item.snippet.title.length > 75
						? item.snippet.title.slice(0, 75) + "..."
						: item.snippet.title,
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

		setContents(contentsWithChannelLogo);
		setIsLoading(false);
	};

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
					? contents.map((c) => (
							<div>
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
					: contents.map((content) => (
							<div>
								<div className="thambnail-img">
									<img src={content.thumbnails} alt="" />
									<span>{content.duration}</span>
								</div>
								<div>
									<div className="creator-logo">
										<img src={content.channelLogo} alt="" />
									</div>
									<div>
										<div className="title">
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
	);
}

export default Contents;
