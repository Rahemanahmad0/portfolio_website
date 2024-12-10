import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import myimg from "../../assets/myimg.jpg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img className="myimg" src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="myimg1" src={myimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced frontend developer with over 2 years. </p>
            <p>My passion for frontend development is not showoff </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p> HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p> React js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Nextjs</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>years of experience</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
