import React from "react";
import axios from "axios";

function Images({ images }) {
	let totalImagesInComlumn = Math.floor(images.length /3)
	return (
		<div className="unsplash-image-container">
			<div className="column">
				{images.map((image, i) => {
					if (i < 0 || i >= totalImagesInComlumn) {
						return;
					}
					return <Image image={image} />;
				})}
			</div>
			<div className="column">
				{images.map((image, i) => {
					if (i < totalImagesInComlumn || i >= 2*totalImagesInComlumn) {
						return;
					}
					return <Image image={image} />;
				})}
			</div>
			<div className="column">
				{images.map((image, i) => {
					if (i < 2*totalImagesInComlumn || i >= 3*totalImagesInComlumn) {
						return;
					}
					return <Image image={image} />;
				})}
			</div>
		</div>
	);
}

function Image({ image }) {
	const downloadImage = async (photo) => {
		const response = await fetch(image.urls.regular);

		const file = await response.blob();
		const link = document.createElement("a");
		link.href = URL.createObjectURL(file);
		link.download = `image${new Date().getTime()}`;
		link.click();

		await axios.get(`https://api.unsplash.com/photos/${photo.id}/download`, {
			params: {
				client_id: process.env.REACT_APP_UNSPLASH_API_KEY
			},
		});
	};
	return (
		<div key={image.id} id="image-div">
			<img src={image.urls.raw || image.urls.regular} alt={image.alt_description} id="image" />
			<div>
				<div id="top-content">
					<p style={{ opacity: "0" }}>Sponser</p>
					<div style={{ display: "flex" }}>
						<button>
							<svg
								class="TrVF8"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								version="1.1"
								aria-hidden="false"
							>
								<desc lang="en-US">A heart</desc>
								<path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
							</svg>
						</button>
						<button>
							<svg
								class="utUL6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								version="1.1"
								aria-hidden="false"
							>
								<desc lang="en-US">A plus sign</desc>
								<path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div id="bottom-content">
					<div>
						<img
							src={
								image.user.profile_image.large ||
								image.user.profile_image.medium ||
								image.user.profile_image.small
							}
							alt=""
						/>
						<div>
							<p
								onClick={() =>
									window.open(image.user.portfolio_url, "_blank")
								}
							>
								{image.user.name}
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => downloadImage(image)}>
							<svg
								class="m9vYO"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								version="1.1"
								aria-hidden="false"
							>
								<desc lang="en-US">Arrow pointing down</desc>
								<path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Images;
