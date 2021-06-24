import React from "react";
import "../components/skills.css";
import { FaCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container-skills">
      <div className="container-skill-shadow">
        <div className="sub-container-skills">
          <div id="corner-tl" className="corner"></div>
          <div id="corner-tr" className="corner"></div>
          <div id="corner-br" className="corner"></div>
          <div id="corner-bl" className="corner"></div>
          <div className="skill-title-container">
            <h1 className="title-skill">
              Skills - <span className="sub-text-text"> Technologies & Interpersonal </span>
              <span className="big-dot-skills">
                <FaCircle />
              </span>
            </h1>
            <hr className="line-skills" />
          </div>

          <div className="tech-tools-container">
            <ul>
              <li>JavaScript (ES6)</li>
              <li>Python</li>
              <li>React.JS</li>
              <li>REST API</li>
              <li>NodeJS</li>
              <li>Gatsby</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>VSCode & PyCharm</li>
              <li>HTML5 / CSS / SASS</li>
            </ul>
            <ul>
              <li>Teamwork</li>
              <li>Networking</li>
              <li> Communication</li>
              <li>Time Management</li>
              <li>Agile Methodology</li>
              <li>Problem Solving</li>
              <li>Creative Thinking</li>

              <li>Positive Attitude</li>
              <li>Analytical Thinking</li>
              <li>Leadership & Honesty</li>
            </ul>
          </div>
          <div className="big-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
