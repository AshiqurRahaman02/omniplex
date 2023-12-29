import React, { useState, useEffect, useRef } from "react";
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
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircle as circleRegular,
	faPenToSquare,
	faTrashCan,
	faSquare,
	faClock,
	faXmarkCircle,
	faComments,
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
	message: "",
	visibility: "onlyMe",
	password: "",
	type: "create",
	deadline: "",
	assignedTo: [],
};

const sampleUpdates = [
	{
		userId: "123",
		userName: "JohnDoe",
		message: "Added a new feature to the application.",
		updateType: "update",
		time: "2023-12-28T15:39:44.844Z",
	},
	{
		userId: "456",
		userName: "JaneSmith",
		message: "Received a new message from the client.",
		updateType: "message",
		time: "2023-12-28T16:45:20.123Z",
	},
	{
		userId: "789",
		userName: "AliceJohnson",
		message: "Deployed the latest version of the mobile app.",
		updateType: "update",
		time: "2023-12-29T09:30:00.000Z",
	},
	{
		userId: "987",
		userName: "BobWilliams",
		message: "Important message from the server administrator.",
		updateType: "message",
		time: "2023-12-29T14:20:30.555Z",
	},
	{
		userId: "654",
		userName: "EvaBrown",
		message: "Updated the UI components with a new design.",
		updateType: "update",
		time: "2023-12-30T08:00:00.000Z",
	},
	{
		userId: "321",
		userName: "SamuelLee",
		message: "You have a new message from the support team.",
		updateType: "message",
		time: "2023-12-30T12:15:10.678Z",
	},
	{
		userId: "789",
		userName: "SophieTaylor",
		message: "Resolved compatibility issues with the latest browsers.",
		updateType: "update",
		time: "2023-12-31T09:00:00.000Z",
	},
	{
		userId: "123",
		userName: "JohnDoe",
		message: "Added a new feature to the application.",
		updateType: "update",
		time: "2023-12-28T15:39:44.844Z",
	},
	{
		userId: "456",
		userName: "JaneSmith",
		message: "Received a new message from the client.",
		updateType: "message",
		time: "2023-12-28T16:45:20.123Z",
	},
	{
		userId: "789",
		userName: "AliceJohnson",
		message: "Deployed the latest version of the mobile app.",
		updateType: "update",
		time: "2023-12-29T09:30:00.000Z",
	},
	{
		userId: "987",
		userName: "BobWilliams",
		message: "Important message from the server administrator.",
		updateType: "message",
		time: "2023-12-29T14:20:30.555Z",
	},
	{
		userId: "654",
		userName: "EvaBrown",
		message: "Updated the UI components with a new design.",
		updateType: "update",
		time: "2023-12-30T08:00:00.000Z",
	},
	{
		userId: "321",
		userName: "SamuelLee",
		message: "You have a new message from the support team.",
		updateType: "message",
		time: "2023-12-30T12:15:10.678Z",
	},
	{
		userId: "789",
		userName: "SophieTaylor",
		message: "Resolved compatibility issues with the latest browsers.",
		updateType: "update",
		time: "2023-12-31T09:00:00.000Z",
	},
	{
		userId: "123",
		userName: "JohnDoe",
		message: "Added a new feature to the application.",
		updateType: "update",
		time: "2023-12-28T15:39:44.844Z",
	},
	{
		userId: "456",
		userName: "JaneSmith",
		message: "Received a new message from the client.",
		updateType: "message",
		time: "2023-12-28T16:45:20.123Z",
	},
	{
		userId: "789",
		userName: "AliceJohnson",
		message: "Deployed the latest version of the mobile app.",
		updateType: "update",
		time: "2023-12-29T09:30:00.000Z",
	},
	{
		userId: "987",
		userName: "BobWilliams",
		message: "Important message from the server administrator.",
		updateType: "message",
		time: "2023-12-29T14:20:30.555Z",
	},
	{
		userId: "654",
		userName: "EvaBrown",
		message: "Updated the UI components with a new design.",
		updateType: "update",
		time: "2023-12-30T08:00:00.000Z",
	},
	{
		userId: "321",
		userName: "SamuelLee",
		message: "You have a new message from the support team.",
		updateType: "message",
		time: "2023-12-30T12:15:10.678Z",
	},
	{
		userId: "789",
		userName: "SophieTaylor",
		message: "Resolved compatibility issues with the latest browsers.",
		updateType: "update",
		time: "2023-12-31T09:00:00.000Z",
	},
	{
		userId: "123",
		userName: "JohnDoe",
		message: "Added a new feature to the application.",
		updateType: "update",
		time: "2023-12-28T15:39:44.844Z",
	},
	{
		userId: "456",
		userName: "JaneSmith",
		message: "Received a new message from the client.",
		updateType: "message",
		time: "2023-12-28T16:45:20.123Z",
	},
	{
		userId: "789",
		userName: "AliceJohnson",
		message: "Deployed the latest version of the mobile app.",
		updateType: "update",
		time: "2023-12-29T09:30:00.000Z",
	},
	{
		userId: "987",
		userName: "BobWilliams",
		message: "Important message from the server administrator.",
		updateType: "message",
		time: "2023-12-29T14:20:30.555Z",
	},
	{
		userId: "654",
		userName: "EvaBrown",
		message: "Updated the UI components with a new design.",
		updateType: "update",
		time: "2023-12-30T08:00:00.000Z",
	},
	{
		userId: "321",
		userName: "SamuelLee",
		message: "You have a new message from the support team.",
		updateType: "message",
		time: "2023-12-30T12:15:10.678Z",
	},
	{
		userId: "789",
		userName: "SophieTaylor",
		message: "Resolved compatibility issues with the latest browsers.",
		updateType: "update",
		time: "2023-12-31T09:00:00.000Z",
	},
];

