import React, { useState, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faArrowRightFromBracket,
	faUsers,
	faLock
} from "@fortawesome/free-solid-svg-icons";
import {
	faPenToSquare,
	faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { todoListRoutes } from "../../routes/todo-list.route";
import DailyTasks from "./DailyTasks";
import Reminder from "./Reminder";
import TeamUpdates from "./TeamUpdates";
import Tasks from "./Tasks";
import Goal from "./Goal";

const gradientColors = [
	"#ff0000",
	"#ff2500",
	"#ff4900",
	"#ff6e00",
	"#ffa500",
	"#c6b900",
	"#8ecd00",
	"#55e100",
	"#1cf500",
];

const initialFormData = {
	id: "",
	name: "",
	details: "",
	message: "",
	visibility: "onlyMe",
	password: "",
	type: "create",
	deadline: "",
	assignedTo: [],
};


function TravelList({ todoList, setTodoList, token, userId, notify }) {
	const [activeTeamId, setActiveTeamId] = useState(0);
	

	const [displayCreateTeam, setDisplayCreateTeam] = useState(false);
	const [displayCreateDailyTask, setDisplayCreateDailyTask] = useState(false);
	const [displayCreateReminder, setDisplayCreateReminder] = useState(false);
	const [displayCreateTask, setDisplayCreateTask] = useState(false);
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		const newTeam = {
			name: formData.name,
			isPublic: formData.visibility === "public",
			password: formData.visibility === "public" ? formData.password : "",
			details: formData.details,
		};
		console.log(newTeam);

		fetch(todoListRoutes.addTeamTravel, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(newTeam),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayCreateTeam(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelCreateDailyTask = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		const newTask = {
			name: formData.name,
			details: formData.details,
		};
		console.log(newTask);

		let teamId = todoList.travelList[activeTeamId]._id;

		fetch(`${todoListRoutes.createDailyTask}${teamId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayCreateDailyTask(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelCreateReminder = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		if (!formData.deadline) {
			notify("Please choose reminder time", "warning");
			return;
		}

		const newTask = {
			name: formData.name,
			details: formData.details,
			deadline: formData.deadline,
		};
		console.log(newTask);

		let teamId = todoList.travelList[activeTeamId]._id;

		fetch(`${todoListRoutes.createReminder}${teamId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayCreateReminder(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelCreateTask = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		const newTask = {
			name: formData.name,
			details: formData.details,
			deadline: formData.deadline,
		};
		console.log(newTask);

		let teamId = todoList.travelList[activeTeamId]._id;

		fetch(`${todoListRoutes.createTask}${teamId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayCreateTask(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};


	const handelDisplayUpdateTask = (task) => {
		formData.id = task._id;
		formData.name = task.name;
		formData.details = task.details;
		formData.deadline = task.deadline;
		formData.assignedTo = task.assignedTo;
		formData.type = "update";

		console.log(task.taskType);

		if (task.taskType === "reminder") {
			setDisplayCreateReminder(true);
		} else if (task.taskType === "task") {
			setDisplayCreateTask(true);
		} else {
			setDisplayCreateDailyTask(true);
		}
	};
	const handelUpdateTask = (e) => {
		e.preventDefault();

		confirmAlert({
			title: "Confirm to update",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						if (!formData.name) {
							notify("Please enter a name", "warning");
							return;
						}

						const newTask = {
							name: formData.name,
							details: formData.details,
							deadline: formData.deadline,
							assignedTo: formData.assignedTo,
						};
						console.log(newTask);

						let taskId = formData.id;

						fetch(`${todoListRoutes.updateTask}${taskId}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								Authorization: token,
							},
							body: JSON.stringify(newTask),
						})
							.then((res) => res.json())
							.then((res) => {
								if (res.isError) {
									notify(res.message, "warning");
								} else {
									notify(res.message, "success");
									setTodoList(res.todoList);
									setFormData(initialFormData);
									setDisplayCreateDailyTask(false);
									setDisplayCreateReminder(false);
									setDisplayCreateTask(false);
								}
							})
							.catch((err) => {
								console.log(err);
								notify(err.message, "error");
							});
					},
				},
				{
					label: "Cancel",
					onClick: () => {
						setFormData(initialFormData);
					},
				},
			],
		});
	};
	const handelDeleteTask = (id) => {
		confirmAlert({
			title: "Confirm to delete",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						fetch(`${todoListRoutes.deleteTask}${id}`, {
							method: "DELETE",
							headers: {
								Authorization: token,
							},
						})
							.then((res) => res.json())
							.then((res) => {
								if (res.isError) {
									notify(res.message, "warning");
								} else {
									notify(res.message, "success");
									setTodoList(res.todoList);
								}
							})
							.catch((err) => {
								console.log(err);
								notify(err.message, "error");
							});
					},
				},
				{
					label: "Cancel",
				},
			],
		});
	};

	const updateTaskDone = (id) => {
		confirmAlert({
			title: "Confirm to update task",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						fetch(`${todoListRoutes.updateTaskDone}${id}`, {
							method: "PUT",
							headers: {
								Authorization: token,
							},
						})
							.then((res) => res.json())
							.then((res) => {
								if (res.isError) {
									notify(res.message, "warning");
								} else {
									notify(res.message, "success");
									setTodoList(res.todoList);
								}
							})
							.catch((err) => {
								console.log(err);
								notify(err.message, "error");
							});
					},
				},
				{
					label: "Cancel",
					onClick: () => alert("Click No"),
				},
			],
		});
	};

	function interpolateColor(percentage = 30) {
		if (percentage <= 0 || percentage >= 100) {
			return "#FF0000";
		}

		let index = Math.floor(percentage / 10);
		return gradientColors[index];
	}

	function timeConverter(inputDate) {
		const currentDate = new Date();
		const inputDateTime = new Date(inputDate);
		const timeDifferenceInSeconds = Math.floor(
			(currentDate - inputDateTime) / 1000
		);

		const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

		if (timeDifferenceInSeconds < 60) {
			return rtf.format(-timeDifferenceInSeconds, "second");
		} else if (timeDifferenceInSeconds < 3600) {
			const minutes = Math.floor(timeDifferenceInSeconds / 60);
			return rtf.format(-minutes, "minute");
		} else if (timeDifferenceInSeconds < 86400) {
			const hours = Math.floor(timeDifferenceInSeconds / 3600);
			return rtf.format(-hours, "hour");
		} else {
			const options = {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
			};
			return inputDateTime.toLocaleDateString("en-US", options);
		}
	}
	function deadlineConverter(deadline) {
		const currentDate = new Date();
		const deadlineDate = new Date(deadline);
		const timeDifferenceInSeconds = Math.floor(
			(deadlineDate - currentDate) / 1000
		);

		const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

		if (timeDifferenceInSeconds < 0) {
			// If the deadline has passed
			if (timeDifferenceInSeconds > -60) {
				return rtf.format(-timeDifferenceInSeconds, "second");
			} else if (timeDifferenceInSeconds > -3600) {
				const minutes = Math.floor(-timeDifferenceInSeconds / 60);
				return rtf.format(-minutes, "minute");
			} else if (timeDifferenceInSeconds > -86400) {
				const hours = Math.floor(-timeDifferenceInSeconds / 3600);
				return rtf.format(-hours, "hour");
			} else {
				const days = Math.floor(-timeDifferenceInSeconds / 86400);
				return rtf.format(-days, "day");
			}
		} else {
			// If the deadline is in the future
			if (timeDifferenceInSeconds < 60) {
				return rtf.format(timeDifferenceInSeconds, "second");
			} else if (timeDifferenceInSeconds < 3600) {
				const minutes = Math.floor(timeDifferenceInSeconds / 60);
				return rtf.format(minutes, "minute");
			} else if (timeDifferenceInSeconds < 86400) {
				const hours = Math.floor(timeDifferenceInSeconds / 3600);
				return rtf.format(hours, "hour");
			} else {
				const days = Math.floor(timeDifferenceInSeconds / 86400);
				return rtf.format(days, "day");
			}
		}
	}

	const usersContainerRef = useRef(null);
	const handlePrev = () => {
		usersContainerRef.current.scrollLeft -=
			usersContainerRef.current.offsetWidth;
	};

	const handleNext = () => {
		usersContainerRef.current.scrollLeft +=
			usersContainerRef.current.offsetWidth;
	};

	const [emails, setEmails] = useState([]);

	const handleInput = (event) => {
		const text = event.target.innerText;
		const extractedEmails = getEmails(text);
		setEmails(extractedEmails);
	};

	const getEmails = (text) => {
		const emailPattern = /\S+@\S+\.\S+/g;
		return text.match(emailPattern) || [];
	};

	const handleDelete = (email) => {
		const filteredEmails = emails.filter((e) => e !== email);
		setEmails(filteredEmails);
	};

	const addMembers = () => {
		confirmAlert({
			title: "Confirm to add",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						let teamId = todoList.travelList[activeTeamId]._id;

						fetch(`${todoListRoutes.addMembers}${teamId}`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Authorization: token,
							},
							body: JSON.stringify({ membersEmails: emails }),
						})
							.then((res) => res.json())
							.then((res) => {
								if (res.isError) {
									notify(res.message, "warning");
								} else {
									notify(res.message, "success");
									setTodoList(res.todoList);
								}
							})
							.catch((err) => {
								console.log(err);
								notify(err.message, "error");
							});
					},
				},
				{
					label: "Cancel",
				},
			],
		});
	};

	const sendMessage = () => {
		if (!formData.message) {
			notify("message required*", "warning");
			return;
		}

		let teamId = todoList.travelList[activeTeamId]._id;

		fetch(`${todoListRoutes.addMessage}${teamId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify({ message: formData.message }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const deleteTeam = ()=>{

		confirmAlert({
				title: "Confirm to delete Team",
				message: "Are you sure to do this.",
				buttons: [
					{
						label: "Confirm",
						onClick: () => {
							let teamId = todoList.travleList[activeTeamId]._id;
	
							fetch(`${todoListRoutes.deleteTeam}${teamId}`, {
								method: "DELETE",
								headers: {
									"Content-Type": "application/json",
									Authorization: token,
								},
								body: JSON.stringify({ membersEmails: emails }),
							})
								.then((res) => res.json())
								.then((res) => {
									if (res.isError) {
										notify(res.message, "warning");
									} else {
										notify(res.message, "success");
										setTodoList(res.todoList);
										setActiveTeamId(0)
									}
								})
								.catch((err) => {
									console.log(err);
									notify(err.message, "error");
								});
						},
					},
					{
						label: "Cancel",
					},
				],
			});
	  }

	return (
		<div id="category">
			<div>
				{todoList.travelList.length > 0 ? (
					<div>
						<section>
							<div>
								<select
									name=""
									id="teams"
									value={activeTeamId}
									onChange={(e) => {
										setActiveTeamId(e.target.value)
									}}
								>
									{todoList.travelList.map((team, index) => (
										<option value={index} key={index}>
											{team.name}
										</option>
									))}
									<option value="create">Add More Team</option>
								</select>
								{activeTeamId !== "create" &&
								todoList.travelList[activeTeamId].isPublic ? (
									<div
										style={{ display: "flex", alignItems: "center" }}
									>
										<div id="faIcon">
											<FontAwesomeIcon icon={faUsers} size="lg" />
											<span>Public</span>
										</div>
										<p style={{ fontSize: "20px" }}>
											{todoList.travelList[activeTeamId].allMembers
												.length + 1}
										</p>
									</div>
								) : (
									<div id="faIcon">
										<FontAwesomeIcon icon={faLock} size="xl" />
										<span>Only for you</span>
									</div>
								)}
							</div>
							{activeTeamId !== "create" &&
							todoList.travelList[activeTeamId].createdBy.creatorId ===
								userId ? (
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<div id="faIcon">
										<FontAwesomeIcon icon={faPenToSquare} size="xl" />{" "}
										<span>Edit Team</span>
									</div>
									<div id="faIcon" onClick={deleteTeam}>
										<FontAwesomeIcon icon={faTrash} size="xl" />{" "}
										<span>Delete Team</span>
									</div>
								</div>
							) : (
								activeTeamId !== "create" && (
									<div id="faIcon">
										<FontAwesomeIcon
											icon={faArrowRightFromBracket}
											size="xl"
										/>
										<span>Left Team</span>
									</div>
								)
							)}
						</section>
						{activeTeamId !== "create" ? (
							<div>
								<section id="teamDetails">
									<div
										style={{ display: "flex", alignItems: "center" }}
									>
										<button
											onClick={handlePrev}
											id="pre"
											className="shine"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
												/>
											</svg>
										</button>
										<div className="users" ref={usersContainerRef}>
											<div
												key={userId}
												style={{
													margin: "10px",
													padding: "10px",
													border: "1px solid #ccc",
													borderRadius: "5px",
													position: "relative",
												}}
											>
												<p>You</p>
											</div>
											{todoList.travelList[activeTeamId].createdBy
												.creatorId !== userId && (
												<div
													key={
														todoList.travelList[activeTeamId]
															.createdBy.creatorId
													}
													style={{
														margin: "10px",
														padding: "10px",
														border: "1px solid #ccc",
														borderRadius: "5px",
														position: "relative",
													}}
												>
													<p>
														{
															todoList.travelList[activeTeamId]
																.createdBy.creatorName
														}
													</p>

													{todoList.travelList[activeTeamId]
														.createdBy.creatorId === userId && (
														<div
															id="faIcon"
															style={{
																position: "absolute",
																top: "-28px",
																right: "-39px",
															}}
														>
															<span>remove user</span>
															<FontAwesomeIcon
																icon={faXmarkCircle}
															/>
														</div>
													)}
												</div>
											)}

											{todoList.travelList[activeTeamId].allMembers
												.filter(
													(member) => member.userId !== userId
												)
												.map((user) => (
													<div
														key={user.userId}
														style={{
															margin: "10px",
															padding: "10px",
															border: "1px solid #ccc",
															borderRadius: "5px",
															position: "relative",
														}}
													>
														<p>{user.userName}</p>

														{todoList.travelList[activeTeamId]
															.createdBy.creatorId ===
															userId && (
															<div
																id="faIcon"
																style={{
																	position: "absolute",
																	top: "-28px",
																	right: "-39px",
																}}
															>
																<span>remove user</span>
																<FontAwesomeIcon
																	icon={faXmarkCircle}
																/>
															</div>
														)}
													</div>
												))}
										</div>

										<button
											onClick={handleNext}
											id="next"
											className="shine"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
												/>
											</svg>
										</button>
									</div>
									{todoList.travelList[activeTeamId].createdBy
										.creatorId === userId && (
										<div className="addMember">
											<div>
												<div>
													{emails.map((email, index) => (
														<div
															key={index}
															className="email-box"
														>
															{email}
															<span
																className="delete-icon"
																onClick={() =>
																	handleDelete(email)
																}
															>
																&#10006;
															</span>
														</div>
													))}
												</div>
												<div
													contentEditable
													className="email-input"
													onInput={handleInput}
													suppressContentEditableWarning={true}
												/>
											</div>
											<button
												className="explore-btn"
												style={{ height: "50px", marginTop: "0px" }}
												onClick={addMembers}
											>
												Add Team member
											</button>
										</div>
									)}
								</section>

								<section id="tasks">
									<DailyTasks
										interpolateColor={interpolateColor}
										dailyTasks={
											todoList.travelList[activeTeamId].dailyTasks
										}
										creatorId={
											todoList.travelList[activeTeamId].createdBy
												.creatorId
										}
										userId={userId}
										notify={notify}
										updateTaskDone={updateTaskDone}
										handelDisplayUpdateTask={handelDisplayUpdateTask}
										handelDeleteTask={handelDeleteTask}
										setDisplayCreateDailyTask={
											setDisplayCreateDailyTask
										}
										timeConverter={timeConverter}
									/>
									<Reminder
										interpolateColor={interpolateColor}
										reminders={
											todoList.travelList[activeTeamId].reminders
										}
										creatorId={
											todoList.travelList[activeTeamId].createdBy
												.creatorId
										}
										userId={userId}
										deadlineConverter={deadlineConverter}
										handelDisplayUpdateTask={handelDisplayUpdateTask}
										handelDeleteTask={handelDeleteTask}
										setDisplayCreateReminder={
											setDisplayCreateReminder
										}
									/>

									<TeamUpdates
										updates={todoList.travelList[activeTeamId].updates}
										creatorName={
											todoList.travelList[activeTeamId].createdBy
												.creatorName
										}
										createdAt={
											todoList.travelList[activeTeamId].createdAt
										}
										userId={userId}
										formData={formData}
										handleChange={handleChange}
										sendMessage={sendMessage}
										timeConverter={timeConverter}
									/>
								</section>
								<section id="task-goal">
									<Tasks
										interpolateColor={interpolateColor}
										tasks={todoList.travelList[activeTeamId].tasks}
										creatorId={
											todoList.travelList[activeTeamId].createdBy
												.creatorId
										}
										userId={userId}
										notify={notify}
										updateTaskDone={updateTaskDone}
										handelDisplayUpdateTask={handelDisplayUpdateTask}
										handelDeleteTask={handelDeleteTask}
										setDisplayCreateTask={setDisplayCreateTask}
										timeConverter={timeConverter}
										deadlineConverter={deadlineConverter}
									/>
									<Goal
										interpolateColor={interpolateColor}
										goals={todoList.travelList[activeTeamId].goals}
										creatorId={
											todoList.travelList[activeTeamId].createdBy
												.creatorId
										}
										teamId={todoList.travelList[activeTeamId]._id}
										userId={userId}
										token={token}
										notify={notify}
										setTodoList={setTodoList}
										updateTaskDone={updateTaskDone}
										timeConverter={timeConverter}
										deadlineConverter={deadlineConverter}
										formData={formData}
										setFormData={setFormData}
										handleChange={handleChange}
									/>
								</section>
							</div>
						) : (
							<div id="inspire">
								<h2>
									Go big, go together. From solo hustle to shared
									triumph, create your power squad
								</h2>
								<p>
									Don't let the fear of starting small dim your
									ambitious fire. Every epic saga begins with a single
									chapter, and every legendary team starts with a first
									member. Be the pioneer, the trailblazer, the one who
									dares to envision and build. Gather your allies, your
									co-conspirators, your dream weavers, and watch your
									solo seed blossom into a vibrant field of collective
									achievement.
								</p>
								<button onClick={() => setDisplayCreateTeam(true)}>
									Create team
								</button>
							</div>
						)}
					</div>
				) : (
					<div>
						<div id="inspire">
							<h2>
								Go big, go together. From solo hustle to shared triumph,
								create your power squad
							</h2>
							<p>
								Don't let the fear of starting small dim your ambitious
								fire. Every epic saga begins with a single chapter, and
								every legendary team starts with a first member. Be the
								pioneer, the trailblazer, the one who dares to envision
								and build. Gather your allies, your co-conspirators,
								your dream weavers, and watch your solo seed blossom
								into a vibrant field of collective achievement.
							</p>
							<button onClick={() => setDisplayCreateTeam(true)}>
								Create team
							</button>
						</div>
					</div>
				)}
			</div>

			<div>
				{displayCreateTeam && (
					<div>
						<div id="createForm">
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									name="name"
									autoComplete="off"
									value={formData.name}
									onChange={handleChange}
									placeholder="Team Name (*)"
								/>
								<textarea
									name="details"
									value={formData.details}
									onChange={handleChange}
									placeholder="Team Details (optional)"
									cols="30"
									rows="5"
								/>
								<div>
									<label>
										<input
											type="radio"
											name="visibility"
											value="onlyMe"
											checked={formData.visibility === "onlyMe"}
											onChange={handleChange}
										/>
										Only for me
									</label>
									<label>
										<input
											type="radio"
											name="visibility"
											value="public"
											checked={formData.visibility === "public"}
											onChange={handleChange}
										/>
										Public
									</label>
								</div>
								{formData.visibility === "public" && (
									<input
										type="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										placeholder="Password (optional)"
									/>
								)}
								<button type="submit">Create team</button>
								<button
									onClick={() => {
										setDisplayCreateTeam(false);
										setFormData(initialFormData);
									}}
								>
									Cancel
								</button>
							</form>
						</div>
					</div>
				)}

				{displayCreateDailyTask && (
					<div>
						<div id="createForm">
							{formData.type === "create" ? (
								<form onSubmit={handelCreateDailyTask}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Task Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Task Details (optional)"
										cols="30"
										rows="5"
									/>
									<button type="submit">Add Daily Task</button>
									<button
										onClick={() => {
											setFormData(initialFormData);
											setDisplayCreateDailyTask(false);
										}}
									>
										Cancel
									</button>
								</form>
							) : (
								<form onSubmit={handelUpdateTask}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Task Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Task Details (optional)"
										cols="30"
										rows="5"
									/>
									<button type="submit">Update Task</button>
									<button
										onClick={() => {
											setFormData(initialFormData);
											setDisplayCreateDailyTask(false);
										}}
									>
										Cancel
									</button>
								</form>
							)}
						</div>
					</div>
				)}

				{displayCreateReminder && (
					<div>
						<div id="createForm">
							{formData.type === "create" ? (
								<form onSubmit={handelCreateReminder}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Team Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Team Details (optional)"
										cols="30"
										rows="5"
									/>
									<label htmlFor="deadline">Choose date & time</label>
									<input
										type="datetime-local"
										name="deadline"
										value={formData.deadline}
										onChange={handleChange}
									/>
									<button type="submit">Add Reminder</button>
									<button
										onClick={() => {
											setFormData(initialFormData);
											setDisplayCreateReminder(false);
										}}
									>
										Cancel
									</button>
								</form>
							) : (
								<form onSubmit={handelUpdateTask}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Team Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Team Details (optional)"
										cols="30"
										rows="5"
									/>
									<label htmlFor="deadline">Choose date & time</label>
									<input
										type="datetime-local"
										name="deadline"
										value={formData.deadline}
										onChange={handleChange}
									/>
									<button type="submit">Update Reminder</button>
									<button
										onClick={() => {
											setFormData(initialFormData);
											setDisplayCreateReminder(false);
										}}
									>
										Cancel
									</button>
								</form>
							)}
						</div>
					</div>
				)}

				{displayCreateTask && (
					<div>
						<div id="createForm">
							{formData.type === "create" ? (
								<form onSubmit={handelCreateTask}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Team Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Team Details (optional)"
										cols="30"
										rows="5"
									/>
									<label htmlFor="deadline">
										Choose deadline (if any)
									</label>
									<input
										type="datetime-local"
										name="deadline"
										value={formData.deadline}
										onChange={handleChange}
									/>
									<button type="submit">Add Task</button>
									<button
										onClick={() => {
											setDisplayCreateTask(false);
											setFormData(initialFormData);
										}}
									>
										Cancel
									</button>
								</form>
							) : (
								<form onSubmit={handelUpdateTask}>
									<input
										type="text"
										name="name"
										autoComplete="off"
										value={formData.name}
										onChange={handleChange}
										placeholder="Team Name (*)"
									/>
									<textarea
										name="details"
										value={formData.details}
										onChange={handleChange}
										placeholder="Team Details (optional)"
										cols="30"
										rows="5"
									/>

									<label htmlFor="deadline">
										Choose deadline (if any)
									</label>
									<input
										type="datetime-local"
										name="deadline"
										value={formData.deadline}
										onChange={handleChange}
									/>
									<button type="submit">Update Task</button>
									<button
										onClick={() => {
											setDisplayCreateTask(false);
											setFormData(initialFormData);
										}}
									>
										Cancel
									</button>
								</form>
							)}
						</div>
					</div>
				)}

				
			</div>
		</div>
	);
}

export default TravelList;
