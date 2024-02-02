import React, { useRef } from "react";

function Users({ users }) {
	const usersContainerRef = useRef(null);
	const handlePrev = () => {
		usersContainerRef.current.scrollLeft -=
			usersContainerRef.current.offsetWidth;
	};

	const handleNext = () => {
		usersContainerRef.current.scrollLeft +=
			usersContainerRef.current.offsetWidth;
	};
	return (
		<div id="collabcraft-users">
			<button onClick={handlePrev} id="collabcraft-previous">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="3"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<div ref={usersContainerRef}>
				{users.map((user) => (
					<div id="collabcraft-user">
						<div>
							{user.profile_image ? (
								<img src={user.profile_image} alt="" />
							) : (
								<h1>{user.username[0]}</h1>
							)}
						</div>
						<p>{user.username}</p>
					</div>
				))}
			</div>
			<button onClick={handleNext} id="collabcraft-next">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="3"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
}

export default Users;
