import React from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const reviews = [
	{
		id: 1,
		name: "Sarah K",
		review:
			"Omniplex isn't just a platform, it's a lifesaver for busy bees like me!",
	},
	{
		id: 2,
		name: "David C",
		review:
			"The personalized dashboard in Omniplex is a game-changer. Finally, a platform that truly works for me!",
	},
	{
		id: 3,
		name: "Alex P",
		review:
			"Omniplex doesn't just organize my digital life, it gives me back control. Feels empowering!",
	},
	{
		id: 4,
		name: "Lisa F",
		review:
			"My cat can finally use Netflix without paw-ing the keyboard. Thanks, Omniplex!",
	},
	{
		id: 5,
		name: "John D",
		review:
			"Goodbye tab purgatory, hello productivity palace! Omniplex is my game changer.",
	},
	{
		id: 6,
		name: "Emily B",
		review:
			"Never knew my to-do list could be so zen. Omniplex has transformed my productivity routine.",
	},
	{
		id: 7,
		name: "Priya M",
		review:
			"More than just a platform, Omniplex is a community. Feels like coming home every time I log in.",
	},
	{
		id: 8,
		name: "Tom A",
		review:
			"Can't decide whether to conquer my to-do list or binge-watch that new show... guess that's the beauty of Omniplex!",
	},
	{
		id: 9,
		name: "Maria L",
		review:
			"Stream, chat, conquer - Omniplex makes it all feel effortless. Highly recommend!",
	},
	{
		id: 10,
		name: "Maya T",
		review:
			"Connecting with like-minded creators in Omniplex has taken my creative projects to the next level.",
	},
	{
		id: 11,
		name: "Michael S",
		review:
			"Omniplex has finally made juggling work and play feel seamless. My stress levels are thanking me!",
	},
	{
		id: 12,
		name: "Ben R",
		review:
			"Warning: using Omniplex may lead to increased productivity and decreased time-wasting. Use responsibly!",
	},
];

function About() {
	const navigate = useNavigate();
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
						<img src="/assets/images/beyond.png" alt="" />
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
						<img src="/assets/images/potential.png" alt="" />
					</aside>
				</section>
				<section className="left">
					<aside>
						<img src="/assets/images/community.png" alt="" />
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
			</main>
			<Footer />
		</div>
	);
}

export default About;
