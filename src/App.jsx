import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// pages

// omniplex pages
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Account from "./pages/Account";

// todo-list pages
import TodoListHome from "./pages/todo-list/Home";
import Join from "./pages/todo-list/join";

// youtube pages
import YoutubeHome from "./pages/youtube/Home";
import Watch from "./pages/youtube/Watch";
import Search from "./pages/youtube/Search";

// netflix pages
import NetflixHome from "./pages/netflix/Home";
import NetflixSignIn from "./pages/netflix/Sign";
import NetflixBrowser from "./pages/netflix/Browser";
import NetflixWatch from "./pages/netflix/Watch";

// spotify pages
import SpotifyHome from "./pages/spotify/Home";
import SpotifySignIn from "./pages/spotify/Sign";

// weather page
import WeatherHome from "./pages/weather/Home";

// unsplash page
import UnsplashHome from "./pages/unsplash/Home";

// CollabCraft pages
import CollabCraftHome from "./pages/collabcraft/Home";
import CollabCraftRoom from "./pages/collabcraft/Room";
import TodoListIframe from "./pages/todo-list/TodoListIframe";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign" element={<Sign />} />
				<Route path="/about" element={<About />} />
				<Route path="/account" element={<Account />} />
				<Route path="/explore" element={<Explore />} />

				{/* todo-list */}
				<Route path="/todolist/iframe" element={<TodoListIframe />} />
				<Route path="/todolist" element={<TodoListHome />} />
				<Route path="/todolist/team/join/:teamId" element={<Join />} />

				{/* youtube */}
				<Route path="/youtube" element={<YoutubeHome />} />
				<Route path="/watch" element={<Watch />} />
				<Route path="/search" element={<Search />} />

				{/* netflix */}
				<Route path="/netflix" element={<NetflixHome />} />
				<Route path="/netflix/login" element={<NetflixSignIn />} />
				<Route path="/netflix/browse" element={<NetflixBrowser />} />
				<Route path="/netflix/watch" element={<NetflixWatch />} />

				{/* spotify */}
				<Route path="/spotify" element={<SpotifyHome />} />
				<Route path="/spotify/:type" element={<SpotifySignIn />} />

				{/* weather */}
				<Route path="/weather" element={<WeatherHome />} />

				{/* unsplash */}
				<Route path="/unsplash" element={<UnsplashHome />} />

				{/* CollabCraft */}
				<Route path="/collabcraft" element={<CollabCraftHome />} />
				<Route
					path="/collabcraft/room/:roomId"
					element={<CollabCraftRoom />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
