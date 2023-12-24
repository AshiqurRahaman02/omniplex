import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faArrowRightFromBracket,
	faUsers,
	faLock,
	faCheck,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as circleRegular } from "@fortawesome/free-regular-svg-icons";

const workListArray = [
	{
		isPublic: true,
		name: "Company Team Developers",
		createdBy: "5",
		allMembers: [
			{ userId: "1", userName: "John Doe" },
			{ userId: "2", userName: "Jane Smith" },
			{ userId: "3", userName: "Bob Johnson" },
		],
		dailyTasks: [
			{
				task: "Code review",
				isDone: false,
				doneBy: "John Doe",
				time: "10:00 AM",
			},
			{
				task: "Bug fixing",
				isDone: true,
				doneBy: "Jane Smith",
				time: "2:00 PM",
			},
			{
				task: "Feature implementation",
				isDone: false,
				doneBy: "Bob Johnson",
				time: "3:30 PM",
			},
		],
		goals: [
			{
				name: "Project Alpha",
				roadmap: [
					{
						task: "Feature A planning",
						isDone: true,
						doneBy: "John Doe",
						time: "3:00 PM",
					},
					{
						task: "Feature A development",
						isDone: false,
						doneBy: "Jane Smith",
						time: "5:00 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A testing",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "6:30 PM",
					},
					{
						task: "Feature A optimization",
						isDone: false,
						doneBy: "John Doe",
						time: "8:00 PM",
					},
					{
						task: "Feature A documentation",
						isDone: false,
						doneBy: "Jane Smith",
						time: "9:30 PM",
					},
				],
				deadline: "2023-02-28",
			},
			{
				name: "Project Beta",
				roadmap: [
					{
						task: "Project Beta planning",
						isDone: true,
						doneBy: "Jane Smith",
						time: "9:00 AM",
					},
					{
						task: "Project Beta prototype development",
						isDone: true,
						doneBy: "Bob Johnson",
						time: "11:00 AM",
					},
					{
						task: "Project Beta feedback collection",
						isDone: true,
						doneBy: "John Doe",
						time: "1:00 PM",
					},
					{
						task: "Project Beta iteration",
						isDone: true,
						doneBy: "Jane Smith",
						time: "3:00 PM",
					},
					{
						task: "Project Beta finalization",
						isDone: false,
						doneBy: "Bob Johnson",
						time: "5:00 PM",
					},
				],
				deadline: "2023-04-15",
			},
		],
		reminders: [
			{ name: "Meeting at 1:00 PM", time: "9:00 AM" },
			{ name: "Submit weekly report by 5:00 PM", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Review pull requests",
				isDone: false,
				doneBy: "John Doe",
				time: "9:00 AM",
				assignedTo: "Jane Smith",
			},
			{
				task: "Write documentation",
				isDone: true,
				doneBy: "Jane Smith",
				time: "4:00 PM",
				assignedTo: "John Doe",
			},
			{
				task: "Test new features",
				isDone: false,
				doneBy: "Bob Johnson",
				time: "2:30 PM",
				assignedTo: "Jane Smith",
			},
		],
	},
	{
		isPublic: true,
		createdBy: "6",
		name: "Company Team Sellers",
		allMembers: [
			{ userId: "4", userName: "Alice Brown" },
			{ userId: "5", userName: "Charlie Green" },
		],
		dailyTasks: [
			{
				task: "Client meetings",
				isDone: true,
				doneBy: "Alice Brown",
				time: "11:00 AM",
			},
			{
				task: "Sales calls",
				isDone: false,
				doneBy: "Charlie Green",
				time: "3:00 PM",
			},
		],
		goals: [
			{
				name: "Achieve Monthly Sales Target",
				roadmap: [
					{
						task: "Reach out to potential clients",
						isDone: true,
						doneBy: "Alice Brown",
						time: "2:00 PM",
					},
					{
						task: "Follow up with leads",
						isDone: false,
						doneBy: "Charlie Green",
						time: "4:00 PM",
					},
				],
				deadline: "2023-01-31",
			},
		],
		reminders: [
			{ name: "Weekly sales report due on Friday", time: "9:00 AM" },
			{ name: "Prepare for team meeting on Monday", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Create sales proposals",
				isDone: false,
				doneBy: "Alice Brown",
				time: "10:00 AM",
				assignedTo: "Charlie Green",
			},
			{
				task: "Update client database",
				isDone: true,
				doneBy: "Charlie Green",
				time: "1:30 PM",
				assignedTo: "Alice Brown",
			},
		],
	},
	{
		isPublic: false,
		name: "Company XYZ",
		createdBy: "10",
		dailyTasks: [
			{
				task: "Internal meeting",
				isDone: false,
				doneBy: "Admin",
				time: "9:30 AM",
			},
			{
				task: "Financial reporting",
				isDone: true,
				doneBy: "Accounting Team",
				time: "4:30 PM",
			},
		],
		goals: [
			{
				name: "Improve Employee Satisfaction",
				roadmap: [
					{
						task: "Conduct employee surveys",
						isDone: true,
						doneBy: "HR Team",
						time: "11:00 AM",
					},
					{
						task: "Implement feedback suggestions",
						isDone: false,
						doneBy: "Management",
						time: "2:00 PM",
					},
				],
				deadline: "2023-03-15",
			},
		],
		reminders: [
			{ name: "Payroll processing on the 25th", time: "9:00 AM" },
			{ name: "Schedule team-building event", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Update company policies",
				isDone: false,
				doneBy: "HR Team",
				time: "10:00 AM",
			},
			{
				task: "Prepare financial statements",
				isDone: true,
				doneBy: "Accounting Team",
				time: "3:30 PM",
			},
		],
	},
];

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

