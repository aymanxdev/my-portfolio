import React from "react";
import "../components/hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="col-left">
        <h1>
          Hi I’m Ayman<span className="dot"></span>
          <span className="subtitle">Software Engineer based in London </span>
        </h1>
      </div>
      <div className="col-right">
        <div className="hero-pattern"></div>
        <img className="hero-photo" src="ayman-pic.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
