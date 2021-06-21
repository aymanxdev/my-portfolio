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
          <Link to={"https://github.com/aymanxdev"}>
            <FaGithub className="github-icon" />
          </Link>
        </li>
        <li>
          <Link to={"https://www.linkedin.com/in/ayman-io/"}>
            <FaLinkedin className="li-icon" />
          </Link>
        </li>
        <li>
          <Link to={"https://aymanx.medium.com/"}>
            <FaMedium className="m-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
