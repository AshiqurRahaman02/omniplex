import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/netflix.css";
import changeFavicon from "../../utils/FaviconUtils";

const NetFlixLogo = "/assets/netflix/images/logo.svg";

function Sign() {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(true);
	const [name, setName] = useState("");
	const [emailOrPhone, setEmailOrPhone] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	useEffect(() => {
		document.title = "Netflix";
		changeFavicon(
			"https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
		);
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		if (isLogin) {
			const storedAccounts =
				JSON.parse(localStorage.getItem("netflixAccounts")) || [];
			const matchedUser = storedAccounts.find(
				(account) => account.emailOrPhone === emailOrPhone
			);

			if (matchedUser) {
				navigate("/netflix");
			} else {
				alert("Sign up required");
				setIsLogin(false);
			}
		} else {
			const newAccount = { name, emailOrPhone, rememberMe };
			const storedAccounts =
				JSON.parse(localStorage.getItem("netflixAccounts")) || [];
			localStorage.setItem(
				"netflixAccounts",
				JSON.stringify([...storedAccounts, newAccount])
			);

			navigate("/netflix");
		}
	};

	return (
		<div className="netflix-body">
			<div className="login-main">
				<nav className="netflix-nav">
					<Link to="/netflix">
						<img width="53" src={NetFlixLogo} alt="" />
					</Link>
				</nav>
				<div className="box"></div>
				<div class="form-wrapper">
					{isLogin ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
					<form onSubmit={handleSubmit}>
						{!isLogin && (
							<div className="form-control">
								<input
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<label>Name</label>
							</div>
						)}
						<div className="form-control">
							<input
								type="text"
								required
								value={emailOrPhone}
								onChange={(e) => setEmailOrPhone(e.target.value)}
							/>
							<label>Email or phone number</label>
						</div>
						<div className="form-control">
							<input
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label>Password</label>
						</div>
						{isLogin ? (
							<button type="submit">Sign In</button>
						) : (
							<button type="submit">Sign Up</button>
						)}

						<div className="form-help">
							<div className="remember-me">
								<input
									type="checkbox"
									id="remember-me"
									checked={rememberMe}
									onChange={() => setRememberMe(!rememberMe)}
								/>
								<label htmlFor="remember-me">Remember me</label>
							</div>
							<Link to="#">Need help?</Link>
						</div>
					</form>

					{isLogin ? (
						<p>
							New to Netflix?{" "}
							<Link onClick={() => setIsLogin((pre) => !pre)}>
								Sign up now
							</Link>
						</p>
					) : (
						<p>
							Already have account?{" "}
							<Link onClick={() => setIsLogin((pre) => !pre)}>
								Sign in now
							</Link>
						</p>
					)}
					<small>
						This page is protected by Google reCAPTCHA to ensure you're
						not a bot.
						<Link to="#">Learn more.</Link>
					</small>
				</div>
			</div>

			<footer className="netflix-footer">
				<div className="questions">Questions? Call 000-800-919-1694</div>
				<div className="footer">
					<div className="footer-item">
						<Link to="#">Investor Relations</Link>
						<Link to="#">Jobs</Link>
						<Link to="#">Ways to Watch</Link>
						<Link to="#">Terms of Use</Link>
					</div>

					<div className="footer-item">
						<Link to="#">Help Centre</Link>
						<Link to="#">Account</Link>
						<Link to="#">Speed Test</Link>
						<Link to="#">Legal Notices</Link>
					</div>
					<div className="footer-item">
						<Link to="#">Media Centre</Link>
						<Link to="#">Privacy</Link>
						<Link to="#">Cookie Preferences</Link>
						<Link to="#">Corporate</Link>
					</div>

					<div className="footer-item">
						<Link to="#">Contact Us</Link>
						<Link to="#">Speed Test</Link>
						<Link to="#">Legal Notices</Link>
						<Link to="#">Only on Netflix</Link>
					</div>
				</div>
				<div className="select-language">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
							fill="currentColor"
						></path>
					</svg>
					<select name="" id="">
						<option value="">English</option>
						<option value="">हिन्दी</option>
					</select>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="default-ltr-cache-4z3qvp e1svuwfo1"
						data-name="CaretDown"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				<p>Netflix India</p>
			</footer>
		</div>
	);
}

export default Sign;
