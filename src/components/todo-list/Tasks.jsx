import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
import {
	faPenToSquare,
	faTrashCan,
	faSquare,
} from "@fortawesome/free-regular-svg-icons";

const hourGlass = "assets/logo/hourGlass.png";

function Tasks({
	interpolateColor,
	tasks,
	creatorId,
	userId,
	updateTaskDone,
	notify,
	timeConverter,
	deadlineConverter,
	handelDisplayUpdateTask,
	handelDeleteTask,
	setDisplayCreateTask,
}) {
	return (
		<aside>
			<div>
				{creatorId === userId ? (
					<p>Your tasks</p>
				) : (
					<p>Assigned Tasks to you</p>
				)}
				{tasks.length > 0 && tasks[0].deadline && (
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
						{deadlineConverter(tasks[0].deadline)}
					</p>
				)}
			</div>

			{tasks.length > 0 ? (
				<div>
					{tasks.filter(
						(task) =>
							task.createdBy.creatorId === userId ||
							task.assignedTo.includes(userId)
					).length > 0 ? (
						tasks
							.filter(
								(task) =>
									task.createdBy.creatorId === userId ||
									task.assignedTo.includes(userId)
							)
							.map((task, index) => (
								<div key={index}>
									<div>
										{task.done.isDone ? (
											<div
												style={{
													position: "relative",
												}}
												onClick={() => {
													if (creatorId === userId) {
														updateTaskDone(task._id);
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
												onClick={() => updateTaskDone(task._id)}
											/>
										)}
										<p>
											{task.name}{" "}
											{task.done.isDone && (
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
											)}
										</p>
									</div>
									{creatorId === userId && (
										<div className="edit-delete">
											<p>
												<FontAwesomeIcon
													icon={faEllipsisVertical}
												/>
											</p>
											<div>
												<p
													onClick={() =>
														handelDisplayUpdateTask(task)
													}
												>
													<FontAwesomeIcon icon={faPenToSquare} />{" "}
													edit
												</p>
												<p
													onClick={() =>
														handelDeleteTask(task._id)
													}
												>
													<FontAwesomeIcon icon={faTrashCan} />{" "}
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

					{creatorId === userId && (
						<button
							className="explore-btn"
							onClick={() => setDisplayCreateTask(true)}
						>
							Add Task
						</button>
					)}
				</div>
			) : (
				<div id="inspire">
					<p>Without a deadline, your work is never over.</p>
					<button onClick={() => setDisplayCreateTask(true)}>
						Add Task
					</button>
				</div>
			)}
		</aside>
	);
}

export default Tasks;
