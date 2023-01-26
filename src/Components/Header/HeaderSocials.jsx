import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/anurag-raj-809a82137/"
				target="_blank"
			>
				<BsLinkedin className="header__socialsicons"/>
			</a>
			<a href="https://github.com/Anurag8305" target="_blank">
				<BsGithub className="header__socialsicons"/>
			</a>
			<a href="anuragraj8305@gmail.com" target="_blank">
				<SiGmail className="header__socialsicons"/>
			</a>
		</div>
	);
};

export default HeaderSocials;
