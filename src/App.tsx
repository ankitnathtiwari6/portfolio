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

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main
          className={`flex-1 transition-all duration-300 ${
            isMobile ? "ml-0 p-6" : "ml-[250px] p-8 lg:p-12"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
