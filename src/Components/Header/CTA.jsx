import React from "react";
import CV from "../../Images/fw21_1027_Anurag_Raj_Resume.pdf";
const CTA = () => {
	const URL =
		"https://drive.google.com/file/d/14Eevapd093j_Z99KcEJhGimARpqGtVou/view?usp=share_link";
	return (
		<div className="cta">
			<a onClick={() => window.open(URL, "_blank")} href={CV} download="fw21_1027_Anurag_Raj_Resume" className="btn btn-primary" rel="noreferrer">
				Download Resume
			</a>
			{/* <a href="#contact" className="btn btn-primary">
				Scroll Down To view More
			</a> */}
		</div>
	);
};

export default CTA;
