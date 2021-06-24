import React from "react";
import "../components/contact.css";
import { FaCircle } from "react-icons/fa";

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
              Let's Build Together{" "}
              <span className="big-dot-contact">
                <FaCircle />
              </span>
            </h1>
            <p className="sub-text-contact">
              I love to chat and meeting people so please feel free to reach out if you're looking
              for a developer, have a question, or just want to connect.
            </p>
            <a href="mailto: contact@aymanx.io?subject=👋 Hi Ayman" className="contact-email">
              <h4>contact@aymanx.io</h4>
            </a>
            <a href="mailto: contact@aymanx.io?subject=👋 Hi Ayman">
              <button className="contact-btn">
                <span className="btn-contact-text">Say Hello</span>{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
