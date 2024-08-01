// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/TauseefFSWD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/tauseef-akbar-a332521b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/shaikh_tauseef832/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p>&copy; 2024 Tauseef Shaikh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
