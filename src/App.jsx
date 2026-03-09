import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Star, Zap } from 'lucide-react';

// ========== DATA ==========
const SKILLS = [
  { name: 'Java', icon: '☕', color: '#F8A534' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js', icon: '📦', color: '#68A063' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
  { name: 'SQL', icon: '🗄️', color: '#CC2927' },
  { name: 'Git', icon: '🔧', color: '#F1502F' },
];

const PROJECTS = [
  {
    name: 'AquaCON',
    subtitle: 'Water Conservation Website',
    desc: 'AI-powered web application detecting water wastage from images with automated analytical reports.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    icon: '💧',
    gradient: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#'
  },
  {
    name: 'SkillLens',
    subtitle: 'AI-Based Skill Gap Identifier',
    desc: 'NLP-based system comparing resumes with job descriptions and identifying skill gaps.',
    stack: ['JavaScript', 'NLP', 'React'],
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-500',
    github: '#',
    demo: '#'
  },
  {
    name: 'TrackZEN',
    subtitle: 'AI Powered Health Recommender',
    desc: 'Health recommendation system analyzing lifestyle habits with personalized wellness suggestions.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    icon: '❤️',
    gradient: 'from-rose-500 to-orange-500',
    github: '#',
    demo: '#'
  },
];

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// ========== COMPONENTS ==========

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-cyan-500/10"
      style={{ background: 'linear-gradient(180deg, rgba(11, 15, 20, 0.95) 0%, rgba(11, 15, 20, 0.8) 100%)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-16">
        <motion.a
          href="#"
          className="text-2xl font-black tracking-tighter"
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
              className="text-gray-300 hover:text-cyan-300 transition-colors text-sm font-semibold relative group"
              whileHover={{ color: '#00d4ff' }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
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
            className="md:hidden border-t border-cyan-500/10"
            style={{ background: 'rgba(11, 15, 20, 0.95)' }}
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-semibold"
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
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md"
          >
            <Zap size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold">Available for Opportunities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-cyan-400 text-sm font-mono font-semibold mb-2">
              &gt; Hello, World
            </p>
            <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Anand</span>
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Software Developer
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-300/90 text-lg lg:text-xl font-semibold"
          >
            Building Digital Experiences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg"
          >
            Crafting exceptional digital products with modern technologies. Full-stack developer, cloud enthusiast, and passionate problem solver.
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
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-lg font-bold text-white border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
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
            {[
              { value: '100+', label: 'LeetCode Problems' },
              { value: '8.22', label: 'CGPA' },
              { value: '2+', label: 'Internships' }
            ].map((stat, idx) => (
              <motion.div key={idx} className="flex flex-col" whileHover={{ scale: 1.05 }}>
                <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-gray-500 text-xs lg:text-sm font-semibold mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-full flex justify-center"
          >
            {/* Glowing Border */}
            <div className="absolute -inset-1 rounded-2xl opacity-0 blur-2xl animate-pulse" style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              animation: 'glow-pulse 3s ease-in-out infinite'
            }} />

            {/* Outer Glow */}
            <div className="absolute -inset-4 rounded-2xl opacity-50 blur-3xl" style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              animation: 'float-pulse 4s ease-in-out infinite'
            }} />

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 w-64 sm:w-72 lg:w-80 h-80 sm:h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md shadow-2xl shadow-cyan-500/20">
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
        @keyframes glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
        @keyframes float-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="w-full relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-black text-white mb-16 text-center tracking-tight"
        >
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
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
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-medium">
              I'm a B.Tech Computer Science Engineering student from Institute of Aeronautical Engineering, passionate about building scalable web applications and solving complex problems.
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-medium">
              With hands-on experience in full-stack development, I specialize in creating responsive and user-friendly digital experiences. I'm certified in Oracle Cloud and Azure, with expertise in both frontend and backend technologies.
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-medium">
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
              { label: 'Education', value: 'B.Tech CSE (IARE)', icon: '🎓' },
              { label: 'Location', value: 'Hyderabad, India', icon: '📍' },
              { label: 'Experience', value: '2+ Internships Completed', icon: '💼' },
              { label: 'Certifications', value: '6+ Professional Certs', icon: '⭐' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10, borderColor: 'rgba(0, 212, 255, 0.6)' }}
                className="p-5 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/8 to-blue-500/5 backdrop-blur-md hover:bg-cyan-500/15 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-lg font-bold group-hover:text-cyan-300 transition-colors">{item.value}</p>
                  </div>
                </div>
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
    <section id="skills" className="w-full relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-black text-white mb-16 text-center tracking-tight"
        >
          Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow: `0 20px 40px rgba(0, 212, 255, 0.2)`
              }}
              className="group p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-md hover:border-cyan-500/60 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />

              <div className="relative z-10">
                <p className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 origin-left">{skill.icon}</p>
                <p className="text-white font-bold text-sm lg:text-base group-hover:text-cyan-300 transition-colors">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="w-full relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-black text-white mb-16 text-center tracking-tight"
        >
          Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-md p-6 lg:p-8 hover:border-cyan-500/60 transition-all overflow-hidden relative flex flex-col h-full"
            >
              {/* Animated Background */}
              <div className={`absolute -inset-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`} />

              {/* Icon Badge */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 flex items-center justify-center text-2xl mb-4 transition-all`}
              >
                {project.icon}
              </motion.div>

              <h3 className="text-2xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors relative z-10">{project.name}</h3>
              <p className="text-cyan-400/80 text-sm font-bold mb-4 relative z-10">{project.subtitle}</p>
              <p className="text-gray-300 text-sm lg:text-base mb-6 leading-relaxed flex-grow relative z-10">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold hover:bg-cyan-500/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto relative z-10">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <Github size={16} className="group-hover:scale-125 transition-transform" /> GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <ExternalLink size={16} className="group-hover:scale-125 transition-transform" /> Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="w-full relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-black text-white mb-6 text-center tracking-tight"
        >
          Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12 text-base lg:text-lg font-medium"
        >
          Let's discuss your next project or opportunity
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-6 lg:p-8 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-md w-full relative overflow-hidden"
        >
          {/* Form Glow Background */}
          <div className="absolute -inset-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300" />

          <div className="space-y-2 relative z-10">
            <label htmlFor="email" className="block text-white text-sm lg:text-base font-bold">
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm lg:text-base font-medium"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2 relative z-10">
            <label htmlFor="message" className="block text-white text-sm lg:text-base font-bold">
              Message
            </label>
            <motion.textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-sm lg:text-base font-medium"
              placeholder="Your message here..."
              rows="6"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 relative z-10"
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 lg:gap-8 mt-12 relative z-10"
        >
          {[
            { icon: <Github size={24} />, href: '#', label: 'GitHub' },
            { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
            { icon: <Mail size={24} />, href: 'mailto:23951A050P@iare.ac.in', label: 'Email' },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ scale: 1.3, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors relative p-2 rounded-lg hover:bg-cyan-500/10"
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
    <footer className="w-full border-t border-cyan-500/10 py-8 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 20, 0.5) 0%, rgba(11, 15, 20, 0.8) 100%)' }}>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm lg:text-base text-center md:text-left font-medium">
          Designed & Built by <span className="text-cyan-400 font-bold">Anand Sagar Gurram</span>
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