console.log(sampleUpdates);

function WorkList({ todoList, setTodoList, token, userId, notify }) {
	const [timeLeft, setTimeLeft] = useState();

	const [activeTeamId, setActiveTeamId] = useState(0);
	const [activeGoalId, setActiveGoalId] = useState(0);

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

		let teamId = todoList.workList[activeTeamId]._id;

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

		let teamId = todoList.workList[activeTeamId]._id;

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

		let teamId = todoList.workList[activeTeamId]._id;

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

		let teamId = todoList.workList[activeTeamId]._id;

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

		let goalId = todoList.workList[activeTeamId].goals[activeGoalId]._id;
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

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const midnight = new Date();
			midnight.setHours(23, 59, 59, 999);
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

	const [inputText, setInputText] = useState("");
	const [emails, setEmails] = useState([]);

	const handleInput = (event) => {
		const text = event.target.innerText;
		setInputText(text);
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
		const newText = filteredEmails.join(" ");
		setInputText(newText);
	};

	const addMembers = () => {
		confirmAlert({
			title: "Confirm to add",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						let teamId = todoList.workList[activeTeamId]._id;

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

		let teamId = todoList.workList[activeTeamId]._id;

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

	return (
		<div id="work">
			<div>
				{todoList.workList.length > 0 ? (
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
									{todoList.workList.map((team, index) => (
										<option value={index} key={index}>
											{team.name}
										</option>
									))}
									<option value="create">Add More Team</option>
								</select>
								{activeTeamId !== "create" &&
								todoList.workList[activeTeamId].isPublic ? (
									<div
										style={{ display: "flex", alignItems: "center" }}
									>
										<div id="faIcon">
											<FontAwesomeIcon icon={faUsers} size="lg" />
											<span>Public</span>
										</div>
										<p style={{ fontSize: "20px" }}>
											{todoList.workList[activeTeamId].allMembers
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
							todoList.workList[activeTeamId].createdBy.creatorId ===
								userId ? (
								<div style={{
									display: "flex",
									justifyContent: "space-between",
								}}>
									<div id="faIcon">
										<FontAwesomeIcon icon={faPenToSquare} size="xl" />{" "}
										<span>Edit Team</span>
									</div>
									<div id="faIcon">
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
											{todoList.workList[activeTeamId].createdBy
												.creatorId !== userId && (
												<div
													key={
														todoList.workList[activeTeamId]
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
															todoList.workList[activeTeamId]
																.createdBy.creatorName
														}
													</p>

													{todoList.workList[activeTeamId]
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

											{todoList.workList[activeTeamId].allMembers
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

														{todoList.workList[activeTeamId]
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
									{todoList.workList[activeTeamId].createdBy
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
										{todoList.workList[activeTeamId].dailyTasks
											.length > 0 ? (
											<div>
												{todoList.workList[
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
																			todoList.workList[
																				activeTeamId
																			] &&
																			todoList.workList[
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
														{todoList.workList[activeTeamId]
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
												{todoList.workList[activeTeamId].createdBy
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
											{todoList.workList[activeTeamId].reminders
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
														todoList.workList[activeTeamId]
															.reminders[0].deadline
													)}
												</p>
											)}
										</div>

										{todoList.workList[activeTeamId].reminders
											.length > 0 ? (
											<div>
												{todoList.workList[
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
														{todoList.workList[activeTeamId]
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
												{todoList.workList[activeTeamId].createdBy
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
									<aside id="updates">
										<div>
											<p>Team updates</p>
											<p>
												<FontAwesomeIcon icon={faComments} />
											</p>
										</div>
										<main>
											<p>
												Team created by{" "}
												{
													todoList.workList[activeTeamId].createdBy
														.creatorName
												}
												<br />
												{timeConverter(
													todoList.workList[activeTeamId].createdAt
												)}{" "}
											</p>
											{todoList.workList[activeTeamId].updates
												.length > 0 &&
												todoList.workList[activeTeamId].updates.map(
													(update) => {
														return update.updateType ===
															"update" ? (
															update.message === "joined" ? (
																<p>
																	{update.userName}{" "}
																	{update.message}
																</p>
															) : (
																<p>{update.message}</p>
															)
														) : update.userId === userId ? (
															<div id="own-update">
																<p>{update.message}</p>
																<span>
																	{timeConverter(update.time)}
																</span>
															</div>
														) : (
															<div>
																<span>{update.userName}</span>
																<p>{update.message}</p>
																<span>
																	{timeConverter(update.time)}
																</span>
															</div>
														);
													}
												)}
										</main>
										<div>
											<input
												type="text"
												name="message"
												value={formData.message}
												onChange={handleChange}
											/>
											<div id="faIcon" onClick={sendMessage}>
												<FontAwesomeIcon
													icon={faPaperPlane}
													size="xl"
												/>
												<span>send</span>
											</div>
										</div>
									</aside>
								</section>
								<section id="task-goal">
									<aside>
										<div>
											{todoList.workList[activeTeamId].createdBy
												.creatorId === userId ? (
												<p>Your tasks</p>
											) : (
												<p>Assigned Tasks to you</p>
											)}
											{todoList.workList[activeTeamId].tasks.length >
												0 &&
												todoList.workList[activeTeamId].tasks[0]
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
															todoList.workList[activeTeamId]
																.tasks[0].deadline
														)}
													</p>
												)}
										</div>

										{todoList.workList[activeTeamId].tasks.length >
										0 ? (
											<div>
												{todoList.workList[
													activeTeamId
												].tasks.filter(
													(task) =>
														task.createdBy.creatorId === userId ||
														task.assignedTo.includes(userId)
												).length > 0 ? (
													todoList.workList[activeTeamId].tasks
														.filter(
															(task) =>
																task.createdBy.creatorId ===
																	userId ||
																task.assignedTo.includes(userId)
														)
														.map((task, index) => (
															<div key={index}>
																<div>
																	{task.done.isDone ? (
																		<div
																			style={{
																				position:
																					"relative",
																			}}
																			onClick={() => {
																				if (
																					todoList
																						.workList[
																						activeTeamId
																					] &&
																					todoList
																						.workList[
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
																						task.done
																							.doneBy
																							.userName
																					}
																				</span>
																				<br />
																				<span>
																					{" "}
																					at{" "}
																				</span>{" "}
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
																{todoList.workList[activeTeamId]
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
																					icon={
																						faPenToSquare
																					}
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
														))
												) : (
													<p>No task</p>
												)}

												{todoList.workList[activeTeamId].createdBy
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
									<aside id="goals-section">
										{todoList.workList[activeTeamId].goals.length >
										0 ? (
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
														{todoList.workList[
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
															{deadlineConverter(
																todoList.workList[activeTeamId]
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
																	todoList.workList[
																		activeTeamId
																	].goals[activeGoalId].steps
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
																		backgroundColor:
																			"#1aff66",
																	}}
																/>
																<p>
																	By{" "}
																	<span>
																		{
																			todoList.workList[
																				activeTeamId
																			].goals[activeGoalId]
																				.createdBy
																				.creatorName
																		}
																	</span>
																</p>
															</div>
															{todoList.workList[
																activeTeamId
															].goals[activeGoalId].steps.map(
																(task, index) => {
																	let isCurrentGoal = false;

																	if (
																		(index === 0 &&
																			!task.done.isDone) ||
																		(index > 0 &&
																			!task.done.isDone &&
																			todoList.workList[
																				activeTeamId
																			].goals[activeGoalId]
																				.steps[index - 1]
																				.done.isDone)
																	) {
																		isCurrentGoal = true;
																	}
																	return (
																		<div
																			key={index}
																			style={{
																				width: "300px",
																				height:
																					"max-content",
																			}}
																		>
																			{task.done.isDone ? (
																				<div>
																					<p>
																						Done by{" "}
																						<span>
																							{
																								task
																									.done
																									.doneBy
																									.userName
																							}
																						</span>{" "}
																						<br />
																						at{" "}
																						<span>
																							{timeConverter(
																								task
																									.done
																									.time
																							)}
																						</span>
																					</p>
																					<FontAwesomeIcon
																						icon={
																							faCircle
																						}
																						style={{
																							color: "#1aff66",
																						}}
																					/>
																				</div>
																			) : isCurrentGoal ? (
																				<div>
																					<p>
																						Current Goal
																					</p>
																					<FontAwesomeIcon
																						icon={
																							faCircle
																						}
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
																			todoList.workList[
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
													</div>
												) : (
													<div id="inspire">
														<h2>
															No compass? Find your North Star.
															Ignite a spark, even a tiny one,
															and let it guide your next
															adventure.
														</h2>
														<p>
															Life's canvas awaits your
															masterpiece. Don't wait for grand
															schemes. Dip your brush in
															curiosity, explore the hues of
															possibility, and watch a vibrant
															purpose emerge, one unexpected
															stroke at a time.
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
													No compass? Find your North Star. Ignite
													a spark, even a tiny one, and let it
													guide your next adventure.
												</h2>
												<p>
													Life's canvas awaits your masterpiece.
													Don't wait for grand schemes. Dip your
													brush in curiosity, explore the hues of
													possibility, and watch a vibrant purpose
													emerge, one unexpected stroke at a time.
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
									</aside>
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

export default WorkList;
