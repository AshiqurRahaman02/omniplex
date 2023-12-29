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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faArrowRight,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";

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



const sampleUserDetails = {
	_id: "asdfasdf",
	name: "Ashik",
	email: "@gmail.com",
	password: "$2b$05$asdfasdfads/.Ultf/TCb9sPwTheGxdfHQNkfUNPrkaG",
	userType: "asdf",
	tag: "@asdfadsf",
	bookmarks: [],
	__v: 0,
};

const scrolToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
scrolToTop();

function Home() {
	const navigate = useNavigate();

	const [totalNotifications, setTotolNotifications] = useState(0);
	const [isTraveling, setIsTraveling] = useState(false);
	const [quote, setQuote] = useState("YOU'LL SEE IT WHEN YOU BELIEVE IT.");

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

	const getQuote = () => {
		fetch("https://type.fit/api/quotes")
			.then((response) => response.json())
			.then((data) => {
				let randomIndex = Math.floor(Math.random() * data.length);
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

	const handelReadNotification = async(time)=>{
		console.log(time);
		await fetch(`${todoListRoutes.markNotificationAsRead}${time}`,{method: "PUT", headers: {'Content-Type': 'application/json', Authorization: token}})
	}
	return (
		<div>
			<Nav />
			<main id="todo-list">
				<nav className="todolist-nav">
					<p>{quote.toLocaleUpperCase()}</p>
					<div>
						{todoList && (
							<div class="paste-button">
								<button class="notification">
									<FontAwesomeIcon icon={faBell} />{" "}
									{todoList.notifications.length}
								</button>
								<div class="notifications">
									{todoList.notifications.length > 0 ? (
										<div>
											{todoList.notifications.map(
												(notification, index) => {
													return (
														<div key={index} onClick={()=>handelReadNotification(notification.time)}>
															<p
																style={{
																	display: "flex",
																	justifyContent:
																		"space-between",
																}}
															>
																{notification.heading}{" "}
																{!notification.isRead && (
																	<FontAwesomeIcon
																		icon={faCircle}
																		style={{
																			color: "#1aff66",
																		}}
																	/>
																)}
															</p>
															<p>{notification.time}</p>
															<p>{notification.text}</p>
															{notification.link && (
																<Link to={notification.link}>
																	Go{" "}
																	<FontAwesomeIcon
																		icon={faArrowRight}
																	/>
																</Link>
															)}
														</div>
													);
												}
											)}
										</div>
									) : (
										<div>
											<p>No notification</p>
										</div>
									)}
								</div>
							</div>
						)}
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
					</div>
					{/* {isTraveling && <p>Traveling</p>} */}
				</nav>
				<section id="notes-section">
					<h2 style={{ margin: "5px 20px" }}>Notes:</h2>
					{todoList && <Notes todoList={todoList}
								setTodoList={setTodoList}
								token={token}
								notify={notify}
								userId={userDetails._id}/>}
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
				{todoList && (
					<section>
						{activeCategory === "project" ? (
							<ProjectList
							todoList={todoList}
							setTodoList={setTodoList}
							token={token}
							notify={notify}
							userId={userDetails._id}
							/>
						) : activeCategory === "travel" ? (
							<TravelList
							todoList={todoList}
							setTodoList={setTodoList}
							token={token}
							notify={notify}
							userId={userDetails._id}
							/>
						) : activeCategory === "personal" ? (
							<PersonalTaskList
							todoList={todoList}
							setTodoList={setTodoList}
							token={token}
							notify={notify}
							userId={userDetails._id}
							/>
						) : activeCategory === "hobbies" ? (
							<HobbiesList
							todoList={todoList}
							setTodoList={setTodoList}
							token={token}
							notify={notify}
							userId={userDetails._id}
							/>
						) : (
							<WorkList
								todoList={todoList}
								setTodoList={setTodoList}
								token={token}
								notify={notify}
								userId={userDetails._id}
							/>
						)}
					</section>
				)}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Home;
