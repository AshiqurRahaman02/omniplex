import React, { useEffect, useState } from "react";

// components
import Nav from "../components/omniplex/Nav";
import Footer from "../components/omniplex/Footer";
import Tweet from "../components/omniplex/Tweet";

const reviews = [
	{
		id: 1,
		name: "Sarah K",
		review:
			"Omniplex isn't just a platform, it's a lifesaver for busy bees like me!",
		userTag: "@TechEnthusiast431",
		commentCount: 15,
		retweetCount: 32,
		likeCount: 78,
		date: "Jun 27, 2023",
	},
	{
		id: 2,
		name: "David C",
		review:
			"The personalized dashboard in Omniplex is a game-changer. Finally, a platform that truly works for me!",
		userTag: "@ProductivityGuru431",
		commentCount: 8,
		retweetCount: 21,
		likeCount: 45,
		date: "Jun 28, 2023",
	},
	{
		id: 3,
		name: "Alex P",
		review:
			"Omniplex doesn't just organize my digital life, it gives me back control. Feels empowering!",
		userTag: "@DigitalNomad431",
		commentCount: 23,
		retweetCount: 45,
		likeCount: 92,
		date: "Jun 29, 2023",
	},
	{
		id: 4,
		name: "Lisa F",
		review:
			"My cat can finally use Netflix without paw-ing the keyboard. Thanks, Omniplex!",
		userTag: "@PetLover431",
		commentCount: 5,
		retweetCount: 13,
		likeCount: 27,
		date: "Jun 30, 2023",
	},
	{
		id: 5,
		name: "John D",
		review:
			"Goodbye tab purgatory, hello productivity palace! Omniplex is my game changer.",
		userTag: "@EfficiencyMaestro431",
		commentCount: 18,
		retweetCount: 36,
		likeCount: 64,
		date: "Jul 1, 2023",
	},
	{
		id: 6,
		name: "Emily B",
		review:
			"Never knew my to-do list could be so zen. Omniplex has transformed my productivity routine.",
		userTag: "@ZenMaster431",
		commentCount: 12,
		retweetCount: 28,
		likeCount: 53,
		date: "Jul 2, 2023",
	},
	{
		id: 7,
		name: "Priya M",
		review:
			"More than just a platform, Omniplex is a community. Feels like coming home every time I log in.",
		userTag: "@CommunityBuilder431",
		commentCount: 30,
		retweetCount: 62,
		likeCount: 104,
		date: "Jul 3, 2023",
	},
	{
		id: 8,
		name: "Tom A",
		review:
			"Can't decide whether to conquer my to-do list or binge-watch that new show... guess that's the beauty of Omniplex!",
		userTag: "@IndecisiveExplorer431",
		commentCount: 14,
		retweetCount: 29,
		likeCount: 57,
		date: "Jul 4, 2023",
	},
	{
		id: 9,
		name: "Maria L",
		review:
			"Stream, chat, conquer - Omniplex makes it all feel effortless. Highly recommend!",
		userTag: "@StreamingPro431",
		commentCount: 25,
		retweetCount: 50,
		likeCount: 86,
		date: "Jul 5, 2023",
	},
	{
		id: 10,
		name: "Maya T",
		review:
			"Connecting with like-minded creators in Omniplex has taken my creative projects to the next level.",
		userTag: "@CreativeMaven431",
		commentCount: 19,
		retweetCount: 41,
		likeCount: 72,
		date: "Jul 6, 2023",
	},
	{
		id: 11,
		name: "Michael S",
		review:
			"Omniplex has finally made juggling work and play feel seamless. My stress levels are thanking me!",
		userTag: "@WorkLifeBalancer431",
		commentCount: 22,
		retweetCount: 48,
		likeCount: 93,
		date: "Jul 7, 2023",
	},
	{
		id: 12,
		name: "Ben R",
		review:
			"Warning: using Omniplex may lead to increased productivity and decreased time-wasting. Use responsibly!",
		userTag: "@ProductivityEvangelist431",
		commentCount: 16,
		retweetCount: 34,
		likeCount: 66,
		date: "Jul 8, 2023",
	},
];

