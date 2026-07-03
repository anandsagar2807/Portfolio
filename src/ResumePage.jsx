import React from "react";
import { X, Printer } from "lucide-react";

export default function ResumePage({ onClose }) {
  return (
    <div className="resume-overlay">
      <div className="resume-toolbar no-print">
        <button className="resume-close-btn" onClick={onClose}><X size={20} /> Close</button>
        <button className="resume-print-btn" onClick={() => window.print()}><Printer size={18} /> Download / Print</button>
      </div>

      <div className="resume-page" id="resume-content">
        {/* Header */}
        <div className="r-header">
          <h1>Gurram Anand Sagar</h1>
          <p className="r-contact-line">
            anandsagar.gurram@gmail.com &nbsp;|&nbsp; +91-9493086760 &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/anand-sagar-gurram-6408b831a/" target="_blank" rel="noreferrer">LinkedIn</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/anandsagar2807" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>

        <hr className="r-divider" />

        {/* Education */}
        <section className="r-section">
          <h2 className="r-section-title">Education</h2>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">Institute of Aeronautical Engineering — Hyderabad, India</span>
              <span className="r-entry-date">Aug 2023 – Sep 2027</span>
            </div>
            <p className="r-entry-sub">Bachelor of Technology (B.Tech) in Computer Science and Engineering — CGPA: 8.44/10.00 (till VI-sem)</p>
          </div>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">Narayana Junior College — Hyderabad, India</span>
              <span className="r-entry-date">May 2023</span>
            </div>
            <p className="r-entry-sub">Intermediate (MPC) — CGPA: 8.93/10</p>
          </div>
        </section>

        <hr className="r-divider" />

        {/* Technical Skills */}
        <section className="r-section">
          <h2 className="r-section-title">Technical Skills</h2>
          <table className="r-skills-table">
            <tbody>
              <tr><td className="r-skill-cat">Programming Languages</td><td>Python, Java, JavaScript</td></tr>
              <tr><td className="r-skill-cat">Frontend</td><td>React.js, TypeScript, HTML, CSS</td></tr>
              <tr><td className="r-skill-cat">Backend</td><td>Node.js, Express.js, MySQL, Flask, MongoDB</td></tr>
              <tr><td className="r-skill-cat">Tools &amp; Platforms</td><td>FastAPI, Git, VS Code, Google Cloud, Docker, AWS, Salesforce, ServiceNow</td></tr>
            </tbody>
          </table>
        </section>

        <hr className="r-divider" />

        {/* Internships */}
        <section className="r-section">
          <h2 className="r-section-title">Internships</h2>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">Zaalima Development Pvt. Ltd — Bangalore</span>
              <span className="r-entry-date">March – June 2026</span>
            </div>
            <p className="r-entry-sub">Web Development Stipend Based Intern</p>
            <ul className="r-list">
              <li>Developed web application using React.js for frontend and Node.js for backend.</li>
              <li>Worked with real-world application development workflows including code writing, version control, and collaborative development with a team.</li>
            </ul>
          </div>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">Octacomm Technologies — Hyderabad</span>
              <span className="r-entry-date">Apr – May 2024</span>
            </div>
            <p className="r-entry-sub">Java Full Stack Development Intern</p>
            <ul className="r-list">
              <li>Built a real-time news portal using Java, Spring Boot, HTML, CSS, and JavaScript.</li>
              <li>Implemented backend APIs and integrated frontend interfaces while meeting project deadlines.</li>
            </ul>
          </div>
        </section>

        <hr className="r-divider" />

        {/* Projects */}
        <section className="r-section">
          <h2 className="r-section-title">Projects</h2>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">GitGuard AI — An AI-powered code review Assistant</span>
            </div>
            <ul className="r-list">
              <li>Developed a Full Stack Website that connects GitHub Repositories on a single click, analyzes pull requests, and identifies bugs/security/performance issues automatically.</li>
              <li>Integrated GitHub's Octokit SDK to retrieve PR diff data, enabling automated code analysis and repository metrics tracking.</li>
              <li><strong>Tech Stack:</strong> React.js, TypeScript, Node.js, MongoDB, Express.js, GitHub OAuth, Clerk Authentication</li>
            </ul>
          </div>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">AquaCON — Water Conservation Platform</span>
            </div>
            <ul className="r-list">
              <li>Built an AI-based web platform to detect water wastage from images and generate automated reports for monitoring.</li>
              <li>Designed responsive UI with a solid foundation extensible with backend services and additional features.</li>
              <li><strong>Tech Stack:</strong> React.js, TypeScript, Node.js, Clerk Authentication</li>
            </ul>
          </div>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">OpsMind AI — Transforms internal PDFs into a searchable Insights Platform</span>
            </div>
            <ul className="r-list">
              <li>Enterprise platform that transforms internal PDFs (SOPs, manuals, policies) into a secure, searchable knowledge base with a Specialised Sales Copilot, processing documents from upload to chunking, storing them in MongoDB.</li>
              <li><strong>Tech Stack:</strong> React.js, TypeScript, Node.js, MongoDB</li>
            </ul>
          </div>
        </section>

        <hr className="r-divider" />

        {/* Certifications */}
        <section className="r-section">
          <h2 className="r-section-title">Certifications</h2>
          <ul className="r-list">
            <li>Oracle: OCI 2025 Certified Generative AI Professional</li>
            <li>Copado Salesforce: Copado AI Certified Professional</li>
            <li>Oracle: Certified AI Foundations Associate</li>
            <li>TCS: Certified Young Professional</li>
            <li>Coursera: Data Structures and Backend with Java</li>
          </ul>
        </section>

        <hr className="r-divider" />

        {/* Competitive Programming */}
        <section className="r-section">
          <h2 className="r-section-title">Competitive Programming &amp; Coding Profiles</h2>
          <ul className="r-list">
            <li>LeetCode: anandgurram — 100+ problems solved.</li>
            <li>HackerRank: 45+ problems solved; Badges: Java Silver (3★), SQL Silver (4★).</li>
            <li>GeeksforGeeks: anandsagar2807 — 43 problems solved.</li>
            <li>Solved 200+ programming problems across competitive coding platforms demonstrating strong problem-solving skills.</li>
          </ul>
        </section>

        <hr className="r-divider" />

        {/* Hackathons */}
        <section className="r-section">
          <h2 className="r-section-title">Hackathons</h2>
          <ul className="r-list">
            <li><strong>National AI/ML Hackathon by IIT Hyd</strong> — Submitted a prototype in a competitive hackathon solving real-world technical challenges in 2026.</li>
            <li><strong>Adobe Hackathon 2025</strong> — Participated in a national-level hackathon focused on innovation and technical problem solving.</li>
            <li><strong>KLH Hack with AI</strong> — Participated in an AI-focused hackathon developing intelligent application solutions; team stood out in top 30.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
