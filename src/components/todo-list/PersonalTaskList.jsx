import React, { useState, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faArrowRightFromBracket,
	faUsers,
	faLock,
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

function PersonalList({ todoList, setTodoList, token, userId, notify }) {
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

		let teamId = todoList.personalList._id;

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

		let teamId = todoList.personalList._id;

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

		let teamId = todoList.personalList._id;

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
						let teamId = todoList.personalList._id;

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

		let teamId = todoList.personalList._id;

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
		<div id="category">
			<div>
				{todoList.personalList ? (
					<div>
            <section></section>
						<section id="tasks">
							<DailyTasks
								interpolateColor={interpolateColor}
								dailyTasks={todoList.personalList.dailyTasks}
								creatorId={todoList.personalList.createdBy.creatorId}
								userId={userId}
								notify={notify}
								updateTaskDone={updateTaskDone}
								handelDisplayUpdateTask={handelDisplayUpdateTask}
								handelDeleteTask={handelDeleteTask}
								setDisplayCreateDailyTask={setDisplayCreateDailyTask}
								timeConverter={timeConverter}
							/>
							<Reminder
								interpolateColor={interpolateColor}
								reminders={todoList.personalList.reminders}
								creatorId={todoList.personalList.createdBy.creatorId}
								userId={userId}
								deadlineConverter={deadlineConverter}
								handelDisplayUpdateTask={handelDisplayUpdateTask}
								handelDeleteTask={handelDeleteTask}
								setDisplayCreateReminder={setDisplayCreateReminder}
							/>

							<TeamUpdates
								updates={todoList.personalList.updates}
								creatorName={
									todoList.personalList.createdBy.creatorName
								}
                text="Personal Diary"
								createdAt={todoList.personalList.createdAt}
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
								tasks={todoList.personalList.tasks}
								creatorId={todoList.personalList.createdBy.creatorId}
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
								goals={todoList.personalList.goals}
								creatorId={todoList.personalList.createdBy.creatorId}
								teamId={todoList.personalList._id}
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
							<button>Create team</button>
						</div>
					</div>
				)}
			</div>

			<div>
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

export default PersonalList;
