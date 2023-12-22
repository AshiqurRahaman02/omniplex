import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userRoutes, mailRoutes } from "../routes/omniplex.route";

import Popup from "./Popup";

const SignIn = () => {
	// State for form inputs and validation flags
	const [signInEmail, setSignInEmail] = useState("");
	const [signInPassword, setSignInPassword] = useState("");
	const [validSignInEmail, setValidSignInEmail] = useState(false);
	const [validSignInPassword, setValidSignInPassword] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	// Regular expressions for validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
	const lowerUpperAndNumberRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
	const lowerUpperNumberSpecialRegex =
		/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=]).+$/;

	const [showPopup, setShowPopup] = useState(false);
	const [correctOtp, setCorrectOtp] = useState(7852);

	const [isLoading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSignInSubmit = (e) => {
		e.preventDefault();

		if (validSignInEmail && validSignInPassword) {
			// Send email with OTP here
			const otp = Math.floor(1000 + Math.random() * 9000);
			setCorrectOtp(otp);
			handleSendEmail(otp);
			setShowPopup(true);
		} else {
			if (!validSignInEmail) {
				let message = "Please enter a valid email";
				notify(message, "warning");
			} else {
				let message = "Please enter a strong password";
				notify(message, "warning");
			}
		}
	};

	// Function to handle email send for verification
	const handleSendEmail = (otp) => {
		const newMail = {
			to: signInEmail,
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
		return `<body style='padding: 40px 0px; background-color: rgb(245, 245, 245);'> <div style='background-color: white; max-width: max-content; margin: auto; padding: 10px;'><div style='max-width: max-content; margin: auto; padding: 10px; display: flex;'><img src='https://omniplex.vercel.app/assets/images/Omniplex.png' style='width: 70px; height: 70px;margin-top:40px; margin-right: 10px;'><h2 style='width: max-content; font-size: 50px; font-family:Verdana, Geneva, Tahoma, sans-serif;color: #23aa94;'>Omniplex</h2></div> <p  style='max-width: max-content; margin: auto; padding: 10px;  font-size: 40px;font-family: monospace;'>OTP- <span> &nbsp; ${otp}</span></p> <div style='font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;'> <p>Please do not share this OTP with anyone, as it is used for verification purposes only.</p> <p>Got a question? Find all your answers at our <a href='https://omniplex.vercel.app/'>help center⟶</a></p> <p>We're excited to have you on board.</p> <p>Stay safe and secure online!</p> <div style='display: flex;'><img src='https://omniplex.vercel.app/assets/images/Omniplex.png' style='width: 30px; height:30px;margin-top:15px'><h2 style='width: max-content; font-size: 20px; font-family:Verdana, Geneva, Tahoma, sans-serif;color: #23aa94;'> Team Omniplex</h2></div> </div> </div></body>`;
	};

	// Function to handle email validation for sign-in
	const handleSignInEmail = (event) => {
		const { value } = event.target;
		setSignInEmail(value);
		if (emailRegex.test(value)) {
			setValidSignInEmail(true);
		} else {
			setValidSignInEmail(false);
		}
	};

	// Function to handle password validation for sign-in
	const handleSignInPassword = (event) => {
		const { value } = event.target;
		setSignInPassword(value);
		let password = value;
		if (password.length >= 8) {
			if (lowerUpperNumberSpecialRegex.test(password)) {
				setValidSignInPassword(true);
			} else if (lowerUpperAndNumberRegex.test(password)) {
				setValidSignInPassword(true);
			} else {
				setValidSignInPassword(false);
			}
		} else {
			setValidSignInPassword(false);
		}
	};

	const signInFunction = () => {
		let user = {
			email: signInEmail,
			password: signInPassword,
		};

		fetch(userRoutes.login, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isError) {
					notify(res.message, "warning");
				} else {
					handleSuccessfulSignin(res);
				}
			})
			.catch((err) => {
				console.log(err);
				notify(err.message, "error");
			});
	};

	const handleSuccessfulSignin = (res) => {
		let user = res.user;
		localStorage.setItem("userInfo", JSON.stringify(user));
		localStorage.setItem("token", res.token);
		setTimeout(() => {
			navigate("/");
		}, 3000);
	};

	const handleShowPasswordToggle = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const handleOtpSubmit = (otp) => {
		if (otp === correctOtp) {
			setLoading(true);
			signInFunction();
			// setShowPopup(false);
		} else {
			let message = "Incorrect OTP submission";
			notify(message, "warning");
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
			<div>
				<form onSubmit={handleSignInSubmit} id="signinForm">
					<h2>Omniplex</h2>
					<p>Sign in</p>
					<div>
						<input
							type="text"
							placeholder="Email"
							id="emailInput"
							value={signInEmail}
							onChange={handleSignInEmail}
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
							value={signInPassword}
							onChange={handleSignInPassword}
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
						Sign In
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

export default SignIn;
