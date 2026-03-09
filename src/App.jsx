import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Star, Zap } from 'lucide-react';

// ========== COLOR SCHEME ==========
const COLORS = {
  bg: '#0F172A',
  bgAlt: '#111827',
  primary: '#7C3AED',      // Violet
  primaryLight: '#A78BFA', // Light Violet
  secondary: '#06B6D4',    // Teal
  secondaryLight: '#22D3EE', // Light Teal
  accent: '#06B6D4',
  text: '#E2E8F0',
  textMuted: '#94A3B8',
  border: '#334155'
};

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
    icon: '💧',
    github: '#',
    demo: '#'
  },
  {
    name: 'SkillLens',
    subtitle: 'AI-Based Skill Gap Identifier',
    desc: 'NLP-based system comparing resumes with job descriptions and identifying skill gaps.',
    stack: ['JavaScript', 'NLP', 'React'],
    icon: '🎯',
    github: '#',
    demo: '#'
  },
  {
    name: 'TrackZEN',
    subtitle: 'AI Powered Health Recommender',
    desc: 'Health recommendation system analyzing lifestyle habits with personalized wellness suggestions.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    icon: '❤️',
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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{ 
        background: `linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)`,
        borderColor: `${COLORS.primary}15`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-16">
        <motion.a
          href="#"
          className="text-2xl font-black tracking-tight"
          style={{ color: COLORS.primary }}
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
              className="transition-colors text-sm font-semibold relative group"
              style={{ color: COLORS.textMuted }}
              whileHover={{ color: COLORS.secondary }}
            >
              {item}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: COLORS.secondary }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden transition-colors"
          style={{ color: COLORS.secondary }}
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
            className="md:hidden border-t"
            style={{ background: COLORS.bg, borderColor: `${COLORS.primary}15` }}
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors text-sm font-semibold"
                  style={{ color: COLORS.textMuted }}
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
    <section id="home" className="relative w-full flex items-center justify-center min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute top-32 -left-40 w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: `${COLORS.primary}40` }} />
      <div className="absolute bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: `${COLORS.secondary}40` }} />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-4 sm:px-6 lg:px-12 relative z-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-7"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-start gap-2 w-fit px-4 py-2.5 rounded-full border transition-all"
            style={{ 
              background: `${COLORS.primary}15`,
              borderColor: `${COLORS.primary}40`
            }}
          >
            <Zap size={14} style={{ color: COLORS.primary }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.primary }}>
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-sm font-mono font-bold" style={{ color: COLORS.secondary }}>
              &gt; Hello, World
            </p>
            <div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight" style={{ color: COLORS.text }}>
                I'm <span style={{ color: COLORS.primary }}>koja</span>
              </h1>
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight" style={{ color: COLORS.text }}>
                Software Developer
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-semibold"
            style={{ color: COLORS.secondary }}
          >
            Building Digital Experiences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: COLORS.textMuted }}
          >
            Crafting exceptional digital products with modern technologies. Full-stack developer, cloud enthusiast, and passionate problem solver.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap pt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-lg font-bold text-white border-2 transition-all relative overflow-hidden"
              style={{ 
                borderColor: COLORS.primary,
                background: `${COLORS.primary}10`,
                color: COLORS.text
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-bold text-white transition-all shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                boxShadow: `0 0 30px ${COLORS.primary}40`
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 md:gap-12 pt-6"
          >
            {[
              { value: '100+', label: 'Problems Solved' },
              { value: '8.22', label: 'CGPA' },
              { value: '2+', label: 'Internships' }
            ].map((stat, idx) => (
              <motion.div key={idx} className="flex flex-col" whileHover={{ scale: 1.05 }}>
                <p className="text-4xl md:text-5xl font-black" style={{ color: COLORS.primary }}>{stat.value}</p>
                <p className="text-xs md:text-sm font-bold mt-2" style={{ color: COLORS.textMuted }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-full hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-full flex justify-center"
          >
            {/* Glowing Border */}
            <div className="absolute -inset-1 rounded-2xl opacity-0 blur-2xl animate-pulse" style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              animation: 'glow-pulse 3s ease-in-out infinite'
            }} />

            {/* Outer Glow */}
            <div className="absolute -inset-4 rounded-2xl opacity-40 blur-3xl" style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              animation: 'float-pulse 4s ease-in-out infinite'
            }} />

            {/* Image Container */}
            <div 
              className="relative rounded-2xl overflow-hidden border-2 w-64 sm:w-72 lg:w-80 h-80 sm:h-96 backdrop-blur-md shadow-2xl"
              style={{
                borderColor: COLORS.primary,
                background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
                boxShadow: `0 0 40px ${COLORS.primary}25`
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F11ba7d5ce9344242b5846257f257d0e8%2Fe110f31e4c684e96aecdb9a6bbf82078?format=webp&width=800&height=1200"
                alt="koja - Developer"
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
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="w-full relative py-24 md:py-32 px-4 sm:px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `${COLORS.secondary}40` }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tight"
          style={{ color: COLORS.text }}
        >
          About <span style={{ color: COLORS.primary }}>Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: COLORS.textMuted }}>
              I'm a B.Tech Computer Science Engineering student from Institute of Aeronautical Engineering, passionate about building scalable web applications and solving complex problems.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: COLORS.textMuted }}>
              With hands-on experience in full-stack development, I specialize in creating responsive and user-friendly digital experiences. I'm certified in Oracle Cloud and Azure, with expertise in both frontend and backend technologies.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: COLORS.textMuted }}>
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
                whileHover={{ x: 10 }}
                className="p-6 rounded-xl border transition-all group cursor-pointer"
                style={{
                  borderColor: `${COLORS.primary}40`,
                  background: `${COLORS.primary}10`,
                  hover: { background: `${COLORS.primary}20` }
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.primary }}>{item.label}</p>
                    <p className="text-lg font-bold group-hover:text-yellow-200 transition-colors" style={{ color: COLORS.text }}>{item.value}</p>
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
    <section id="skills" className="w-full relative py-24 md:py-32 px-4 sm:px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-32 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `${COLORS.primary}40` }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tight"
          style={{ color: COLORS.text }}
        >
          Technical <span style={{ color: COLORS.primary }}>Skills</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="group p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden"
              style={{
                borderColor: `${COLORS.primary}40`,
                background: `${COLORS.primary}10`,
              }}
            >
              {/* Hover Glow */}
              <div className="absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" style={{ background: `${COLORS.primary}20` }} />

              <div className="relative z-10">
                <p className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 origin-left">{skill.icon}</p>
                <p className="text-white font-bold text-sm md:text-base">{skill.name}</p>
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
    <section id="projects" className="w-full relative py-24 md:py-32 px-4 sm:px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-32 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `${COLORS.secondary}40` }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tight"
          style={{ color: COLORS.text }}
        >
          Featured <span style={{ color: COLORS.primary }}>Projects</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-7"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group rounded-xl border p-6 md:p-8 transition-all overflow-hidden relative flex flex-col h-full"
              style={{
                borderColor: `${COLORS.primary}40`,
                background: `${COLORS.primary}10`,
              }}
            >
              {/* Icon Badge */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl mb-4 transition-all"
                style={{ background: `${COLORS.secondary}30`, color: COLORS.secondary }}
              >
                {project.icon}
              </motion.div>

              <h3 className="text-2xl font-black mb-1 group-hover:text-purple-300 transition-colors" style={{ color: COLORS.text }}>{project.name}</h3>
              <p className="text-sm font-bold mb-4" style={{ color: COLORS.primary }}>{project.subtitle}</p>
              <p className="text-sm md:text-base mb-6 leading-relaxed flex-grow" style={{ color: COLORS.textMuted }}>{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all"
                    style={{
                      background: `${COLORS.secondary}20`,
                      color: COLORS.secondary,
                      borderColor: `${COLORS.secondary}40`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: COLORS.secondary }}
                >
                  <Github size={16} className="group-hover:scale-125 transition-transform" /> GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: COLORS.secondary }}
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
    <section id="contact" className="w-full relative py-24 md:py-32 px-4 sm:px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `${COLORS.primary}40` }} />

      <div className="w-full max-w-2xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-6 text-center tracking-tight"
          style={{ color: COLORS.text }}
        >
          Get in <span style={{ color: COLORS.primary }}>Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-base md:text-lg font-medium"
          style={{ color: COLORS.textMuted }}
        >
          Let's discuss your next project or opportunity
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-6 md:p-8 rounded-xl border w-full relative overflow-hidden"
          style={{
            borderColor: `${COLORS.primary}40`,
            background: `${COLORS.primary}10`,
          }}
        >
          <div className="space-y-3 relative z-10">
            <label htmlFor="email" className="block text-sm md:text-base font-bold" style={{ color: COLORS.text }}>
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm md:text-base font-medium"
              style={{
                background: `${COLORS.primary}10`,
                borderColor: `${COLORS.primary}40`,
                color: COLORS.text,
              }}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-3 relative z-10">
            <label htmlFor="message" className="block text-sm md:text-base font-bold" style={{ color: COLORS.text }}>
              Message
            </label>
            <motion.textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none text-sm md:text-base font-medium"
              style={{
                background: `${COLORS.primary}10`,
                borderColor: `${COLORS.primary}40`,
                color: COLORS.text,
              }}
              placeholder="Your message here..."
              rows="6"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-bold text-white transition-all shadow-lg relative z-10"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              boxShadow: `0 0 30px ${COLORS.primary}40`
            }}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 md:gap-8 mt-12 relative z-10"
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
              className="transition-colors relative p-2 rounded-lg"
              style={{ color: COLORS.textMuted }}
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
    <footer className="w-full border-t py-8 px-4 sm:px-6 lg:px-12" style={{ borderColor: `${COLORS.primary}15`, background: COLORS.bg }}>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-6">
        <p className="text-xs sm:text-sm md:text-base text-center md:text-left font-medium" style={{ color: COLORS.textMuted }}>
          Designed & Built by <span className="font-bold" style={{ color: COLORS.primary }}>koja</span>
        </p>
        <p className="text-xs md:text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

// ========== MAIN APP ==========
export default function App() {
  return (
    <div style={{ background: COLORS.bg }} className="min-h-screen text-white overflow-x-hidden">
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
          scrollbar-color: ${COLORS.primary}80 ${COLORS.bg};
        }
        *::-webkit-scrollbar {
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background: ${COLORS.bg};
        }
        *::-webkit-scrollbar-thumb {
          background: ${COLORS.primary}80;
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.primary}};
        }
      `}</style>
    </div>
  );
}
