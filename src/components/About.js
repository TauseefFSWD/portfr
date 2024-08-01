// src/components/About.js
import React from "react";
import "./About.css";
import Education from "./Education";
import TechSkills from "./TechSkills";

const About = () => {
  return (
    <section class="about" id="about">
      <h2 class="title">
        About <span>Me</span>
      </h2>
      <Education />
      <TechSkills />
    </section>
  );
};

export default About;
