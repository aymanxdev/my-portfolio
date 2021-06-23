import React from "react";
import "../components/hero.css";
import myImg from "../assets/images/profile-pic.png";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="col-left">
        <h1 className="gradient-text">
          Hello, I’m Ayman{"  "}
          <span id="big-dot-hero">
            {" "}
            <FaCircle />
          </span>
          <br />
          <span className="subtitle">
            Software Engineer <br /> based in London
          </span>
        </h1>
      </div>
      <div className="col-right">
        <img className="main-photo" src={myImg} alt=" photo" />
      </div>
    </div>
  );
};

export default Hero;
