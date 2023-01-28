import React from "react";
import "./Experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { DiJavascript1, DiNodejsSmall } from "react-icons/di";
import {
	SiChakraui,
	SiRedux,
	SiMongodb,
	SiExpress,
	SiJava,
	SiIntellijidea,
	SiMaterialui,
	SiCanva,
	SiNetlify,
	SiVercel,
	SiNpm,
	SiHeroku,
	SiPostman,
	SiGithubactions,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
const Experience = () => {
	return (
		<section id="skills" className="nav-link skills">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div
					className="experience__frontend"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<AiFillHtml5 className="experience__details-icon" />
							<h4>HTML</h4>
						</article>
						<article className="experience__details">
							<FaCss3Alt className="experience__details-icon" />
							<h4>CSS</h4>
						</article>
						<article className="experience__details">
							<DiJavascript1 className="experience__details-icon" />
							<h4>Javascript</h4>
						</article>
						<article className="experience__details">
							<SiChakraui className="experience__details-icon" />
							<h4>Chakra UI</h4>
						</article>
						<article className="experience__details">
							<FaReact className="experience__details-icon" />
							<h4>React</h4>
						</article>
						<article className="experience__details">
							<SiRedux className="experience__details-icon" />
							<h4>Redux</h4>
						</article>
						<article className="experience__details">
							<SiMaterialui className="experience__details-icon" />
							<h4>Material UI</h4>
						</article>
					</div>
				</div>
				<div
					className="experience__backend"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<DiNodejsSmall className="experience__details-icon" />
							<h4>Node JS</h4>
						</article>
						<article className="experience__details">
							<SiMongodb className="experience__details-icon" />
							<h4>MongoDB</h4>
						</article>
						<article className="experience__details">
							<SiExpress className="experience__details-icon" />
							<h4>Express</h4>
						</article>
						<article className="experience__details">
							<SiJava className="experience__details-icon" />
							<h4>Java</h4>
						</article>
						<article className="experience__details">
							<FaGitAlt className="experience__details-icon" />
							<h4>Git</h4>
						</article>
						<article className="experience__details">
							<SiNpm className="experience__details-icon" />
							<h4>NPM</h4>
						</article>
						<article className="experience__details">
							<SiPostman className="experience__details-icon" />
							<h4>Postman</h4>
						</article>
					</div>
				</div>
				<div
					className="experience_others"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Others</h3>
					<div className="experience__content">
						<article className="experience__details">
							<SiIntellijidea className="experience__details-icon" />
							<h4>IntelliJ</h4>
						</article>
						<article className="experience__details">
							<SiCanva className="experience__details-icon" />
							<h4>Canva</h4>
						</article>
						<article className="experience__details">
							<SiNetlify className="experience__details-icon" />
							<h4>Netlify</h4>
						</article>
						<article className="experience__details">
							<SiVercel className="experience__details-icon" />
							<h4>Vercel</h4>
						</article>
						<article className="experience__details">
							<SiHeroku className="experience__details-icon" />
							<h4>Heroku</h4>
						</article>
						<article className="experience__details">
							<SiGithubactions className="experience__details-icon" />
							<h4>GitHuh Actions</h4>
						</article>
					</div>
				</div>
				<div
					className="experience_others"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Soft Skills</h3>
					<div className="experience__content">
						<article className="experience__details">
							Communication & Interpersonal skills
						</article>
						<article className="experience__details">
							Leadership & Management skills
						</article>
						<article className="experience__details">
							Team work
						</article>
						<article className="experience__details">
							Work Ethic
						</article>
						<article className="experience__details">
							Quick & Visual Learner
						</article>
						<article className="experience__details">
							Effective Problem Solver
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
