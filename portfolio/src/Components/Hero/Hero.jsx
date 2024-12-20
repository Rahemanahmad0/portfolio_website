import React from "react";
import round_profile from "../../assets/round_profile.png";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="round_img" src={round_profile} alt="" />
      <h1>
        <span>I'm Raheman Ahmad,</span>frontend Developer based in india .
      </h1>
      <p>
        I am a front-end Developer from pondicherry,India with 2 years
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link" href="#contact">  connect with me</AnchorLink></div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
        </a>

        {/* <div className="hero-resume">My resume</div> */}
      </div>
    </div>
  );
};

export default Hero;
