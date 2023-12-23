import React from "react";
import { useNavigate } from "react-router-dom";

// components
import Nav from "../components/omniplex/Nav";
import Footer from "../components/omniplex/Footer";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<Nav />
			<main>
				<section id="header">
					<div>
						<h1>Stream, chat, conquer</h1>
						<p> Your online haven </p>
						<p>
							Unwind the tangled threads of your digital life. Breathe
							easy in <span id="title">Omniplex</span>, your one-stop
							sanctuary for serene chill sessions and focused power
							plays.
							No longer scattered, your passions converge in{" "}
							<span id="title">Omniplex</span>. This is your gateway to a
							universe of possibilities, one click at a time. Enter the
							enigma.
						</p>
						<button
							className="explore-btn"
							onClick={() => {
								navigate("/explore");
							}}
						>
							Explore{" "}
							<FontAwesomeIcon icon={faArrowCircleRight} id="icon" />
						</button>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
