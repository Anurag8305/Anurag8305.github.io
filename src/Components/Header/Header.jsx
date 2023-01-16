import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Images/skills1.png";
import HeaderSocials from "./HeaderSocials";
import { CiLocationOn } from "react-icons/ci";
import MovingText from "react-moving-text";
const Header = () => {
	return (
		<header id="home" class="nav-link home">
			<div className="container header_container">
				<h5>Hello I'm</h5>
				<h1>Anurag Raj</h1>
				<MovingText
					type="popIn"
					duration="2000ms"
					delay="2s"
					direction="alternate-reverse"
					timing="linear"
					iteration="infinite"
					fillMode="none"
				>
					<h5>Full Stack Web Developer</h5>
				</MovingText>
				<h6>
					<CiLocationOn />
					Ranchi, Jharkhand
				</h6>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={ME} alt="" srcset="" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
