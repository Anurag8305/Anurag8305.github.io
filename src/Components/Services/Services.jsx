import React from "react";
import "./Services.css";
import { BsDot } from "react-icons/bs";
const Services = () => {
	return (
		<section id="myservice ">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article
					className="service"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="800"
				>
					<div className="service__head">
						<h3>Web Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsDot className="list-icon" />
							<p>
								Develop highly interactive User Interfaces and Backend for web
								applications
							</p>
						</li>
						<li>
							<BsDot className="list-icon" />
							<p>Building responsive website front end using ReactJS</p>
						</li>
						<li>
							<BsDot className="list-icon" />
							<p>Creating application backend in Node, Express.</p>
						</li>
					</ul>
				</article>
				<article
					className="service"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1200"
				>
					<div className="service__head">
						<h3>Cloud Infra-Architecture</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsDot className="list-icon" />
							<p>Experience working on multiple cloud platforms</p>
						</li>
						<li>
							<BsDot className="list-icon" />
							<p>Experience hosting and managing websites</p>
						</li>
						<li>
							<BsDot className="list-icon" />
							<p>Experience with Continuous Integration</p>
						</li>
					</ul>
				</article>
				<article
					className="service"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1600"
				>
					<div className="service__head">
						<h3>Logo Designing</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsDot className="list-icon" />
							<p>Simple and classic logo designing</p>
						</li>
						<li>
							<BsDot className="list-icon" />
							<p>Platform independent but confident with Canva</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
