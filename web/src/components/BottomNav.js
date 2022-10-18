import React from "react";
import "../components/btmNav.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
const BottomNav = () => {
  return (
    <div class="wrapper">
      <nav className="btm-nav-icons">
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
            <a href={"https://aymanx.medium.com/"}>
              <FaMedium className="m-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
