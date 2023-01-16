import React from "react";
import "./About.css";
import ME from "../../Images/profile.png";
import { FaAward, FaDatabase, FaGithub } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiMusicbrainz } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";
import CustomizedTimeline from "../Education/Education";
import GithubCalender from "../GitHub/GithubCalender";
import Stats from "../GitHub/Stats";

const About = () => {
	return (
		<section id="about" class="about section nav-link about">
			<h5>Get To Know </h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="about me" srcset="" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Coding Experience</h5>
							<small>1200+ hours</small>
						</article>
						<article className="about__card">
							<BiCodeAlt className="about__icon" />
							<h5>Lines of Code</h5>
							<small>12000+</small>
						</article>
						<article className="about__card">
							<SiMusicbrainz className="about__icon" />
							<h5>Soft Skills Training</h5>
							<small>100+ hours</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>2+ Group Projects and 2+ Individual Projects</small>
						</article>
						<article className="about__card">
							<FaDatabase className="about__icon" />
							<h5>DSA</h5>
							<small>Over 400+ DSA Questions</small>
						</article>
						<article className="about__card">
							<FaGithub className="about__icon" />
							<h5>GitHub</h5>
							<small>Over 350+ Commits</small>
						</article>
					</div>
					<p>
						Hello! My name is Anurag Raj and I enjoy creating things that live
						on the internet. I am a passionate Full Stack Web Developer, who is
						proficient in working with interdisciplinary teams and executing
						goal-oriented projects.
					</p>
					<a href="#contact" className="btn btn-primary">
						Grab a cup of Coffee and Chat with Me...
					</a>
				</div>
			</div>
			<h2>Education</h2>
			<div className="education">
				<CustomizedTimeline />
			</div>
			<h2>GitHub Statistics</h2>
			<div className="container__github">
				<GithubCalender />
				<Stats />
			</div>
		</section>
	);
};

export default About;
