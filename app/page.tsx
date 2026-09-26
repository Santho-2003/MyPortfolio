'use client';

import React from 'react';
import { 
  Code2, 
  Server, 
  Award, 
  Briefcase, 
  GraduationCap,
  Trophy,
  Presentation,
  Medal,
  Mail,
  Phone,
  Monitor,
  Database,
  Wrench,
  Send,
  Lock,
  PhoneCall,
  Bot,
  Sparkles,
  Terminal,
  Cloud,
  Container,
  GitBranch
} from 'lucide-react';

// Custom Tech SVGs matching pastel palette
const NextjsIcon = () => (
  <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 1022 12 10 10 0 0012 2zm4.5 14.2l-6.8-9h1.8l5 6.7V8.5h1.5v7.7zM9 8.5v7h-1.5v-7z"/>
  </svg>
);

const HtmlIcon = () => (
  <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.872-.001.69 7.951h8.685l-.328 3.518-2.758.745-2.768-.75-.184-2.008h-2.58l.363 4.316 5.169 1.406 5.178-1.406.702-7.434H8.531z"/>
  </svg>
);

const CssIcon = () => (
  <svg className="w-4 h-4 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.872-.001.69 7.951h8.685l-.328 3.518-2.758.745-2.768-.75-.184-2.008h-2.58l.363 4.316 5.169 1.406 5.178-1.406.702-7.434H8.531z"/>
  </svg>
);

const JsIcon = () => (
  <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 3h18v18H3V3zm11.235 13.916c.866.502 1.83.821 2.802.821 1.293 0 1.956-.55 1.956-1.32 0-2.146-5.836-.889-5.836-4.996 0-1.996 1.632-3.419 4.332-3.419 1.293 0 2.378.33 3.19.82l-.821 2.015c-.642-.395-1.543-.659-2.398-.659-1.121 0-1.631.477-1.631 1.154 0 2.036 5.836.85 5.836 4.968 0 2.199-1.74 3.528-4.708 3.528-1.403 0-2.684-.395-3.551-.935l.83-1.978zm-6.195.055c.67.385 1.512.632 2.345.632.962 0 1.438-.385 1.438-1.045 0-1.815-4.434-1.018-4.434-4.225 0-1.842 1.438-3.326 3.895-3.326 1.099 0 2.034.275 2.72.632l-.687 1.842c-.522-.275-1.29-.495-2.004-.495-.851 0-1.236.357-1.236.935 0 1.703 4.434.935 4.434 4.252 0 2.06-1.511 3.408-4.183 3.408-1.263 0-2.416-.33-3.13-.824l.842-1.886z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z"/>
  </svg>
);

