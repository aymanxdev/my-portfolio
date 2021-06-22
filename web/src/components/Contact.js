import React from "react";
import "../components/contact.css";

const Contact = () => {
  return (
    <div className="container-contact" id="contact">
      <div className="container-contact-shadow">
        <div className="sub-container-contact">
          <div id="contact-corner-tl" className="contact-corner"></div>
          <div id="contact-corner-tr" className="contact-corner"></div>
          <div id="contact-corner-bl" className="contact-corner"></div>
          <div id="contact-corner-br" className="contact-corner"></div>

          <div className="title-contact">
            <h1 className="title">
              Get in Touch <span className="big-dot-contact">.</span>
            </h1>
            <p className="sub-text-contact">
              I’m a graduate with a Master’s degree in Software Engineering and a Bachelor degree in
              Computer Science. I enjoy creating applications that allow me to combine my background
              in technolgoy and my interest in clean design
            </p>
            <button className="contact-btn">
              <span className="btn-contact-text">Say Hello</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
