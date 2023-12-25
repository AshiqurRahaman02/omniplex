import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/todo-list.css";

// components
import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Notes from "../../components/todo-list/Notes";
import WorkList from "../../components/todo-list/WorkList";
import ProjectList from "../../components/todo-list/ProjectList";
import TravelList from "../../components/todo-list/TravelList";
import PersonalTaskList from "../../components/todo-list/PersonalTaskList";
import HobbiesList from "../../components/todo-list/HobbiesList";

const TravelSwitch = styled(Switch)(({ theme }) => ({
	padding: 8,
	"& .MuiSwitch-track": {
		borderRadius: 22 / 2,
		"&:before, &:after": {
			content: '""',
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: 16,
			height: 16,
		},
		"&:before": {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main)
			)}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
			left: 12,
		},
		"&:after": {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main)
			)}" d="M19,13H5V11H19V13Z" /></svg>')`,
			right: 12,
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "none",
		width: 16,
		height: 16,
		margin: 2,
	},
}));

const notesArray = [
	{
		id: 1,
		title: "Machine Learning",
		note: "Machine learning is a subset of artificial intelligence that focuses on building systems that can learn from data.",
	},
	{
		id: 2,
		title: "Healthy Eating",
		note: "A balanced diet with a variety of nutrients is essential for maintaining good health and well-being.",
	},
	{
		id: 3,
		title: "History of Jazz",
		note: "Jazz originated in the late 19th to early 20th century in the United States and has since evolved into various subgenres.",
	},
	{
		id: 4,
		title: "Climate Change",
		note: "Climate change is a long-term change in the average weather patterns that have come to define Earth's local, regional, and global climates.",
	},
	{
		id: 5,
		title: "Digital Art",
		note: "Digital art involves creating visual works of art using digital technology, such as a computer or tablet.",
	},
	{
		id: 6,
		title: "The Human Brain",
		note: "The human brain is a complex organ responsible for various cognitive functions, including thinking, memory, and emotion.",
	},
	{
		id: 7,
		title: "Space Exploration",
		note: "Space exploration has led to numerous discoveries about the universe, planets, and other celestial bodies.",
	},
	{
		id: 8,
		title: "The Renaissance",
		note: "The Renaissance was a period in European history known for its cultural and artistic achievements, spanning roughly the 14th to the 17th century.",
	},
	{
		id: 9,
		title: "The Solar System",
		note: "Our solar system consists of the Sun and eight planets, including Earth.",
	},
	{
		id: 10,
		title: "Environmental Conservation",
		note: "Environmental conservation is the responsible use and management of natural resources to ensure their sustainability for future generations.",
	},
];

function Home() {
	const [isTraveling, setIsTraveling] = useState(false);
	const [quote, setQuote] = useState("YOU'LL SEE IT WHEN YOU BELIEVE IT.");
	const [notes, setNotes] = useState(notesArray);

	const [activeCategory, setActiveCategory] = useState("work");

	useEffect(() => {
		const hash = window.location.hash.slice(1);

		if (
			hash === "travel" ||
			hash === "work" ||
			hash === "project" ||
			hash === "presonal" ||
			hash === "hobbies"
		) {
			setActiveCategory(hash);
		}

		scrolToTop();

		fetch("https://type.fit/api/quotes")
			.then((response) => response.json())
			.then((data) => {
				// Get a random index from the array length
				let randomIndex = Math.floor(Math.random() * data.length);
				// Get the random quote object
				let randomQuote = data[randomIndex];

				let text = randomQuote.text;
				setQuote(text);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
	}, []);

	const scrolToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleLinkClick = (linkId) => {
		setActiveCategory(linkId);
	};
	return (
		<div>
			<Nav />
			<main id="todo-list">
				<nav className="todolist-nav">
					<p>{quote.toLocaleUpperCase()}</p>
					<FormControlLabel
						onClick={() => setIsTraveling((pre) => !pre)}
						control={
							isTraveling ? (
								<TravelSwitch defaultChecked />
							) : (
								<TravelSwitch />
							)
						}
						label="Travel mode"
					/>
					{/* {isTraveling && <p>Traveling</p>} */}
				</nav>
				<section id="notes-section">
					<h2 style={{ margin: "5px 20px" }}>Notes:</h2>
					<Notes notes={notes} setNotes={setNotes} />
				</section>
				<section id="categories">
					{isTraveling ? (
						<Link
							to="#travel"
							className={
								activeCategory === "travel" ? "activeCategory" : ""
							}
							onClick={() => handleLinkClick("travel")}
						>
							Travel
						</Link>
					) : (
						<Link
							to="#work"
							className={
								activeCategory === "work" ? "activeCategory" : ""
							}
							onClick={() => handleLinkClick("work")}
						>
							Work
						</Link>
					)}
					{!isTraveling && (
						<Link
							to="#project"
							className={
								activeCategory === "project" ? "activeCategory" : ""
							}
							onClick={() => handleLinkClick("project")}
						>
							Project
						</Link>
					)}
					<Link
						to="#personal"
						className={
							activeCategory === "personal" ? "activeCategory" : ""
						}
						onClick={() => handleLinkClick("personal")}
					>
						Personal Task
					</Link>
					<Link
						to="#hobbies"
						className={
							activeCategory === "hobbies" ? "activeCategory" : ""
						}
						onClick={() => handleLinkClick("hobbies")}
					>
						Hobbies
					</Link>
				</section>
				<section>
					{activeCategory === "work" && <WorkList />}
					{activeCategory === "project" && <ProjectList />}
					{activeCategory === "travel" && <TravelList />}
					{activeCategory === "personal" && <PersonalTaskList />}
					{activeCategory === "hobbies" && <HobbiesList />}
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
