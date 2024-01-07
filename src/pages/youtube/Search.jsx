import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


import "../../styles/youtube.css";
import LeftSideBar from "../../components/youtube/LeftSideBar";
import Categories from "../../components/youtube/Categories";
import Contents from "../../components/youtube/Contents";
import YoutubeNav from "../../components/youtube/YoutubeNav";

function Search() {
	const navigate = useNavigate();
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [currentColor, serCurrentColor] = useState("white");

	const [isSideBarVisible, setSideBarVisible] = useState(true);

	const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);

		const search = searchParams.get("q");
		if (!search) {
			navigate("/youtube");
		}

        console.log(search);

	}, [window.location.search]);
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
					
				</main>
			</header>
		</div>
  )
}

export default Search
