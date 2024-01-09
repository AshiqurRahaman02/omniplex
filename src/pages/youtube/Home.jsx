import React, { useEffect, useState } from "react";

import "../../styles/youtube.css";
import LeftSideBar from "../../components/youtube/LeftSideBar";
import Categories from "../../components/youtube/Categories";
import Contents from "../../components/youtube/Contents";
import YoutubeNav from "../../components/youtube/YoutubeNav";
import changeFavicon from "../../utils/FaviconUtils";


function Home() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [currentColor, serCurrentColor] = useState("white");

	const [isSideBarVisible, setSideBarVisible] = useState(true);

	const [activeCategory, setActiveCategory] = useState(0);

	useEffect(() => {
		document.title = "YouTube";
		changeFavicon("https://www.youtube.com/s/desktop/375de707/img/favicon.ico")
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
