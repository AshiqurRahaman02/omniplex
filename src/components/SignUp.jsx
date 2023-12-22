import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "../styles/Signin.css";
import { userRoutes, mailRoutes } from "../routes/omniplex.route";

import Popup from "./Popup";

const SignUp = () => {
	const [signUpName, setSignUpName] = useState("");
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [validSignUpName, setValidSignUpName] = useState(false);
	const [validSignUpEmail, setValidSignUpEmail] = useState(false);
	const [validSignUpPassword, setValidSignUpPassword] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	// Regular expressions for validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
	const onlyCharactersRegex = /^[a-zA-Z]+$/;
	const lowerUpperAndNumberRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
	const lowerUpperNumberSpecialRegex =
		/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=]).+$/;

	const [showPopup, setShowPopup] = useState(false);
	const [correctOtp, setCorrectOtp] = useState(7852);

	const [isLoading, setLoading] = useState(false);

	const navigate = useNavigate();

	// Function to handle name validation for sign-up
	const handleSignUpName = (event) => {
		const { value } = event.target;
		setSignUpName(value);
		if (value.length >= 5 && onlyCharactersRegex.test(value)) {
			setValidSignUpName(true);
		} else {
			setValidSignUpName(false);
		}
	};

	// Function to handle email validation for sign-up
	const handleSignUpEmail = (event) => {
		const { value } = event.target;
		setSignUpEmail(value);
		if (emailRegex.test(value)) {
			setValidSignUpEmail(true);
		} else {
			setValidSignUpEmail(false);
		}
	};

	// Function to handle password validation for sign-up
	const handleSignUpPassword = (event) => {
		const { value } = event.target;
		let password = value;
		setSignUpPassword(password);
		if (password.length >= 8) {
			if (lowerUpperNumberSpecialRegex.test(password)) {
				setValidSignUpPassword(true);
			} else if (lowerUpperAndNumberRegex.test(password)) {
				setValidSignUpPassword(true);
			} else {
				setValidSignUpPassword(false);
			}
		} else {
			setValidSignUpPassword(false);
		}
	};

	// Function to handle sign-up form submission
	const handleSignUpSubmit = (event) => {
		event.preventDefault();

		if (validSignUpName && validSignUpEmail && validSignUpPassword) {
			// Send email with OTP here
			const otp = Math.floor(1000 + Math.random() * 9000);
			setCorrectOtp(otp);
			handleSendEmail(otp);
			setShowPopup(true);
		} else {
			if (!validSignUpName) {
				let message = "Please enter a valid name";
				notify(message, "warning");
			} else if (!validSignUpEmail) {
				let message = "Please enter a valid email";
				notify(message, "warning");
			} else {
				let message = "Create a new strong password";
				notify(message, "warning");
			}
		}
	};

	// Function to handle email send for verification
	const handleSendEmail = (otp) => {
		const newMail = {
			to: signUpEmail,
			subject: "Otp for Email Verification",
			html: mail(otp),
		};

		fetch(mailRoutes.sendMail, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newMail),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					notify("Otp sent", "success");
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const mail = (otp) => {
		return `<body style='padding: 40px 0px; background-color: aliceblue;'> <div style='background-color: white; max-width: max-content; margin: auto; padding: 10px;'><div style='display: flex;justify-content: center;'><img src='https://omniplex.vercel.app/assets/images/Omniplex.png' style='width: 70px;'><h2 style='width: max-content; font-size: 50px; font-family:Verdana, Geneva, Tahoma, sans-serif;color: #23aa94;'>Omniplex</h2></div> <p  style='display: flex;justify-content: center; font-size: 40px;font-family: monospace;'>OTP- <span> &nbsp; ${otp}</span></p> <div style='font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;'> <p>Please do not share this OTP with anyone, as it is used for verification purposes only.</p> <p>Got a question? Find all your answers at our <a href='https://omniplex.vercel.app/'>help center⟶</a></p> <p>We're excited to have you on board.</p> <p>Stay safe and secure online!</p> <div style='display: flex;'><img src='https://omniplex.vercel.app/assets/images/Omniplex.png' style='width: 30px;'><h2 style='width: max-content; font-size: 20px; font-family:Verdana, Geneva, Tahoma, sans-serif;color: #23aa94;'> Team Omniplex</h2></div> </div> </div> </body>`;
	};

	const handleShowPasswordToggle = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	function signUpFunction() {
		let newUser = {
			email: signUpEmail,
			password: signUpPassword,
			name: signUpName,
		};

		fetch(`${userRoutes.register}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					handleSuccessfulSignup(res);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	}

	const handleSuccessfulSignup = (res) => {
		let user = res.user;
		localStorage.setItem("userInfo", JSON.stringify(user));
		localStorage.setItem("token", res.token);
		setTimeout(() => {
			navigate("/");
		}, 3000);
	};

	const handleOtpSubmit = (otp) => {
		if (otp === correctOtp) {
			setLoading(true);
			signUpFunction();
			// setShowPopup(false);
		} else {
			let message = "Incorrect OTP submission";
			notify(message, "error");
		}
	};

	const notify = (message, type) => {
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

	return (
		<div>
			{isLoading && <p id="pageLoader">Loading...</p>}
			{/* {isLoading && <Loading />} */}
			<div>
				<form onSubmit={handleSignUpSubmit} id="signinForm">
					<h2>Omniplex</h2>
					<p>Sign up</p>
					<div>
						<input
							type="text"
							placeholder="Name"
							id="emailInput"
							name="Name"
							value={signUpName}
							onChange={handleSignUpName}
						/>
						<label htmlFor="" id="form-label">
							Name
						</label>
					</div>
					<div>
						<input
							type="text"
							placeholder="Email"
							id="emailInput"
							name="Email"
							value={signUpEmail}
							onChange={handleSignUpEmail}
						/>
						<label htmlFor="" id="form-label">
							Email
						</label>
					</div>
					<div>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							id="passwordInput"
							name="Password"
							value={signUpPassword}
							onChange={handleSignUpPassword}
						/>
						<br />
						<label htmlFor="" id="form-label">
							Password
						</label>{" "}
						<br />
						<div id="eye">
							<input
								type="checkbox"
								name="showpassword"
								checked={showPassword}
								onChange={handleShowPasswordToggle}
							/>
							<span>Show password</span> <br />
						</div>
					</div>
					<button type="submit" id="submitButton">
						Sign Up
					</button>
				</form>

				<ToastContainer />
				{showPopup && (
					<Popup
						onClose={() => setShowPopup(false)}
						onOtpSubmit={handleOtpSubmit}
					/>
				)}
			</div>
		</div>
	);
};

export default SignUp;
