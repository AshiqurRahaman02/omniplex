import React, { useState } from "react";

import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";

const rooms = [
	{
		roomName: "Conference Room A",
		currentUsers: 15,
	},
	{
		roomName: "Team Huddle Space",
		currentUsers: 8,
	},
	{
		roomName: "Innovation Lab",
		currentUsers: 12,
	},
	{
		roomName: "Boardroom 1",
		currentUsers: 20,
	},
	{
		roomName: "Creative Studio",
		currentUsers: 10,
	},
	{
		roomName: "Project Planning Room",
		currentUsers: 6,
	},
	{
		roomName: "Virtual Collaboration Space",
		currentUsers: 18,
	},
	{
		roomName: "Training Room 2",
		currentUsers: 14,
	},
	{
		roomName: "Executive Suite",
		currentUsers: 5,
	},
];

function Home() {
	const [roomName, setRoomName] = useState("");
	const [password, setPassword] = useState("");

	const [joinRoom, setJoinRoom] = useState(true);
	return (
		<div id="collabcraft">
			<Nav title="Collabcraft" />
			<div id="collabcraft-home">
				<div id="collabcraft-rooms">
					<h1>Your Rooms</h1>
					<div>
						{rooms.map((room, indes) => (
							<div>
								<h2>{room.roomName}</h2>
								<p>Current Users: {room.currentUsers}</p>
								<button>Join Now </button>
							</div>
						))}
					</div>
				</div>
				<div id="join-create-form">
					<h1 style={{ opacity: "0" }}>Join-Create</h1>
					<div>
						<span
							style={{
								backgroundColor: joinRoom
									? "rgb(245, 245, 245)"
									: "white",
								borderBottom: joinRoom
									? "0"
									: "1px solid rgb(212, 212, 212)",
							}}
							onClick={()=>setJoinRoom(true)}
						>
							Join Room
						</span>
						<span
							style={{
								backgroundColor: !joinRoom
									? "rgb(245, 245, 245)"
									: "white",
								borderBottom: !joinRoom
									? "0"
									: "1px solid rgb(212, 212, 212)",
							}}

							onClick={()=>setJoinRoom(false)}
						>
							Create Room
						</span>
					</div>
					<div>
					{joinRoom ? (
						<h2>Join Room</h2>
					) : (
						<h2>Create Room</h2>
					)}
						<div className="form-control">
							<input
								type="text"
								required
								value={roomName}
								onChange={(e) => setRoomName(e.target.value)}
							/>
							<label>Enter Room Name</label>
						</div>
						<div className="form-control">
							<input
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label>Enter Password</label>
						</div>
					</div>
					{joinRoom ? (
						<button>Join Room</button>
					) : (
						<button>Create Room</button>
					)}
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Home;
