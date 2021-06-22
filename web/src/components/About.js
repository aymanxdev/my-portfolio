import React from "react";
import { Link } from "gatsby";
import { FaCircle } from "react-icons/fa";

import "../components/about.css";
import MSAyman from "../assets/images/Microsoft-hackathon.jpeg";
import PDFfile from "../assets/images/Ayman_CV_2021.pdf";
const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="left-col-about">
        <h1 className="about-title">
          A bit about me - <span className="sub-text"> values </span>
          <span className="big-dot">
            {" "}
            <FaCircle />
          </span>
        </h1>
        <hr className="line" />
        <p className="sub-text-about">
          I’m a graduate with a Master’s degree in Software Engineering and a Bachelor degree in
          Computer Science. I enjoy creating applications that allow me to combine my background in
          technolgoy and my interest in clean design
        </p>
        <div className="btns">
          <Link to={"https://github.com/aymanxdev"}>
            <button className="github-btn">
              <span className="btn-main-text">
                Checkout My <span className="btn-sub-text">GitHub</span>
              </span>
            </button>
          </Link>

          <a href={PDFfile} target="_blank" download="Ayman_CV_2021.pdf">
            <button className="cv-btn">
              <span className="btn-main-text">
                Download my <span className="btn-sub-text">CV</span>
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="righ-col-about">
        <div id="corner-about-tl" className="corner-about"></div>
        <div id="corner-about-tr" className="corner-about"></div>
        <div id="corner-about-bl" className="corner-about"></div>
        <div id="corner-about-br" className="corner-about"></div>
        <img className="about-photo" src={MSAyman} alt="Microsoft Hackthon" />
      </div>
    </div>
  );
};

export default About;
