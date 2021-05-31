import React from "react";
import "../components/contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="bg-dots-contact"></div>
      <div className="sub-container-contact">
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
  );
};

export default Contact;
