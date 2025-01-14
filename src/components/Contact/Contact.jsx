import React from "react";

// Styles
import "./contact.css";

import shakeImage from "../../images/shake.svg";

// Components
import { Heading } from "../Heading/Heading";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaHashnode, FaXTwitter } from "react-icons/fa6";

const Contact = () => {

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <img src={shakeImage} alt="shake hands" />
        </div>
        <div className="right">
          <p style={{ marginLeft: '2.5rem' }}>Want to talk? I'm just a text away!</p>
          <div className="social-icons" style={{ display: "flex", gap: "1.5rem" }}>
            <a href="https://linkedin.com/in/ritvik-puranik" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/ritvikPuranik" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://x.com/ritvikPuranik" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={30} />
            </a>
            <a href="https://technudge.in" target="_blank" rel="noopener noreferrer">
              <FaHashnode size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
