import React from "react";
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

        <p className="sub-text-about">
          I have completed Master Degree in Advanced Manufacturing and Software Engineering in
          January, 2021, and a Bachelor degree in Computer Science. As I've grown as a software
          engineer, I've worked alongside senior designers and developers who have raised my
          standards for whats expected of any web application. Through these experiences, I've been
          able to design memorable products that are not only fun to use but also written in
          maintainable and understandable code. Coding is my passion and gives me immerse
          satisfaction when achieving every tiny bit. I also enjoy listenig to music, going out for
          picnics, photogrphy and design.
        </p>
        <div className="btns">
          <a href={"https://github.com/aymanxdev"}>
            <button className="github-btn">
              <span className="btn-main-text">
                Checkout My <span className="btn-sub-text">GitHub</span>
              </span>
            </button>
          </a>

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
