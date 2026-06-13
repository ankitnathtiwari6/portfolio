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

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2 text-sm text-slate-400 print:text-gray-700">
    <span className="mt-0.5 flex-shrink-0">●</span>
    <span>{children}</span>
  </li>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="btn-neon px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9h8v4H6v-4zm9-4a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
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
          +91 7791059913 &nbsp;·&nbsp;
          <a href="mailto:ankitnathtiwari@gmail.com" className="hover:text-cyan-400 transition-colors print:text-gray-600">
            ankitnathtiwari@gmail.com
          </a>
          &nbsp;·&nbsp; New Delhi, India
        </p>
        <p className="text-slate-500 print:text-gray-500 text-xs mt-1 font-mono">
          <a href="https://www.linkedin.com/in/ankit-nath-tiwari-6b86a510b/" className="hover:text-cyan-400 transition-colors print:text-gray-500">
            linkedin.com/in/ankit-nath-tiwari-6b86a510b
          </a>
          &nbsp;·&nbsp;
          <a href="https://ankitnathtiwari6.github.io/portfolio/" className="hover:text-cyan-400 transition-colors print:text-gray-500">
            ankitnathtiwari6.github.io/portfolio
          </a>
        </p>
      </div>

      {/* Summary */}
      <ResumeSection title="Summary">
        <p className="text-sm leading-relaxed text-slate-400 print:text-gray-700">
          Full-Stack Software Engineer with 6+ years of experience building AI-powered products at scale. Architected and
          shipped a fully automated AI hiring platform — processing thousands of resumes daily — with end-to-end capabilities:
          AI screening, voice interview agents, semantic candidate search, and ATS integration. Deep expertise in MERN stack,
          LLM pipelines, RAG, voice agents (LiveKit, TTS/STT), vector search (Pinecone), and cloud deployments on AWS and GCP.
        </p>
      </ResumeSection>

      {/* Technical Skills */}
      <ResumeSection title="Technical Skills">
        <div className="space-y-1 text-sm text-slate-400 print:text-gray-700">
          {[
            ["Languages", "JavaScript, TypeScript, Python, C++"],
            ["Frontend", "React, Next.js, Svelte, Redux, AngularJS, Tailwind CSS, HTML5, CSS3, Jest"],
            ["Backend", "Node.js, Express.js, Django, REST API, GraphQL, WebSockets"],
            ["MERN Stack", "MongoDB, Express.js, React, Node.js"],
            ["Databases", "MongoDB, PostgreSQL, Pinecone (Vector DB), Redis"],
            ["AI / LLM", "OpenAI GPT-4, LangChain, LLM Pipelines, RAG, Embeddings, Vector Search, Function Calling"],
            ["Voice / Speech", "LiveKit, TTS, STT, Voice Agents, WebRTC, Real-time Audio Streaming"],
            ["Agents", "Voice Agents, Chat Agents, AI Recruiter Bots, Autonomous Workflow Automation"],
            ["Integrations", "Lever ATS, Firebase, JWT, Google Sign-In"],
            ["Cloud & DevOps", "AWS (S3, EC2), GCP, Docker, Kubernetes, Nginx, CI/CD"],
            ["Tools", "Git, GitHub, Postman, Figma, Jira, Notion"],
          ].map(([label, value]) => (
            <p key={label}>
              <span className="font-semibold text-slate-300 print:text-black">{label}:</span>{" "}{value}
            </p>
          ))}
        </div>
      </ResumeSection>

      {/* Work Experience */}
      <ResumeSection title="Work Experience">
        <div className="space-y-6">

          {/* Wing */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
              <p className="font-bold text-slate-200 print:text-black">
                Software Engineer — Wing Assistant (M32 Labs)
              </p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Mar 2025 – Present</span>
            </div>
            <p className="text-xs text-slate-500 italic mb-2 print:text-gray-500">
              Wing Assistant is a US-based staffing company. Built an internal AI hiring platform that eliminated manual recruitment
              work — from resume screening to final candidate shortlist — handling thousands of applicants daily without human
              intervention.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">AI Recruiter — Intelligent Hiring Automation</p>
                <ul className="space-y-1">
                  <Bullet>Architected an AI-driven hiring pipeline — from job posting to final ranked shortlist — cutting time-to-hire from ~25 days to under a week, with zero recruiter effort at each stage</Bullet>
                  <Bullet>Integrated AI-powered resume screening directly with the company's ATS to auto-ingest new job openings — with over a million resumes parsed to date and up to 2,000 screened per day, eliminating all manual handoffs</Bullet>
                  <Bullet>Built plain-language semantic search across the full candidate pool — AI proactively surfaces best-matched candidates and reduces time-to-match by 80%, from a week to a single day</Bullet>
                  <Bullet>Unified the entire applicant journey into a single AI-powered dashboard — from first application to final decision — replacing scattered spreadsheets and fragmented email chains</Bullet>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Voice-to-Voice AI Interview Agent</p>
                <ul className="space-y-1">
                  <Bullet>Built Automated the initial screening stage with an AI agent that conducts full voice interviews 24/7 (real-time voice pipeline with sub-400ms end-to-end latency), at any scale — handling up to 500 screening interviews per day with no recruiter involvement required.</Bullet>
                  <Bullet>Reduced time spent on initial screening from days of scheduling and manual calls to under 24 hours — cutting recruiter screening effort by over 80%</Bullet>
                </ul>
              </div>
            </div>
          </div>

          {/* Pesto */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">Software Developer — Pesto Tech</p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Feb 2022 – Feb 2025</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Project 1: AI Interview Platform</p>
                <ul className="space-y-1">
                  <Bullet>Built an end-to-end video and coding interview platform with an integrated code editor and AI-powered scoring — auto-generating detailed feedback reports for every candidate, removing manual grading entirely and saving hours of recruiter review time per hiring cycle</Bullet>
                  <Bullet>Scaled the platform from 100 to thousands of interviews per month with zero performance degradation</Bullet>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Project 2: AI Hiring Platform</p>
                <ul className="space-y-1">
                  <Bullet>Built an AI recruitment platform that matched and auto-ranked candidates against job descriptions with high accuracy — surfacing the most relevant profiles first rather than relying on keyword matching</Bullet>
                  <Bullet>Cut time-to-hire by 50%+ — reducing manual sourcing effort and accelerating candidate selection across a significantly larger pool</Bullet>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Project 3: Developer Onboarding Platform</p>
                <ul className="space-y-1">
                  <Bullet>Architected an AI-powered onboarding platform that auto-generated structured developer profiles from uploaded resumes — cutting profile creation from 2+ hours to under 10 minutes</Bullet>
                  <Bullet>Reduced onboarding time by 80%, increased signup conversion by 3x, and eliminated manual data entry entirely</Bullet>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Project 4: Mentor Portal</p>
                <ul className="space-y-1">
                  <Bullet>Centralized scheduling, feedback, timesheet generation, and payment tracking into a single mentor management platform — reducing coordination overhead by 80%</Bullet>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 print:text-gray-800 mb-1">Project 5: Learning Management System (LMS)</p>
                <ul className="space-y-1">
                  <Bullet>Engineered a full-featured LMS enabling students to access resources, submit assignments, track performance, schedule mentor and program manager calls, check live class schedules, group sessions, and raise doubts — all in one place</Bullet>
                  <Bullet>Cut session coordination time from 2–3 days to under 10 minutes — doubling team productivity and eliminating fragmented communication across tools</Bullet>
                </ul>
              </div>
            </div>
          </div>

          {/* Indus OS */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">Software Engineer — Indus OS (Acquired by PhonePe)</p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Sep 2021 – Feb 2022</span>
            </div>
            <ul className="space-y-1">
              <Bullet>Shipped new features and fixed critical production issues on the App Bazar developer portal — directly unblocking developers from publishing their apps.</Bullet>
              <Bullet>Integrated the content management system with the developer portal, enabling the internal team to manage media and control access without engineering support.</Bullet>
              <Bullet>Improved site performance through database optimization — noticeably faster page load times for end users.</Bullet>
            </ul>
          </div>

          {/* Newsbird */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <p className="font-bold text-slate-200 print:text-black">Software Engineer — Newsbird</p>
              <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Jun 2019 – Aug 2021</span>
            </div>
            <ul className="space-y-1">
              <Bullet>Built a full-featured news platform (newsbird.live) with categorized feeds, short-form video, and portals for users and reporters.</Bullet>
              <Bullet>Delivered a secure, scalable platform with real-time notifications and role-based access for both users and reporters.</Bullet>
              <Bullet>Designed all UI/UX wireframes in Figma before development.</Bullet>
            </ul>
          </div>

          {/* IHMCL + Capricot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                <p className="font-bold text-slate-200 print:text-black text-sm">Engineer — IHMCL (An NHAI Initiative), New Delhi</p>
                <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Nov 2016 – Nov 2018</span>
              </div>
              <ul className="space-y-1">
                <Bullet>Key representative for deploying Hybrid ETC systems across 150+ national highway toll plazas.</Bullet>
                <Bullet>Led project planning including financial analysis, architectural reviews, and contract documentation.</Bullet>
              </ul>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                <p className="font-bold text-slate-200 print:text-black text-sm">GIS Engineer — Capricot Technology Pvt Ltd, New Delhi</p>
                <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">Nov 2015 – Nov 2016</span>
              </div>
              <ul className="space-y-1">
                <Bullet>Developed GIS applications for the Rajasthan state government and NHAI.</Bullet>
              </ul>
            </div>
          </div>

        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
          <div>
            <p className="font-bold text-slate-200 print:text-black">Bachelor of Technology — NIT Patna</p>
            <p className="text-sm text-slate-400 print:text-gray-700">CGPA: 8.18 / 10</p>
          </div>
          <span className="text-xs text-slate-500 print:text-gray-500 whitespace-nowrap font-mono">2010 – 2014</span>
        </div>
      </ResumeSection>

    </div>
  </div>
);

export default ResumePage;
