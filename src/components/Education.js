// src/components/Education.js
import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Mumbai University",
      year: "2019 - 2022",
      description:
        "Graduated with 9.5 CGPA, focusing on software development, data structures, algorithms, and web development.",
    },
    {
      degree: "Full Stack Development ",
      institution: "UpGrad",
      year: "2023 - 2024",
      description:
        "Specialized in full stack development, MERN Stack development, and modern web technologies.",
    },
    {
      degree: "Full Stack Web Develpoer Intern",
      institution: "Ntech Global Solutions",
      year: "2023 - 2024",
      description:
        "During my internship as a Full Stack Developer, I gained hands-on experience working on both frontend and backend components of web applications.",
    },
  ];

  return (
    <div className="education">
      <h2>Education & Experiences</h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.year}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
