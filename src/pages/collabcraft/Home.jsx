import React, { useEffect, useState } from "react";

import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";

import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { roomRoutes } from "../../routes/collabcraft.route";

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

function Home() {
	const navigate = useNavigate();
	const [joinRoom, setJoinRoom] = useState(true);
	const [userDetails, setUserDetails] = useState();
	const [token, setToken] = useState();

	const [userRooms, setUserRooms] = useState(rooms);
	const [roomName, setRoomName] = useState("");
	const [roomPassword, setRoomPassword] = useState("");

	useEffect(() => {
		document.title = "Collabcraft | Home";
		const userDetails = localStorage.getItem("userInfo");
		const token = localStorage.getItem("token");
		if (token && userDetails) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);
			setToken(token);

			getUserRooms(token);
		} else {
			let message = "Please Login first.";
			notify(message, "error");
			setTimeout(() => {
				navigate("/sign");
			}, 3000);
		}
	}, []);

	const getUserRooms = (token) => {
		fetch(`${roomRoutes.getUserRooms}`, {
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
					setUserRooms(res.rooms);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelJoinRoom = () => {
		if (!roomName) {
			notify("Please enter room id", "warning");
			return;
		}
		if (!roomPassword) {
			notify("Please enter room password", "warning");
			return;
		}
		console.log(token);
		fetch(`${roomRoutes.joinRoom}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify({ roomId: roomName, password: roomPassword }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					navigate(`/collabcraft/room/${res.room._id}`);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handelCreateRoom = () => {
		if (!roomName) {
			notify("Please enter room name", "warning");
			return;
		}
		if (!roomPassword) {
			notify("Please enter room password", "warning");
			return;
		}
		fetch(`${roomRoutes.createRoom}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify({ name: roomName, password: roomPassword }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					navigate(`/collabcraft/room/${res.room._id}`);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};
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
								<button
									onClick={() =>
										navigate(`/collabcraft/room/${room.id}`)
									}
								>
									<span>Join Now </span>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
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
							onClick={() => setJoinRoom(true)}
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
							onClick={() => setJoinRoom(false)}
						>
							Create Room
						</span>
					</div>
					<div>
						{joinRoom ? <h2>Join Room</h2> : <h2>Create Room</h2>}
						<>
							<div className="form-control">
								<input
									type="text"
									required
									value={roomName}
									onChange={(e) => setRoomName(e.target.value)}
								/>
								<label>Enter Room {joinRoom ? "Id" : "Name"}</label>
							</div>
							<div className="form-control">
								<input
									type="password"
									required
									value={roomPassword}
									onChange={(e) => setRoomPassword(e.target.value)}
								/>
								<label>Enter Room Password</label>
							</div>
						</>
					</div>
					{joinRoom ? (
						<button id="join-create-room" onClick={handelJoinRoom}>
							Join Room
						</button>
					) : (
						<button id="join-create-room" onClick={handelCreateRoom}>
							Create Room
						</button>
					)}
				</div>
			</div>
			<ToastContainer />
			{/* <Footer /> */}
		</div>
	);
}

export default Home;
