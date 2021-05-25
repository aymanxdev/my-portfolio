import React from "react";
import "../components/about.css";

const About = () => {
  return (
    <div className="container-about">
      <h1 className="about-title">
        A bit about me - <span className="sub-text"> values</span>
        <span className="big-dot">.</span>
      </h1>
      <div className="bg-dots-about"></div>
      <hr className="line" />
      <p>
        I’m a graduate with a Master’s degree in Software Engineering and a Bachelor degree in
        Computer Science. I enjoy creating applications that allow me to combine my background in
        technolgoy and my interest in clean design
      </p>
      <div className="btns">
        <button className="github-btn">
          <span className="btn-main-text">
            Checkout My <span className="btn-sub-text">GitHub</span>
          </span>
        </button>
        <button className="cv-btn">
          <span className="btn-main-text">
            Download my <span className="btn-sub-text">CV</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
