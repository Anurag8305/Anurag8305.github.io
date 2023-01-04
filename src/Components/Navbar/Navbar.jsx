import React from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<div>
					<div>Home</div>
					<div>
						<AiOutlineHome />
					</div>
				</div>
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<div>
					<div>About</div>
					<div>
						<AiOutlineUser />
					</div>
				</div>
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<div>
					<div>Experience</div>
					<div>
						<BiBook />
					</div>
				</div>
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<div>
					<div>Services</div>
					<div>
						<RiServiceLine />
					</div>
				</div>
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<div>
					<div>Contact</div>
					<div>
						<BiMessageSquareDetail />
					</div>
				</div>
			</a>
		</nav>
	);
};

export default Navbar;
