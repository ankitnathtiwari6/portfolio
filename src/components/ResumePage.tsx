import React from "react";

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-6">
    <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3 print:text-blue-700 print:border-blue-300">
      {title}
    </h2>
    {children}
  </div>
);

const ResumePage: React.FC = () => (
  <div className="max-w-5xl mx-auto space-y-6">
    {/* Action bar — hidden when printing */}
    <div className="no-print">
      <div className="flex items-center gap-3 mb-2">
        <div className="section-bar h-8" />
        <p className="text-xs font-mono text-cyan-400 tracking-widest">
          {"// RESUME"}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">My Resume</span>
          </h1>
          <p className="text-slate-400 mt-2">
            View online, download the PDF, or print to save.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href="/portfolio/resume.pdf"
            download="Ankit_Nath_Tiwari_Resume.pdf"
            className="btn-solid-neon px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="btn-neon px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9h8v4H6v-4zm9-4a1 1 0 110 2 1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>

    {/* Inline resume */}
    <div
      id="resume-print"
      className="glass rounded-2xl p-8 sm:p-10 text-slate-300 print:bg-white print:text-black print:rounded-none print:p-8 print:shadow-none"
    >
      {/* Header */}
      <div className="text-center mb-6 pb-5 border-b border-slate-700/60 print:border-gray-300">
        <h1 className="text-3xl font-bold text-slate-100 print:text-black tracking-widest mb-1">
          ANKIT NATH TIWARI
        </h1>
        <p className="text-slate-400 print:text-gray-600 mt-1 text-sm">
          New Delhi, India &nbsp;·&nbsp;
          <a
            href="tel:+917791059913"
            className="hover:text-cyan-400 transition-colors print:text-gray-600"
          >
            +91 7791059913
          </a>
          &nbsp;·&nbsp;
          <a
            href="mailto:ankitnathtiwari@gmail.com"
            className="hover:text-cyan-400 transition-colors print:text-gray-600"
          >
            ankitnathtiwari@gmail.com
          </a>
        </p>
        <p className="text-slate-500 print:text-gray-500 text-xs mt-1 font-mono">
          <a
            href="https://www.linkedin.com/in/ankit-nath-tiwari-6b86a510b/"
            className="hover:text-cyan-400 transition-colors print:text-gray-500"
          >
            linkedin.com/in/ankit-nath-tiwari-6b86a510b
          </a>
          &nbsp;·&nbsp;
          <a
            href="https://ankitnathtiwari6.github.io/portfolio/"
            className="hover:text-cyan-400 transition-colors print:text-gray-500"
          >
            ankitnathtiwari6.github.io/portfolio
          </a>
        </p>
      </div>

      {/* Summary */}
      <ResumeSection title="Professional Summary">
        <p className="text-sm leading-relaxed text-slate-400 print:text-gray-700">
          Full-Stack Software Engineer with 6+ years of experience building
          AI-powered products at scale. Architected and shipped a fully
          automated AI hiring platform — processing thousands of resumes daily —
          with end-to-end capabilities: AI screening, voice interview agents,
          semantic candidate search, and ATS integration. Deep expertise in MERN
          stack, LLM pipelines, RAG, voice agents (LiveKit, TTS/STT), vector
          search (Pinecone), and cloud deployments on AWS and GCP.
        </p>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection title="Technical Skills">
        <div className="space-y-1 text-sm text-slate-400 print:text-gray-700">
          {[
            ["Languages", "JavaScript, TypeScript, Python, C++"],
            [
              "Frontend",
              "React, Next.js, Svelte, Redux, AngularJS, Tailwind CSS, HTML5, CSS3, Jest",
            ],
            [
              "Backend",
              "Node.js, Express.js, Django, REST API, GraphQL, WebSockets",
            ],
            ["MERN Stack", "MongoDB, Express.js, React, Node.js"],
            ["Databases", "MongoDB, PostgreSQL, Pinecone (Vector DB), Redis"],
            [
              "AI / LLM",
              "OpenAI, LangChain, LLM Pipelines, RAG, Embeddings, Vector Search, Function Calling",
            ],
            [
              "Voice / Speech",
              "LiveKit, TTS (Text-to-Speech), STT (Speech-to-Text), Voice Agents, WebRTC, Real-time Audio Streaming",
            ],
            [
              "Agents",
              "Voice Agents, Chat Agents, AI Recruiter Bots, Autonomous Workflow Automation",
            ],
            ["Integrations", "Lever ATS, Firebase, JWT, Google Sign-In"],
            [
              "Cloud & DevOps",
              "AWS (S3, EC2), GCP, Docker, Kubernetes, Nginx, CI/CD",
            ],
            ["Tools", "Git, GitHub, Postman, Figma, Jira, Notion"],
          ].map(([label, value]) => (
            <p key={label}>
              <span className="font-semibold text-slate-300 print:text-black">
                {label}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection title="Work Experience">
        <div className="space-y-5">
          {/* Wing */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <div>
                <p className="font-bold text-slate-200 print:text-black">
                  Software Engineer — Wing Assistant (M32 Labs)
                </p>
                <p className="text-xs text-slate-500 italic mt-0.5 print:text-gray-500">
                  US-based staffing company. Built internal AI hiring platform
                  automating end-to-end recruitment — processing thousands of
                  resumes daily.
                </p>
              </div>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">
                Mar 2025 – Present
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">
                  AI Recruiter — Intelligent Hiring Automation
                </p>
                <ul className="space-y-1 text-sm text-slate-400 print:text-gray-700">
                  {[
                    "Built full-stack AI recruiter platform (React, Node.js, MongoDB) managing the entire pipeline: job posting, screening, shortlisting, AI interviews, result analysis, and ranked shortlist — all automated.",
                    "Integrated with Lever ATS to sync live job postings; recruiters and CSMs auto-assigned the moment a requisition goes live.",
                    "Built AI-powered semantic search using OpenAI embeddings + Pinecone — recruiters find candidates via plain English, faster and more accurate than keyword filters.",
                    "System proactively suggests best-matched candidates via vector similarity scoring between job requirements and candidate profiles.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">
                  Voice-to-Voice AI Interview Agent
                </p>
                <ul className="space-y-1 text-sm text-slate-400 print:text-gray-700">
                  {[
                    "Built fully automated voice interview agent using LiveKit, TTS, STT, WebRTC, and GPT conducting real conversational interviews at sub-500ms latency — no human needed.",
                    "Adaptive LLM pipeline generates dynamic follow-up questions in real time based on each candidate's previous answer — every interview is unique and context-aware.",
                    "Agent triggered automatically once a candidate is shortlisted — seamless zero-touch pipeline from application to evaluated interview.",
                    "Post-interview: auto-generates structured evaluation with scores, insights, strengths, red flags, and hire/no-hire recommendation.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pesto */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">
                Software Developer — Pesto Tech
              </p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">
                Feb 2022 – Feb 2025
              </span>
            </div>
            <ul className="space-y-1 text-sm text-slate-400 print:text-gray-700">
              {[
                "Built full-stack AI interview platform (React, TypeScript, Node.js, MongoDB, OpenAI). Integrated GPT-4 for evaluating answers and generating structured feedback. Scaled 100 → thousands of interviews/month on GCP.",
                "Built AI hiring platform with OpenAI candidate matching + Pinecone semantic vector search; reduced time-to-hire by 50%+. Deployed on GCP with Docker + Kubernetes.",
                "Built AI developer onboarding platform using LLM function calling for resume parsing. Reduced onboarding time 80%, signup 3×; profile creation: 2+ hours → 10 minutes.",
                "Built mentor portal (Svelte, PostgreSQL, GraphQL) + LMS (React, TypeScript, MongoDB) — session coordination: 2–3 days → 5–10 minutes, doubled team productivity.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Indus */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">
                Software Engineer — Indus OS (Acquired by PhonePe)
              </p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">
                Sep 2021 – Feb 2022
              </span>
            </div>
            <ul className="space-y-1 text-sm text-slate-400 print:text-gray-700">
              {[
                "Enhanced Developer Console for App Bazar: built APK upload feature and resolved critical production bugs (AngularJS, Node.js, MongoDB).",
                "Integrated CMS with Developer Console using AWS S3 for media storage; implemented JWT auth and RBAC.",
                "Optimized MongoDB queries with indexing — significantly reduced page load times.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsbird */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">
                Software Engineer — Newsbird
              </p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">
                Jun 2019 – Aug 2021
              </span>
            </div>
            <ul className="space-y-1 text-sm text-slate-400 print:text-gray-700">
              {[
                "Built full-featured news platform (newsbird.live): categorized feeds, short-form video, user and reporter portals. Full MERN stack on AWS with JWT auth and real-time notifications.",
                "Built LMS reducing session coordination from 2–3 days to 5–10 minutes, doubling team productivity.",
                "Built mentor portal with payment automation — reduced tracking time by 80% (Svelte, PostgreSQL, GraphQL).",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Earlier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <p className="font-bold text-slate-200 print:text-black text-sm">
                  Engineer — IHMCL (NHAI)
                </p>
                <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap ml-2 font-mono">
                  Nov 2016 – Nov 2018
                </span>
              </div>
              <p className="text-xs text-slate-500 print:text-gray-600">
                Deployed Hybrid ETC systems at 100+ highway toll plazas. Led
                planning, financial analysis, and contract documentation.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <p className="font-bold text-slate-200 print:text-black text-sm">
                  GIS Engineer — Capricot Technology
                </p>
                <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap ml-2 font-mono">
                  Nov 2015 – Nov 2016
                </span>
              </div>
              <p className="text-xs text-slate-500 print:text-gray-600">
                Developed GIS applications for Rajasthan state government and
                NHAI.
              </p>
            </div>
          </div>
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
          <div>
            <p className="font-bold text-slate-200 print:text-black">
              Bachelor of Technology — NIT Patna
            </p>
            <p className="text-sm text-slate-400 print:text-gray-700">
              CGPA: 8.18 / 10.0
            </p>
          </div>
          <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">
            2010 – 2014
          </span>
        </div>
      </ResumeSection>

      {/* References */}
      <ResumeSection title="References">
        <div className="space-y-1 text-sm text-slate-400 print:text-gray-700">
          <p>
            <span className="font-semibold text-slate-300 print:text-black">
              Sourabh Modi
            </span>
            , CTO — Pesto Tech |{" "}
            <a
              href="https://www.linkedin.com/in/sourabh-modi-45184413/"
              className="hover:text-cyan-400 transition-colors print:text-gray-600"
            >
              linkedin.com/in/sourabh-modi-45184413
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-300 print:text-black">
              Shashank Suresh
            </span>
            , Senior Frontend Developer — Five9 |{" "}
            <a
              href="https://www.linkedin.com/in/shashank-suresh/"
              className="hover:text-cyan-400 transition-colors print:text-gray-600"
            >
              linkedin.com/in/shashank-suresh
            </a>
          </p>
        </div>
      </ResumeSection>
    </div>
  </div>
);

export default ResumePage;
