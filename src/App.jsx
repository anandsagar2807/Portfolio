import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Github, Linkedin, Mail, ExternalLink, ArrowRight, Download,
  Server, Database, Menu, X, Briefcase, MapPin, Phone,
  GraduationCap, ChevronRight, Terminal, Cpu, Cloud, Layers,
  ArrowUp, ShieldCheck, Droplets, Brain, Bot, Palette, Lightbulb,
  Trophy, Award, Code2, Sparkles, Zap, Rocket, Wand2, Boxes,
  GitBranch, Star, Globe, Smartphone, Gauge,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "./App.css";
import ResumePage from "./ResumePage";
import profilePhoto from "./assets/mypicture.png";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const ROLES = [
  "Full Stack Developer",
  "React.js Developer",
  "AI Enthusiast",
  "OCI Gen AI Certified",
  "Problem Solver",
];

const HERO_STATS = [
  { num: "200+", label: "Problems Solved" },
  { num: "8.44", label: "CGPA" },
  { num: "3+", label: "Projects Built" },
  { num: "2", label: "Internships" },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Institute of Aeronautical Engineering, Hyderabad",
    period: "Aug 2023 – Sep 2027",
    grade: "CGPA: 8.44/10.00 (till VI-sem)",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College, Hyderabad",
    period: "June 2021 – May 2023",
    grade: "CGPA: 8.93/10",
  },
];

const SKILLS = [
  {
    category: "Programming Languages", icon: Terminal, color: "#6366f1",
    items: [{ name: "Python", pct: 85 }, { name: "Java", pct: 82 }, { name: "JavaScript", pct: 82 }],
  },
  {
    category: "Frontend", icon: Layers, color: "#06b6d4",
    items: [{ name: "React.js", pct: 85 }, { name: "TypeScript", pct: 80 }, { name: "HTML/CSS", pct: 90 }],
  },
  {
    category: "Backend", icon: Server, color: "#10b981",
    items: [{ name: "Node.js", pct: 82 }, { name: "Express.js", pct: 80 }, { name: "Flask", pct: 72 }],
  },
  {
    category: "Databases", icon: Database, color: "#f59e0b",
    items: [{ name: "MySQL", pct: 82 }, { name: "MongoDB", pct: 78 }, { name: "Oracle DB", pct: 65 }],
  },
  {
    category: "Cloud & DevOps", icon: Cloud, color: "#ec4899",
    items: [
      { name: "Google Cloud", pct: 72 }, { name: "AWS", pct: 70 },
      { name: "Docker", pct: 68 }, { name: "Salesforce", pct: 65 }, { name: "ServiceNow", pct: 62 },
    ],
  },
  {
    category: "Tools & Platforms", icon: Cpu, color: "#8b5cf6",
    items: [
      { name: "FastAPI", pct: 75 }, { name: "Git", pct: 85 }, { name: "VS Code", pct: 90 },
    ],
  },
];

const TECH_MARQUEE = [
  "React.js", "TypeScript", "Node.js", "Express.js", "Python", "Java",
  "MongoDB", "MySQL", "Oracle DB", "Docker", "AWS", "Google Cloud",
  "Flask", "FastAPI", "Git", "HTML5", "CSS3", "Tailwind CSS",
  "Framer Motion", "Spring Boot", "Salesforce", "ServiceNow",
];

