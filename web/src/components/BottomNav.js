import React from "react";
import { Link } from "gatsby";

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
      </nav>
    </div>
  );
};

export default BottomNav;
