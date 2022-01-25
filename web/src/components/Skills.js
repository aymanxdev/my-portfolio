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
              <li>React.JS(Redux & Hooks)</li>
              <li>Styled-Component</li>
              <li>HTML5 / CSS / SASS</li>
              <li>REST API</li>
              <li>NodeJS</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>VSCode</li>
              <li>Python</li>
              
            </ul>
            <ul>
              <li>Teamwork</li>
              <li>Networking</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
              <li>Creative Thinking</li>
              <li>Positive Attitude</li>
              <li>Analytical Thinking</li>
              <li>Support & Honesty</li>
              <li>Mindset of Learning & Curiosity</li>
            </ul>
          </div>
          <div className="big-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
