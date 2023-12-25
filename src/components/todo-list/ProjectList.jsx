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

const projectListArray = [
	{
		isPublic: true,
		name: "Zara E-commerce Redesign",
		allMembers: [
			{ userId: "1", userName: "John Doe" },
			{ userId: "2", userName: "Jane Smith" },
			// Add more members as needed
		],
		dailyTasks: [
			{
				task: "UI mockup review",
				isDone: false,
				doneBy: "John Doe",
				time: "10:00 AM",
			},
			{
				task: "Backend API integration",
				isDone: true,
				doneBy: "Jane Smith",
				time: "2:00 PM",
			},
			// Add more tasks as needed
		],
		goals: [
			{
				name: "Launch Redesigned Website",
				roadmap: [
					{
						task: "Frontend development",
						isDone: true,
						doneBy: "John Doe",
						time: "3:00 PM",
					},
					{
						task: "User testing",
						isDone: false,
						doneBy: "Jane Smith",
						time: "5:00 PM",
					},
					// Add more roadmap tasks as needed
				],
				deadline: "2023-03-15",
			},
			// Add more goals as needed
		],
		reminders: [
			{ name: "Client meeting at 1:00 PM", time: "9:00 AM" },
			{ name: "Check server status at 5:00 PM", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Update product images",
				isDone: false,
				doneBy: "John Doe",
				time: "9:00 AM",
				assignedTo: "Jane Smith",
			},
			{
				task: "Write release notes",
				isDone: true,
				doneBy: "Jane Smith",
				time: "4:00 PM",
				assignedTo: "John Doe",
			},
			// Add more tasks as needed
		],
	},
	{
		isPublic: true,
		name: "Instagram Marketing Campaign",
		allMembers: [
			{ userId: "3", userName: "Bob Johnson" },
			{ userId: "4", userName: "Alice Brown" },
			// Add more members as needed
		],
		dailyTasks: [
			{
				task: "Create engaging content",
				isDone: true,
				doneBy: "Bob Johnson",
				time: "11:00 AM",
			},
			{
				task: "Social media post scheduling",
				isDone: false,
				doneBy: "Alice Brown",
				time: "3:00 PM",
			},
			// Add more tasks as needed
		],
		goals: [
			{
				name: "Increase Follower Engagement",
				roadmap: [
					{
						task: "Run Instagram ads",
						isDone: true,
						doneBy: "Bob Johnson",
						time: "2:00 PM",
					},
					{
						task: "Collaborate with influencers",
						isDone: false,
						doneBy: "Alice Brown",
						time: "4:00 PM",
					},
					// Add more roadmap tasks as needed
				],
				deadline: "2023-02-28",
			},
			// Add more goals as needed
		],
		reminders: [
			{ name: "Weekly analytics review on Friday", time: "9:00 AM" },
			{ name: "Plan next week's posts", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Respond to follower comments",
				isDone: false,
				doneBy: "Bob Johnson",
				time: "10:00 AM",
				assignedTo: "Alice Brown",
			},
			{
				task: "Monitor competitor activities",
				isDone: true,
				doneBy: "Alice Brown",
				time: "1:30 PM",
				assignedTo: "Bob Johnson",
			},
			// Add more tasks as needed
		],
	},
	{
		isPublic: false,
		name: "Company XYZ Internal Systems Upgrade",
		dailyTasks: [
			{
				task: "Server maintenance",
				isDone: false,
				doneBy: "IT Team",
				time: "9:30 AM",
			},
			{
				task: "Database optimization",
				isDone: true,
				doneBy: "Database Team",
				time: "4:30 PM",
			},
			// Add more tasks as needed
		],
		goals: [
			{
				name: "Enhance Data Security",
				roadmap: [
					{
						task: "Implement two-factor authentication",
						isDone: true,
						doneBy: "IT Team",
						time: "11:00 AM",
					},
					{
						task: "Conduct security training",
						isDone: false,
						doneBy: "Management",
						time: "2:00 PM",
					},
					// Add more roadmap tasks as needed
				],
				deadline: "2023-03-15",
			},
			// Add more goals as needed
		],
		reminders: [
			{ name: "Monthly server backup on the 25th", time: "9:00 AM" },
			{ name: "Schedule cybersecurity workshop", time: "9:00 AM" },
		],
		tasks: [
			{
				task: "Update antivirus software",
				isDone: false,
				doneBy: "IT Team",
				time: "10:00 AM",
			},
			{
				task: "Prepare quarterly security report",
				isDone: true,
				doneBy: "Security Team",
				time: "3:30 PM",
			},
			// Add more tasks as needed
		],
	},
	// Add more objects to projectList as needed
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
	"#1cf500",
];
const hourGlass = "assets/logo/hourGlass.png";
const clock = "assets/logo/clock.png";

function ProjectList() {
	const [workList, setWorkList] = useState(projectListArray);
	const [isAdmin, setIsAdmin] = useState(true);
	const [timeLeft, setTimeLeft] = useState({ time: "", percentage: 50 });

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

			let percentage = Math.floor(
				(+(
					hours.toString().padStart(2, "0") +
					minutes.toString().padStart(2, "0") +
					seconds.toString().padStart(2, "0")
				) /
					235959) *
					100
			);
			let temp = {
				time: `${hours.toString().padStart(2, "0")}:${minutes
					.toString()
					.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
				percentage,
			};
			setTimeLeft(temp);
		};

		calculateTimeLeft();

		const intervalId = setInterval(calculateTimeLeft, 1000); // Update every second

		return () => clearInterval(intervalId); // Clear interval on unmount
	}, []);

	function interpolateColor(percentage) {
		if (percentage <= 0 || percentage >= 100) {
			return "#FF0000";
		}

		let index = Math.floor(percentage / 10);
		return gradientColors[index];
	}

	const handelWorkDone = (type, index) => {
		projectListArray[activeTeamId][type][index].isDone = true;
		projectListArray[activeTeamId][type][index].doneBy = "you";

		const now = new Date();

		const hours = now.getHours();
		const minutes = now.getMinutes();
		const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}`;

		projectListArray[activeTeamId][type][index].time = formattedTime;

		setWorkList([...projectListArray]);
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
								color: `${interpolateColor(timeLeft.percentage)}`,
							}}
						>
							<img src={hourGlass} alt="" style={{ width: "18px" }} />
							{timeLeft.time}
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
								color: `${interpolateColor(90)}`,
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
									color: `${interpolateColor(timeLeft.percentage)}`,
								}}
							>
								<img src={hourGlass} alt="" style={{ width: "18px" }} />
								{timeLeft.time}
							</p>
						</div>

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
												style={{
													width: "300px",
													height: "max-content",
												}}
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
											color: `${interpolateColor(
												timeLeft.percentage
											)}`,
										}}
									>
										<img
											src={hourGlass}
											alt=""
											style={{ width: "18px" }}
										/>
										{timeLeft.time}
									</p>
								</div>
								<div>{currentGoal.task}</div>
							</aside>
						</div>
					</div>
				)}
			</section>
		</div>
	);
}

export default ProjectList;
