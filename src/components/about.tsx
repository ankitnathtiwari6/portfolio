import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const approach = [
  {
    title: "AI-First Engineering",
    desc: "Building autonomous AI agents — voice interviewers, semantic search, LLM pipelines — that replace entire manual workflows.",
    color: "#10b981",
  },
  {
    title: "Low-Latency Systems",
    desc: "Architecting real-time voice AI with sub-400ms end-to-end latency using LiveKit, WebRTC, and streaming LLM inference.",
    color: "#22d3ee",
  },
  {
    title: "Scalable Architecture",
    desc: "Production-grade MERN + cloud deployments on GCP/AWS with Docker, Kubernetes, and CI/CD pipelines handling thousands of requests daily.",
    color: "#a855f7",
  },
];

const expertise = [
  { title: "Frontend",       skills: "React · Next.js · Svelte · TypeScript",            color: "#22d3ee" },
  { title: "Backend",        skills: "Node.js · Express · GraphQL · REST · WebSockets",  color: "#a855f7" },
  { title: "AI & LLMs",      skills: "OpenAI · LangChain · RAG · Embeddings",     color: "#10b981" },
  { title: "Voice AI",       skills: "LiveKit · TTS / STT · WebRTC · Voice Agents",      color: "#10b981" },
  { title: "Vector & Data",  skills: "Pinecone · MongoDB · PostgreSQL · Redis",           color: "#22d3ee" },
  { title: "Cloud & DevOps", skills: "GCP · AWS · Docker · Kubernetes · CI/CD",          color: "#a855f7" },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="section-bar h-8" />
          <p className="text-xs font-mono text-cyan-400 tracking-widest">{"// ABOUT ME"}</p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Who Am I?</span>
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl">
          Full Stack AI Engineer building voice agents, LLM pipelines, and production AI systems from New Delhi, India.
        </p>
      </div>

      {/* Bio card */}
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "120ms" }}
      >
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #22d3ee, #a855f7, transparent)" }} />

        <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-28 h-28">
              <div
                className="absolute inset-0 rounded-full avatar-ring"
                style={{ background: "conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee)", padding: "2px" }}
              >
                <div className="w-full h-full rounded-full bg-[#070f1e]" />
              </div>
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center z-10">
                <span className="text-2xl font-bold text-neon-cyan">AT</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-slate-100">Ankit Nath Tiwari</h2>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#6ee7b7" }}
              >
                Full Stack AI Engineer
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mb-5">6+ years · New Delhi, India · Open to remote</p>

            <p className="text-slate-400 leading-relaxed mb-4">
              I build end-to-end AI systems — not just integrations. Currently at{" "}
              <span className="text-cyan-400 font-medium">Wing Assistant (M32 Labs)</span>, where I architected a
              fully automated AI hiring platform that processes thousands of resumes daily. The system covers the
              entire pipeline: AI screening, voice interview agents, semantic candidate search, Lever ATS integration,
              and automated evaluation reports — zero manual steps.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My AI stack goes deep: LLM pipelines with GPT-4, RAG with Pinecone vector search, real-time voice
              agents via LiveKit + TTS/STT at sub-500ms latency, and scalable MERN backends on GCP/AWS. I don't just
              integrate AI — I ship the autonomous systems that run at scale.
            </p>

            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Node.js", "OpenAI", "LiveKit", "Pinecone", "LangChain", "WebRTC"].map((tag) => (
                <span key={tag} className="tech-tag text-xs font-mono px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How I Build */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "220ms" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="section-bar h-6" />
          <h2 className="text-lg font-bold text-slate-100">How I Build</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {approach.map((item, i) => (
            <div
              key={item.title}
              className="glass rounded-xl p-5 card-hover transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${280 + i * 60}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
              </div>
              <h3 className="font-semibold text-slate-200 mb-2 text-sm">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Expertise */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "360ms" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="section-bar h-6" />
          <h2 className="text-lg font-bold text-slate-100">Technical Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="glass rounded-xl p-4 card-hover transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${420 + i * 50}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <h3 className="font-semibold text-sm" style={{ color: item.color }}>{item.title}</h3>
              </div>
              <p className="text-slate-500 text-xs font-mono leading-relaxed">{item.skills}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div
        className="glass rounded-2xl p-8 relative overflow-hidden transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "480ms" }}
      >
        <div className="absolute top-4 left-6 text-7xl text-cyan-500/10 font-serif leading-none select-none">"</div>
        <div className="relative z-10">
          <p className="text-slate-300 italic leading-relaxed mb-5">
            Ankit delivered an exceptional AI-powered platform that exceeded our expectations. His expertise
            in both frontend and backend technologies, combined with his deep understanding of AI integration,
            was precisely what our project needed.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              SM
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">Sourabh Modi</p>
              <p className="text-xs text-slate-500">CTO, Pesto Tech</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="flex flex-wrap gap-4 justify-center pb-4 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "560ms" }}
      >
        <Link to="/resume" className="btn-solid-neon inline-block px-10 py-3 rounded-xl font-semibold text-sm">
          View Resume
        </Link>
        <Link to="/contact" className="btn-neon inline-block px-10 py-3 rounded-xl font-semibold text-sm">
          Let's Build Together
        </Link>
      </div>

    </div>
  );
}
