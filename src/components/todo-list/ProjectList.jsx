import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faArrowRightFromBracket,
	faUsers,
	faLock,
	faCheck,
	faEllipsisVertical,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircle as circleRegular,
	faPenToSquare,
	faTrashCan,
	faSquare,
	faClock,
} from "@fortawesome/free-regular-svg-icons";
import { todoListRoutes } from "../../routes/todo-list.route";

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
const hourGlass = "assets/logo/hourGlass.png";
const clock = "assets/logo/clock.png";

const initialFormData = {
	id: "",
	name: "",
	details: "",
	visibility: "onlyMe",
	password: "",
	type: "create",
};

function ProjectList({ todoList, setTodoList, token, userId, notify }) {
	// const [projectList, setprojectList] = useState(projectListArray);
	// const [isAdmin, setIsAdmin] = useState(true);
	const [timeLeft, setTimeLeft] = useState();

	const [activeTeamId, setActiveTeamId] = useState(0);
	const [activeGoalId, setActiveGoalId] = useState(0);
	const [currentGoal, setCurrentGoal] = useState({
		task: "Project Beta planning",
		isDone: false,
		doneBy: "Jane Smith",
		time: "9:00 AM",
	});

	const [displayCreateTeam, setDisplayCreateTeam] = useState(false);
	const [displayCreateDailyTask, setDisplayCreateDailyTask] = useState(false);
	const [displayCreateReminder, setDisplayCreateReminder] = useState(false);
	const [displayCreateTask, setDisplayCreateTask] = useState(false);
	const [displayCreateGoal, setDisplayCreateGoal] = useState(false);
	const [displayAddStep, setDisplayAddStep] = useState(false);
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

		fetch(todoListRoutes.addTeamWork, {
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
				// setProgress(100);
				// setIsProgress(false);
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

		let teamId = todoList.projectList[activeTeamId]._id;

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

		let teamId = todoList.projectList[activeTeamId]._id;

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

		let teamId = todoList.projectList[activeTeamId]._id;

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

	const handelCreateGoal = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		if (!formData.finalGoal) {
			notify("Please enter final goal", "warning");
			return;
		}

		const newGoal = {
			name: formData.name,
			details: formData.details,
			deadline: formData.deadline,
			finalGoal: formData.finalGoal,
		};

		let teamId = todoList.projectList[activeTeamId]._id;

		fetch(`${todoListRoutes.createGoal}${teamId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(newGoal),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayCreateGoal(false);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelAddStep = (e) => {
		e.preventDefault();

		if (!formData.name) {
			notify("Please enter a name", "warning");
			return;
		}

		let body = {
			steps: [
				{
					name: formData.name,
					details: formData.details,
					deadline: formData.deadline,
				},
			],
		};
		console.log(body);

		let goalId = todoList.projectList[activeTeamId].goals[activeGoalId]._id;
		console.log(body, goalId);

		fetch(`${todoListRoutes.addStepsToGoal}${goalId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTodoList(res.todoList);
					setFormData(initialFormData);
					setDisplayAddStep(false);
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
		formData.type = "update";

		setDisplayCreateDailyTask(true);
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
					// onClick: () => alert("Click No"),
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

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const midnight = new Date();
			midnight.setHours(23, 59, 59, 999); // Set to the end of the current day
			const timeDifference = midnight.getTime() - now.getTime();

			const seconds = Math.floor((timeDifference / 1000) % 60);
			const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
			const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

			setTimeLeft(
				`${hours.toString().padStart(2, "0")}:${minutes
					.toString()
					.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
			);
		};

		calculateTimeLeft();

		const intervalId = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(intervalId);
	}, []);

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
			// If the date is not today, return the formatted date
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

	return (
		<div id="work">
			<div>
				{todoList.projectList.length > 0 ? (
					<div>
						<section>
							<div>
								<select
									name=""
									id="teams"
									value={activeTeamId}
									onChange={(e) => {
										setActiveTeamId(e.target.value);
										setActiveGoalId(0);
									}}
								>
									{todoList.projectList.map((team, index) => (
										<option value={index} key={index}>
											{team.name}
										</option>
									))}
									<option value="create">Add More Team</option>
								</select>
								{activeTeamId !== "create" &&
								todoList.projectList[activeTeamId].isPublic ? (
									<div
										style={{ display: "flex", alignItems: "center" }}
									>
										<div id="faIcon">
											<FontAwesomeIcon icon={faUsers} size="lg" />
											<span>Public</span>
										</div>
										<p style={{ fontSize: "20px" }}>
											{todoList.projectList[activeTeamId].allMembers
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
							todoList.projectList[activeTeamId].createdBy.creatorId ===
								userId ? (
								<div id="faIcon">
									<FontAwesomeIcon icon={faTrash} size="xl" />{" "}
									<span>Delete Team</span>
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
								<section>
									{todoList.projectList[activeTeamId].allMembers.map(
										(member) => (
											<div key={member.userId}>
												{member.userName}
											</div>
										)
									)}
									{todoList.projectList[activeTeamId].createdBy
										.creatorId === userId && (
										<button className="explore-btn">
											Add Team member
										</button>
									)}
								</section>
								<section id="tasks">
									<aside>
										<div>
											<p>Daily Tasks</p>
											<p
												style={{
													color: `${interpolateColor(50)}`,
												}}
											>
												<img
													src={hourGlass}
													id="rotate"
													alt=""
													style={{
														width: "18px",
														marginRight: "5px",
													}}
												/>
												{timeLeft}
											</p>
										</div>
										{todoList.projectList[activeTeamId].dailyTasks
											.length > 0 ? (
											<div>
												{todoList.projectList[
													activeTeamId
												].dailyTasks.map((task, index) => (
													<div key={index}>
														<div>
															{task.done.isDone ? (
																<div
																	style={{
																		position: "relative",
																	}}
																	onClick={() => {
																		if (
																			todoList.projectList[
																				activeTeamId
																			] &&
																			todoList.projectList[
																				activeTeamId
																			].createdBy
																				.creatorId ===
																				userId
																		) {
																			updateTaskDone(
																				task._id
																			);
																		} else {
																			notify(
																				`Task already done by ${task.done.doneBy.userName}`,
																				"warning"
																			);
																		}
																	}}
																>
																	<FontAwesomeIcon
																		icon={faCheck}
																		style={{
																			color: "#1aff66",
																			zIndex: 1,
																			position: "absolute",
																			top: "-5px",
																			left: "-2px",
																		}}
																		size="xl"
																	/>
																	<FontAwesomeIcon
																		icon={faSquare}
																		size="sm"
																	/>
																</div>
															) : (
																// <input
																// 	type="checkbox"
																// 	onChange={() =>
																// 		handelWorkDone("dailyTasks", index)
																// 	}
																// />
																<FontAwesomeIcon
																	icon={faSquare}
																	size="sm"
																	onClick={() =>
																		updateTaskDone(task._id)
																	}
																/>
															)}
															<p>
																{task.name}{" "}
																{task.done.isDone && (
																	<span>
																		<span> by </span>{" "}
																		<span className="special">
																			{" "}
																			{
																				task.done.doneBy
																					.userName
																			}
																		</span>
																		<br />
																		<span> at </span>{" "}
																		<span className="special">
																			{" "}
																			{timeConverter(
																				task.done.time
																			)}
																		</span>
																	</span>
																)}
															</p>
														</div>
														{todoList.projectList[activeTeamId]
															.createdBy.creatorId ===
															userId && (
															<div className="edit-delete">
																<p>
																	<FontAwesomeIcon
																		icon={faEllipsisVertical}
																	/>
																</p>
																<div>
																	<p
																		onClick={() =>
																			handelDisplayUpdateTask(
																				task
																			)
																		}
																	>
																		<FontAwesomeIcon
																			icon={faPenToSquare}
																		/>{" "}
																		edit
																	</p>
																	<p
																		onClick={() =>
																			handelDeleteTask(
																				task._id
																			)
																		}
																	>
																		<FontAwesomeIcon
																			icon={faTrashCan}
																		/>{" "}
																		delete
																	</p>
																</div>
															</div>
														)}
													</div>
												))}
												{todoList.projectList[activeTeamId].createdBy
													.creatorId === userId && (
													<button
														className="explore-btn"
														onClick={() =>
															setDisplayCreateDailyTask(true)
														}
													>
														Add more task
													</button>
												)}
											</div>
										) : (
											<div id="inspire">
												<p>Consistency is the key</p>
												<button
													onClick={() =>
														setDisplayCreateDailyTask(true)
													}
												>
													Add Task
												</button>
											</div>
										)}
									</aside>
									<aside>
										<div>
											<p>Reminder</p>
											{todoList.projectList[activeTeamId].reminders
												.length > 0 && (
												<p
													style={{
														color: `${interpolateColor(80)}`,
													}}
												>
													<img
														src={hourGlass}
														id="rotate"
														alt=""
														style={{
															width: "18px",
															marginRight: "5px",
														}}
													/>
													{deadlineConverter(
														todoList.projectList[activeTeamId]
															.reminders[0].deadline
													)}
												</p>
											)}
										</div>

										{todoList.projectList[activeTeamId].reminders
											.length > 0 ? (
											<div>
												{todoList.projectList[
													activeTeamId
												].reminders.map((task, index) => (
													<div key={index}>
														<div>
															{task.done.isDone ? (
																<div
																	style={{
																		position: "relative",
																	}}
																>
																	<FontAwesomeIcon
																		icon={faCheck}
																		style={{
																			color: "#1aff66",
																			zIndex: 1,
																			position: "absolute",
																			top: "-5px",
																			left: "-2px",
																		}}
																		size="xl"
																	/>
																	<FontAwesomeIcon
																		icon={faSquare}
																		size="sm"
																	/>
																</div>
															) : (
																// <input
																// 	type="checkbox"
																// 	onChange={() =>
																// 		handelWorkDone("dailyTasks", index)
																// 	}
																// />
																<FontAwesomeIcon
																	icon={faClock}
																	size="sm"
																	id="rotate"
																/>
															)}
															<p>
																{task.name}{" "}
																{/* {task.done.isDone && (
																		<span>
																			<span> by </span>{" "}
																			<span className="special">
																				{" "}
																				{task.done.doneBy.userName}
																			</span>
																			<br />
																			<span> at </span>{" "}
																			<span className="special">
																				{" "}
																				{timeConverter(task.done.time)}
																			</span>
																		</span>
																	)} */}
															</p>
														</div>
														{todoList.projectList[activeTeamId]
															.createdBy.creatorId ===
															userId && (
															<div className="edit-delete">
																<p>
																	<FontAwesomeIcon
																		icon={faEllipsisVertical}
																	/>
																</p>
																<div>
																	<p
																		onClick={() =>
																			handelDisplayUpdateTask(
																				task
																			)
																		}
																	>
																		<FontAwesomeIcon
																			icon={faPenToSquare}
																		/>{" "}
																		edit
																	</p>
																	<p
																		onClick={() =>
																			handelDeleteTask(
																				task._id
																			)
																		}
																	>
																		<FontAwesomeIcon
																			icon={faTrashCan}
																		/>{" "}
																		delete
																	</p>
																</div>
															</div>
														)}
													</div>
												))}
												{todoList.projectList[activeTeamId].createdBy
													.creatorId === userId && (
													<button
														className="explore-btn"
														onClick={() =>
															setDisplayCreateReminder(true)
														}
													>
														Add reminder
													</button>
												)}
											</div>
										) : (
											<div id="inspire">
												<p>
													Punctuality is the politeness of <br />{" "}
													kings and queens.
												</p>
												<button
													onClick={() =>
														setDisplayCreateReminder(true)
													}
												>
													Add Reminder
												</button>
											</div>
										)}
									</aside>
									<aside>
										<div>
											{todoList.projectList[activeTeamId].createdBy
												.creatorId === userId ? (
												<p>Your tasks</p>
											) : (
												<p>Assigned Tasks to you</p>
											)}
											{todoList.projectList[activeTeamId].tasks.length >
												0 &&
												todoList.projectList[activeTeamId].tasks[0]
													.deadline && (
													<p
														style={{
															color: `${interpolateColor(80)}`,
														}}
													>
														<img
															src={hourGlass}
															id="rotate"
															alt=""
															style={{
																width: "18px",
																marginRight: "5px",
															}}
														/>
														{deadlineConverter(
															todoList.projectList[activeTeamId]
																.tasks[0].deadline
														)}
													</p>
												)}
										</div>

										{todoList.projectList[activeTeamId].tasks.length >
										0 ? (
											<div>
												{todoList.projectList[activeTeamId].tasks.map(
													(task, index) => (
														<div key={index}>
															<div>
																{task.done.isDone ? (
																	<div
																		style={{
																			position: "relative",
																		}}
																		onClick={() => {
																			if (
																				todoList.projectList[
																					activeTeamId
																				] &&
																				todoList.projectList[
																					activeTeamId
																				].createdBy
																					.creatorId ===
																					userId
																			) {
																				updateTaskDone(
																					task._id
																				);
																			} else {
																				notify(
																					`Task already done by ${task.done.doneBy.userName}`,
																					"warning"
																				);
																			}
																		}}
																	>
																		<FontAwesomeIcon
																			icon={faCheck}
																			style={{
																				color: "#1aff66",
																				zIndex: 1,
																				position:
																					"absolute",
																				top: "-5px",
																				left: "-2px",
																			}}
																			size="xl"
																		/>
																		<FontAwesomeIcon
																			icon={faSquare}
																			size="sm"
																		/>
																	</div>
																) : (
																	// <input
																	// 	type="checkbox"
																	// 	onChange={() =>
																	// 		handelWorkDone("dailyTasks", index)
																	// 	}
																	// />
																	<FontAwesomeIcon
																		icon={faSquare}
																		size="sm"
																		onClick={() =>
																			updateTaskDone(
																				task._id
																			)
																		}
																	/>
																)}
																<p>
																	{task.name}{" "}
																	{task.done.isDone && (
																		<span>
																			<span> by </span>{" "}
																			<span className="special">
																				{" "}
																				{
																					task.done.doneBy
																						.userName
																				}
																			</span>
																			<br />
																			<span> at </span>{" "}
																			<span className="special">
																				{" "}
																				{timeConverter(
																					task.done.time
																				)}
																			</span>
																		</span>
																	)}
																</p>
															</div>
															{todoList.projectList[activeTeamId]
																.createdBy.creatorId ===
																userId && (
																<div className="edit-delete">
																	<p>
																		<FontAwesomeIcon
																			icon={
																				faEllipsisVertical
																			}
																		/>
																	</p>
																	<div>
																		<p
																			onClick={() =>
																				handelDisplayUpdateTask(
																					task
																				)
																			}
																		>
																			<FontAwesomeIcon
																				icon={faPenToSquare}
																			/>{" "}
																			edit
																		</p>
																		<p
																			onClick={() =>
																				handelDeleteTask(
																					task._id
																				)
																			}
																		>
																			<FontAwesomeIcon
																				icon={faTrashCan}
																			/>{" "}
																			delete
																		</p>
																	</div>
																</div>
															)}
														</div>
													)
												)}
												{todoList.projectList[activeTeamId].createdBy
													.creatorId === userId && (
													<button
														className="explore-btn"
														onClick={() =>
															setDisplayCreateTask(true)
														}
													>
														Add Task
													</button>
												)}
											</div>
										) : (
											<div id="inspire">
												<p>
													Without a deadline, your work is never
													over.
												</p>
												<button
													onClick={() =>
														setDisplayCreateTask(true)
													}
												>
													Add Task
												</button>
											</div>
										)}
									</aside>
								</section>
								<section id="goals-section">
									{todoList.projectList[activeTeamId].goals.length > 0 ? (
										<div>
											<div>
												<select
													name=""
													id="goals"
													value={activeGoalId}
													onChange={(e) =>
														setActiveGoalId(e.target.value)
													}
												>
													{todoList.projectList[
														activeTeamId
													].goals.map((goal, index) => (
														<option value={index} key={index}>
															{goal.name}
														</option>
													))}
													<option value="create">
														Add more Goal
													</option>
												</select>

												{activeGoalId !== "create" && (
													<p
														style={{
															color: `${interpolateColor(50)}`,
														}}
													>
														<img
															src={hourGlass}
															id="rotate"
															alt=""
															style={{
																width: "18px",
																marginRight: "5px",
															}}
														/>
														{deadlineConverter(
															todoList.projectList[activeTeamId]
																.goals[activeGoalId].deadline
														)}
													</p>
												)}
											</div>
											{activeGoalId !== "create" ? (
												<div
													style={{
														display: "flex",
														justifyContent: "space-between",
													}}
												>
													<div
														id="goal"
														style={{
															display: "grid",
															gridTemplateColumns: `repeat(${
																todoList.projectList[activeTeamId]
																	.goals[activeGoalId].steps
																	.length + 2
															},1fr)`,
														}}
													>
														<div>
															<div>
																<p>Started</p>
																<FontAwesomeIcon
																	icon={faCircle}
																	style={{
																		color: "#1aff66",
																	}}
																/>
															</div>
															<hr
																style={{
																	backgroundColor: "#1aff66",
																}}
															/>
															<p>
																By{" "}
																<span>
																	{
																		todoList.projectList[
																			activeTeamId
																		].goals[activeGoalId]
																			.createdBy.creatorName
																	}
																</span>
															</p>
														</div>
														{todoList.projectList[
															activeTeamId
														].goals[activeGoalId].steps.map(
															(task, index) => {
																let isCurrentGoal = false;

																if (
																	(index === 0 &&
																		!task.done.isDone) ||
																	(index > 0 &&
																		!task.done.isDone &&
																		todoList.projectList[
																			activeTeamId
																		].goals[activeGoalId]
																			.steps[index - 1].done
																			.isDone)
																) {
																	isCurrentGoal = true;
																}
																return (
																	<div
																		key={index}
																		style={{
																			width: "300px",
																			height: "max-content",
																		}}
																	>
																		{task.done.isDone ? (
																			<div>
																				<p>
																					Done by{" "}
																					<span>
																						{
																							task.done
																								.doneBy
																								.userName
																						}
																					</span>{" "}
																					<br />
																					at{" "}
																					<span>
																						{timeConverter(
																							task.done
																								.time
																						)}
																					</span>
																				</p>
																				<FontAwesomeIcon
																					icon={faCircle}
																					style={{
																						color: "#1aff66",
																					}}
																				/>
																			</div>
																		) : isCurrentGoal ? (
																			<div>
																				<p>Current Goal</p>
																				<FontAwesomeIcon
																					icon={faCircle}
																					style={{
																						color: "#1aff66",
																					}}
																				/>
																			</div>
																		) : (
																			<div>
																				<p>Upcomming</p>
																				<FontAwesomeIcon
																					icon={
																						circleRegular
																					}
																				/>
																			</div>
																		)}

																		{task.done.isDone ? (
																			<hr
																				style={{
																					backgroundColor:
																						"#1aff66",
																				}}
																			/>
																		) : (
																			<hr />
																		)}
																		<p
																			style={{
																				fontSize: "20px",
																			}}
																		>
																			{task.name}
																		</p>

																		{task.deadline && (
																			<p>
																				{task.deadline
																					.split("T")
																					.join(":")}
																			</p>
																		)}
																		<p>{task.details}</p>
																		{isCurrentGoal && (
																			<button
																				onClick={() =>
																					updateTaskDone(
																						task._id
																					)
																				}
																				className="done-btn"
																			>
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
																						d="m4.5 12.75 6 6 9-13.5"
																					/>
																				</svg>

																				<div className="text">
																					Step complete
																				</div>
																			</button>
																		)}
																	</div>
																);
															}
														)}
														<div>
															<div>
																<p>
																	{
																		todoList.projectList[
																			activeTeamId
																		].goals[activeGoalId]
																			.finalGoal
																	}
																</p>
																<FontAwesomeIcon
																	icon={faCircle}
																	style={{
																		color: "#1aff66",
																	}}
																/>
															</div>
															<p></p>
														</div>
													</div>
													<aside id="current-goal">
														<div>
															<p>Goal updates</p>
															<p
																style={{
																	color: `${interpolateColor(
																		50
																	)}`,
																}}
															>
																<img
																	src={hourGlass}
																	id="rotate"
																	alt=""
																	style={{
																		width: "18px",
																		marginRight: "5px",
																	}}
																/>
																{timeLeft}
															</p>
														</div>
														<div>
															{currentGoal.task}
															{todoList.projectList[activeTeamId]
																.createdBy.creatorId ===
																userId && (
																<button
																	className="explore-btn"
																	onClick={() =>
																		setDisplayAddStep(true)
																	}
																>
																	Add step
																</button>
															)}
														</div>
													</aside>
												</div>
											) : (
												<div id="inspire">
													<h2>
														No compass? Find your North Star.
														Ignite a spark, even a tiny one, and
														let it guide your next adventure.
													</h2>
													<p>
														Life's canvas awaits your masterpiece.
														Don't wait for grand schemes. Dip your
														brush in curiosity, explore the hues
														of possibility, and watch a vibrant
														purpose emerge, one unexpected stroke
														at a time.
													</p>
													<button
														onClick={() =>
															setDisplayCreateGoal(true)
														}
													>
														Add Goal
													</button>
												</div>
											)}
										</div>
									) : (
										<div id="inspire">
											<h2>
												No compass? Find your North Star. Ignite a
												spark, even a tiny one, and let it guide
												your next adventure.
											</h2>
											<p>
												Life's canvas awaits your masterpiece. Don't
												wait for grand schemes. Dip your brush in
												curiosity, explore the hues of possibility,
												and watch a vibrant purpose emerge, one
												unexpected stroke at a time.
											</p>
											<button
												onClick={() => setDisplayCreateGoal(true)}
											>
												Add Goal
											</button>
										</div>
									)}
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
						</div>
					</div>
				)}

				{displayCreateTask && (
					<div>
						<div id="createForm">
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
						</div>
					</div>
				)}

				{displayCreateGoal && (
					<div>
						<div id="createForm">
							<form onSubmit={handelCreateGoal}>
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
								<input
									type="text"
									name="finalGoal"
									autoComplete="off"
									value={formData.finalGoal}
									onChange={handleChange}
									placeholder="Final Goal (*)"
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

								<button type="submit">Add Goal</button>
								<button
									onClick={() => {
										setDisplayCreateGoal(false);
										setFormData(initialFormData);
									}}
								>
									Cancel
								</button>
							</form>
						</div>
					</div>
				)}

				{displayAddStep && (
					<div>
						<div id="createForm">
							<form onSubmit={handelAddStep}>
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

								<button type="submit">Add Goal</button>
								<button
									onClick={() => {
										setDisplayAddStep(false);
										setFormData(initialFormData);
									}}
								>
									Cancel
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectList;
