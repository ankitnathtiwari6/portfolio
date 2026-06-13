import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar.tsx";
import { Home } from "./components/HomePage.tsx";
import AboutPage from "./components/about.tsx";
import SkillsPage from "./components/Skills.tsx";
import ExperiencePage from "./components/Experience.tsx";
import EducationPage from "./components/Education.tsx";
import ContactPage from "./components/Contact.tsx";
import ResumePage from "./components/ResumePage.tsx";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="flex min-h-screen bg-[#020817] text-slate-200">
        <Sidebar />
        <main
          className={`flex-1 transition-all duration-300 ai-grid min-h-screen ${
            isMobile ? "ml-0 pt-16 px-4 pb-8" : "ml-[260px] p-8 lg:p-12"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
