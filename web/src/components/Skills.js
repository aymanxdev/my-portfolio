import React from "react";
import "../components/skills.css";

const Skills = () => {
  return (
    <div className="container-skills">
      <div className="bg-dots-skills"></div>
      <div className="sub-container-skills">
        <div className="skill-title-container">
          <h1 className="title-skill">
            My Skills - <span className="sub-text-text"> Technologies & Tools</span>
            <span className="big-dot-skills">.</span>
          </h1>
          <hr className="line-skills" />
        </div>

        <div className="tech-tools-container">
          <ul>
            <li>Python</li>
            <li>JavaScript (ES6)</li>
            <li>Reactjs</li>
            <li>REST API</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Nodejs</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>HTML / CSS</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
