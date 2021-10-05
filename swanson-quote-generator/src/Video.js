import React from "react";

function Video() {
	return (
		<>
			<h1>Ron's Best Moments</h1>
			<iframe
				title="Ron Swanson Supercut"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/SrLZgP-OR6s"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</>
	);
}
export default Video;
