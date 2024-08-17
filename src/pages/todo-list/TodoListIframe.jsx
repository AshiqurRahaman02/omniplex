import React, { useEffect, useState } from "react";
import SignIn from "../../components/omniplex/SignIn";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todoListRoutes } from "../../routes/todo-list.route";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import { confirmAlert } from "react-confirm-alert";

const notify = (message, type) => {
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

function TodoListIframe() {
	const [token, setToken] = useState("");
	const [loading, setLoading] = useState(true);

	const [tasksList, setTasksList] = useState({});

	const [activeList, setActiveList] = useState("work");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setToken(token);

			getTaskList(token);
		} else {
			let message = "Please Login first.";
			notify(message, "error");
			setLoading(false);
		}
	}, []);

	const getTaskList = (token) => {
		setLoading(true);
		fetch(`${todoListRoutes.getTaskList}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					setTasksList(res.taskList);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
			{token ? (
				<div id="signinForm" style={{ padding: "15px" }}>
					<div id="todolist-iframe">
						<div>
							<h2
								onClick={() =>
									setActiveList(activeList === "work" ? null : "work")
								}
								style={{}}
							>
								<span>Work List</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#000"
										style={{
											fill: "#333",
											height: "30px",
											width: "30px",
											transform: `rotate(${
												activeList === "work" ? "180deg" : "0deg"
											})`,
											transition: "transform 1s ease",
										}}
									>
										<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
									</svg>
								</span>
							</h2>
							{activeList === "work" && (
								<div>
									{tasksList.workList?.map((item) => (
										<List
											key={item._id}
											workItem={item}
											token={token}
											setTasksList={setTasksList}
											setLoading={setLoading}
										/>
									))}
								</div>
							)}
						</div>

						<div>
							<h2
								onClick={() =>
									setActiveList(
										activeList === "project" ? null : "project"
									)
								}
							>
								<span>Project List</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#000"
										style={{
											fill: "#333",
											height: "30px",
											width: "30px",
											transform: `rotate(${
												activeList === "project" ? "180deg" : "0deg"
											})`,
											transition: "transform 1s ease",
										}}
									>
										<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
									</svg>
								</span>
							</h2>
							{activeList === "project" && (
								<div>
									{tasksList.projectList?.map((item) => (
										<List
											key={item._id}
											workItem={item}
											token={token}
											setTasksList={setTasksList}
											setLoading={setLoading}
										/>
									))}
								</div>
							)}
						</div>

						<div>
							<h2
								onClick={() =>
									setActiveList(
										activeList === "hobbies" ? null : "hobbies"
									)
								}
							>
								<span>Hobbies List</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#000"
										style={{
											fill: "#333",
											height: "30px",
											width: "30px",
											transform: `rotate(${
												activeList === "hobbies" ? "180deg" : "0deg"
											})`,
											transition: "transform 1s ease",
										}}
									>
										<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
									</svg>
								</span>
							</h2>
							{activeList === "hobbies" && (
								<div>
									{tasksList.hobbiesList?.map((item) => (
										<List
											key={item._id}
											workItem={item}
											token={token}
											setTasksList={setTasksList}
											setLoading={setLoading}
										/>
									))}
								</div>
							)}
						</div>

						<div>
							<h2
								onClick={() =>
									setActiveList(
										activeList === "travel" ? null : "travel"
									)
								}
							>
								<span>Travel List</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#000"
										style={{
											fill: "#333",
											height: "30px",
											width: "30px",
											transform: `rotate(${
												activeList === "travel" ? "180deg" : "0deg"
											})`,
											transition: "transform 1s ease",
										}}
									>
										<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
									</svg>
								</span>
							</h2>
							{activeList === "travel" && (
								<div>
									{tasksList.travelList?.map((item) => (
										<List
											key={item._id}
											workItem={item}
											token={token}
											setTasksList={setTasksList}
											setLoading={setLoading}
										/>
									))}
								</div>
							)}
						</div>

						<div>
							<h2
								onClick={() =>
									setActiveList(
										activeList === "personal" ? null : "personal"
									)
								}
							>
								<span>Personal List</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#000"
										style={{
											fill: "#333",
											height: "30px",
											width: "30px",
											transform: `rotate(${
												activeList === "personal"
													? "180deg"
													: "0deg"
											})`,
											transition: "transform 1s ease",
										}}
									>
										<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
									</svg>
								</span>
							</h2>
							{activeList === "personal" && (
								<div>
									<List
										key={tasksList.personalList._id}
										workItem={tasksList.personalList}
										token={token}
										setTasksList={setTasksList}
										setLoading={setLoading}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			) : (
				<>
					<SignIn redirectUrl={"/todolist/iframe"} />
				</>
			)}

			{loading && (
				<div class="loader">
					{" "}
					<img src="/assets/images/Omniplex.png" alt="" /> <span></span>
				</div>
			)}
			<ToastContainer />
		</>
	);
}

const TaskList = ({ listType, items, token, setTasksList, setLoading }) => {
	if (listType === "Goals") {
		console.log(items);
	}
	const updateTaskDone = (id) => {
		confirmAlert({
			title: "Confirm to update task",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Confirm",
					onClick: () => {
						setLoading(true);
						fetch(`${todoListRoutes.updateTaskDone}${id}?type=taskList`, {
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
									setTasksList(res.taskList);
								}
							})
							.catch((err) => {
								console.log(err);
								notify(err.message, "error");
							})
							.finally(() => setLoading(false));
					},
				},
				{
					label: "Cancel",
					onClick: () => console.log("Click No"),
				},
			],
		});
	};

	return (
		<div>
			<h3>{listType}</h3>

			{listType === "Goals" ? (
				<>
					{items?.map((team, index) => (
						<>
							<div key={index}>
								<h4 id="task">{team.name}</h4>
								{team.steps?.length > 0 ? (
									<ul style={{ marginLeft: "10px" }}>
										{team.steps?.map((task, index) => (
											<div key={index}>
												<div id="task">
													{task.done?.isDone ? (
														<div
															style={{
																position: "relative",
																cursor: "pointer",
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
															style={{
																cursor: "pointer",
															}}
														/>
													)}
													<p>{task.name} </p>
												</div>
											</div>
										))}
									</ul>
								) : (
									<p style={{ marginLeft: "10px" }}>
										All steps completed
									</p>
								)}
							</div>
						</>
					))}
				</>
			) : (
				<ul>
					{items?.map((task, index) => (
						<div key={index}>
							<div id="task">
								{task.done?.isDone ? (
									<div
										style={{
											position: "relative",
											cursor: "pointer",
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
										<FontAwesomeIcon icon={faSquare} size="sm" />
									</div>
								) : (
									<FontAwesomeIcon
										icon={faSquare}
										size="sm"
										onClick={() => updateTaskDone(task._id)}
										style={{
											cursor: "pointer",
										}}
									/>
								)}
								<p>{task.name} </p>
							</div>
						</div>
					))}
				</ul>
			)}
		</div>
	);
};

const List = ({ workItem, token, setTasksList, setLoading }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "column",
			gap: "5px",
			padding: "0px 15px",
		}}
	>
		{workItem.dailyTasks?.length > 0 && (
			<TaskList
				listType="Daily Tasks"
				items={workItem.dailyTasks}
				token={token}
				setTasksList={setTasksList}
				setLoading={setLoading}
			/>
		)}
		{workItem.reminders?.length > 0 && (
			<TaskList
				listType="Reminders"
				items={workItem.reminders}
				token={token}
				setTasksList={setTasksList}
				setLoading={setLoading}
			/>
		)}

		{workItem.tasks?.length > 0 && (
			<TaskList
				listType="Tasks"
				items={workItem.tasks}
				token={token}
				setTasksList={setTasksList}
				setLoading={setLoading}
			/>
		)}

		{workItem.goals?.length > 0 && (
			<TaskList
				listType="Goals"
				items={workItem.goals}
				token={token}
				setTasksList={setTasksList}
				setLoading={setLoading}
			/>
		)}

		{workItem.dailyTasks?.length === 0 &&
			workItem.reminders?.length === 0 &&
			workItem.tasks?.length === 0 &&
			workItem.goals?.length === 0 && (
				<p>No pending task found for active Category</p>
			)}
	</div>
);

export default TodoListIframe;