const JavaIcon = () => (
  <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.87.194 4.969-.212 0 0 .552.325 1.293.529-2.585.895-6.68.736-6.915-1.031zM8.286 16.024s-1.082.723.473.882c2.002.205 3.398.2 5.923-.274 0 0 .386.355.987.52-3.149.882-7.989.704-7.383-1.128zM12.012 0s2.32 2.38 0 4.673c1.996-2.228.326-4.673.326-4.673zM10.22 3.018s2.83 2.158 0 5.176c2.478-2.483.56-5.176.56-5.176z"/>
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Home() {
  const experience = [
    {
      role: "Java Full Stack Developer",
      company: "Stackly Private Limited",
      period: "Feb 2026 – Present",
      description: "Building dynamic website builder features using Node.js and MongoDB. Engineered Google OAuth authentication, multi-channel OTP verification via Twilio, AWS S3 image upload pipelines, and FLUX.2 AI integration."
    },
    {
      role: "Junior Software Engineer",
      company: "TeleApps Private Limited",
      period: "Mar 2025 – Sep 2025",
      description: "Engineered Avaya Interactive Voice Response (IVR) telephony systems and DTMF routing workflows. Developed Java backend microservices using Spring Boot and optimized database query execution."
    }
  ];

  const projects = [
    {
      title: "AI-Powered Website Builder Platform",
      description: "A multi-module website building tool featuring dynamic drag-and-drop canvas editing, secure user authentication, AWS S3 media workflows, and FLUX.2 Klein 4B AI model integration.",
      tech: ["Node.js", "MongoDB", "AWS S3", "Docker", "Next.js"]
    },
    {
      title: "Avaya IVR Telephony Engine",
      description: "Enterprise IVR call routing solution supporting dynamic call flows, DTMF tone handling, and real-time backend REST API integrations.",
      tech: ["Java", "Spring Boot", "Avaya IVR", "MySQL"]
    },
    {
      title: "Digital Platform for Farmers",
      description: "Created an online platform for farmers to access agricultural services and trade products seamlessly.",
      tech: ["Node.js", "Python", "MySQL", "MS Azure", "AWS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Gesture Translation Using Computer Vision",
      description: "Implemented a CNN-based detection system to capture and analyze hand movements for real-time gesture translation.",
      tech: ["Python", "Computer Vision (CNN)", "Bootstrap", "HTML/CSS"]
    },
    {
      title: "Traveler's Choice",
      description: "Developed a website to help travelers plan budget-friendly trips based on custom travel preferences.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const achievements = [
    {
      icon: Presentation,
      title: "Technical Guest Lecturer",
      details: 'Delivered a technical guest lecture on "Recent Trends and Tools in Java Full Stack Technology" to 120+ computer science students at A.V.C. College of Engineering.'
    },
    {
      icon: Trophy,
      title: "Best Outgoing Student",
      details: 'Recognized as "Best Outgoing Student" out of 200+ graduates for achieving top academic performance and leadership.'
    },
    {
      icon: Medal,
      title: "3rd Prize Winner",
      details: 'Awarded 3rd Prize for developing the "Traveler\'s Choice" web application, demonstrating strong technical innovation.'
    }
  ];

  // Soft Pastel Navigation Class
  const navBaseClass = "text-slate-700 font-semibold text-base md:text-lg tracking-wide transition-all duration-300 px-3.5 py-1.5 rounded-xl transform hover:scale-105";

  return (
    <div className="min-h-screen bg-[#f8f6fb] text-slate-700 font-sans tracking-normal selection:bg-purple-200 selection:text-purple-900">
      
      {/* Soft Pastel Ambient Glow Filters */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#f8f6fb]/80 border-b border-purple-100/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-black tracking-wide bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Santhoshini B
          </span>
          <div className="flex gap-1 md:gap-3 items-center">
            <a href="#about" className={`${navBaseClass} hover:bg-rose-100/70 hover:text-rose-800`}>
              About
            </a>
            <a href="#skills" className={`${navBaseClass} hover:bg-emerald-100/70 hover:text-emerald-800`}>
              Skills
            </a>
            <a href="#achievements" className={`${navBaseClass} hover:bg-amber-100/70 hover:text-amber-800`}>
              Achievements
            </a>
            <a href="#experience" className={`${navBaseClass} hover:bg-teal-100/70 hover:text-teal-800`}>
              Experience
            </a>
            <a href="#projects" className={`${navBaseClass} hover:bg-purple-100/70 hover:text-purple-800`}>
              Projects
            </a>
            <a href="#contact" className={`${navBaseClass} hover:bg-sky-100/70 hover:text-sky-800`}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[85vh]">
        <div className="space-y-6 flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold tracking-widest uppercase">
            ✨ Backend & Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-slate-800">
            Building scalable <br />
            <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              backend architectures & web apps.
            </span>
          </h1>
          <p className="max-w-xl text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            I'm a Java Full Stack Developer specializing in robust REST API design, Node.js/Spring Boot backends, cloud workflows on AWS, and IVR telephony solutions.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-extrabold text-sm tracking-wide transition-all shadow-md hover:shadow-purple-300/50 hover:scale-105">
              Get in Touch
            </a>
            <a href="https://github.com/Santho-2003" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-xl bg-purple-100/70 border border-purple-200 hover:border-purple-300 text-slate-700 font-bold text-sm tracking-wide transition-all flex items-center gap-2 hover:scale-105 shadow-sm backdrop-blur-md">
              <GithubIcon className="w-5 h-5 text-purple-700" /> GitHub
            </a>
          </div>
        </div>

        {/* Profile Image Frame */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-purple-100 bg-purple-50/50 shadow-lg">
            <img 
              src="https://github.com/Santho-2003.png" 
              alt="Santhoshini B" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 flex items-center gap-3 text-slate-800">
          <Code2 className="text-purple-600 w-8 h-8" /> Technical Skills
        </h2>

        {/* 1. Full-Width Top Card: Backend Architecture */}
        <div className="p-8 rounded-3xl bg-purple-50/60 backdrop-blur-md border border-purple-100/80 hover:border-purple-200 transition-all shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-200/60 border border-purple-300/50 flex items-center justify-center text-purple-800 shadow-sm">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-wide">Backend & Data Architecture</h3>
              <p className="text-slate-600 text-sm mt-1">Scalable server-side logic, REST microservices, and high-performance databases.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-sm font-semibold hover:bg-emerald-200/70 transition-all cursor-default">
              <NodeIcon /> Node.js
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-sm font-semibold hover:bg-orange-200/70 transition-all cursor-default">
              <JavaIcon /> Java
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-sm font-semibold hover:bg-emerald-200/70 transition-all cursor-default">
              <Terminal className="w-4 h-4 text-emerald-700" /> Spring Boot
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-sm font-semibold hover:bg-amber-200/70 transition-all cursor-default">
              <Lock className="w-4 h-4 text-amber-700" /> Spring Security
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-sm font-semibold hover:bg-emerald-200/70 transition-all cursor-default">
              <Database className="w-4 h-4 text-emerald-700" /> MongoDB
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/80 border border-cyan-200/80 text-cyan-900 text-sm font-semibold hover:bg-cyan-200/70 transition-all cursor-default">
              <Send className="w-4 h-4 text-cyan-700" /> REST API
            </span>
          </div>
        </div>

        {/* 2. Two-Column Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: Frontend Architecture */}
          <div className="p-8 rounded-3xl bg-indigo-50/60 backdrop-blur-md border border-indigo-100/80 hover:border-indigo-200 transition-all shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-200/60 border border-indigo-300/50 flex items-center justify-center text-indigo-800 shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800 tracking-wide">Frontend Architecture</h3>
                <p className="text-slate-600 text-xs mt-1">Building responsive, user-friendly modern web interfaces.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 border border-slate-300/80 text-slate-800 text-sm font-semibold hover:bg-slate-300/70 transition-all cursor-default">
                <NextjsIcon /> Next.js
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-sm font-semibold hover:bg-orange-200/70 transition-all cursor-default">
                <HtmlIcon /> HTML5
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 border border-sky-200/80 text-sky-900 text-sm font-semibold hover:bg-sky-200/70 transition-all cursor-default">
                <CssIcon /> CSS3
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-sm font-semibold hover:bg-amber-200/70 transition-all cursor-default">
                <JsIcon /> JavaScript
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/80 border border-cyan-200/80 text-cyan-900 text-sm font-semibold hover:bg-cyan-200/70 transition-all cursor-default">
                <Sparkles className="w-4 h-4 text-cyan-700" /> Tailwind CSS
              </span>
            </div>
          </div>

          {/* Right Card: Tools, Cloud & Telephony */}
          <div className="p-8 rounded-3xl bg-pink-50/60 backdrop-blur-md border border-pink-100/80 hover:border-pink-200 transition-all shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-200/60 border border-pink-300/50 flex items-center justify-center text-pink-800 shadow-sm">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800 tracking-wide">Tools, Cloud & Telephony</h3>
                <p className="text-slate-600 text-xs mt-1">Version control, cloud infrastructure, AI models, and IVR workflows.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-sm font-semibold hover:bg-orange-200/70 transition-all cursor-default">
                <GitBranch className="w-4 h-4 text-orange-700" /> Git
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-sm font-semibold hover:bg-amber-200/70 transition-all cursor-default">
                <Cloud className="w-4 h-4 text-amber-700" /> AWS (EC2, S3)
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 border border-sky-200/80 text-sky-900 text-sm font-semibold hover:bg-sky-200/70 transition-all cursor-default">
                <Container className="w-4 h-4 text-sky-700" /> Docker
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-900 text-sm font-semibold hover:bg-purple-200/70 transition-all cursor-default">
                <PhoneCall className="w-4 h-4 text-purple-700" /> Avaya IVR / DTMF
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 border border-indigo-200/80 text-indigo-900 text-sm font-semibold hover:bg-indigo-200/70 transition-all cursor-default">
                <Bot className="w-4 h-4 text-indigo-700" /> Cognigy AI
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 border border-pink-200/80 text-pink-900 text-sm font-semibold hover:bg-pink-200/70 transition-all cursor-default">
                <Sparkles className="w-4 h-4 text-pink-700" /> FLUX.2 Integration
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Key Achievements Section */}
      <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 flex items-center gap-3 text-slate-800">
          <Trophy className="text-amber-600 w-8 h-8" /> Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="p-7 rounded-2xl bg-amber-50/50 backdrop-blur-md border border-amber-100 hover:border-amber-200 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-200/60 border border-amber-300/50 flex items-center justify-center text-amber-800 mb-5 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.details}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 flex items-center gap-3 text-slate-800">
          <Briefcase className="text-teal-600 w-8 h-8" /> Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-teal-50/40 backdrop-blur-md border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">{exp.role}</h3>
                  <p className="text-teal-700 font-bold text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-xs text-teal-800 font-mono bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200 self-start md:self-auto">{exp.period}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 flex items-center gap-3 text-slate-800">
          <Server className="text-purple-600 w-8 h-8" /> Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-purple-50/40 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{proj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{proj.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-purple-100 border border-purple-200 text-purple-800 text-xs font-mono font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 flex items-center gap-3 text-slate-800">
            <Award className="text-purple-600 w-7 h-7" /> Certifications
          </h2>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li className="p-5 rounded-xl bg-purple-50/50 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all shadow-sm">
              <span className="font-bold block text-slate-800 text-base">Java Full Stack Certification</span>
              <span className="text-purple-700 text-xs font-semibold">JSpiders Software Training Institute</span>
            </li>
            <li className="p-5 rounded-xl bg-purple-50/50 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all shadow-sm">
              <span className="font-bold block text-slate-800 text-base">Cognigy AI Foundation Certified</span>
              <span className="text-purple-700 text-xs font-semibold">Cognigy</span>
            </li>
            <li className="p-5 rounded-xl bg-purple-50/50 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all shadow-sm">
              <span className="font-bold block text-slate-800 text-base">ChatGPT Completion Certificate</span>
              <span className="text-purple-700 text-xs font-semibold">GUVI</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 flex items-center gap-3 text-slate-800">
            <GraduationCap className="text-purple-600 w-7 h-7" /> Education
          </h2>
          <div className="p-6 rounded-xl bg-purple-50/50 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all shadow-sm">
            <h3 className="font-bold text-slate-800 text-lg">B.E. in Computer Science & Engineering</h3>
            <p className="text-purple-700 text-sm font-semibold mt-1">A.V.C. College of Engineering</p>
            <p className="text-slate-500 text-xs mt-2 font-mono">Graduated: May 2024</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center border-t border-purple-100/80">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-800">Get In Touch</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-10 text-sm">
          Interested in full-stack web development or backend engineering roles? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a 
            href="mailto:santhoshini0605@gmail.com" 
            className="p-6 rounded-xl bg-purple-50/60 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all duration-300 flex flex-col items-center group shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-200/60 border border-purple-300/50 flex items-center justify-center text-purple-800 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors mt-1 truncate max-w-full">
              santhoshini0605@gmail.com
            </span>
          </a>

          <a 
            href="tel:+919500628849" 
            className="p-6 rounded-xl bg-purple-50/60 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all duration-300 flex flex-col items-center group shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-200/60 border border-purple-300/50 flex items-center justify-center text-purple-800 mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors mt-1">
              +91 95006 28849
            </span>
          </a>

          <a 
            href="https://www.linkedin.com/in/santhoshini06/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 rounded-xl bg-purple-50/60 backdrop-blur-md border border-purple-100 hover:border-purple-200 transition-all duration-300 flex flex-col items-center group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-200/60 border border-purple-300/50 flex items-center justify-center text-purple-800 mb-3 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors mt-1">
              santhoshini06
            </span>
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500 border-t border-purple-100/80">
        © 2026 Santhoshini B Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}