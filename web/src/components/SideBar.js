import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { Link } from "gatsby";

import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar-icons">
      <ul>
        <li>
          <a href={"https://github.com/aymanxdev"}>
            <FaGithub className="github-icon" />
          </a>
        </li>
        <li>
          <a href={"https://www.linkedin.com/in/ayman-io/"}>
            <FaLinkedin className="li-icon" />
          </a>
        </li>
        <li>
          <a to={"https://aymanx.medium.com/"}>
            <FaMedium className="m-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
