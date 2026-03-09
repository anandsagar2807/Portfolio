import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

// ========== DATA ==========
const SKILLS = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '📦' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Git', icon: '🔧' },
];

const PROJECTS = [
  {
    name: 'AquaCON',
    subtitle: 'Water Conservation Website',
    desc: 'AI-powered web application detecting water wastage from images with automated analytical reports.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    name: 'SkillLens',
    subtitle: 'AI-Based Skill Gap Identifier',
    desc: 'NLP-based system comparing resumes with job descriptions and identifying skill gaps.',
    stack: ['JavaScript', 'NLP', 'React'],
    github: '#',
    demo: '#'
  },
  {
    name: 'TrackZEN',
    subtitle: 'AI Powered Health Recommender',
    desc: 'Health recommendation system analyzing lifestyle habits with personalized wellness suggestions.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    github: '#',
    demo: '#'
  },
];

// ========== COMPONENTS ==========

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-cyan-500/20"
      style={{ background: 'rgba(11, 15, 20, 0.8)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-16">
        <motion.a
          href="#"
          className="text-2xl font-bold"
          style={{ background: 'linear-gradient(135deg, #00d4ff, #0099ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          whileHover={{ scale: 1.1 }}
        >
          AS
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              whileHover={{ color: '#00d4ff' }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cyan-400"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan-500/20"
            style={{ background: 'rgba(11, 15, 20, 0.95)' }}
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-20 pb-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-sm font-mono"
          >
            &gt; Hello, World
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            I'm a Software Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-300 text-lg font-medium"
          >
            Building digital experiences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg"
          >
            Crafting exceptional digital products with modern technologies. Full-stack developer, cloud enthusiast, and problem solver.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-white border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all"
            >
              View Projects <ArrowRight className="inline ml-2" size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 153, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 lg:gap-12 pt-8"
          >
            <div className="flex flex-col">
              <p className="text-3xl lg:text-4xl font-bold text-cyan-400">100+</p>
              <p className="text-gray-400 text-xs lg:text-sm mt-2">LeetCode Problems</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl lg:text-4xl font-bold text-cyan-400">8.22</p>
              <p className="text-gray-400 text-xs lg:text-sm mt-2">CGPA (B.Tech)</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl lg:text-4xl font-bold text-cyan-400">2+</p>
              <p className="text-gray-400 text-xs lg:text-sm mt-2">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative w-full flex justify-center"
          >
            {/* Neon Glow Background */}
            <div className="absolute -inset-4 rounded-2xl opacity-75 blur-xl" style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              animation: 'pulse 2s ease-in-out infinite'
            }} />

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 w-64 sm:w-72 lg:w-80 h-80 sm:h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F11ba7d5ce9344242b5846257f257d0e8%2Fe110f31e4c684e96aecdb9a6bbf82078?format=webp&width=800&height=1200"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              I'm a B.Tech Computer Science Engineering student from Institute of Aeronautical Engineering, passionate about building scalable web applications and solving complex problems.
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              With hands-on experience in full-stack development, I specialize in creating responsive and user-friendly digital experiences. I'm certified in Oracle Cloud and Azure, with expertise in both frontend and backend technologies.
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              I love collaborating with teams, learning new technologies, and contributing to projects that make a real impact.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {[
              { label: 'Education', value: 'B.Tech CSE (IARE)' },
              { label: 'Location', value: 'Hyderabad, India' },
              { label: 'Experience', value: '2+ Internships Completed' },
              { label: 'Certifications', value: '6+ Professional Certs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md hover:bg-cyan-500/10 transition-all"
              >
                <p className="text-cyan-400 text-sm font-semibold">{item.label}</p>
                <p className="text-white text-lg">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
        >
          Technical <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              }}
              className="p-6 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md hover:border-cyan-500/50 transition-all cursor-pointer group"
            >
              <p className="text-4xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</p>
              <p className="text-white font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md p-6 lg:p-8 hover:border-cyan-500/50 transition-all overflow-hidden relative flex flex-col h-full"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-300 -z-10" />

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-cyan-400 text-xs lg:text-sm font-semibold mb-4">{project.subtitle}</p>
              <p className="text-gray-300 text-sm lg:text-base mb-6 leading-relaxed flex-grow">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={16} /> GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
        >
          Get in <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12 text-base lg:text-lg"
        >
          Let's discuss your next project or opportunity
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-6 lg:p-8 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md w-full"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white text-sm lg:text-base font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm lg:text-base"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-white text-sm lg:text-base font-semibold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none text-sm lg:text-base"
              placeholder="Your message here..."
              rows="6"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 lg:gap-8 mt-12"
        >
          {[
            { icon: <Github size={24} />, href: '#', label: 'GitHub' },
            { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
            { icon: <Mail size={24} />, href: 'mailto:23951A050P@iare.ac.in', label: 'Email' },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-cyan-500/20 py-8 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(11, 15, 20, 0.5)' }}>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm lg:text-base text-center md:text-left">
          Designed & Built by <span className="text-cyan-400 font-semibold">Anand Sagar Gurram</span>
        </p>
        <p className="text-gray-500 text-xs lg:text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

// ========== MAIN APP ==========
export default function App() {
  return (
    <div style={{ background: '#0b0f14' }} className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 212, 255, 0.3) rgba(11, 15, 20, 0.5);
        }
        *::-webkit-scrollbar {
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(11, 15, 20, 0.5);
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(0, 212, 255, 0.3);
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
