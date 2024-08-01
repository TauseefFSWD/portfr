// src/components/Skills.js
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      name: "MongoDB",
      description:
        "Deep knowledge of MongoDB for database management and optimization. Experienced in designing schemas, indexing, and optimizing queries to ensure high performance and scalability in database operations.",
      icon: "🔍", // Replace these with actual images or icons if desired
    },
    {
      name: "Express",
      description:
        "Expertise in building robust backend applications using Express. Proficient in creating RESTful APIs, middleware integration, and handling asynchronous operations to build scalable server-side applications.",
      icon: "🚀",
    },
    {
      name: "React",
      description:
        "Proficient in creating dynamic and responsive front-end applications with React. Skilled in using hooks, state management, and component-based architecture to build interactive user interfaces and SPAs.",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      description:
        "Extensive experience with Node.js for server-side development and API creation. Capable of building high-performance, event-driven applications using Node.js and its ecosystem, including npm and various libraries.",
      icon: "🟢",
    },
  ];

  return (
    <div className="skills" id="Skills">
      <h2>My Skills</h2>
      <div className="skills-cards">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-content">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
