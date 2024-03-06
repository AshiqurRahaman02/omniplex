import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Nav from "../components/omniplex/Nav";
import Footer from "../components/omniplex/Footer";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const notify = (message, type) => {
	if (type === "error") {
		toast.error(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	} else if (type === "success") {
		toast.success(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	} else if (type === "info") {
		toast.info(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	} else if (type === "warning") {
		toast.warn(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	} else {
		toast("🦄 Wow so easy!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
};

const products = [
	{
		id: 11,
		title: "Collabcraft",
		headline:
			"Craft together, conquer anything. CollabCraft: Your code and canvas, united in real-time.",
		details:
			"Break the boundaries of your imagination with CollabCraft, the ultimate collaborative code editor and canvas. Build, design, and innovate in real-time with your team, fueled by seamless chat, voice, and video. Code like champions, sketch like masterminds, and watch your visions materialize faster than ever before. Join the CollabCraft revolution - where creativity knows no limits.",
		image: "/assets/images/explore/explore-collabcraft.jpg",
		logo: "/assets/logo/collabcraft.png",
		to: "/collabcraft",
	},
	{
		id: 9,
		title: "Todo List",
		headline:
			"Master Your Day: From Prioritizing Tasks to Celebrating Milestones, Conquer Your Goals with Your Personalized To-Do List",
		details:
			"Omniplex empowers your productivity with a beautifully designed, AI-powered to-do list app. Break down goals into manageable steps, collaborate with friends on projects, and track your progress in real-time. Celebrate milestones with the community, find inspiration from success stories, and discover new ways to optimize your daily flow.",
		image: "/assets/images/explore/explore-todolist.jpg",
		logo: "/assets/logo/todolist.png",
		to: "/todolist",
	},
	{
		id: 10,
		title: "Weather",
		headline:
			"Embrace the Elements: Stay Informed and Inspired with Real-Time Weather Updates and Stunning Visuals",
		details:
			" Omniplex keeps you connected to the world around you with accurate weather forecasts and visually captivating landscape photos. Plan your adventures around the elements, find serenity in real-time updates, and share breathtaking natural sights with like-minded individuals. Discover local hidden gems based on weather conditions, participate in community discussions about outdoor experiences, and foster a deeper appreciation for the world's diverse landscapes.",
		image: "/assets/images/explore/explore-weather.jpg",
		logo: "/assets/logo/weather.png",
		to: "/weather",
	},
	{
		id: 1,
		title: "Netflix",
		headline:
			"Binge-Worthy Bonanza: Stream Your Way to Serendipity on Netflix",
		details:
			"Escape into endless entertainment! Omniplex curates personalized recommendations, hidden gems, and themed watchlists from across Netflix's expansive library. Find your next obsession, rediscover forgotten favorites, and share your cinematic journey with the Omniplex community. Get ready to lose yourself in worlds of laughter, suspense, and everything in between.",
		image: "/assets/images/explore/explore-netflix.jpg",
		logo: "/assets/logo/netflix.png",
		to: "/netflix",
	},
	{
		id: 2,
		title: "Spotify",
		headline:
			"Unleash Your Inner DJ: Craft the Perfect Soundtrack to Your Life with Spotify",
		details:
			"Omniplex transforms Spotify into a playground for sonic exploration. Discover curated playlists across genres and moods, tailor your listening experience with AI-powered recommendations, and collaborate with friends on shared playlists. Turn any moment into a soundtrack, fuel your workouts, and celebrate life's soundtrack with fellow music lovers – all in the vibrant Omniplex ecosystem.",
		image: "/assets/images/explore/explore-spotify.jpg",
		logo: "/assets/logo/spotify.png",
		to: "/spotify",
	},
	{
		id: 3,
		title: "Instagram",
		headline:
			"Elevate Your Visual Storytelling: Share Your Unique Vision and Connect with the World on Instagram",
		details:
			"Omniplex empowers your visual voice with curated tools and a vibrant Instagram community. Discover hidden gems in the world of photography and design, draw inspiration from diverse creators, and polish your storytelling skills. Share your unique perspective, express your artistic flair, and engage with a global audience who appreciates your vision",
		image: "/assets/images/explore/explore-instagram.jpg",
		logo: "/assets/logo/instagram.png",
		// to: "/instagram",
	},
	{
		id: 4,
		title: "YouTube",
		headline:
			"Learn, Laugh, Explore: YouTube Rabbit Holes Reimagined in Omniplex",
		details:
			"Go beyond the ordinary with Omniplex's reimagined YouTube experience. Dive into curated rabbit holes on specific topics, discover hidden creators and niche communities, and learn from the world's best minds. Turn your curiosity into adventure, fuel your creative fire, and connect with passionate communities – all while exploring the infinite knowledge and entertainment rabbit holes within Omniplex.",
		image: "/assets/images/explore/explore-youtube.jpg",
		logo: "/assets/logo/youtube.png",
		to: "/youtube",
	},
	{
		id: 5,
		title: "Apple",
		headline:
			"Beyond Technology: Experience the Apple Ecosystem Where Innovation Ignites Your Passions",
		details:
			"Unleash the creative powerhouse within. From capturing cinematic masterpieces with iPhone to sculpting groundbreaking ideas on MacBook Pro, Apple empowers you to push boundaries and leave your mark. Dive into a world of intuitive design, seamless connectivity, and cutting-edge technology that fuels your passions and transforms your everyday into an extraordinary canvas.",
		image: "/assets/images/explore/explore-apple.jpg",
		logo: "/assets/logo/apple.png",
		// to: "/apple",
	},
	{
		id: 6,
		title: "Amazon",
		headline:
			"Unleash the Shopping Serendipity: Discover Hidden Treasures and Conquer Your Needs with Amazon",
		details:
			"Omniplex transforms shopping into a thrilling adventure with access to Amazon's endless possibilities. Dive into personalized recommendations, uncover hidden gems across categories, and experience the joy of one-click ordering. Conquer your everyday needs, fuel your passions with the perfect finds, and share your bargain-hunting skills with fellow enthusiasts.",
		image: "/assets/images/explore/explore-amazon.jpg",
		logo: "/assets/logo/amazon.png",
		// to: "/amazon",
	},
	{
		id: 7,
		title: "Chat Gpt",
		headline:
			"Supercharge Your Creativity: Spark Conversations, Craft Content, and Brainstorm Ideas with ChatGPT",
		details:
			"Omniplex amplifies your creative sparks through seamless ChatGPT integration. Generate witty captions, brainstorm groundbreaking concepts, and craft captivating content with AI assistance. Dive into thought-provoking discussions with like-minded individuals, participate in collaborative writing projects, and let your imagination run wild in a supportive community.",
		image: "/assets/images/explore/explore-chatgpt.jpg",
		logo: "/assets/logo/chatgpt.png",
		// to: "/chatgpt",
	},
	{
		id: 8,
		title: "Unsplash",
		headline:
			"Capture and Celebrate Beauty: From Breathtaking Landscapes to Inspiring Moments, Share Your Vision with the Unsplash Community",
		details:
			"Omniplex unleashes your inner photographer with access to a curated collection of stunning Unsplash photos and tools to capture your own masterpieces. Discover hidden corners of the world, find inspiration in diverse perspectives, and fuel your creativity with visual storytelling. Share your unique vision, contribute to the ever-growing collection, and connect with passionate photography enthusiasts in a global community.",
		image: "/assets/images/explore/explore-unsplash.jpg",
		logo: "/assets/logo/unsplash.png",
		to: "/unsplash",
	},
];

function Explore() {
	const navigate = useNavigate();

	const sectionRefMap = useRef({});

	// useEffect(() => {
	// 	const sectionIds = [
	// 		"weather",
	// 		"spotify",
	// 		"youtube",
	// 		"netflix",
	// 		"todolist",
	// 		"instagram",
	// 		"apple",
	// 		"amazon",
	// 		"chatgpt",
	// 		"unsplash",
	// 	];

	// 	const hash = window.location.hash.slice(1);
	// 	const targetSectionId = sectionIds.find((id) => id === hash);

	// 	if (targetSectionId) {
	// 		const targetSectionRef = sectionRefMap.current[targetSectionId];
	// 	console.log(hash, targetSectionId, sectionRefMap, targetSectionRef)
	// 		if (targetSectionRef) {
	// 			targetSectionRef.scrollIntoView({
	// 				behavior: "smooth",
	// 				block: "start",
	// 			});
	// 		}
	// 	}
	// }, []);
	return (
		<div>
			<Nav />
			<nav id="explore-nav">
				{products.map((product, index) => (
					<div
						title={product.title}
						onClick={() =>
							(window.location.hash = product.title
								.split(" ")
								.join("")
								.toLowerCase())
						}
					>
						<img src={product.logo} alt="" />
					</div>
				))}
			</nav>
			<main>
				<section id="header">
					<div>
						<h1>Explore Omniplex</h1>
						<p> A Universe of Possibilities Awaits</p>
						<p>
							Step into your portal, where control redefines the digital
							experience. In Omniplex, curated experiences blossom just
							for you. Stream Netflix recommendations that whisper to
							your deepest desires, discover Spotify playlists that
							mirror your emotional dance, and unearth hidden corners of
							the internet tailored to your wildest curiosities – all
							within your personalized haven.
						</p>
					</div>
				</section>
				<h2 className="products-headline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
						/>
					</svg>
					Products
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
						/>
					</svg>
				</h2>
				{products.map((product, index) =>
					index % 2 === 0 ? (
						<section
							key={index}
							className="explore-sections"
							style={{ paddingTop: "65px" }}
							id={product.title.split(" ").join("").toLowerCase()}
						>
							<h2>{product.title}</h2>
							<div className="explore-left">
								<aside className="explore-image">
									<img src={product.image} alt="" />
								</aside>
								<aside className="explore-content">
									<h3>{product.headline}</h3>
									<p>{product.details}</p>
									<button
										className="explore-btn"
										onClick={() => {
											if (product.to) {
												navigate(product.to);
											} else {
												notify(
													"This product is not available right now",
													"info"
												);
											}
										}}
									>
										Try It Now{" "}
										<FontAwesomeIcon
											icon={faArrowCircleRight}
											id="icon"
										/>
									</button>
								</aside>
							</div>
						</section>
					) : (
						<section
							key={index}
							className="explore-sections"
							style={{ paddingTop: "65px" }}
							id={product.title.split(" ").join("").toLowerCase()}
						>
							<h2>{product.title}</h2>
							<div className="explore-right">
								<aside className="explore-content">
									<h3>{product.headline}</h3>
									<p>{product.details}</p>
									<button
										className="explore-btn"
										onClick={() => {
											if (product.to) {
												navigate(product.to);
											} else {
												notify(
													"This product is not available right now",
													"info"
												);
											}
										}}
									>
										Try It Now{" "}
										<FontAwesomeIcon
											icon={faArrowCircleRight}
											id="icon"
										/>
									</button>
								</aside>
								<aside className="explore-image">
									<img src={product.image} alt="" />
								</aside>
							</div>
						</section>
					)
				)}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Explore;