const EXPERTISE = [
  {
    icon: Code2, title: "Full-Stack Development",
    desc: "End-to-end web apps with React, Node.js & modern APIs — from pixel-perfect UIs to scalable backends.",
    color: "#7c5cff",
    points: ["REST & GraphQL APIs", "Auth & State Management", "Responsive UI Systems"],
  },
  {
    icon: Brain, title: "AI & Machine Learning",
    desc: "Building intelligent features — LLM-powered copilots, document analysis, and predictive pipelines.",
    color: "#2de2e6",
    points: ["LLM Integration", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    icon: Cloud, title: "Cloud & DevOps",
    desc: "Deploying and scaling applications on AWS & GCP with containerized workflows and CI/CD.",
    color: "#b14bff",
    points: ["Docker & Containers", "Cloud Architecture", "CI/CD Pipelines"],
  },
  {
    icon: Gauge, title: "Performance & UX",
    desc: "Crafting blazing-fast, accessible interfaces with smooth micro-interactions and polished UX.",
    color: "#ff5c8a",
    points: ["Core Web Vitals", "Animation Systems", "Accessibility (a11y)"],
  },
];

const PROJECTS = [
  {
    title: "GitGuard AI", subtitle: "AI-Powered Code Review Assistant",
    desc: "Full-stack website that connects GitHub repositories in a single click, analyzes pull requests, and automatically identifies bugs, security, and performance issues.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "GitHub OAuth", "Clerk Auth"],
    color: "#8b5cf6", icon: ShieldCheck, category: "Full Stack", github: "https://github.com/anandsagar2807/GitGaurd-AI",
    featured: true,
    metrics: [
      { value: "1-Click", label: "GitHub Connect" },
      { value: "3", label: "Issue Categories" },
      { value: "OAuth", label: "Secure Auth" },
    ],
  },
  {
    title: "AquaCON", subtitle: "Water Conservation Platform",
    desc: "AI-based web platform that detects water wastage from images and generates automated reports for monitoring. Designed a responsive UI with a solid foundation extensible with backend services.",
    tech: ["React.js", "TypeScript", "Node.js", "Clerk Auth"],
    color: "#06b6d4", icon: Droplets, category: "Full Stack", github: "https://github.com/anandsagar2807/AquaCON-a-water-conservation-website",
    featured: false,
    metrics: [
      { value: "AI", label: "Image Analysis" },
      { value: "Auto", label: "Report Gen" },
      { value: "100%", label: "Responsive" },
    ],
  },
  {
    title: "OpsMind AI", subtitle: "PDF-to-Insights Knowledge Platform",
    desc: "Enterprise platform that transforms internal PDFs (SOPs, manuals, policies) into a secure, searchable knowledge base with a specialised Sales Copilot — from upload to chunking, stored in MongoDB.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB"],
    color: "#10b981", icon: Brain, category: "AI/ML", github: "https://github.com/anandsagar2807/OpsMindAI3",
    demo: "https://frontend-opsmindai-six-35.vercel.app/",
    featured: false,
    metrics: [
      { value: "Live", label: "Deployed" },
      { value: "RAG", label: "Pipeline" },
      { value: "Copilot", label: "Sales Agent" },
    ],
  },
];

/* Recruiter quick-scan: why hire me */
const VALUE_PROPS = [
  {
    icon: Zap, kicker: "Ship Fast",
    title: "Production-Ready from Day One",
    desc: "2 internships shipping real React + Node.js code means I hit the ground running — no hand-holding, just delivery.",
  },
  {
    icon: Brain, kicker: "AI-Native",
    title: "Builds With Modern AI",
    desc: "OCI Gen AI certified. I integrate LLMs, RAG pipelines, and copilots into products — not just demos.",
  },
  {
    icon: Gauge, kicker: "Proven Depth",
    title: "200+ Problems Solved",
    desc: "Strong DSA fundamentals across LeetCode, HackerRank & GFG — the engineering rigor behind clean code.",
  },
  {
    icon: Rocket, kicker: "Growth Mindset",
    title: "Always Leveling Up",
    desc: "5 certifications, 3 hackathons, CGPA 8.44 — I treat learning as a continuous, shipped practice.",
  },
];

/* "Currently" strip — signals momentum */
const CURRENTLY = [
  { label: "Building", value: "AI-powered full-stack apps" },
  { label: "Learning", value: "System Design & Advanced AI" },
  { label: "Open to", value: "Internships & Full-Time Roles" },
];

const EXPERIENCE = [
  {
    role: "Web Development Intern (Stipend-Based)",
    company: "Zaalima Development Pvt. Ltd", location: "Bangalore", type: "Remote",
    period: "March 2026 – June 2026",
    points: [
      "Developed a web application using React.js for the frontend and Node.js for the backend.",
      "Worked with real-world application development workflows including code writing, version control, and collaborative development with a team.",
    ],
    tech: ["React.js", "Node.js", "JavaScript"],
  },
  {
    role: "Java Full Stack Development Intern",
    company: "Octacomm Technologies", location: "Hyderabad", type: "On-site",
    period: "April 2024 – May 2024",
    points: [
      "Built a real-time news portal using Java, Spring Boot, HTML, CSS, and JavaScript.",
      "Implemented backend APIs and integrated frontend interfaces while meeting project deadlines.",
    ],
    tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
  },
];

