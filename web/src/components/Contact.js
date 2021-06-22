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
              Get in Touch{" "}
              <span className="big-dot-contact">
                <FaCircle />
              </span>
            </h1>
            <p className="sub-text-contact">
              I love to chat so please say get in touch via email or connect with me on LinkedIn.
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
