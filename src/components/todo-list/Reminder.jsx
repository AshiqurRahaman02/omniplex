import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
	faPenToSquare,
	faTrashCan,
	faSquare,
	faClock,
} from "@fortawesome/free-regular-svg-icons";

const hourGlass = "assets/logo/hourGlass.png";

function Reminder({
	interpolateColor,
	reminders,
	creatorId,
	userId,
	deadlineConverter,
	handelDisplayUpdateTask,
	handelDeleteTask,
	setDisplayCreateReminder,
}) {
	return (
		<aside>
			<div>
				<p>Reminder</p>
				{reminders.length > 0 && (
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
						{deadlineConverter(reminders[0].deadline)}
					</p>
				)}
			</div>

			{reminders.length > 0 ? (
				<div>
					{reminders.map((task, index) => (
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
										<FontAwesomeIcon icon={faSquare} size="sm" />
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
							onClick={() => setDisplayCreateReminder(true)}
						>
							Add reminder
						</button>
					)}
				</div>
			) : (
				<div id="inspire">
					<p>
						Punctuality is the politeness of <br /> kings and queens.
					</p>
					<button onClick={() => setDisplayCreateReminder(true)}>
						Add Reminder
					</button>
				</div>
			)}
		</aside>
	);
}

export default Reminder;
