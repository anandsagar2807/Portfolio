import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Github, Linkedin, Mail, Phone, ExternalLink,
  Code2, Database, Layout, Server, Award, ChevronDown,
  Menu, X, MapPin, Calendar, ArrowUpRight, Sparkles,
  GraduationCap, Briefcase, FolderGit2, ShieldCheck, Send,
  Download, Eye, Star, Trophy, Zap, Globe, Terminal,
  Heart, Coffee, Clock, TrendingUp, Users, BookOpen
} from 'lucide-react';

/* ========== DATA ========== */
const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const SKILLS = {
  Languages: { items: ['Java', 'Python', 'JavaScript'], color: '#f472b6', icon: Terminal },
  Web: { items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'Angular', '.NET'], color: '#60a5fa', icon: Globe },
  Databases: { items: ['MySQL', 'MongoDB', 'Oracle Autonomous DB'], color: '#34d399', icon: Database },
  Cloud: { items: ['Oracle Cloud (OCI AI Certified)', 'Azure Fundamentals'], color: '#fb923c', icon: Server },
  Core: { items: ['Data Structures', 'OOP', 'DBMS', 'OS', 'Computer Networks'], color: '#a78bfa', icon: BookOpen },
};

const INTERNSHIPS = [
  {
    company: 'Armoured Vehicles Nigam Limited',
    location: 'Hyderabad',
    role: 'Full Stack Web Developer Intern',
    period: 'April 2025 – June 2025',
    points: [
      'Developed a Cyber Security Portal using PHP and JavaScript to enhance organizational security monitoring.',
      'Integrated backend server for secure employee data storage with role-based access control.',
    ],
  },
  {
    company: 'Octacomm Technologies',
    location: 'Hyderabad',
    role: 'Full Stack Developer Intern',
    period: 'April 2024 – May 2024',
    points: [
      'Built a real-time news community portal using React.js with live content updates.',
      'Improved UI responsiveness and frontend performance, achieving 40% faster load times.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'AquaCON',
    subtitle: 'Water Conservation Website',
    desc: 'Developed an AI-powered web application that detects water wastage from images and generates automated analytical reports for conservation tracking.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#3b82f6',
    icon: Layout,
  },
  {
    name: 'SkillLens',
    subtitle: 'AI-Based Skill Gap Identifier',
    desc: 'Built an NLP-based system to compare resumes with job descriptions and identify skill gaps, providing actionable upskilling recommendations.',
    stack: ['JavaScript', 'NLP', 'React'],
    color: '#8b5cf6',
    icon: Code2,
  },
  {
    name: 'TrackZEN',
    subtitle: 'AI Powered Health Recommender',
    desc: 'AI-powered health recommendation system analyzing lifestyle habits and health metrics to deliver personalized wellness and preventive care suggestions.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    color: '#06b6d4',
    icon: Database,
  },
];

const CERTS = [
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', org: 'Oracle', color: '#ef4444' },
  { name: 'Certified Young Professional', org: 'TCS', color: '#8b5cf6' },
  { name: 'Data Structures and Backend with Java', org: 'Coursera', color: '#3b82f6' },
  { name: 'Gen AI in Data Analysis', org: 'Coursera', color: '#3b82f6' },
  { name: 'Microsoft Azure Cloud Certification', org: 'Microsoft', color: '#06b6d4' },
  { name: 'Web Development (HTML, CSS, JavaScript, .NET)', org: 'Infosys', color: '#22c55e' },
];

const TYPING_ROLES = ['Full Stack Developer', 'Cloud Enthusiast', 'Problem Solver', 'OCI AI Certified'];

const STATS = [
  { icon: Code2, label: 'LeetCode', value: 100, suffix: '+', sub: 'Problems Solved', color: '#fbbf24' },
  { icon: Trophy, label: 'HackerRank', value: 30, suffix: '+', sub: '4 Badges', color: '#34d399' },
  { icon: Star, label: 'CGPA', value: 8.22, suffix: '', sub: 'B.Tech CSE', color: '#60a5fa', isDecimal: true },
  { icon: Briefcase, label: 'Internships', value: 2, suffix: '', sub: 'Completed', color: '#f472b6' },
  { icon: Award, label: 'Certifications', value: 6, suffix: '+', sub: 'Professional', color: '#a78bfa' },
  { icon: FolderGit2, label: 'Projects', value: 3, suffix: '+', sub: 'Built & Deployed', color: '#fb923c' },
];

/* ========== STYLES ========== */
const S = {
  container: { width: '100%', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' },
  fullSection: { minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', width: '100%', paddingTop: '80px', paddingBottom: '80px' },
  sectionDivider: { width: '100%', maxWidth: '1200px', height: '1px', margin: '0 auto', background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' },
};

/* ========== HOOKS ========== */
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);
  return text;
}

function useActiveSection() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

function useCounter(end, duration = 2000, isDecimal = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration, isDecimal]);
  return [ref, count];
}