const HACKATHONS = [
  {
    icon: Bot, title: "National AI/ML Hackathon", org: "IIT Hyderabad",
    desc: "Submitted a prototype in a competitive hackathon solving real-world technical challenges (2026).",
  },
  {
    icon: Palette, title: "Adobe Hackathon 2025", org: "Adobe",
    desc: "Participated in a national-level hackathon focused on innovation and technical problem solving.",
  },
  {
    icon: Lightbulb, title: "KLH Hack with AI", org: "KL University",
    desc: "Participated in an AI-focused hackathon developing intelligent application solutions — stood out in the top 30 as a team.",
  },
];

const CERTS = [
  { tag: "OCI", title: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", date: "2025", color: "#f97316" },
  { tag: "CPD", title: "Copado AI Certified Professional", issuer: "Copado", date: "2025", color: "#06b6d4" },
  { tag: "OCI", title: "Oracle Certified AI Foundations Associate", issuer: "Oracle", date: "2025", color: "#f97316" },
  { tag: "TCS", title: "Certified Young Professional", issuer: "TCS", date: "2024", color: "#3b82f6" },
  { tag: "Java", title: "Data Structures and Backend with Java", issuer: "Coursera", date: "2024", color: "#ef4444" },
];

const CODING_PROFILES = [
  { platform: "LeetCode", stat: "100+ Problems Solved", color: "#f89820", href: "https://leetcode.com/anandgurram" },
  { platform: "HackerRank", stat: "45+ Problems · Java & SQL Silver Badges", color: "#2ec866", href: "#" },
  { platform: "GeeksforGeeks", stat: "43 Problems Solved", color: "#3b82f6", href: "https://www.geeksforgeeks.org/user/anandsagar2807" },
];

const GITHUB_URL = "https://github.com/anandsagar2807";
const LINKEDIN_URL = "https://www.linkedin.com/in/anand-sagar-gurram-6408b831a/";

/* ═══════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════ */
function useTyping(texts, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), Math.floor(speed / 2));
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return displayed;
}

/* Animated counter — eases a number from 0 to target when in view */
function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numeric = parseFloat(target);
        if (Number.isNaN(numeric)) {
          setValue(numeric);
          return;
        }
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setValue(numeric * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

/* Formats the animated counter value, preserving suffixes like "+" */
function formatStat(rawNum, value) {
  const suffix = String(rawNum).replace(/[0-9.]/g, "");
  const numeric = parseFloat(rawNum);
  if (Number.isNaN(numeric)) return rawNum;
  const decimals = String(rawNum).split(".")[1]?.length || 0;
  return value.toFixed(decimals) + suffix;
}

/* Glow-follow effect: tracks pointer position over a card */
function useGlowFollow() {
  const ref = useRef(null);
  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
  return { ref, onMouseMove: handleMove };
}

/* ═══════════════════════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════════════════════ */
const PARTICLE_DATA = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100, y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 6,
}));

