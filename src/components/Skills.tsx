import React, { useEffect, useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────── */

const coreFrontend = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Svelte",
  "AngularJS",
  "HTML / CSS",
  "Framer Motion",
];

const coreBackend = [
  "Node.js",
  "Express.js",
  "Django",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "MongoDB",
  "PostgreSQL",
  "Redis",
];

const aiSkills: { name: string; tag: string }[] = [
  { name: "OpenAI", tag: "LLM" },
  { name: "LangChain", tag: "Orchestration" },
  { name: "LiveKit", tag: "Voice AI" },
  { name: "WebRTC", tag: "Real-time" },
  { name: "TTS / STT", tag: "Speech" },
  { name: "Pinecone", tag: "Vector DB" },
  { name: "RAG Pipelines", tag: "Retrieval" },
  { name: "Embeddings", tag: "Semantic Search" },
  { name: "Prompt Engineering", tag: "LLM" },
  { name: "Function Calling", tag: "LLM" },
  { name: "AI Agents", tag: "Autonomy" },
  { name: "Lever ATS", tag: "Integration" },
  { name: "Adaptive Pipelines", tag: "ML Ops" },
];

const infraSkills = [
  { name: "GCP", color: "#4285F4" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "CI/CD", color: "#FC6D26" },
  { name: "Nginx", color: "#009639" },
  { name: "GitHub Actions", color: "#2088FF" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Socket.io", color: "#00f5ff" },
  { name: "Jest", color: "#C21325" },
  { name: "Postman", color: "#FF6C37" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Jira", color: "#0052CC" },
  { name: "Notion", color: "#ffffff" },
];

const learning = [
  "AI Agents",
  "Rust",
  "Edge Computing",
  "Multi-modal LLMs",
  "Wasm",
];

/* ─── Sub-components ────────────────────────────────────────────── */

const SkillTag: React.FC<{
  label: string;
  color?: string;
  delay?: number;
  visible: boolean;
}> = ({ label, color = "#22d3ee", delay = 0, visible }) => (
  <span
    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 cursor-default select-none"
    style={{
      borderColor: `${color}33`,
      background: `${color}0d`,
      color:
        color === "#22d3ee"
          ? "#67e8f9"
          : color === "#a855f7"
            ? "#d8b4fe"
            : "#86efac",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transitionDelay: `${delay}ms`,
      transitionProperty: "opacity, transform",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.background = `${color}20`;
      (e.currentTarget as HTMLElement).style.borderColor = `${color}66`;
      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${color}33`;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.background = `${color}0d`;
      (e.currentTarget as HTMLElement).style.borderColor = `${color}33`;
      (e.currentTarget as HTMLElement).style.boxShadow = "none";
    }}
  >
    {label}
  </span>
);

/* ─── Page ──────────────────────────────────────────────────────── */

export default function SkillsPage() {
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
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="section-bar h-8" />
          <p className="text-xs font-mono text-cyan-400 tracking-widest">
            {"// TECHNICAL SKILLS"}
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Skills & Stack</span>
        </h1>
        <p className="text-slate-400 mt-2 max-w-xl">
          6+ years building across the full stack — with a recent deep focus on
          AI systems, voice agents, and LLM pipelines.
        </p>
      </div>

      {/* ── Top two-col: Core + AI ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Core Engineering */}
        <div
          className="lg:col-span-2 glass rounded-2xl overflow-hidden transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "100ms",
          }}
        >
          <div className="p-5 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <h2 className="text-sm font-semibold text-slate-200 tracking-wide">
                Core Engineering
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono ml-4">
              frontend + backend
            </p>
          </div>

          <div className="p-5 space-y-5">
            {/* Frontend */}
            <div>
              <p className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest mb-3">
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {coreFrontend.map((s, i) => (
                  <SkillTag
                    key={s}
                    label={s}
                    color="#22d3ee"
                    delay={120 + i * 40}
                    visible={visible}
                  />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <p className="text-xs font-mono text-purple-400/70 uppercase tracking-widest mb-3">
                Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {coreBackend.map((s, i) => (
                  <SkillTag
                    key={s}
                    label={s}
                    color="#a855f7"
                    delay={400 + i * 40}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI & Intelligence — featured */}
        <div
          className="lg:col-span-3 rounded-2xl overflow-hidden relative transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "200ms",
            background: "rgba(10, 22, 40, 0.65)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            boxShadow:
              "0 0 40px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* top glow strip */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #10b981, #00f5ff, transparent)",
            }}
          />

          <div
            className="p-5 border-b"
            style={{ borderColor: "rgba(16,185,129,0.2)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h2 className="text-sm font-semibold text-slate-200 tracking-wide">
                  AI & Intelligence
                </h2>
              </div>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#6ee7b7",
                }}
              >
                ★ Flagship Focus
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-1 ml-4">
              LLMs · Voice AI · Vector Search · RAG
            </p>
          </div>

          <div className="p-5">
            <div className="flex flex-wrap gap-2.5">
              {aiSkills.map((s, i) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border cursor-default select-none transition-all duration-300"
                  style={{
                    borderColor: "rgba(16,185,129,0.25)",
                    background: "rgba(16,185,129,0.08)",
                    color: "#6ee7b7",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transitionDelay: `${300 + i * 50}ms`,
                    transitionProperty:
                      "opacity, transform, background, border-color, box-shadow",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(16,185,129,0.18)";
                    el.style.borderColor = "rgba(16,185,129,0.55)";
                    el.style.boxShadow = "0 0 12px rgba(16,185,129,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(16,185,129,0.08)";
                    el.style.borderColor = "rgba(16,185,129,0.25)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {s.name}
                  <span
                    className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{
                      background: "rgba(16,185,129,0.15)",
                      color: "#34d399",
                    }}
                  >
                    {s.tag}
                  </span>
                </span>
              ))}
            </div>

            {/* AI pipeline visual */}
            <div
              className="mt-5 rounded-xl p-4 font-mono text-xs"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(16,185,129,0.12)",
              }}
            >
              <p className="text-emerald-400/60 mb-2 text-[10px] uppercase tracking-widest">
                Active Pipeline
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  "Screen",
                  "Shortlist",
                  "Voice Interview",
                  "Score",
                  "Assign",
                  "Notify",
                ].map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="text-emerald-300/80">{step}</span>
                    {i < 5 && <span className="text-slate-600">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-slate-600 mt-2 text-[10px]">
                Wing AI Recruiter · Lever ATS · Pinecone · GPT · LiveKit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Infrastructure ── */}
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "350ms",
        }}
      >
        <div className="p-5 border-b border-slate-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          <h2 className="text-sm font-semibold text-slate-200 tracking-wide">
            Infrastructure & Tools
          </h2>
          <span className="text-xs font-mono text-slate-500 ml-1">
            Cloud · DevOps · Ecosystem
          </span>
        </div>
        <div className="p-5 flex flex-wrap gap-2.5">
          {infraSkills.map((t, i) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border cursor-default select-none transition-all duration-300"
              style={{
                borderColor: `${t.color}28`,
                background: `${t.color}0a`,
                color: "#94a3b8",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transitionDelay: `${450 + i * 35}ms`,
                transitionProperty:
                  "opacity, transform, background, border-color, box-shadow",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${t.color}18`;
                el.style.borderColor = `${t.color}55`;
                el.style.color = t.color;
                el.style.boxShadow = `0 0 10px ${t.color}22`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${t.color}0a`;
                el.style.borderColor = `${t.color}28`;
                el.style.color = "#94a3b8";
                el.style.boxShadow = "none";
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: t.color }}
              />
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Currently learning ── */}
      <div
        className="glass rounded-2xl p-5 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "500ms",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <h3 className="text-sm font-semibold text-slate-200">
            Currently Exploring
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {learning.map((t, i) => (
            <span
              key={t}
              className="tech-tag text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${600 + i * 60}ms`,
                transitionProperty: "opacity",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
