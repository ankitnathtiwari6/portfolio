import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Neural-network canvas ── */
const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMouse);

    const count = window.innerWidth < 768 ? 35 : 70;
    interface P {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
    }
    const pts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 0.8,
      hue: Math.random() > 0.7 ? 270 : 185,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const m = mouseRef.current;

      pts.forEach((p) => {
        const dx = p.x - m.x,
          dy = p.y - m.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          p.vx += (dx / d) * 0.03;
          p.vy += (dy / d) * 0.03;
        }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.2) {
          p.vx = (p.vx / spd) * 1.2;
          p.vy = (p.vy / spd) * 1.2;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.hue === 185 ? "rgba(0,245,255,0.85)" : "rgba(168,85,247,0.85)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.hue === 185 ? "#00f5ff" : "#a855f7";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const MAX = 140;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX) {
            const a = (1 - dist / MAX) * 0.45;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,245,255,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ── Typewriter hook ── */
const ROLES = [
  "Full Stack AI Engineer",
  "Voice AI Builder",
  "Full Stack Developer",
  "LLM Pipeline Architect",
];
const useTypewriter = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 2000);
      return () => clearTimeout(t);
    }
    const word = ROLES[idx];
    const t = setTimeout(
      () => {
        if (!deleting) {
          if (text === word) {
            setPaused(true);
            return;
          }
          setText(word.slice(0, text.length + 1));
        } else {
          if (text === "") {
            setDeleting(false);
            setIdx((i) => (i + 1) % ROLES.length);
            return;
          }
          setText(word.slice(0, text.length - 1));
        }
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, paused]);

  return text;
};

/* ── Home component ── */
export const Home: React.FC = () => {
  const role = useTypewriter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: "6+", label: "Years Exp" },
    { value: "1000s", label: "AI Interviews/day" },
    { value: "10+", label: "AI Products" },
    { value: "<400ms", label: "Voice Agent Latency" },
  ];

  const techBadges = [
    "React",
    "Node.js",
    "TypeScript",
    "OpenAI",
    "LiveKit",
    "Pinecone",
    "LangChain",
    "WebRTC",
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden -m-8 lg:-m-12 px-8 lg:px-12">
      <NeuralCanvas />

      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none animate-float-delay" />

      <div className="relative z-10 w-full max-w-5xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            className={`space-y-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400 tracking-wider">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <div>
              <p className="text-slate-400 font-mono text-sm tracking-widest mb-2">
                {"// Hello, I'm"}
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-3">
                <span className="gradient-text">Ankit Nath</span>
                <br />
                <span className="text-slate-100">Tiwari</span>
              </h1>
              <div className="flex items-center gap-3 h-10">
                <span className="text-lg sm:text-xl text-slate-300 font-mono">
                  <span className="text-cyan-400">&gt;</span>{" "}
                  <span className="cursor-blink">{role}</span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              Building end-to-end AI systems — from{" "}
              <span className="text-cyan-400">voice interview agents</span>{" "}
              running at sub-500ms latency, to{" "}
              <span className="text-purple-400">LLM pipelines</span> that screen
              thousands of candidates daily. 6 years shipping AI-powered
              products at scale with React, Node.js, and OpenAI.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((t, i) => (
                <span
                  key={t}
                  className="tech-tag text-xs font-mono px-3 py-1 rounded-full"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/experience"
                className="btn-solid-neon px-7 py-3 rounded-lg font-semibold text-sm"
              >
                View My Work
              </Link>
              <Link
                to="/resume"
                className="btn-neon px-7 py-3 rounded-lg font-semibold text-sm"
              >
                View Resume
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg font-semibold text-sm border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-all"
              >
                Contact
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-neon-cyan leading-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI recruiter system card */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative">
              <div className="glass rounded-2xl p-6 animate-float border-glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500">
                    ai_recruiter.ts
                  </span>
                </div>
                <div className="font-mono text-sm space-y-1.5">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">platform</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-300">"Wing AI Hiring"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">stage</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-300">"production"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">dailyResumes</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-300">"1000s"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">pipeline</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-yellow-400">[</span>
                  </p>
                  <p className="pl-8 text-orange-300 text-xs">
                    "screen", "shortlist",
                  </p>
                  <p className="pl-8 text-orange-300 text-xs">
                    "voice interview", "rank"
                  </p>
                  <p className="pl-4">
                    <span className="text-yellow-400">]</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">ats</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-300">"Lever"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">voiceLatency</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-cyan-400">"&lt;400ms"</span>
                  </p>
                  <p>
                    <span className="text-yellow-400">{"}"}</span>
                  </p>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="animate-float-delay absolute -top-4 -right-4">
                    <div className="glass rounded-xl px-3 py-2 text-xs font-mono text-cyan-400 border border-cyan-500/30">
                      <span className="text-slate-500">voice:</span> LiveKit +
                    </div>
                  </div>
                  <div className="animate-float absolute -bottom-4 -left-4">
                    <div className="glass rounded-xl px-3 py-2 text-xs font-mono text-purple-400 border border-purple-500/30">
                      <span className="text-slate-500">search:</span> Pinecone
                      RAG
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};