function WorkList() {
	const [workList, setWorkList] = useState(workListArray);
	const [isAdmin, setIsAdmin] = useState(true);
	const [timeLeft, setTimeLeft] = useState();

	const [activeTeamId, setActiveTeamId] = useState(0);
	const [activeGoalId, setActiveGoalId] = useState(0);
	const [currentGoal, setCurrentGoal] = useState({
		task: "Project Beta planning",
		isDone: false,
		doneBy: "Jane Smith",
		time: "9:00 AM",
	});

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

		const intervalId = setInterval(calculateTimeLeft, 1000); // Update every second

		return () => clearInterval(intervalId); // Clear interval on unmount
	}, []);

	function interpolateColor(percentage = 30) {
		// console.log(typeof left, total);
		// let percentage =
		// 	30 || Math.floor(Number(left.split(":").join("")) / total);

		if (percentage <= 0 || percentage >= 100) {
			return "#FF0000";
		}

		let index = Math.floor(percentage / 10);
		return gradientColors[index];
	}

	const handelWorkDone = (type, index) => {
		workListArray[activeTeamId][type][index].isDone = true;
		workListArray[activeTeamId][type][index].doneBy = "you";

		const now = new Date();

		const hours = now.getHours();
		const minutes = now.getMinutes();
		const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}`;

		workListArray[activeTeamId][type][index].time = formattedTime;

		setWorkList([...workListArray]);
	};

	return (
		<div id="work">
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
						{workList.map((team, index) => (
							<option value={index} key={index}>
								{team.name}
							</option>
						))}
					</select>
					{workList[activeTeamId].isPublic ? (
						<div style={{ display: "flex", alignItems: "center" }}>
							<div id="faIcon">
								<FontAwesomeIcon icon={faUsers} size="lg" />
								<span>Public</span>
							</div>
							<p style={{ fontSize: "20px" }}>
								{workList[activeTeamId].allMembers.length}
							</p>
						</div>
					) : (
						<div id="faIcon">
							<FontAwesomeIcon icon={faLock} size="xl" />
							<span>Only for you</span>
						</div>
					)}
				</div>
				{isAdmin ? (
					<div id="faIcon">
						<FontAwesomeIcon icon={faTrash} size="xl" />{" "}
						<span>Delete Team</span>
					</div>
				) : (
					<div id="faIcon">
						<FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
						<span>Left Team</span>
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
							<img src={hourGlass} alt="" style={{ width: "18px" }} />
							{timeLeft}
						</p>
					</div>
					<div>
						{workList[activeTeamId].dailyTasks.map((task, index) => (
							<div key={index}>
								{task.isDone ? (
									<div style={{ position: "relative" }}>
										<FontAwesomeIcon
											icon={faCheck}
											style={{
												color: "#1aff66",
												zIndex: 1,
												position: "absolute",
												top: "-2px",
												left: "-2px",
											}}
											size="lg"
										/>
										<input type="checkbox" readOnly />
									</div>
								) : (
									<input
										type="checkbox"
										onChange={() =>
											handelWorkDone("dailyTasks", index)
										}
									/>
								)}
								<p>
									{task.task}{" "}
									{task.isDone && (
										<span>
											<span> by </span>{" "}
											<span className="special"> {task.doneBy}</span>
											<span> at </span>{" "}
											<span className="special"> {task.time}</span>
										</span>
									)}
								</p>
							</div>
						))}
					</div>
				</aside>
				<aside>
					<div>
						<p>Reminder</p>
						<p
							style={{
								color: `${interpolateColor(80)}`,
							}}
						>
							<img src={hourGlass} alt="" style={{ width: "18px" }} />
							{workList[activeTeamId].reminders[0].time}
						</p>
					</div>
					<div>
						{workList[activeTeamId].reminders.map((task, index) => (
							<div key={index}>
								{task.isDone ? (
									<div style={{ position: "relative" }}>
										<FontAwesomeIcon
											icon={faCheck}
											style={{
												color: "#1aff66",
												zIndex: 1,
												position: "absolute",
												top: "-2px",
												left: "-2px",
											}}
											size="lg"
										/>
										<input type="checkbox" readOnly />
									</div>
								) : (
									<img src={clock} alt="" style={{ width: "15px" }} />
								)}
								<p>
									{task.name}{" "}
									{task.time && (
										<span>
											<span> at </span>{" "}
											<span className="special"> {task.time}</span>
										</span>
									)}
								</p>
							</div>
						))}
					</div>
				</aside>
				<aside>
					<div>
						<p>Assigned Tasks to you</p>
					</div>
					<div>
						{workList[activeTeamId].tasks.map((task, index) => (
							<div key={index}>
								{task.isDone ? (
									<div style={{ position: "relative" }}>
										<FontAwesomeIcon
											icon={faCheck}
											style={{
												color: "#1aff66",
												zIndex: 1,
												position: "absolute",
												top: "-2px",
												left: "-2px",
											}}
											size="lg"
										/>
										<input type="checkbox" readOnly />
									</div>
								) : (
									<input
										type="checkbox"
										onChange={() => handelWorkDone("tasks", index)}
									/>
								)}
								<p>
									{task.task}{" "}
									{task.isDone && (
										<span>
											<span> by </span>{" "}
											<span className="special"> {task.doneBy}</span>
										</span>
									)}
								</p>
							</div>
						))}
					</div>
				</aside>
			</section>
			<section id="goals-section">
				{workList[activeTeamId].goals.length !== 0 && (
					<div>
						<div>
							<select
								name=""
								id="goals"
								value={activeGoalId}
								onChange={(e) => setActiveGoalId(e.target.value)}
							>
								{workList[activeTeamId].goals.map((goal, index) => (
									<option value={index} key={index}>
										{goal.name}
									</option>
								))}
							</select>
							<p
								style={{
									color: `${interpolateColor(50)}`,
								}}
							>
								<img src={hourGlass} alt="" style={{ width: "18px" }} />
								{timeLeft}
							</p>
						</div>

						<div style={{display:"flex",justifyContent:"space-between"}}>
							<div
								id="goal"
								style={{
									display: "grid",
									gridTemplateColumns: `repeat(${
										workList[activeTeamId].goals[activeGoalId].roadmap
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
									<p>By Ashik</p>
								</div>
								{workList[activeTeamId].goals[activeGoalId].roadmap.map(
									(task, index) => {
										let isCurrentGoal = false;

										if (
											(index === 0 && !task.isDone) ||
											(index > 0 &&
												!task.isDone &&
												workList[activeTeamId].goals[activeGoalId]
													.roadmap[index - 1].isDone)
										) {
											isCurrentGoal = true;
										}
										return (
											<div
												key={index}
												style={{ width: "300px", height: "max-content" }}
											>
												{task.isDone ? (
													<div>
														<p>
															Done by <span>{task.doneBy}</span>{" "}
															at <span>{task.time}</span>
														</p>
														<FontAwesomeIcon
															icon={faCircle}
															style={{
																color: "#1aff66",
															}}
														/>
													</div>
												) : isCurrentGoal? (
													<div>
														<p>Current Goal</p>
														<FontAwesomeIcon
															icon={faCircle}
															style={{
																color: "#1aff66",
															}}
														/>
													</div>
												):(
													<div>
														<p>Upcomming</p>
														<FontAwesomeIcon
															icon={circleRegular}
														/>
													</div>
												)}

												{task.isDone ? (
													<hr
														style={{
															backgroundColor: "#1aff66",
														}}
													/>
												) : (
													<hr />
												)}
												<p>{task.task}</p>
											</div>
										);
									}
								)}
								<div>
									<div>
										<p>Achieved</p>
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
									<p>Current Goal</p>
									<p
										style={{
											color: `${interpolateColor(50)}`,
										}}
									>
										<img
											src={hourGlass}
											alt=""
											style={{ width: "18px" }}
										/>
										{timeLeft}
									</p>
								</div>
								<div>
									{currentGoal.task}
								</div>
							</aside>
						</div>
					</div>
				)}
			</section>
		</div>
	);
}

export default WorkList;
