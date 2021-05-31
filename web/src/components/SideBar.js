import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar-icons">
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
  );
};

export default SideBar;
