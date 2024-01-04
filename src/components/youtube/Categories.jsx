import React, { useEffect, useRef, useState } from "react";

function Categories() {
	const [categories, setCategories] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 12,
		13, 14, 15, 16, 17, 18, 19,
	]);
	const [isLoading, setIsLoading] = useState(true);
	const [displayPrevious, setDisplayPrevious] = useState(false);
	const [displayNext, setDisplayNext] = useState(true);

	const [activeCategory, setActiveCategory] = useState("all");

	const categoriesContainerRef = useRef(null);
	const handlePrev = () => {
		setDisplayNext(true);

		categoriesContainerRef.current.scrollLeft -=
			categoriesContainerRef.current.offsetWidth;

		const current = categoriesContainerRef.current.scrollLeft;

		if (current === 0) {
			setDisplayPrevious(false);
		}
	};

	const handleNext = () => {
		setDisplayPrevious(true);
		const previous = categoriesContainerRef.current.scrollLeft;

		categoriesContainerRef.current.scrollLeft +=
			categoriesContainerRef.current.offsetWidth;

		const current = categoriesContainerRef.current.scrollLeft;

		if (current - previous < categoriesContainerRef.current.offsetWidth) {
			setDisplayNext(false);
		}
	};

	useEffect(() => {
		let url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCategories(data.items);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div
			style={{ display: "flex", alignItems: "center", position: "relative" }}
		>
			{displayPrevious && (
				<button onClick={handlePrev} id="previous">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

				</button>
			)}
			<div id="yt-categories" ref={categoriesContainerRef}>
				{!isLoading && (
					<div
						className={
							activeCategory === "all" ? "activeCategory" : "category"
						}
            onClick={()=>setActiveCategory("all")}
					>
						<p>All</p>
					</div>
				)}
				{isLoading
					? categories.map((c, index) => (
							<div className="skeleton-loader category-skeleton">
								{index}
							</div>
					  ))
					: categories.map((category, index) => (
							<div
								key={category.snippet.channelId}
								id={category.id}
								className={
									activeCategory === `${category.snippet.title}`
										? "activeCategory"
										: "category"
								}
                onClick={()=>setActiveCategory(`${category.snippet.title}`)}
							>
								<p>{category.snippet.title}</p>
							</div>
					  ))}
			</div>
			{displayNext && (
				<button onClick={handleNext} id="next">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

				</button>
			)}
		</div>
	);
}

export default Categories;
