import React, { useState } from "react";

// components
import Nav from "../components/omniplex/Nav";
import Footer from "../components/omniplex/Footer";
import SignUp from "../components/omniplex/SignUp";
import SignIn from "../components/omniplex/SignIn";

function Sign() {
	// State for controlling form visibility and switch button position
	const [isSignInVisible, setSignInVisible] = useState(true);

	// Function to switch between sign-in and sign-up forms
	const toggleForms = () => {
		setSignInVisible((prevState) => !prevState);
	};
	return (
		<div>
			<Nav />
			<main>
				{/* Sign In Form */}
				{isSignInVisible && <SignIn />}

				{/* Sign Up Form */}
				{!isSignInVisible && <SignUp />}
				<div id="option">
					{isSignInVisible ? (
						<p>
							Don't have an account?{" "}
							<button onClick={toggleForms}>Sign Up</button>
						</p>
					) : (
						<p>
							Allready have an account?{" "}
							<button onClick={toggleForms}>Sign In</button>
						</p>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Sign;
