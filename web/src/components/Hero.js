import React from "react";
import "../components/hero.css";
import myImg from "../../public/images/ayman-pic.png";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="col-left">
        <h1 className="gradient-text">
          Hi! I’m Ayman
          <span id="big-dot-hero">.</span>
          <br />
          <span className="subtitle">
            Software Engineer <br /> based in London
          </span>
        </h1>
      </div>
      <div className="col-right">
        <span className="dots-right-corner"></span>
        <span className="dots-bottom-corner"></span>
        <img className="main-photo" src={myImg} />
      </div>
    </div>
  );
};

export default Hero;
