import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../../styles/todo-list.css";

// components
import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";
import Notes from "../../components/todo-list/Notes";
import WorkList from "../../components/todo-list/WorkList";
import ProjectList from "../../components/todo-list/ProjectList";
import TravelList from "../../components/todo-list/TravelList";
import PersonalTaskList from "../../components/todo-list/PersonalTaskList";
import HobbiesList from "../../components/todo-list/HobbiesList";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { signal } from "@preact/signals-react";

import { ToastContainer, toast } from "react-toastify";
import { todoListRoutes } from "../../routes/todo-list.route";
const notify = (message = "done", type = "success") => {
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

const sampleTodoList= {
	"_id": "658ba64a3a5f0d50859cf9ba",
	"userId": "6585c86ac9d55896e68b8a78",
	"workList": [
	  {
		"createdBy": {
		  "creatorId": "6585c86ac9d55896e68b8a78",
		  "creatorName": "Ashik"
		},
		"habits": {
		  "habitsId": [],
		  "tracks": []
		},
		"financialsPlans": {
		  "spends": []
		},
		"_id": "658ba6643a5f0d50859cf9bd",
		"isPublic": true,
		"name": "Company Team Developers",
		"password": "",
		"details": "",
		"allMembers": [],
		"dailyTasks": [
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658ba71b3a5f0d50859cf9c8",
			"name": "Code review",
			"details": "",
			"taskType": "dailytask",
			"assignedTo": [],
			"createdAt": "2023-12-27T04:24:59.825Z",
			"updatedAt": "2023-12-27T04:24:59.825Z",
			"__v": 0
		  },
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658bb0e903fe896a29c100f2",
			"name": "Bug fixing",
			"details": "",
			"taskType": "dailytask",
			"assignedTo": [],
			"createdAt": "2023-12-27T05:06:49.927Z",
			"updatedAt": "2023-12-27T05:06:49.927Z",
			"__v": 0
		  }
		],
		"reminders": [
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658bb30f03fe896a29c10102",
			"name": "Meeting",
			"details": "",
			"taskType": "reminder",
			"assignedTo": [],
			"deadline": "2023-12-27T13:00",
			"createdAt": "2023-12-27T05:15:59.204Z",
			"updatedAt": "2023-12-27T05:15:59.204Z",
			"__v": 0
		  },
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658bb88b03fe896a29c1010b",
			"name": "Review pull requests",
			"details": "",
			"taskType": "reminder",
			"assignedTo": [],
			"deadline": "2023-12-27T21:30",
			"createdAt": "2023-12-27T05:39:23.863Z",
			"updatedAt": "2023-12-27T05:39:23.863Z",
			"__v": 0
		  },
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658bbc8c8af0585ad259a76f",
			"name": "Project Alpha",
			"details": "",
			"taskType": "reminder",
			"assignedTo": [],
			"deadline": "2024-01-27T00:00",
			"createdAt": "2023-12-27T05:56:28.958Z",
			"updatedAt": "2023-12-27T05:56:28.958Z",
			"__v": 0
		  }
		],
		"tasks": [
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"done": {
			  "isDone": false
			},
			"_id": "658bb8d803fe896a29c10114",
			"name": "Review pull requests",
			"details": "",
			"taskType": "task",
			"assignedTo": [],
			"deadline": "2023-12-30T21:30",
			"createdAt": "2023-12-27T05:40:40.180Z",
			"updatedAt": "2023-12-27T05:40:40.180Z",
			"__v": 0
		  }
		],
		"goals": [
		  {
			"createdBy": {
			  "creatorId": "6585c86ac9d55896e68b8a78",
			  "creatorName": "Ashik"
			},
			"_id": "658bbd39479b05fc1869586c",
			"name": "Project Alpha",
			"details": "Chaos to calm in a click. Tasks, reminders, your command center. Take control, own your day, and see what you can achieve.",
			"steps": [
			  {
				"createdBy": {
				  "creatorId": "6585c86ac9d55896e68b8a78",
				  "creatorName": "Ashik"
				},
				"done": {
				  "isDone": false
				},
				"_id": "658bc71b762e32be5ff017f2",
				"name": "Feature A planning",
				"details": "Ditch the overwhelm, and embrace the \"do-it-later\" bliss. Tame your day with tasks, and reminders, and conquer your goals one step at a time.",
				"taskType": "step",
				"assignedTo": [],
				"deadline": "2023-12-27T15:00",
				"createdAt": "2023-12-27T06:41:31.170Z",
				"updatedAt": "2023-12-27T06:41:31.170Z",
				"__v": 0
			  },
			  {
				"createdBy": {
				  "creatorId": "6585c86ac9d55896e68b8a78",
				  "creatorName": "Ashik"
				},
				"done": {
				  "isDone": false
				},
				"_id": "658bca509ae13d421b635d07",
				"name": "Feature A development",
				"details": "No more mental juggling! Unleash your brainpower with organized tasks, reminders that never forget, and watch your productivity soar.",
				"taskType": "step",
				"assignedTo": [],
				"deadline": "2023-12-27T17:00",
				"createdAt": "2023-12-27T06:55:12.825Z",
				"updatedAt": "2023-12-27T06:55:12.825Z",
				"__v": 0
			  }
			],
			"finalGoal": "Complete Project Alpha",
			"deadline": "2024-02-27T00:00",
			"createdAt": "2023-12-27T05:59:21.626Z",
			"updatedAt": "2023-12-27T06:55:13.088Z",
			"__v": 2
		  }
		],
		"createdAt": "2023-12-27T04:21:56.030Z",
		"updatedAt": "2023-12-27T05:59:22.978Z",
		"__v": 7
	  }
	],
	"projectList": [],
	"hobbiesList": [],
	"travelList": [],
	"__v": 1
  }

  const sampleUserDetails = {"_id":"6585c86ac9d55896e68b8a78","name":"Ashik","email":"ashiqur999999@gmail.com","password":"$2b$05$yBDzxKA2QS5jCrOZFLTc/.Ultf/TCb9sPwTheGxdfHQNkfUNPrkaG","userType":"user","tag":"@ashik9991","bookmarks":[],"__v":0}

