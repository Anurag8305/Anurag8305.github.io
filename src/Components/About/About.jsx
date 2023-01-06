import React from 'react'
import "./About.css";
import ME from "../../Images/profile.png";
import {FaAward} from "react-icons/fa";
import {BiCodeAlt} from "react-icons/bi";
import {SiMusicbrainz} from "react-icons/si";
import {VscFolderLibrary} from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
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
              <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Coding Experience</h5>
                <small>1200+ hours</small>
              </article>
              <article className='about__card'>
              <BiCodeAlt className='about__icon'/>
                <h5>Lines of Code</h5>
                <small>12000+</small>
              </article>
              <article className='about__card'>
              <SiMusicbrainz className='about__icon'/>
                <h5>Soft Skills Training</h5>
                <small>100+ hours</small>
              </article>
              <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>Over 40+ Projects</small>
              </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni similique ab ipsa explicabo, et aperiam doloribus, ut praesentium, ipsum dicta facilis provident fugiat sed culpa inventore obcaecati molestiae repudiandae.</p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About