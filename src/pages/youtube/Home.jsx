import React, { useEffect, useState } from "react";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faMagnifyingGlass,
	faMicrophone,
	faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";

import "../../styles/youtube.css";
import LeftSideBar from "../../components/youtube/LeftSideBar";
import Categories from "../../components/youtube/Categories";
import Contents from "../../components/youtube/Contents";
import YoutubeNav from "../../components/youtube/YoutubeNav";

const userLogo = "assets/logo/ashiqur_pic.png";

function Home() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [currentColor, serCurrentColor] = useState("white");

	const [isSideBarVisible, setSideBarVisible] = useState(true);

	const [activeCategory, setActiveCategory] = useState(0);

	useEffect(() => {
		document.title = "YouTube";
		// console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
	}, []);
	return (
		<div
			id="youtube"
			style={{
				backgroundColor: `var(--bg-dominant-${currentColor})`,
				color: `var(--color-dominant-${currentColor})`,
			}}
		>
			<YoutubeNav
				currentColor={currentColor}
				setSideBarVisible={setSideBarVisible}
				isSignedIn={isSignedIn}
			/>
			<header>
				<LeftSideBar
					isSideBarVisible={isSideBarVisible}
					isSignedIn={isSignedIn}
					currentColor={currentColor}
				/>
				<main>
					<Categories
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
					<Contents
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
				</main>
			</header>
		</div>
	);
}

export default Home;
