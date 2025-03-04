import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "OpenAI",
    "Express",
    "GraphQL",
    "Tailwind",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8 flex items-center py-12 sm:py-0">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Hero Content */}
          <div
            className={`space-y-8 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 ease-out`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -right-10 bottom-4 w-16 h-16 bg-indigo-100 rounded-full opacity-70 blur-xl"></div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight relative">
                <span className="relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-2 after:left-0 after:opacity-40 transition-all duration-500 hover:after:h-3 hover:after:bottom-1">
                  I am a
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Specializing in modern web technologies and AI integration.
              Building innovative solutions that transform ideas into powerful
              digital experiences.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white shadow-sm text-gray-800 border border-gray-100"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeIn 0.5s ease-in-out forwards",
                    opacity: 0,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/experience"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 text-center"
              >
                VIEW PORTFOLIO
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 border border-gray-100 text-center"
              >
                CONTACT ME
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`relative hidden md:block transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            } transition-all duration-1000 delay-300 ease-out`}
          >
            <div className="relative w-full h-80">
              {/* Abstract code blocks */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-6">
                <div className="p-5">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-3 bg-blue-100 rounded"></div>
                    <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
                    <div className="w-1/2 h-3 bg-indigo-100 rounded"></div>
                    <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                    <div className="w-full h-3 bg-blue-100 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-10 w-72 h-72 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-3">
                <div className="p-5">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-gray-100 rounded"></div>
                    <div className="w-3/4 h-3 bg-indigo-100 rounded"></div>
                    <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-3 bg-blue-100 rounded"></div>
                    <div className="w-full h-3 bg-gray-100 rounded"></div>
                    <div className="w-1/2 h-3 bg-indigo-100 rounded"></div>
                    <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-3 bg-blue-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 left-20 w-8 h-8 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
              <div
                className="absolute bottom-20 right-10 w-6 h-6 bg-indigo-500 rounded-full opacity-80 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Subtle scroll indicator */}
      <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
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

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};
