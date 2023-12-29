import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";

import Nav from "../../components/omniplex/Nav";
import Footer from "../../components/omniplex/Footer";
import { todoListRoutes } from "../../routes/todo-list.route";

const sampleUserDetails = {
	_id: "asdfasdf",
	name: "Ashik",
	email: "@gmail.com",
	password: "$2b$05$asd",
	userType: "asdf",
	tag: "@asdfadsf",
	__v: 0,
};

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

function Join() {
	const { teamId } = useParams();
	const navigate = useNavigate();

	const [userDetails, setUserDetails] = useState(sampleUserDetails);
	const [token, setToken] = useState();
	const [isJoining, setIsJoining] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const userDetails = localStorage.getItem("userInfo");
		const token = localStorage.getItem("token");
		if (token && userDetails) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);

			joinTeam(token);
		} else {
			let message = "Please Login first.";
			notify(message, "error");
			setTimeout(() => {
				navigate("/sign");
			}, 3000);
		}
	}, [teamId]);

	const joinTeam = async (token) => {
		try {
			if (teamId) {
				setIsJoining(true);
				let currentProgress = 0;
				const intervalId = setInterval(() => {
					currentProgress += 10;
					console.log(currentProgress);

					if (currentProgress >= 100) {
						clearInterval(intervalId);
						return;
					} else {
						setProgress(currentProgress);
					}
				}, 1000);

				fetch(`${todoListRoutes.joinTeam}${teamId}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				})
					.then((res) => res.json())
					.then((res) => {
						if (res.isError) {
							notify(res.message, "warning");
                            clearInterval(intervalId);
                        setProgress(0)
                        setIsJoining(false); 
						} else {
							notify(res.message, "error");
							setTimeout(() => {
								navigate("/todolist");
							}, 2000);
						}
					})
					.catch((err) => {
						console.log(err);

						notify(err.message, "error");
                        clearInterval(intervalId);
                        setProgress(0)
                        setIsJoining(false); 
					});
			} else {
				setIsJoining(false);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<Nav />
			<main id="join-team">
				{isJoining ? (
					<div>
						<LinearProgress variant="determinate" value={progress} />
						<h1>Joining...</h1>
					</div>
				) : (
					<div style={{ display: "flex" }}>
						<Link to="/todolist">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="16"
								width="14"
								viewBox="0 0 448 512"
							>
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
							</svg>
							<span>go back</span>
						</Link>
						<input type="text" placeholder="Search team or type a URL" />
						<button className="explore-btn" style={{ marginTop: "0" }}>
							Join
						</button>
					</div>
				)}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default Join;
