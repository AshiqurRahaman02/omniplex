import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Logo = "/assets/images/Omniplex.svg";

const navigations = [
	{ text: "Home", to: "/" },
	{ text: "Explore", to: "/explore" },
	{ text: "About", to: "/about" },
];

function Nav() {
	const [userDetails, setUserDetails] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const [isSmallDevice, setIsSmallDevice] = useState(false);
	const [isMenuActive, setIsMenuActive] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const userDetails = localStorage.getItem("userInfo");
		if (userDetails !== null) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}

		const windowWidth = window.innerWidth;
		if (windowWidth < 750) {
			setIsSmallDevice(true);
		} else {
			setIsSmallDevice(false);
		}
	}, []);

	return (
		<div>
			<div className="navbar">
				<div
					onClick={() => {
						navigate("/");
					}}
				>
					<img src={Logo} alt="Omniplex Logo" width={"45px"} />
					<h1>Omniplex</h1>
				</div>
				{!isSmallDevice ? (
					<div>
						<div className="">
							{navigations.map((navigation, index) => (
								<Link to={navigation.to} key={index} className="link">
									{navigation.text}
								</Link>
							))}
						</div>
						{isAuthenticated ? (
							<Link to="/account" className="info">
								{" "}
								{userDetails.name}{" "}
							</Link>
						) : (
							<Link to="/sign" className="info shine">
								Log in
							</Link>
						)}
					</div>
				) : !isMenuActive ? (
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => setIsMenuActive(true)}
					/>
				) : (
					<FontAwesomeIcon
						icon={faXmark}
						onClick={() => setIsMenuActive(false)}
					/>
				)}
			</div>
			{isMenuActive && (
				<div className="menu">
					{isAuthenticated ? (
						<Link to="/account" className="info">
							{" "}
							{userDetails.name}{" "}
						</Link>
					) : (
						<Link to="/sign" className="info shine">
							Log in
						</Link>
					)}
          <hr />
					<div className="links">
						{navigations.map((navigation, index) => (
							<Link to={navigation.to} key={index} className="link">
								{navigation.text}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Nav;
