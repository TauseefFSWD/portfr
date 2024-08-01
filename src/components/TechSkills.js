// src/components/TechSkills.js
import React from "react";
import "./TechSkills.css";

const TechSkills = () => {
  const techData = [
    {
      title: "Frontend Development",
      description:
        " Experienced frontend developer with 1.5 years of expertise in creating dynamic and responsive web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React and AngularJS. Skilled in  translating designs into user-friendly interfaces and ensuring cross-browser compatibility. Adept at using Git and agile methodologies, with a strong focus on UX/UI and continuous improvement.",
    },
    {
      title: "Backend Development",
      description:
        " Backend developer skilled in building scalable and efficient server-side applications. Proficient in languages such as Node.js, with expertise in frameworks like Express. Capable of designing RESTful APIs, managing MONGO databases, and optimizing performance. Strong in using version control systems like Git and following agile practices, with a focus on delivering robust and secure backend solutions.",
    },
  ];

  return (
    <div className="tech-skills">
      <h2>Technical Skills</h2>
      <div className="tech-cards">
        {techData.map((tech, index) => (
          <div className="tech-card" key={index}>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
