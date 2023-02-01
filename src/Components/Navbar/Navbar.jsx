import React from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import CV from "../../Images/Anurag_Raj_Resume.pdf";
import { useState } from "react";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("#");
	const URL =
		"https://drive.google.com/file/d/14Eevapd093j_Z99KcEJhGimARpqGtVou/view?usp=share_link";
	return (
		<nav id="nav-menu">
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
				href="#skills"
				onClick={() => setActiveNav("#skills")}
				className={activeNav === "#skills" ? "active" : ""}
			>
				<div>
					<div>Skills</div>
					<div>
						<BiBook />
					</div>
				</div>
			</a>
			<a
				href="#projects"
				onClick={() => setActiveNav("#projects")}
				className={activeNav === "#projects" ? "active" : ""}
			>
				<div>
					<div>Projects</div>
					<div>
						<BiMessageSquareDetail />
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
						<MdContactPhone />
					</div>
				</div>
			</a>
			<a onClick={() => window.open(URL, "_blank")} href={CV} download={CV}>
				<button className="btn btn-primary">RESUME</button>
			</a>
		</nav>
	);
};

export default Navbar;
