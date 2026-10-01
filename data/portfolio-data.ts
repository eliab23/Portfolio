export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full-Stack" | "Web System" | "Mobile & UI";
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  description: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Gezehagn Lema",
    title: "4th-Year Software Engineering Student & Aspiring Full-Stack Developer",
    shortTitle: "Full-Stack Web & Mobile Developer",
    tagline: "Building modern, intuitive, and responsive digital experiences with Next.js, Python, and cutting-edge web technologies.",
    location: "Addis Ababa, Ethiopia",
    timezone: "UTC+3 (EAT)",
    email: "gezahagnlema4@gmail.com",
    phone: "0925508463",
    internationalPhone: "+251 925 508 463",
    github: "https://github.com/eliab23",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    availability: {
      status: "Available for Opportunities",
      details: "Open to internships, junior developer roles, and freelance collaborations",
      isAvailable: true,
    },
    bio: [
      "I am a 4th-year Software Engineering student based in Ethiopia with a strong passion for building modern, responsive, and user-friendly web and mobile applications.",
      "I thrive on turning ideas into practical, high-impact digital solutions through clean code, thoughtful architecture, and hands-on experimentation. My primary focus revolves around modern JavaScript ecosystems—specifically Next.js, Tailwind CSS, and shadcn/ui—paired with Python for backend services and PostgreSQL for persistent data.",
      "Beyond core web development, I am deeply intrigued by mobile application development and emerging AI-powered technologies, constantly expanding my engineering toolkit to build fast, scalable, and accessible software."
    ],
    stats: [
      { label: "Year of Study", value: "4th Year", subtext: "BSc Software Eng." },
      { label: "Core Projects", value: "3+", subtext: "Production & Academic" },
      { label: "Tech Stack", value: "10+", subtext: "Modern Tools & Libs" },
      { label: "Passion", value: "100%", subtext: "Continuous Learner" }
    ],
  },

  skills: [
    {
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", highlight: true },
        { name: "React", level: "Advanced", highlight: true },
        { name: "Tailwind CSS", level: "Advanced", highlight: true },
        { name: "shadcn/ui", level: "Advanced", highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
        { name: "HTML5 & Semantic Web", level: "Mastery" },
        { name: "CSS3 & Modern Layouts", level: "Advanced" },
        { name: "Responsive UI/UX Design", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: "Server",
      skills: [
        { name: "Python", level: "Proficient", highlight: true },
        { name: "PostgreSQL", level: "Proficient", highlight: true },
        { name: "RESTful API Design", level: "Proficient", highlight: true },
        { name: "Next.js Server Actions", level: "Intermediate" },
        { name: "Database Schema Modeling", level: "Proficient" },
        { name: "CRUD Operations & SQL", level: "Proficient" },
      ],
    },
    {
      title: "Mobile & Architecture",
      icon: "Smartphone",
      skills: [
        { name: "Mobile App Development", level: "Intermediate", highlight: true },
        { name: "UI Architecture & Components", level: "Advanced" },
        { name: "Cross-Platform Principles", level: "Intermediate" },
        { name: "AI Technologies & APIs", level: "Enthusiast" },
      ],
    },
    {
      title: "Tools, Workflow & DevOps",
      icon: "GitBranch",
      skills: [
        { name: "Git & GitHub", level: "Proficient", highlight: true },
        { name: "VS Code & DevTools", level: "Advanced" },
        { name: "Agile & Team Collaboration", level: "Proficient" },
        { name: "Performance Optimization", level: "Intermediate" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "book-management-system",
      title: "Book Management Web Application",
      subtitle: "Full-Stack Digital Library & Resource Management Platform",
      description:
        "A full-stack web application designed for cataloging, searching, and managing books, cover images, and digital PDF resources. Engineered with a responsive UI and PostgreSQL database persistence.",
      category: "Full-Stack",
      technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "REST APIs"],
      features: [
        "Interactive catalog with real-time title, author, and genre search",
        "Secure digital asset management for cover images and PDF documents",
        "Relational database modeling with PostgreSQL for persistent book records",
        "Responsive, high-contrast dashboard with dark theme support",
      ],
      githubUrl: "https://github.com/eliab23",
      demoUrl: "https://github.com/eliab23",
      featured: true,
    },
    {
      id: "cafeteria-management-system",
      title: "Cafeteria Management System",
      subtitle: "Automated Food Service & Order Workflow System",
      description:
        "A robust web-based management platform built to streamline cafeteria operations, live menu scheduling, order ticketing, and daily sales/inventory tracking.",
      category: "Web System",
      technologies: ["JavaScript", "Python", "Relational Database", "Tailwind CSS", "Responsive UI"],
      features: [
        "Dynamic digital menu board with real-time item availability status",
        "Order placement and checkout tracking system for staff and customers",
        "Administrative dashboard for menu configuration, sales reporting, and record keeping",
        "Mobile-first responsive interface optimized for touch devices and tablets",
      ],
      githubUrl: "https://github.com/eliab23",
      demoUrl: "https://github.com/eliab23",
      featured: true,
    },
    {
      id: "personal-dev-portfolio-suite",
      title: "Personal Web & Mobile Development Suite",
      subtitle: "Experimental Projects, Mobile Prototypes & Modern UI Components",
      description:
        "A collection of exploratory applications and prototypes focusing on modern web interfaces, mobile interactions, Python scripting, and AI-enabled developer tools.",
      category: "Mobile & UI",
      technologies: ["React", "JavaScript", "Python", "Tailwind CSS", "Mobile Frameworks", "Git"],
      features: [
        "Interactive component playground with reusable UI patterns and micro-animations",
        "Mobile UI prototypes emphasizing accessibility, touch gestures, and clean typography",
        "Python automation scripts for data transformation and file processing",
        "Continuous iteration and version-controlled GitHub repositories",
      ],
      githubUrl: "https://github.com/eliab23",
      demoUrl: "https://github.com/eliab23",
      featured: true,
    },
  ] as Project[],

  education: [
    {
      degree: "BSc. Software Engineering — 4th Year (Senior)",
      institution: "University in Ethiopia",
      period: "2022 — Present (Expected 2026)",
      status: "In Progress (Final Year)",
      location: "Ethiopia",
      description:
        "Pursuing an intensive undergraduate degree covering full software lifecycles, advanced data structures, database administration, software architecture, and modern application engineering.",
      highlights: [
        "In-depth focus on Software Design Patterns, Systems Architecture, and Database Systems",
        "Active team lead in collaborative software project development and agile sprints",
        "Final-year capstone project and thesis development in modern web/mobile systems",
      ],
    },
  ] as EducationItem[],

  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "Building end-to-end web applications with Next.js, React, Tailwind CSS, and Python/PostgreSQL backends that are fast, accessible, and production-ready.",
      icon: "Globe",
    },
    {
      title: "Responsive UI/UX Development",
      description:
        "Translating wireframes and designs into pixel-perfect, accessible, and mobile-friendly components with modern micro-interactions and smooth performance.",
      icon: "Smartphone",
    },
    {
      title: "Database & API Design",
      description:
        "Designing relational database schemas (PostgreSQL) and RESTful API endpoints for secure, scalable data exchange between client and server.",
      icon: "Database",
    },
    {
      title: "Modern UI Engineering (shadcn/ui)",
      description:
        "Crafting clean, accessible, dark-mode ready interfaces using Tailwind CSS and Radix/shadcn design systems.",
      icon: "Code2",
    },
  ],
};
