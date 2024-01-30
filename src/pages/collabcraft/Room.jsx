import React, { useState } from "react";
import CodeEditor from "../../components/collabcraft/CodeEditor";
import Canvas from "../../components/collabcraft/Canvas";

import "../../styles/collabcraft.css";
import Users from "../../components/collabcraft/Users";

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
	faComment,
	faMoon,
	faSun,
} from "@fortawesome/free-regular-svg-icons";

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

function Room() {
	const [userDetails, setUserDetails] = useState({
		audio: false,
		video: false,
		displayCode: false,
		darkMode: true,
	});

	const [isMaximized, setIsMaximized] = useState(false);

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
							{userDetails.audio && (
								<FontAwesomeIcon icon={faMicrophone} size="2xs" />
							)}{" "}
							{userDetails.video && (
								<FontAwesomeIcon icon={faVideo} size="2xs" />
							)}{" "}
							{(userDetails.audio || userDetails.video) && (
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
									setUserDetails((pre) => ({
										...pre,
										audio: !userDetails.audio,
									}))
								}
							>
								{userDetails.audio ? (
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
									setUserDetails((pre) => ({
										...pre,
										video: !userDetails.video,
									}))
								}
							>
								{userDetails.video ? (
									<FontAwesomeIcon icon={faVideo} size="xl" />
								) : (
									<FontAwesomeIcon icon={faVideoSlash} size="xl" />
								)}
							</button>
							<button>
								<FontAwesomeIcon icon={faComment} size="xl" />
							</button>
							<button
								onClick={() =>
									setUserDetails((pre) => ({
										...pre,
										displayCode: !userDetails.displayCode,
									}))
								}
							>
								<FontAwesomeIcon icon={faRepeat} size="xl" />
							</button>
							<button
								onClick={() =>
									setUserDetails((pre) => ({
										...pre,
										darkMode: !userDetails.darkMode,
									}))
								}
							>
								{userDetails.darkMode ? (
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
			<div>
				{userDetails.displayCode ? (
					<CodeEditor
						darkMode={userDetails.darkMode}
						isMaximized={isMaximized}
						setIsMaximized={setIsMaximized}
					/>
				) : (
					<Canvas
						darkMode={userDetails.darkMode}
						isMaximized={isMaximized}
						setIsMaximized={setIsMaximized}
					/>
				)}
			</div>
		</div>
	);
}

export default Room;