function About() {
	const [activeReview, setActiveRiview] = useState(10);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveRiview(
				(prevActiveReview) => (prevActiveReview + 1) % reviews.length
			);
		}, 5000); 

		return () => clearInterval(intervalId); 
	}, []);

	return (
		<div>
			<Nav />
			<main>
				<section id="about-hero">
					<div>
						<h1>About us</h1>
						<p>
							In Omniplex, limitations shatter and boundaries blur.
							Forget juggling platforms, here your passions converge.
							Craft empires of entertainment, conquer mountains of
							to-dos, connect with kindred spirits – all within one,
							magnificent realm. This is your digital destiny, sculpted
							with every click, every dream, every ambition.
						</p>
					</div>
				</section>
				<section className="left">
					<aside>
						<img src="/assets/images/about/beyond.png" alt="" />
					</aside>
					<aside>
						<h2>Your Digital Universe</h2>
						<p>
							Feel scattered across a digital archipelago? No more!
							Omniplex is your portal to a unified universe, where
							entertainment empires rise alongside productivity palaces.
							Stream epic sagas, conquer to-do lists, connect with
							kindred spirits – all within your personalized hub. Shatter
							the limitations of fragmented platforms and unleash your
							boundless potential. Welcome to Omniplex – your canvas,
							your kingdom, your digital destiny.
						</p>
					</aside>
				</section>
				<section className="right">
					<aside>
						<h2>Crafted for You</h2>
						<p>
							In Omniplex, you're not just a user, you're the architect.
							We believe in crafting tools that adapt to your unique
							rhythm, not the other way around. Customize your dashboard,
							prioritize your passions, and curate a haven that whispers
							calm and hums with productivity. From mindful streaming
							sessions to meditative to-do lists, Omniplex empowers you
							to reclaim your digital life and orchestrate your flow.
							This is your masterpiece – paint it with your desires, one
							click at a time.
						</p>
					</aside>
					<aside>
						<img src="/assets/images/about/potential.png" alt="" />
					</aside>
				</section>
				<section className="left">
					<aside>
						<img src="/assets/images/about/community.png" alt="" />
					</aside>
					<aside>
						<h2>Join the Symphony</h2>
						<p>
							The magic of Omniplex isn't just in the platform, it's in
							the community. Connect with others who share your passions,
							collaborate on digital empires, and learn from diverse
							perspectives. Let your laughter echo through shared
							playlists, celebrate milestones in productivity leagues,
							and forge meaningful connections that transcend the screen.
							In Omniplex, you're never alone – you're part of a
							symphony, where every click adds to the harmony, every
							voice amplifies the potential.
						</p>
					</aside>
				</section>
				<h2 id="reviews">Reviews</h2>
				{/* <section className="right">
					<aside>
						<p>{reviews[activeReview].review}</p>
					</aside>
					<aside>
						<img src="/assets/images/potential.png" alt="" />
					</aside>
				</section> */}
				<section className="reviews">
					{/* <Tweet
						name={reviews[(activeReview - 1) % reviews.length].name}
						userTag={reviews[(activeReview - 1) % reviews.length].userTag}
						date={reviews[(activeReview - 1) % reviews.length].date}
						review={reviews[(activeReview - 1) % reviews.length].review}
						commentCount={
							reviews[(activeReview - 1) % reviews.length].commentCount
						}
						likeCount={
							reviews[(activeReview - 1) % reviews.length].likeCount
						}
						retweetCount={
							reviews[(activeReview - 1) % reviews.length].retweetCount
						}
					/> */}
					<Tweet
						name={reviews[activeReview].name}
						userTag={reviews[activeReview].userTag}
						date={reviews[activeReview].date}
						review={reviews[activeReview].review}
						commentCount={reviews[activeReview].commentCount}
						likeCount={reviews[activeReview].likeCount}
						retweetCount={reviews[activeReview].retweetCount}
					/>
					{/* <Tweet
						name={reviews[(activeReview + 1) % reviews.length].name}
						userTag={reviews[(activeReview + 1) % reviews.length].userTag}
						date={reviews[(activeReview + 1) % reviews.length].date}
						review={reviews[(activeReview + 1) % reviews.length].review}
						commentCount={
							reviews[(activeReview + 1) % reviews.length].commentCount
						}
						likeCount={
							reviews[(activeReview + 1) % reviews.length].likeCount
						}
						retweetCount={
							reviews[(activeReview + 1) % reviews.length].retweetCount
						}
					/> */}
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default About;
