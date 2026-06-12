import React, { useEffect, useState } from "react";

const courses = [
  "Data Structures & Algorithms",
  "Computer Network",
  "Operating Systems",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "Discrete Mathematics",
  "Computer Architecture",
];

const continuousLearning = [
  { label: "AI agent architectures & multi-agent RAG systems",  tag: "AI"       },
  { label: "Real-time voice AI — WebRTC, TTS/STT, LiveKit",    tag: "Voice AI" },
  { label: "LLM fine-tuning, prompt engineering & eval loops", tag: "LLMs"     },
  { label: "Cloud-native microservices & distributed systems",  tag: "Infra"    },
];

export default function EducationPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-10">

      {/* Header */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="section-bar h-8" />
          <p className="text-xs font-mono text-cyan-400 tracking-widest">{"// EDUCATION"}</p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Education</span>
        </h1>
        <p className="text-slate-400 mt-2">Strong engineering fundamentals, continuously pushed forward by hands-on AI work.</p>
      </div>

      {/* Degree card */}
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "120ms" }}
      >
        {/* Top accent line */}
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #22d3ee, #a855f7, transparent)" }} />

        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-cyan-400 flex-shrink-0"
              style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              NIT
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">NIT Patna</h2>
              <p className="text-sm text-slate-400 font-mono">Bachelor of Technology · 2010 – 2014</p>
              <p className="text-xs text-slate-600 mt-0.5">Patna, Bihar, India</p>
            </div>
          </div>

          {/* CGPA badge */}
          <div
            className="flex flex-col items-center justify-center px-6 py-3 rounded-xl"
            style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)" }}
          >
            <span className="text-xs font-mono text-slate-500 tracking-widest">CGPA</span>
            <span className="text-3xl font-bold text-neon-cyan leading-tight">8.18</span>
            <span className="text-xs text-slate-600 font-mono">/ 10.0</span>
          </div>
        </div>

        {/* Coursework */}
        <div className="p-6">
          <p className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest mb-4">Core Coursework</p>
          <div className="flex flex-wrap gap-2">
            {courses.map((c, i) => (
              <span
                key={c}
                className="tech-tag text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${200 + i * 50}ms`,
                  transitionProperty: "opacity",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Learning */}
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "280ms" }}
      >
        <div className="p-5 border-b border-slate-800 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-sm font-semibold text-slate-200">Continuous Learning</h2>
          <span className="text-xs font-mono text-slate-500">always shipping, always learning</span>
        </div>

        <div className="p-5 space-y-3">
          {continuousLearning.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-default group"
              style={{
                background: "rgba(16,185,129,0.04)",
                border: "1px solid rgba(16,185,129,0.1)",
                opacity: visible ? 1 : 0,
                transitionDelay: `${360 + i * 70}ms`,
                transitionProperty: "opacity, background, border-color",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.09)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.1)";
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd"/>
                </svg>
              </span>
              <span className="text-sm text-slate-400 flex-1">{item.label}</span>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)", color: "#6ee7b7" }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
