// src/components/Home.js
import React from "react";
import TypingEffect from "./TypingEffect";
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
    </div>
  );
};

export default Home;
