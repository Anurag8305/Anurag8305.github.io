
import "./Header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
import { CiLocationOn } from "react-icons/ci";
import MovingText from "react-moving-text";

import Sphere1 from "../CloudSphere/Sphere1";
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
					{/* <img src={ME} alt="" srcset="" /> */}
					<Sphere1 />
				</div>
			</div>
		</header>
	);
};

export default Header;
