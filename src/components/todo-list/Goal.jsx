import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircle,
	faPenToSquare,
	faTrash,
	faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as circleRegular } from "@fortawesome/free-regular-svg-icons";
import { todoListRoutes } from "../../routes/todo-list.route";

const hourGlass = "assets/logo/hourGlass.png";

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

function Goal({
	interpolateColor,
	goals,
	creatorId,
	userId,
	token,
	teamId,
	notify,
	setTodoList,
	updateTaskDone,
	timeConverter,
	deadlineConverter,
	formData,
	setFormData,
	handleChange,
}) {
	const [activeGoalId, setActiveGoalId] = useState(0);
	const [displayCreateGoal, setDisplayCreateGoal] = useState(false);
	const [displayAddStep, setDisplayAddStep] = useState(false);

	const stepsRef = useRef();

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

		let goalId = goals[activeGoalId]._id;
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

	return (
		<aside id="goals-section">
			{goals.length > 0 ? (
				<div>
					<div>
						<div
							style={{
								display: "flex",
							}}
						>
							<select
								name=""
								id="goals"
								value={activeGoalId}
								onChange={(e) => setActiveGoalId(e.target.value)}
							>
								{goals.map((goal, index) => (
									<option value={index} key={index}>
										{goal.name}
									</option>
								))}
								<option value="create">Add more Goal</option>
							</select>

							<div id="faIcon" onClick={()=>setDisplayAddStep(true)}>
								<FontAwesomeIcon icon={faCirclePlus} style={{position:"relative",top:"-5px",left:"5px"}}/>{" "}
								<span>Add Step</span>
							</div>
						</div>

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
								{deadlineConverter(goals[activeGoalId].deadline)}
							</p>
						)}
						{creatorId === userId && (
								<div
									style={{
										display: "flex",
									}}
								>
									<div id="faIcon">
										<FontAwesomeIcon icon={faPenToSquare} />{" "}
										<span>Edit Team</span>
									</div>
									<div id="faIcon">
										<FontAwesomeIcon icon={faTrash} />{" "}
										<span>Delete Team</span>
									</div>
								</div>
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
										goals[activeGoalId].steps.length + 2
									},1fr)`,
								}}
								ref={stepsRef}
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
											{goals[activeGoalId].createdBy.creatorName}
										</span>
									</p>
								</div>
								{goals[activeGoalId].steps.map((task, index) => {
									let isCurrentGoal = false;

									if (
										(index === 0 && !task.done.isDone) ||
										(index > 0 &&
											!task.done.isDone &&
											goals[activeGoalId].steps[index - 1].done
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
															{task.done.doneBy.userName}
														</span>{" "}
														<br />
														<span>
															{timeConverter(task.done.time)}
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
													<FontAwesomeIcon icon={circleRegular} />
												</div>
											)}

											{task.done.isDone ? (
												<hr
													style={{
														backgroundColor: "#1aff66",
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
												<p>{deadlineConverter(task.deadline)}</p>
											)}
											<p>{task.details}</p>
											{isCurrentGoal && (
												<button
													onClick={() => updateTaskDone(task._id)}
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

													<div className="text">Step complete</div>
												</button>
											)}
										</div>
									);
								})}
								<div>
									<div>
										<p>{goals[activeGoalId].finalGoal}</p>
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
						<div
							id="inspire"
							style={{ width: `${stepsRef.current.offsetWidth}px` }}
						>
							<h2>
								No compass? Find your North Star. Ignite a spark, even a
								tiny one, and let it guide your next adventure.
							</h2>
							<p>
								Life's canvas awaits your masterpiece. Don't wait for
								grand schemes. Dip your brush in curiosity, explore the
								hues of possibility, and watch a vibrant purpose emerge,
								one unexpected stroke at a time.
							</p>
							<button onClick={() => setDisplayCreateGoal(true)}>
								Add Goal
							</button>
						</div>
					)}
				</div>
			) : (
				<div id="inspire">
					<h2>
						No compass? Find your North Star. Ignite a spark, even a tiny
						one, and let it guide your next adventure.
					</h2>
					<p>
						Life's canvas awaits your masterpiece. Don't wait for grand
						schemes. Dip your brush in curiosity, explore the hues of
						possibility, and watch a vibrant purpose emerge, one
						unexpected stroke at a time.
					</p>
					<button onClick={() => setDisplayCreateGoal(true)}>
						Add Goal
					</button>
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
							<label htmlFor="deadline">Choose deadline (if any)</label>
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
							<label htmlFor="deadline">Choose deadline (if any)</label>
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
		</aside>
	);
}

export default Goal;
