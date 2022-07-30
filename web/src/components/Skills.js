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
              <li>TypeScript & JS ES6</li>
              <li>React.JS(Redux & Hooks)</li>
              <li>Styled-Components</li>
              <li>HTML5 / CSS / SASS</li>
              <li>REST API & GraphQL</li>
              <li>NodeJS & Python</li>
              <li>Git & Lerna </li>
              <li>MongoDB & SQL</li>
              <li>AWS & Jenkins</li>
              <li>Docker & Redis</li>
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
