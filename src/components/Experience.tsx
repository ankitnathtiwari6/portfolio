import React, { useState } from "react";

const experiences = [
  {
    id: "wing",
    company: "Wing Assistant",
    subtitle: "M32 Labs Team",
    logo: "WA",
    role: "Software Engineer",
    period: "MAR 2025 – PRESENT",
    current: true,
    color: "#00f5ff",
    description: "Wing Assistant is a US-based staffing company. Built an internal AI hiring platform that fully automates the end-to-end recruitment workflow — processing thousands of resumes daily and replacing manual screening, scheduling, and candidate evaluation with AI agents.",
    projects: [
      {
        title: "AI Recruiter — Intelligent Hiring Automation",
        icon: "🤖",
        description:
          "Built a full-stack AI recruiter platform (React, Node.js, MongoDB) that manages the entire hiring pipeline: posting jobs, screening applicants, shortlisting candidates, dispatching AI interviews, analysing results, and presenting a final ranked shortlist — all automated.",
        technologies: ["React", "Node.js", "MongoDB", "OpenAI", "Pinecone", "Lever ATS"],
        achievements: [
          "Architected end-to-end pipeline — from job posting to final ranked shortlist — cutting time-to-hire from ~25 days to under a week",
          "1M+ resumes parsed to date; up to 2,000 screened per day with zero manual handoffs via Lever ATS integration",
          "Built semantic search with OpenAI embeddings + Pinecone — reduces time-to-match by 80%, from a week to a single day",
          "Full recruiter dashboard: application volume → interview status → final shortlist in one place",
        ],
      },
      {
        title: "Voice-to-Voice AI Interview Agent",
        icon: "🎙️",
        description:
          "Built a fully automated voice interview agent using LiveKit, TTS, STT, WebRTC, and GPT-4 that conducts real, conversational interviews at sub-400ms latency — no human needed.",
        technologies: ["LiveKit", "WebRTC", "GPT-4", "TTS/STT", "Node.js", "WebSockets"],
        achievements: [
          "Handles up to 500 screening interviews per day, 24/7 — no recruiter involvement required",
          "Adaptive LLM pipeline generates dynamic follow-up questions based on each candidate's previous answer",
          "Post-interview: auto-generates structured evaluation with scores, insights, strengths, red flags & hire/no-hire recommendation",
          "Sub-400ms end-to-end voice latency in production",
        ],
      },
    ],
  },
  {
    id: "pesto",
    company: "Pesto Tech",
    logo: "PT",
    role: "Software Developer",
    period: "FEB 2022 – FEB 2025",
    color: "#a855f7",
    projects: [
      {
        title: "AI Interview Platform",
        icon: "🎥",
        description:
          "Built the full-stack platform for automated video and coding interview evaluation. Integrated GPT-4 for evaluating candidate answers, generating scores, and producing structured feedback reports automatically.",
        technologies: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "GCP", "OpenAI"],
        achievements: [
          "Scaled from 100 → thousands of interviews/month",
          "Deployed on GCP with Cloud Storage for video assets",
        ],
        deployment: "Google Cloud Platform",
      },
      {
        title: "AI Hiring Platform",
        icon: "🔍",
        description:
          "Built an end-to-end AI recruitment platform. Used text embeddings to represent job descriptions and candidate profiles in vector space for high-accuracy similarity matching.",
        technologies: ["React", "Node.js", "OpenAI", "Pinecone", "Firebase", "Docker", "Kubernetes"],
        achievements: [
          "Reduced time-to-hire by 50%+",
          "Secured with Firebase Auth + JWT; deployed on GCP with Kubernetes",
        ],
        deployment: "GCP with Kubernetes",
      },
      {
        title: "Developer Onboarding Platform",
        icon: "👨‍💻",
        description:
          "Built an AI-powered onboarding platform that auto-parses resumes using OpenAI and generates structured developer profiles. Used LLM function calling to extract skills, experience, and project details from unstructured resume text.",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI"],
        achievements: [
          "Reduced onboarding time by 80%, increased signup conversion 3×",
          "Profile creation: 2+ hours → 10 minutes",
        ],
      },
      {
        title: "Mentor Portal + LMS",
        icon: "🧠",
        description:
          "Built a mentor management platform (Svelte, Node.js, PostgreSQL, GraphQL) for session tracking, feedback, and payment automation. Also built an LMS for live mentor sessions with React + TypeScript and REST APIs.",
        technologies: ["Svelte", "React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "MongoDB"],
        achievements: [
          "Session coordination: 2–3 days → 5–10 minutes — doubled team productivity",
          "Session tracking and payment time reduced by 80%",
        ],
      },
    ],
  },
  {
    id: "indus",
    company: "Indus OS (PhonePe)",
    logo: "IO",
    role: "Software Engineer",
    period: "SEP 2021 – FEB 2022",
    color: "#10b981",
    description: [
      "Enhanced the Developer Console for App Bazar's marketplace — built APK upload feature and resolved critical production bugs (AngularJS, Node.js, MongoDB).",
      "Integrated CMS portal with Developer Console; implemented AWS S3 for scalable media storage and efficient content delivery.",
      "Implemented authentication and role-based authorization using JWT tokens.",
      "Optimized MongoDB queries through indexing — significantly improved page load times.",
    ],
    technologies: ["AngularJS", "Node.js", "MongoDB", "AWS S3", "JWT"],
  },
  {
    id: "newsbird",
    company: "Newsbird",
    logo: "NB",
    role: "Software Engineer",
    period: "JUN 2019 – AUG 2021",
    color: "#f97316",
    description: [
      "Built a full-featured news platform (newsbird.live) with categorized feeds, short-form video, and dedicated portals for users and reporters.",
      "Delivered a secure, scalable MERN stack platform on AWS with real-time notifications and role-based access for both users and reporters.",
      "Designed all UI/UX wireframes in Figma before development.",
    ],
    technologies: ["React", "Express", "MongoDB", "AWS S3", "JWT", "Figma"],
  },
  {
    id: "ihmcl",
    company: "IHMCL (NHAI)",
    logo: "IH",
    role: "Engineer",
    period: "NOV 2016 – NOV 2018",
    color: "#64748b",
    description: [
      "Key representative from IHMCL for implementing Hybrid ETC systems at 100+ national highway toll plazas.",
      "Led project planning for highway amenities: financial analysis reports, architectural drawings, cost estimations, feasibility assessments, and contract documentation.",
    ],
    technologies: ["Project Management", "Financial Analysis", "ETC Systems"],
  },
  {
    id: "capricot",
    company: "Capricot Technology",
    logo: "CT",
    role: "GIS Engineer",
    period: "NOV 2015 – NOV 2016",
    color: "#64748b",
    description: [
      "Developed GIS applications for Rajasthan state government and NHAI.",
    ],
    technologies: ["GIS", "Mapping Software"],
  },
];

