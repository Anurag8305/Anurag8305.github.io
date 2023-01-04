import React from 'react'
import "./Header.css";
import CTA from './CTA';
import ME from "../../Images/profile.png";
import HeaderSocials from './HeaderSocials';



const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anurag Raj</h1>
        <h5 className='text-light'>Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials /> 
        <div className="me">
          <img src={ME} alt="" srcset="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header