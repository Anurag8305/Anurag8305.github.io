import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="www.linkedin.com" target="_blank">
				<BsLinkedin />
			</a>
			<a href="www.github.com" target="_blank">
				<BsGithub />
			</a>
			<a href="www.gmail.com" target="_blank">
				<SiGmail />
			</a>
		</div>
	);
};

export default HeaderSocials;