function Home() {
	const navigate = useNavigate();

	const [isTraveling, setIsTraveling] = useState(false);
	const [quote, setQuote] = useState("YOU'LL SEE IT WHEN YOU BELIEVE IT.");
	const [notes, setNotes] = useState(notesArray);

	const [userDetails, setUserDetails] = useState(sampleUserDetails);
	const [token, setToken] = useState();

	const [activeCategory, setActiveCategory] = useState("work");
	const [todoList, setTodoList] = useState();

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
		getQuote();

		const userDetails = localStorage.getItem("userInfo");
		const token = localStorage.getItem("token");
		if (token && userDetails) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);

			setToken(token);

			getTodoList(token);
		} else {
			let message = "Please Login first.";
			notify(message, "error");
			setTimeout(() => {
				navigate("/sign");
			}, 3000);
		}
	}, []);

	const scrolToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const getQuote = () => {
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
	};

	const getTodoList = (token) => {
		fetch(`${todoListRoutes.getTodoList}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res.todolist);
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todolist);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
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
				{todoList && <section>
					{activeCategory === "project" ? (
						<ProjectList todoList={todoList} setTodoList={setTodoList} />
					) : activeCategory === "travel" ? (
						<TravelList todoList={todoList} setTodoList={setTodoList} />
					) : activeCategory === "personal" ? (
						<PersonalTaskList
							todoList={todoList}
							setTodoList={setTodoList}
						/>
					) : activeCategory === "hobbies" ? (
						<HobbiesList todoList={todoList} setTodoList={setTodoList} />
					) : (
						<WorkList todoList={todoList} setTodoList={setTodoList} token={token} notify={notify} userId={userDetails._id}/>
					)}
				</section>}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Home;