function Particles() {
  return (
    <div className="particles-bg" aria-hidden="true">
      {PARTICLE_DATA.map((p) => (
        <div key={p.id} className="particle"
          style={{
            left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`
          }} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION TITLE
   ═══════════════════════════════════════════════════════ */
function SectionTitle({ label, title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-title-wrap">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      <div className="section-underline" />
      {desc && <p className="section-desc">{desc}</p>}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════════ */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <motion.div className="scroll-progress" style={{ width }} />;
}

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#" className="nav-logo">
        <span className="logo-mark logo-mark--initials">AS</span>
      </a>
      <nav className={`nav-menu${menuOpen ? " nav-menu--open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}
            className={`nav-link${active === l.href.slice(1) ? " nav-link--active" : ""}`}
            onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </nav>
      <a href="#contact" className="btn-hire" onClick={() => setMenuOpen(false)}>
        Hire Me <ArrowRight size={15} />
      </a>
      <button className="nav-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */
function HeroSection({ onResumeOpen }) {
  const role = useTyping(ROLES);
  return (
    <section id="hero" className="hero">
      <Particles />
      <div className="hero-inner">
        <div className="hero-content">
          <motion.div className="hero-badge" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="hero-badge-dot" />
            <span>Open to Internships &amp; Full-Time Roles</span>
          </motion.div>
          <motion.p className="hero-greeting" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Hi, I'm
          </motion.p>
          <motion.h1 className="hero-name" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
            Gurram <em>Anand</em><br />Sagar
          </motion.h1>
          <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.46 }}>
            <span className="role-prefix">I build </span><span className="role-text">{role}</span><span className="cursor">|</span>
          </motion.div>
          <motion.p className="hero-desc" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}>
            B.Tech CSE @ IARE Hyderabad · CGPA 8.44 · 2 internships · 200+ problems solved.
            I craft AI-powered, cloud-native full-stack apps that ship and scale.
          </motion.p>
          <motion.div className="hero-btns" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <a href="#projects" className="btn btn-primary"><ArrowRight size={16} /> View Projects</a>
            <button className="btn btn-outline" onClick={onResumeOpen}><ExternalLink size={16} /> View Resume</button>
          </motion.div>
          <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
          </motion.div>
        </div>

        {/* Editorial portrait — the first thing visitors see */}
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-photo-stage">
            {/* Soft warm ambient glow */}
            <div className="hero-photo-glow" />
            {/* Hairline accent ring */}
            <div className="hero-photo-ring" />
            {/* The portrait */}
            <div className="hero-photo-frame">
              <img src={profilePhoto} alt="Gurram Anand Sagar — Full Stack Developer" className="hero-photo" />
            </div>
            {/* Availability pill */}
            <motion.span className="hero-avail-pill"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <span className="avail-dot" /> Available for Work
            </motion.span>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-stats-grid" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        {HERO_STATS.map((s, i) => (
          <StatCard key={i} stat={s} delay={i * 0.1} />
        ))}
      </motion.div>

    </section>
  );
}

/* Animated stat card with count-up */
function StatCard({ stat, delay }) {
  const { value, ref } = useCountUp(stat.num);
  return (
    <motion.div ref={ref} className="hero-stat-card"
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}>
      <span className="hero-stat-num">{formatStat(stat.num, value)}</span>
      <span className="hero-stat-label">{stat.label}</span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   TECH MARQUEE
   ═══════════════════════════════════════════════════════ */
function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle label="Get to Know Me" title="About Me" />
        <div className="about-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="about-text">
            <h3 className="about-subtitle">Who am I?</h3>
            <p className="about-para">
              Passionate Computer Science Engineering student at the Institute of Aeronautical Engineering, Hyderabad with a CGPA of 8.44/10.00. I specialise in building AI-powered, cloud-native full-stack applications.
            </p>
            <p className="about-para">
              With hands-on experience in React, Node.js, Python, and cloud platforms like Google Cloud and AWS, I craft solutions that solve real-world problems. I have completed internships in full-stack development and actively participate in hackathons, having solved 200+ problems across competitive coding platforms.
            </p>
            <h3 className="about-subtitle edu-heading">Education</h3>
            <div className="edu-list">
              {EDUCATION.map((e, i) => (
                <div key={i} className="edu-item">
                  <GraduationCap size={18} className="edu-icon" />
                  <div>
                    <p className="edu-degree">{e.degree}</p>
                    <p className="edu-inst">{e.institution}</p>
                    <p className="edu-meta">{e.period} · {e.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="about-right">
            <div className="about-stat-grid">
              {HERO_STATS.map((s, i) => (
                <div key={i} className="about-stat-card">
                  <span className="asc-num">{s.num}</span>
                  <span className="asc-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* "Currently" status strip — signals momentum */}
        <motion.div className="currently-strip" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          {CURRENTLY.map((c, i) => (
            <div key={i} className="currently-item">
              <span className="currently-label">{c.label}</span>
              <span className="currently-value">{c.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   VALUE PROPS — recruiter quick-scan
   ═══════════════════════════════════════════════════════ */
function ValuePropsSection() {
  return (
    <section id="why-me" className="section section--alt">
      <div className="container">
        <SectionTitle label="The Value I Bring" title="Why Work With Me"
          desc="The short version for busy recruiters — here's what you get when you bring me on." />
        <div className="vp-grid">
          {VALUE_PROPS.map((vp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="vp-card">
              <div className="vp-icon-wrap"><vp.icon size={24} /></div>
              <p className="vp-kicker">{vp.kicker}</p>
              <h3 className="vp-title">{vp.title}</h3>
              <p className="vp-desc">{vp.desc}</p>
              <span className="vp-num">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPERTISE
   ═══════════════════════════════════════════════════════ */
function ExpertiseSection() {
  return (
    <section id="expertise" className="section section--alt">
      <div className="container">
        <SectionTitle label="What I Do" title="My Expertise"
          desc="A blend of engineering depth and product thinking — here's where I deliver the most value." />
        <div className="expertise-grid">
          {EXPERTISE.map((ex, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="expertise-card"
              style={{ "--ex-color": ex.color }}>
              <div className="expertise-icon-wrap"><ex.icon size={26} /></div>
              <h3 className="expertise-title">{ex.title}</h3>
              <p className="expertise-desc">{ex.desc}</p>
              <ul className="expertise-points">
                {ex.points.map((p) => (
                  <li key={p}><ChevronRight size={14} className="li-icon" />{p}</li>
                ))}
              </ul>
              <span className="expertise-num">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════════════════ */
function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container">
        <SectionTitle label="What I Work With" title="Technical Skills"
          desc="A growing toolkit honed through projects, internships, and competitive programming." />
        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="skill-cat-card">
              <div className="skill-cat-header" style={{ "--cat-color": cat.color }}>
                <div className="skill-cat-icon-wrap"><cat.icon size={20} /></div>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>
              <div className="skill-bars">
                {cat.items.map((sk, j) => (
                  <div key={j} className="skill-bar-row">
                    <div className="skill-bar-meta">
                      <span className="skill-bar-name">{sk.name}</span>
                      <span className="skill-bar-pct">{sk.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div className="skill-bar-fill" style={{ background: cat.color, color: cat.color }}
                        initial={{ width: 0 }}
                        animate={visible ? { width: `${sk.pct}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: j * 0.12 + i * 0.06, ease: "easeOut" }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════════════════ */
function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full Stack", "AI/ML"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionTitle label="What I've Built" title="Featured Projects"
          desc="A selection of products I've designed, built, and shipped — from idea to deployment." />
        <div className="proj-filters">
          {filters.map((f) => (
            <button key={f} className={`filter-btn${filter === f ? " filter-btn--active" : ""}`}
              onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="proj-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <ProjectCard key={proj.title} proj={proj} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* Project card with glow-follow pointer effect */
function ProjectCard({ proj, index }) {
  const glow = useGlowFollow();
  return (
    <motion.div ref={glow.ref} onMouseMove={glow.onMouseMove} layout
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, delay: index * 0.1 }}
      className="proj-card">
      <div className="proj-glow" />
      <div className="proj-card-top">
        <span className="proj-emoji" style={{ color: proj.color }}><proj.icon size={30} /></span>
        <span className="proj-category">{proj.category}</span>
      </div>
      {proj.featured && <span className="proj-featured"><Star size={12} /> Featured</span>}
      <span className="proj-index">0{index + 1}</span>
      <h3 className="proj-title">{proj.title}</h3>
      <p className="proj-subtitle">{proj.subtitle}</p>
      <p className="proj-desc">{proj.desc}</p>
      <div className="proj-tech-list">
        {proj.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      {proj.metrics && (
        <div className="proj-metrics">
          {proj.metrics.map((m) => (
            <div key={m.label} className="proj-metric">
              <span className="proj-metric-val">{m.value}</span>
              <span className="proj-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="proj-links">
        <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
          <Github size={15} /> Code
        </a>
        <a href={proj.demo || "#"} target="_blank" rel="noreferrer" className="proj-link"><ExternalLink size={15} /> Live Demo</a>
      </div>
      <div className="proj-accent" style={{ background: proj.color }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPERIENCE
   ═══════════════════════════════════════════════════════ */
function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle label="My Experience" title="Work Experience"
          desc="Real-world roles where I've shipped production code and grown as an engineer." />
        <div className="exp-timeline">
          {EXPERIENCE.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="exp-card-wrap">
              <div className="exp-timeline-dot" />
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">
                      <Briefcase size={14} />
                      {exp.company} · {exp.location} · <span className="exp-type">{exp.type}</span>
                    </p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}><ChevronRight size={14} className="li-icon" />{pt}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {exp.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ACHIEVEMENTS
   ═══════════════════════════════════════════════════════ */
function AchievementsSection() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <SectionTitle label="Recognition" title="Achievements & Certifications" />

        <h3 className="ach-sub-heading"><Trophy size={20} /> Hackathons & Badges</h3>
        <div className="hackathon-grid">
          {HACKATHONS.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="hackathon-card">
              <span className="hack-emoji"><h.icon size={26} /></span>
              <div>
                <h4 className="hack-title">{h.title}</h4>
                <p className="hack-org">{h.org}</p>
                <p className="hack-desc">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="ach-sub-heading"><Award size={20} /> Certifications</h3>
        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="cert-card">
              <div className="cert-tag" style={{ background: c.color }}>{c.tag}</div>
              <div className="cert-body">
                <p className="cert-title">{c.title}</p>
                <p className="cert-meta">{c.issuer} · {c.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="ach-sub-heading"><Code2 size={20} /> Coding Profiles</h3>
        <div className="coding-grid">
          {CODING_PROFILES.map((cp, i) => (
            <a key={i} href={cp.href} target="_blank" rel="noreferrer" className="coding-card" style={{ "--cp": cp.color }}>
              <span className="cp-platform">{cp.platform}</span>
              <span className="cp-stat">{cp.stat}</span>
              <span className="cp-arrow"><ArrowRight size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════════════ */
const EMAILJS_SERVICE = "service_portfolio";   // ← replace with your EmailJS Service ID
const EMAILJS_TEMPLATE = "template_contact";     // ← replace with your EmailJS Template ID
const EMAILJS_PUBLIC = "YOUR_PUBLIC_KEY";      // ← replace with your EmailJS Public Key

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_PUBLIC);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle label="Get in Touch" title="Let's Connect"
          desc="I'm open to internships, collaborations, and full-time opportunities. Drop me a message!" />
        <div className="contact-cta-banner">
          <span>🚀</span>
          <span>Currently <strong>open to internships &amp; full-time roles</strong> — B.Tech CSE, CGPA 8.44, 2 internships, 200+ problems solved. I respond within <strong>24 hours</strong>.</span>
        </div>
        <div className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="contact-info">
            <a href="mailto:sagariare7@gmail.com" className="contact-item">
              <div className="ci-icon"><Mail size={20} /></div>
              <div><p className="ci-label">EMAIL</p><p className="ci-val">sagariare7@gmail.com</p></div>
            </a>
            <a href="tel:+919493086760" className="contact-item">
              <div className="ci-icon"><Phone size={20} /></div>
              <div><p className="ci-label">PHONE</p><p className="ci-val">+91 9493086760</p></div>
            </a>
            <div className="contact-item">
              <div className="ci-icon"><MapPin size={20} /></div>
              <div><p className="ci-label">LOCATION</p><p className="ci-val">Hyderabad, India</p></div>
            </div>
            <div className="contact-avail">
              <span className="avail-dot" />
              <p>Open to Opportunities — Available for internships, full-time roles, and freelance projects. Response within 24 hours.</p>
            </div>
          </motion.div>

          <motion.form ref={formRef} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group float-field">
                <input id="cf-name" name="name" value={form.name} onChange={handleChange} placeholder=" " required />
                <label htmlFor="cf-name">Your Name</label>
              </div>
              <div className="form-group float-field">
                <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder=" " required />
                <label htmlFor="cf-email">Your Email</label>
              </div>
            </div>
            <div className="form-group float-field">
              <input id="cf-subject" name="subject" value={form.subject} onChange={handleChange} placeholder=" " required />
              <label htmlFor="cf-subject">Subject</label>
            </div>
            <div className="form-group float-field">
              <textarea id="cf-msg" name="message" rows={5} value={form.message} onChange={handleChange} placeholder=" " required />
              <label htmlFor="cf-msg">Your Message</label>
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={status === "sending"}>
              {status === "sending" && <span className="btn-spinner" />}
              {status === "sent" && "✓ Message Sent!"}
              {status === "error" && "✗ Failed — try again"}
              {(status === "idle" || status === "sending") && status !== "sending" && <><Mail size={16} /> Send Message</>}
              {status === "sending" && "Sending…"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo"><span className="logo-mark logo-mark--initials">AS</span></span>
            <p className="footer-tagline">B.Tech CSE · Full Stack Developer · AI Enthusiast. Based in Hyderabad, India.</p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">QUICK LINKS</p>
            {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="footer-link">{l.label}</a>))}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">CONNECT</p>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="footer-link"><Github size={14} /> GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="footer-link"><Linkedin size={14} /> LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Gurram Anand Sagar. All rights reserved.</p>
          <p className="footer-built">Built with React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════════════════ */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top" aria-label="Back to top">
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════ */
export default function App() {
  const [showResume, setShowResume] = useState(false);
  return (
    <>
      {showResume && <ResumePage onClose={() => setShowResume(false)} />}
      <ScrollProgressBar />
      <Navbar />
      <HeroSection onResumeOpen={() => setShowResume(true)} />
      <TechMarquee />
      <AboutSection />
      <ValuePropsSection />
      <ExpertiseSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}
