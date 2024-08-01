// src/components/Home.js
import React from "react";
import TypingEffect from "./TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="typing-effect">
        <TypingEffect
          texts={[
            "I am a Frontend Developer",
            "I am a Backend Developer",
            "I am a Full Stack Developer",
          ]}
          typeSpeed={100}
          backSpeed={50}
        />
      </div>
      <div className="resume-container">
        <a
          href="https://drive.google.com/file/d/1iJXuF8TWi8gypFAdQMAN0LvDHTD8xbuf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <FontAwesomeIcon icon={faFileAlt} className="resume-icon" />
          <span>View My Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
