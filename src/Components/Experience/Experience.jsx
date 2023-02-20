import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,Autoplay } from "swiper";
import "swiper/css/autoplay";


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
	SiJest,
	SiCypress,
	SiIntellijidea,
	SiMaterialui,
	SiCanva,
	SiVisualstudiocode,
	SiNetlify,
	SiVercel,
	SiNpm,
	SiHeroku,
	SiPostman,
	SiGithubactions,
} from "react-icons/si";
import { FaPeopleArrows } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdMobileOff } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
const Experience = () => {
	return (
		<section id="skills" className="nav-link skills">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
			<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
		autoplay={{delay:2000}}
        className="mySwiper"
      >
	  <SwiperSlide>
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
				</SwiperSlide>
				<SwiperSlide>
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
							<SiGithubactions className="experience__details-icon" />
							<h4>GitHuh Actions</h4>
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
				</SwiperSlide>
				<SwiperSlide>
				<div
					className="experience_others"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Tools</h3>
					<div className="experience__content">
						<article className="experience__details">
							<SiIntellijidea className="experience__details-icon" />
							<h4>IntelliJ</h4>
						</article>
						<article className="experience__details">
							<SiVisualstudiocode className="experience__details-icon" />
							<h4>VS-Code</h4>
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
							<SiCypress className="experience__details-icon" />
							<h4>Cypress</h4>
						</article>
						<article className="experience__details">
							<SiJest className="experience__details-icon" />
							<h4>Jest</h4>
						</article>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div
					className="experience_others"
					data-aos="flip-up"
					data-aos-duration="2000"
				>
					<h3>Soft Skills</h3>
					<div className="experience__content">
						<article className="experience__details">
						<FaPeopleArrows className="experience__details-icon" />
							<h4>Communication</h4>
						</article>
						<article className="experience__details">
							<MdEmojiPeople className="experience__details-icon" />
							<h4>Leadership</h4>
						</article>
						<article className="experience__details">
							<IoIosPeople className="experience__details-icon" />
							<h4>Team Work</h4>
						</article>
						<article className="experience__details">
							<MdMobileOff className="experience__details-icon" />
							<h4>Work Ethic</h4>
						</article>
						<article className="experience__details">
							<RiLightbulbFlashFill className="experience__details-icon" />
							<h4>Creative</h4>
						</article>
						<article className="experience__details">
							<RxMagnifyingGlass className="experience__details-icon" />
							<h4>Problem Solver</h4>
						</article>
					</div>
				</div>
				</SwiperSlide>



				</Swiper>


			</div>
		</section>
	);
};

export default Experience;
