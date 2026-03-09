import React from "react";
import "./App.css";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience.",
  },
  {
    title: "E-commerce Website",
    description:
      "Full-stack shopping platform with authentication, product listing, and cart system.",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage tasks using React and local storage.",
  },
];

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Anand Sagar</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Hello, I'm Anand</h1>
        <p>Frontend Developer | React Developer</p>
        <button className="btn">Download Resume</button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="btn-small">View Project</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>

        <div className="contact-container">
          <p>Email: anandsagar@example.com</p>
          <p>GitHub: github.com/anandsagar</p>
          <p>LinkedIn: linkedin.com/in/anandsagar</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Anand Sagar. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;