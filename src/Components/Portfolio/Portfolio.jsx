import React from "react";
import "./Portfolio.css";
import project1 from "../../Images/Project1.gif";
import project2 from "../../Images/Project2.gif";
import project3 from "../../Images/Project3.PNG";
const Portfolio = () => {
	return (
		<section id="projects">
			<h5>My Recent Work</h5>
			<h2>Projects</h2>
			<div className="container portfolio__container" data-aos="flip-up">
				<article
					className="portfolio__item"
					data-aos="zoom-in"
					data-aos-duration="2000"
				>
					<div className="portfolio__item-image">
						<img src={project1} alt="portfolioproject" srcset="" />
					</div>
					<h3>Co-Commerce</h3>
					<small>
						A clone of famous LimeRoad website. A group project that is made
						during the time span of 5 days. Some interesting features of the
						website are products page(men's and women's), sorting functionality
						with price, single product description page, cart functionality,
						login and signup feature, private routing and admin panel.
					</small>
					<h4>Tech-Stacks: React | Chakra UI | CSS | JSON-Server</h4>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/Anurag8305/-subdued-trip-4276"
							className="btn"
							target={"_blank"}
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://cocommerse-ten.vercel.app/"
							className="btn btn-primary"
							target={"_blank"}
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>
				<article
					className="portfolio__item"
					data-aos="zoom-in"
					data-aos-duration="2000"
				>
					<div className="portfolio__item-image">
						<img src={project2} alt="portfolioproject" srcset="" />
					</div>
					<h3>FitBuddies</h3>
					<small>
						A clone of famous MyFitnessPal webiste that tracks diet and
						exercise. A group project that is made during the time span of 5
						days. A online platform which helps you to keep and track your
						workout data online. You can add there your daily workout activity
						such as type of exercise and calorie intake.
					</small>
					<h4>Tech-Stacks: HTML | CSS | Javascript | JSON-Server</h4>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/eraltafs/eager-structure-3963"
							className="btn"
							target={"_blank"}
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://dulcet-concha-b9f61c.netlify.app"
							className="btn btn-primary"
							target={"_blank"}
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>
				<article
					className="portfolio__item"
					data-aos="zoom-in"
					data-aos-duration="2000"
				>
					<div className="portfolio__item-image">
						<img src={project3} alt="portfolioproject" srcset="" />
					</div>
					<h3>Anurag's Portfolio</h3>
					<small>
						My own Portfolio website to dispaly my skills and achievements. I
						have taken some references for the designing and UI part from
						Youtube videos.
					</small>
					<h4>Tech-Stacks: React | Chakra UI | React-Icons | HTML | CSS | EmailJS</h4>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/Anurag8305/Anurag8305.github.io"
							className="btn"
							target={"_blank"}
							rel="noreferrer"
						>
							GitHub
						</a>
						<a href="netfily.com" className="btn btn-primary" target={"_blank"}>
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
