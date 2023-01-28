import React from "react";
import "./Footer.css";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo"></a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonial">Testimonial</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://api.whatsapp.com/send?phone=+919471543076"  target={"_blank"} rel="noreferrer">
					<BsWhatsapp />
				</a>
				<a href="https://github.com/Anurag8305"  target={"_blank"} rel="noreferrer">
					<BsGithub />
				</a>
				<a href="https://www.linkedin.com/in/anurag-raj-809a82137/" target={"_blank"} rel="noreferrer">
					<BsLinkedin />
				</a>
			</div>
			<div className="footer__copyright">
				<small>
					&copy; Made with enthusiasm and love by Anurag Raj. All rights
					reserved
				</small>
			</div>
		</footer>
	);
};

export default Footer;
