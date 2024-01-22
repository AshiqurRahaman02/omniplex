import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Nav from "../../components/omniplex/Nav";
import Images from "../../components/unsplash/Images";
import Footer from "../../components/omniplex/Footer";

import "../../styles/unsplash.css";

const categories = [
	"Coding",
	"Wallpapers",
	"3D Renders",
	"Nature",
	"Textures & Patterns",
	"Film",
	"Travel Street Photography",
	"Anime",
	"Current Events Fashion & Beauty",
	"Architecture & Interiors Experimental",
	"Food & Drink People",
	"Animals",
	"Health & Wellness",
	"Sports",
	"Arts & Culture",
	"Business & Work",
	"Spirituality",
];

const orders = ["latest", "oldest", "popular"];

const Home = () => {
	const [images, setImages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [scrolling, setScrolling] = useState(false);
	const [activeCategory, setActiveCategory] = useState(null);
	const [activeOrder, setActiveOrder] = useState("latest");

	const [pagination, setPagination] = useState({
		total: 10,
		currentPage: 1,
	});

	const handleScroll = () => {
		if (window.scrollY > 10) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (searchTerm) {
			getSearchImage(activeOrder);
		} else if (activeCategory !== null) {
			getActiveCategoryImage(activeOrder);
		} else {
			fetchData(activeOrder);
		}
	}, [activeOrder]);
	const fetchData = async (order) => {
		try {
			const response = await axios.get("https://api.unsplash.com/photos", {
				params: {
					client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
					per_page: 30,
					order_by: order || activeOrder,
				},
			});
			setImages(response.data);
			console.log(response);
		} catch (error) {
			console.error("Error fetching images from Unsplash:", error);
		}
	};

	useEffect(() => {
		console.log(activeCategory);
		if (activeCategory !== null) {
			getActiveCategoryImage();
		} else {
			fetchData();
		}
	}, [activeCategory]);
	const getActiveCategoryImage = async (order) => {
		console.log(categories[activeCategory]);
		const response = await axios.get(
			"https://api.unsplash.com/search/photos",
			{
				params: {
					query: categories[activeCategory],
					client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
					per_page: 30,
					order_by: order || activeOrder,
				},
			}
		);

		if (response?.data?.results?.length > 0) {
			setImages(response.data.results);

			let page = {
				total: response.data.total_pages,
				currentPage: 1,
			};
			setPagination(page);
		}
	};

	const handleSearch = async () => {
		try {
			if (!searchTerm) {
				return;
			}
			getSearchImage();
		} catch (error) {
			console.error("Error searching Unsplash:", error);
		}
	};
	const getSearchImage = async (order) => {
		const response = await axios.get(
			"https://api.unsplash.com/search/photos",
			{
				params: {
					query: searchTerm,
					client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
					per_page: 30,
					order_by: order || activeOrder,
				},
			}
		);

		if (response?.data?.results?.length > 0) {
			setImages(response.data.results);

			let page = {
				total: response.data.total_pages,
				currentPage: 1,
			};
			setPagination(page);
		}
	};

	const handleChange = (event, value) => {
		let page = {
			total: pagination.total,
			currentPage: value,
		};
		setPagination(page);
	};

	return (
		<div>
			<Nav />
			<div
				style={{
					position: "sticky",
					top: 0,
					zIndex: "10",
					backgroundColor: "white",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "10px 40px",
						gap: "10px",
					}}
				>
					<div>
						<h1 style={{ color: "#333" }}>Unsplash</h1>
						<p
							style={{
								color: "#666",
								display: scrolling ? "none" : "block",
							}}
						>
							The internet’s source for visuals. Powered by creators
							everywhere.
						</p>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<div id="unsplash-search">
							<input
								type="search"
								placeholder="Search images..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>{" "}
							<button onClick={handleSearch}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1"
									stroke="currentColor"
									class="w-6 h-6"
									style={{ width: "18", height: "18" }}
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>
								Search
							</button>
						</div>
						{scrolling && (
							<Pagination
								count={pagination.total}
								siblingCount={0}
								boundaryCount={1}
								defaultPage={pagination.currentPage}
								onChange={handleChange}
								style={{
									display: !scrolling ? "none" : "block",
								}}
							/>
						)}
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "start",
					justifyContent: "space-between",
					padding: "10px 40px",
					gap: "10px",
				}}
			>
				<div id="unsplash-categories">
					<div>
						{categories.map((category, index) => (
							<p
								key={index}
								className={
									activeCategory === index ? "activeCategory" : ""
								}
							>
								<span onClick={() => setActiveCategory(index)}>
									{category}
								</span>
								{activeCategory === index && (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="w-6 h-6"
										onClick={() => setActiveCategory(null)}
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18 18 6M6 6l12 12"
										/>
									</svg>
								)}
							</p>
						))}
					</div>
				</div>
				<div id="unsplash-select">
					<select
						name=""
						id=""
						value={activeOrder}
						onChange={(e) => setActiveOrder(e.target.value)}
					>
						{orders.map((order) => (
							<option value={order}>{order}</option>
						))}
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
			</div>
			<main>
				<div
					style={{
						padding: "10px 18px",
						display: "flex",
						justifyContent: "end",
					}}
				>
					{!scrolling && (
						<Pagination
							count={pagination.total}
							siblingCount={0}
							boundaryCount={1}
							defaultPage={pagination.currentPage}
							onChange={handleChange}
							style={{
								display: scrolling ? "none" : "block",
							}}
						/>
					)}
				</div>
				<Images images={images} />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
