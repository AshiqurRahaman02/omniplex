
const changeFavicon = (iconPath) => {
	const head = document.head || document.getElementsByTagName("head")[0];
	const existingFavicon = document.getElementById("dynamic-favicon");

	if (existingFavicon) {
		head.removeChild(existingFavicon);
	}

	const newFavicon = document.createElement("link");
	newFavicon.id = "dynamic-favicon";
	newFavicon.rel = "icon";
	newFavicon.href = iconPath;

	head.appendChild(newFavicon);
};

export default changeFavicon;
