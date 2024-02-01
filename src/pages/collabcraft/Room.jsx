import React, { useEffect, useState } from "react";
import CodeEditor from "../../components/collabcraft/CodeEditor";
import Canvas from "../../components/collabcraft/Canvas";

import "../../styles/collabcraft.css";
import Users from "../../components/collabcraft/Users";

import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightFromBracket,
	faMicrophone,
	faMicrophoneSlash,
	faRepeat,
	faVideo,
	faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircleStop,
	faCircleXmark,
	faComment,
	faMoon,
	faPaperPlane,
	faSun,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { roomRoutes } from "../../routes/collabcraft.route";
import Draggable from "react-draggable";

const users = [
	{
		name: "Alice Johnson",
		id: 123456,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "Bob Smith",
		id: 789012,
	},
	{
		name: "Cindy Brown",
		id: 345678,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "David Taylor",
		id: 901234,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "Emily Davis",
		id: 567890,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "Frank Miller",
		id: 112233,
	},
	{
		name: "Grace Turner",
		id: 445566,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "Henry White",
		id: 778899,
	},
	{
		name: "Isabel Reed",
		id: 990011,
		profile_image:
			"https://yt3.ggpht.com/yti/AGOGRCoKDiOEMfqiN_o_j6ac4at4z9JiMW3KV2FF8NZ1Fw=s88-c-k-c0x00ffffff-no-rj",
	},
	{
		name: "Jackie Brown",
		id: 334455,
	},
];

const notify = (message = "done", type = "success") => {
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

function Room() {
	const { roomId } = useParams();
	const navigate = useNavigate();
	const [userState, setUserState] = useState({
		audio: false,
		video: false,
		displayCode: false,
		darkMode: true,
	});
	const [roomChats, setRoomChats] = useState([
		{
			userId: "a;ldkjf",
			message: "Room",
			time: new Date(),
			userName: "a;lkdjffhkjsfg",
		},
	]);
	const [isMaximized, setIsMaximized] = useState(false);
	const [displayChats, setDisplayChats] = useState(false);
	const [userDetails, setUserDetails] = useState();
	const [token, setToken] = useState();

	const [roomDetails, setRoomDetails] = useState();

	useEffect(() => {
		const userDetails = localStorage.getItem("userInfo");
		const token = localStorage.getItem("token");
		if (token && userDetails) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);
			setToken(token);

			getRoomDetails(token);
		} else {
			let message = "Please Login first.";
			notify(message, "error");
			setTimeout(() => {
				navigate("/sign");
			}, 3000);
		}
	}, []);

	const getRoomDetails = (token) => {
		fetch(`${roomRoutes.getRoomDetails}${roomId}`, {
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
					setRoomDetails(res.room);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

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

	return (
		<div>
			<div>
				<div>
					<Users users={users} />
				</div>
				<div id="collabcraft-room-details" style={{ marginBottom: "0" }}>
					<p>
						<span>Omniplex</span>{" "}
						<span>
							{userState.audio && (
								<FontAwesomeIcon icon={faMicrophone} size="2xs" />
							)}{" "}
							{userState.video && (
								<FontAwesomeIcon icon={faVideo} size="2xs" />
							)}{" "}
							{(userState.audio || userState.video) && (
								<FontAwesomeIcon
									icon={faCircleStop}
									style={{ color: "#e32b2b" }}
									size="2xs"
								/>
							)}
						</span>
					</p>
					<div>
						<div>
							<button
								onClick={() =>
									setUserState((pre) => ({
										...pre,
										audio: !userState.audio,
									}))
								}
							>
								{userState.audio ? (
									<FontAwesomeIcon icon={faMicrophone} size="xl" />
								) : (
									<FontAwesomeIcon
										icon={faMicrophoneSlash}
										size="xl"
									/>
								)}
							</button>
							<button
								onClick={() =>
									setUserState((pre) => ({
										...pre,
										video: !userState.video,
									}))
								}
							>
								{userState.video ? (
									<FontAwesomeIcon icon={faVideo} size="xl" />
								) : (
									<FontAwesomeIcon icon={faVideoSlash} size="xl" />
								)}
							</button>
							<button onClick={() => setDisplayChats((pre) => !pre)}>
								<FontAwesomeIcon icon={faComment} size="xl" />
							</button>
							<button
								onClick={() =>
									setUserState((pre) => ({
										...pre,
										displayCode: !userState.displayCode,
									}))
								}
							>
								<FontAwesomeIcon icon={faRepeat} size="xl" />
							</button>
							<button
								onClick={() =>
									setUserState((pre) => ({
										...pre,
										darkMode: !userState.darkMode,
									}))
								}
							>
								{userState.darkMode ? (
									<FontAwesomeIcon icon={faMoon} size="xl" />
								) : (
									<FontAwesomeIcon icon={faSun} size="xl" />
								)}
							</button>
						</div>
						<div>
							<button>
								<FontAwesomeIcon
									icon={faArrowRightFromBracket}
									size="xl"
									style={{ color: "#e32b2b" }}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div style={{ position: "relative" }}>
				{displayChats && (
					<Draggable>
						<div id="chat-container">
							<div>
								<FontAwesomeIcon
									icon={faCircleXmark}
									size="xl"
									style={{
										position: "absolute",
										top: "-10px",
										right: "0px",
										zIndex:"20",
										cursor:"pointer"
									}}

									onClick={()=>setDisplayChats(false)}
								/>
							</div>
							<div id="all-chats">
								{roomChats.length > 0 &&
									roomChats.map((chat) => {
										return false &&
											chat.userId === userDetails._id ? (
											<div id="own-update">
												<p>{chat.message}</p>
												<span>{timeConverter(chat.time)}</span>
											</div>
										) : (
											<div>
												<span>{chat.userName}</span>
												<p>{chat.message}</p>
												<span>{timeConverter(chat.time)}</span>
											</div>
										);
									})}
							</div>
							<div>
								<input type="text" />
								<FontAwesomeIcon
									icon={faPaperPlane}
									size="lg"
									style={{
										position: "absolute",
										top: "5px",
										right: "10px",
									}}
								/>
							</div>
						</div>
					</Draggable>
				)}
			</div>

			<div>
				{userState.displayCode ? (
					<CodeEditor
						darkMode={userState.darkMode}
						isMaximized={isMaximized}
						setIsMaximized={setIsMaximized}
					/>
				) : (
					<Canvas
						darkMode={userState.darkMode}
						isMaximized={isMaximized}
						setIsMaximized={setIsMaximized}
					/>
				)}
			</div>
			<ToastContainer />
		</div>
	);
}

export default Room;
