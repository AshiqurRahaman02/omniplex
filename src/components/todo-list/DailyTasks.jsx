import React, { useState, useEffect } from "react";

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

function DailyTasks({
	interpolateColor,
	dailyTasks,
	creatorId,
	userId,
	updateTaskDone,
	notify,
	timeConverter,
	handelDisplayUpdateTask,
	handelDeleteTask,
	setDisplayCreateDailyTask,
}) {
	const [timeLeft, setTimeLeft] = useState();

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
	return (
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
			{dailyTasks.length > 0 ? (
				<div>
					{dailyTasks.map((task, index) => (
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
										<FontAwesomeIcon icon={faSquare} size="sm" />
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
										<FontAwesomeIcon icon={faEllipsisVertical} />
									</p>
									<div>
										<p onClick={() => handelDisplayUpdateTask(task)}>
											<FontAwesomeIcon icon={faPenToSquare} /> edit
										</p>
										<p onClick={() => handelDeleteTask(task._id)}>
											<FontAwesomeIcon icon={faTrashCan} /> delete
										</p>
									</div>
								</div>
							)}
						</div>
					))}
					{creatorId === userId && (
						<button
							className="explore-btn"
							onClick={() => setDisplayCreateDailyTask(true)}
						>
							Add more task
						</button>
					)}
				</div>
			) : (
				<div id="inspire">
					<p>Consistency is the key</p>
					<button onClick={() => setDisplayCreateDailyTask(true)}>
						Add Task
					</button>
				</div>
			)}
		</aside>
	);
}

export default DailyTasks;
