import React from "react";
import { RiRocketFill } from "react-icons/ri";
import "./Scroll.css";

const ScrollToTop = () => {
	const goToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<div className="wrapper">
			<div className="top-btn" onClick={goToTop}>
				<RiRocketFill className="top-btn--icon" />
			</div>
		</div>
	);
};

export default ScrollToTop;
