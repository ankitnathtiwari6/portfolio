import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { Home } from "./components/home-page/HomePage.tsx";
import AboutPage from "./components/about/about.tsx";
import SkillsPage from "./components/skills/Skills.tsx";
import ExperiencePage from "./components/experience/Experience.tsx";
import EducationPage from "./components/education/Education.tsx";
import ContactPage from "./components/contact/Contact.tsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-[250px] p-12">
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
