import React from "react";
import "../components/btmNav.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
const BottomNav = () => {
  return (
    <div class="wrapper">
      <div className="btm-nav-icons">
        <ul>
          <li>
            {" "}
            <FaGithub />{" "}
          </li>
          <li>
            {" "}
            <FaLinkedin />{" "}
          </li>
          <li>
            {" "}
            <FaMedium />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