const Experience: React.FC = () => {
  const [active, setActive] = useState("wing");
  const [fading, setFading] = useState(false);

  const switchTab = (id: string) => {
    if (id === active) return;
    setFading(true);
    setTimeout(() => { setActive(id); setFading(false); }, 250);
  };

  const exp = experiences.find((e) => e.id === active)!;

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="section-bar h-8" />
          <p className="text-xs font-mono text-cyan-400 tracking-widest">{"// WORK EXPERIENCE"}</p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-slate-400 mt-2">6+ years shipping AI-powered products, from voice agents to hiring automation platforms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">

        {/* Company selector */}
        <div className="md:col-span-2">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800">
              <p className="text-xs font-mono text-slate-500 tracking-wider">COMPANIES</p>
            </div>
            <div className="divide-y divide-slate-800/50">
              {experiences.map((e) => (
                <button
                  key={e.id}
                  onClick={() => switchTab(e.id)}
                  className={`w-full p-4 text-left transition-all flex items-center gap-3 hover:bg-slate-800/30 ${
                    active === e.id ? "bg-cyan-500/5 border-l-2 border-l-cyan-400" : "border-l-2 border-l-transparent"
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${e.color}40, ${e.color}20)`, border: `1px solid ${e.color}40` }}
                  >
                    <span style={{ color: e.color }}>{e.logo}</span>
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-medium truncate ${active === e.id ? "text-cyan-400" : "text-slate-300"}`}>
                      {e.company}
                    </div>
                    <div className="text-xs text-slate-600 font-mono mt-0.5">{e.period.split("–")[0].trim()}</div>
                  </div>
                  {e.current && (
                    <span className="ml-auto w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`md:col-span-5 transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}>
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="p-6"
              style={{ background: `linear-gradient(135deg, ${exp.color}10, ${exp.color}05)`, borderBottom: `1px solid ${exp.color}25` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold text-slate-100">{exp.company}</h2>
                    {(exp as any).subtitle && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {(exp as any).subtitle}
                      </span>
                    )}
                    {exp.current && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                        current
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm">{exp.role}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-400 border border-slate-700 whitespace-nowrap self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>
              {(exp as any).description && typeof (exp as any).description === "string" && (
                <p className="text-slate-400 text-sm mt-3 italic">{(exp as any).description}</p>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Bullet-point description (Indus, IHMCL, Capricot) */}
              {(exp as any).description && Array.isArray((exp as any).description) && (
                <div className="space-y-3 mb-6">
                  {(exp as any).description.map((d: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          className="w-3 h-3" style={{ color: exp.color }}>
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-slate-400 text-sm">{d}</p>
                    </div>
                  ))}
                  {(exp as any).technologies && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {(exp as any).technologies.map((t: string) => (
                        <span key={t} className="tech-tag text-xs font-mono px-2.5 py-1 rounded-lg">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project cards */}
              {(exp as any).projects && (
                <div className="space-y-5">
                  {(exp as any).projects.map((proj: any, i: number) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border card-hover transition-all"
                      style={{ background: `${exp.color}06`, borderColor: `${exp.color}20` }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: `${exp.color}15` }}
                        >
                          {proj.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-200">{proj.title}</h3>
                          {proj.deployment && (
                            <span className="text-xs font-mono text-slate-500">
                              Deployed on {proj.deployment}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-3">{proj.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.technologies.map((t: string) => (
                          <span key={t} className="tech-tag text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                        ))}
                      </div>

                      {proj.achievements.length > 0 && (
                        <ul className="space-y-1">
                          {proj.achievements.map((a: string, j: number) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                              <span className="text-green-400">✓</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
