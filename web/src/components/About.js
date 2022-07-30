import React from "react";
import { FaCircle } from "react-icons/fa";
import "../components/about.css";
import MSAyman from "../assets/images/Microsoft-hackathon.jpeg";
import { Link } from "gatsby";

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
          I did my masters Advanced Manufacturing and ML. And my bachelor degree in Computer
          Science. As I've grown as a software engineer, I've worked alongside senior developers and
          designers who have raised my standards for what's expected of any web application. Through
          these experiences, I've been able to design memorable products that are not only fun to
          use but also written in maintainable and understandable code. It gives me an immense
          satisfaction to build software that millions of people use. I fully appreciate the
          opportunity to collaborate and contribute to open-source projects. I enjoy listening to
          music, trying different foods, picnics, photography and design.
        </p>
        <div className="btns">
          <a href={"https://github.com/aymanxdev"}>
            <button className="github-btn">
              <span className="btn-main-text">
                Checkout My <span className="btn-sub-text">GitHub</span>
              </span>
            </button>
          </a>

          <Link to="/archive">
            <button className="cv-btn">
              <span className="btn-main-text">
                Browse my <span className="btn-sub-text">projects</span>
              </span>
            </button>
          </Link>
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
