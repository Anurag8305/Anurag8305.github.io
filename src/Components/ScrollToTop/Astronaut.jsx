import React from "react";
import "./Astro.css";
import astro from "../../Images/astromoon.png";

const Astronaut = () => {
	return (
		<div className="wrapperastro">
			<div className="top-btnastro">
				<img src={astro} alt="" className="top-btn--iconastro" />
			</div>
		</div>
	);
};

export default Astronaut;
