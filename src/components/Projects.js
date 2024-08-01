// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Chit-Chat Hub",
      description:
        "Developed a messaging website using React for a dynamic frontend, with Bootstrap for responsive design. Implemented real-time communication and user authentication with Node.js and Express, and managed data using MongoDB. Features include intuitive chat interactions, group messaging, and emoji support, all optimized for a seamless user experience.",
      link: "https://chitchat-hub.onrender.com/",
    },
    {
      title: "Shop-IT",
      description:
        "Developed a comprehensive e-commerce website featuring product listings, a shopping cart, and secure checkout functionality. Utilized React for a dynamic frontend experience, Bootstrap for responsive design, and Node.js with Express for backend services. Integrated MongoDB for scalable data management, supporting CRUD operations for products and user accounts. The site includes user authentication, payment processing, and a seamless shopping experience.",
    },
    {
      title: "PRO-File App",
      description:
        "Developed a profile app enabling users to create and manage personalized profiles upon login. Built with React for a dynamic frontend and Bootstrap for responsive design. The backend is powered by Node.js and Express, with MongoDB for secure data management. The app supports full CRUD operations—Create, Read, Update, and Delete—allowing users to customize their profiles seamlessly. Features include user authentication and an intuitive interface for a personalized experience.",
      link: "https://finalfrontend-tt30.onrender.com/",
    },
  ];

  return (
    <div className="projects" id="Projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