/* ========== VARIANTS ========== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] } }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ========== COMPONENTS ========== */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s ease',
        ...(scrolled ? { background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}),
      }}>
      <div style={{ ...S.container, height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#about" style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
          <span className="text-gradient">AS</span><span style={{ color: '#64748b', fontWeight: 300, marginLeft: '4px' }}>.</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`} style={{ textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', background: 'rgba(2,6,23,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: '12px' }}>
              {NAV_LINKS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function SectionTitle({ title, icon: Icon, subtitle }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '56px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
        <div className="glass-card" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
          <Icon size={22} />
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>{title}</h2>
      </div>
      {subtitle && <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '8px auto 0' }}>{subtitle}</p>}
    </motion.div>
  );
}

function AnimatedCounter({ stat }) {
  const [ref, count] = useCounter(stat.value, 2000, stat.isDecimal);
  const Icon = stat.icon;
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="glass-card animated-border"
      style={{ borderRadius: '16px', padding: '24px', textAlign: 'center', minWidth: '160px', flex: '1 1 160px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
        <Icon size={20} style={{ color: stat.color }} />
      </div>
      <p style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{stat.label}</p>
      <p className="text-gradient counter-value" style={{ fontSize: '2rem', fontWeight: 800 }}>{count}{stat.suffix}</p>
      <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>{stat.sub}</p>
    </motion.div>
  );
}

function Particles() {
  const [particles] = useState(() => Array.from({ length: 25 }, (_, i) => ({
    id: i, left: Math.random() * 100, duration: 15 + Math.random() * 20, delay: Math.random() * 15, size: 2 + Math.random() * 2,
  })));
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <div key={p.id} className="particle"
          style={{ left: `${p.left}%`, bottom: '-10px', width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }} />
      ))}
    </div>
  );
}

/* ========== MAIN APP ========== */
function App() {
  const typedText = useTypingEffect(TYPING_ROLES, 80, 50, 2200);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden', width: '100%' }}>
      <motion.div style={{ position: 'fixed', top: 0, left: 0, height: '3px', zIndex: 60, width: progressWidth,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)' }} />
      <Navbar />
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
      </div>
      <Particles />

      <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>

        {/* ═══════════ HERO / ABOUT ═══════════ */}
        <section id="about" style={S.fullSection}>
          <div style={{ ...S.container, width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '60px' }}>
              {/* Profile Photo */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <div className="profile-photo-wrapper">
                  <div className="profile-glow" />
                  <div className="profile-photo-ring" />
                  <img src="/profile.jpg" alt="Gurram Anand Sagar" className="profile-photo" />
                </div>
              </motion.div>

              {/* Left content */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                style={{ flex: '1 1 480px', minWidth: 0 }}>
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8', marginBottom: '24px' }}>
                  <Sparkles size={12} style={{ color: '#fbbf24' }} /><span>Available for Internships & Collaborations</span>
                </motion.div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.1, marginBottom: '8px' }}>
                  Gurram
                </h1>
                <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '24px' }}>
                  <span className="text-gradient">Anand Sagar</span>
                </h1>

                <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#94a3b8', fontWeight: 300, marginBottom: '28px', height: '32px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95em' }}>{typedText}</span>
                  <span className="typing-cursor" />
                </div>

                <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.8, maxWidth: '520px', marginBottom: '32px' }}>
                  B.Tech Computer Science Engineering student passionate about building scalable web applications
                  and solving complex problems. Oracle Cloud & Azure certified with hands-on experience in
                  full-stack development.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {[
                    { href: 'mailto:23951A050P@iare.ac.in', icon: <Mail size={15} />, text: 'Email' },
                    { href: 'tel:+919493086760', icon: <Phone size={15} />, text: '9493086760' },
                    { href: '#', icon: <Linkedin size={15} />, text: 'LinkedIn', color: '#60a5fa' },
                    { href: '#', icon: <Github size={15} />, text: 'GitHub' },
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="glass"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '12px', fontSize: '0.875rem', fontWeight: 500, color: link.color || '#cbd5e1', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                      {link.icon} {link.text}
                    </a>
                  ))}
                </div>

                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#475569' }}>
                  <ChevronDown size={14} /> Scroll to explore
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '80px', justifyContent: 'center' }}>
              {STATS.map((stat, i) => <AnimatedCounter key={i} stat={stat} />)}
            </motion.div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ EDUCATION ═══════════ */}
        <section id="education" style={S.fullSection}>
          <div style={{ ...S.container, width: '100%' }}>
            <SectionTitle title="Education" icon={GraduationCap} subtitle="My academic journey & achievements" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
              <div className="timeline-connector" />
              {[
                { school: 'Institute of Aeronautical Engineering', degree: 'B.Tech in Computer Science & Engineering', period: 'Aug 2023 – Sep 2027', score: 'CGPA: 8.22', highlight: 'Current' },
                { school: 'Narayana Junior College', degree: 'Intermediate MPC', period: 'June 2021 – May 2023', score: 'CGPA: 8.93', highlight: '' },
                { school: "Dr KKR's Gowtham Concept School", degree: 'SSC', period: 'July 2016 – Aug 2021', score: 'CGPA: 10', highlight: 'Perfect Score' },
              ].map((edu, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2, boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}>
                    <GraduationCap size={20} style={{ color: '#fff' }} />
                  </div>
                  <div className="glass-card animated-border" style={{ flex: 1, borderRadius: '16px', padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{edu.school}</h3>
                      {edu.highlight && <span style={{ fontSize: '0.7rem', color: '#fbbf24', fontWeight: 600, padding: '3px 10px', borderRadius: '8px', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>{edu.highlight}</span>}
                    </div>
                    <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#60a5fa', marginBottom: '8px' }}>{edu.degree}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}><Calendar size={13} />{edu.period}</span>
                      <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, padding: '3px 10px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)' }}>{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ SKILLS ═══════════ */}
        <section id="skills" style={{ ...S.fullSection, position: 'relative' }}>
          <img src="/abstract-tech.png" alt="" className="section-bg-img" />
          <div style={{ ...S.container, width: '100%', position: 'relative', zIndex: 1 }}>
            <SectionTitle title="Technical Skills" icon={Server} subtitle="Technologies & tools I work with" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {Object.entries(SKILLS).map(([category, { items, color, icon: CatIcon }], idx) => (
                <motion.div key={category} variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="glass-card animated-border" style={{ borderRadius: '16px', padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CatIcon size={18} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color }}>{category}</h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {items.map((skill) => (<span key={skill} className="skill-badge">{skill}</span>))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ EXPERIENCE ═══════════ */}
        <section id="experience" style={S.fullSection}>
          <div style={{ ...S.container, width: '100%' }}>
            <SectionTitle title="Experience" icon={Briefcase} subtitle="Professional internships & work" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
              {INTERNSHIPS.map((intern, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="glass-card animated-border" style={{ borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(59,130,246,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={28} style={{ color: 'rgba(59,130,246,0.3)' }} />
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{intern.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#60a5fa' }}>{intern.company}</span>
                        <span style={{ color: '#475569' }}>·</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#64748b' }}><MapPin size={12} />{intern.location}</span>
                      </div>
                    </div>
                    <span className="glass" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b', padding: '6px 14px', borderRadius: '9999px', height: 'fit-content' }}>
                      <Calendar size={12} />{intern.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {intern.points.map((point, i) => (
                      <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
                        <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: '4px' }}>▸</span>
                        <span style={{ lineHeight: 1.8 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ PROJECTS ═══════════ */}
        <section id="projects" style={{ ...S.fullSection, position: 'relative' }}>
          <img src="/coding-workspace.png" alt="" className="section-bg-img" />
          <div style={{ ...S.container, width: '100%', position: 'relative', zIndex: 1 }}>
            <SectionTitle title="Projects" icon={FolderGit2} subtitle="Noteworthy things I've built" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {PROJECTS.map((project, idx) => {
                const IconComp = project.icon;
                return (
                  <motion.div key={idx} variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="glass-card animated-border" whileHover={{ scale: 1.03, y: -4 }}
                    style={{ borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${project.color}18`, color: project.color }}>
                        <IconComp size={24} />
                      </div>
                      <motion.div whileHover={{ rotate: 45 }}><ArrowUpRight size={20} style={{ color: '#475569' }} /></motion.div>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{project.name}</h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: project.color, marginBottom: '14px' }}>{project.subtitle}</p>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.8, flex: 1, marginBottom: '20px' }}>{project.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                      {project.stack.map((tech) => (
                        <span key={tech} style={{ fontSize: '0.75rem', fontWeight: 500, padding: '5px 12px', borderRadius: '9999px', background: `${project.color}15`, color: project.color }}>{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ CERTIFICATIONS ═══════════ */}
        <section id="certifications" style={S.fullSection}>
          <div style={{ ...S.container, width: '100%' }}>
            <SectionTitle title="Certifications" icon={Award} subtitle="Licenses & professional credentials" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {CERTS.map((cert, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="glass-card animated-border" whileHover={{ scale: 1.02 }}
                  style={{ borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${cert.color}12` }}>
                    <ShieldCheck size={18} style={{ color: cert.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.5 }}>{cert.name}</p>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>Issued by <span style={{ color: cert.color, fontWeight: 500 }}>{cert.org}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div style={S.sectionDivider} />

        {/* ═══════════ CONTACT ═══════════ */}
        <section id="contact" style={S.fullSection}>
          <div style={{ ...S.container, maxWidth: '700px', textAlign: 'center' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="glass-card" style={{ width: '64px', height: '64px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', color: '#60a5fa' }}>
                <Send size={28} />
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Let's Connect</h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:23951A050P@iare.ac.in"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '14px', fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 4px 24px rgba(59,130,246,0.3)' }}>
                  <Mail size={18} /> Send an Email
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="glass"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '14px', fontSize: '0.95rem', fontWeight: 600, color: '#cbd5e1', textDecoration: 'none' }}>
                  <Linkedin size={18} /> Connect on LinkedIn
                </motion.a>
              </div>

              <div className="glass-card" style={{ borderRadius: '16px', padding: '32px', maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { icon: <Mail size={16} />, label: 'Email', value: '23951A050P@iare.ac.in' },
                    { icon: <Phone size={16} />, label: 'Phone', value: '+91 9493086760' },
                    { icon: <MapPin size={16} />, label: 'Location', value: 'Hyderabad, India' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>{item.icon}</div>
                      <div style={{ textAlign: 'left' }}>
                        <p style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                        <p style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ ...S.container, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <p style={{ fontSize: '0.875rem', color: '#475569' }}>Designed & Built by <span className="text-gradient" style={{ fontWeight: 600 }}>Gurram Anand Sagar</span></p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {[{ icon: <Mail size={16} />, href: 'mailto:23951A050P@iare.ac.in' }, { icon: <Github size={16} />, href: '#' }, { icon: <Linkedin size={16} />, href: '#' }].map((s, i) => (
                <a key={i} href={s.href} style={{ color: '#475569', transition: 'color 0.3s' }}>{s.icon}</a>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: '#334155' }}>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
