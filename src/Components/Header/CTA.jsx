import React from "react";
import CV from "../../Images/Anurag_Raj_Resume.pdf";
const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download target="_blank" className="btn" rel="noreferrer">
				Download CV
			</a>
		</div>
	);
};

export default CTA;
