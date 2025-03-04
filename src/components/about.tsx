import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    { year: "4+", area: "Years Experience" },
    { year: "20+", area: "Projects Completed" },
    { year: "6+", area: "Tech Stacks" },
    { year: "3+", area: "AI Products" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section with Animation */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 mb-4 transition-all duration-300 hover:scale-105">
              About Me
            </h1>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating innovative web and AI
            products
          </p>
        </div>

        {/* Experience Numbers */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 transform transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-600"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">
                {item.year}
              </div>
              <div className="text-sm text-gray-600">{item.area}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-8 transition-all duration-700 delay-200 hover:shadow-2xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Introduction with Profile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 order-2 md:order-1">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 first-letter:text-4xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-1 first-letter:float-left">
                Full Stack Developer with robust expertise in both front-end and
                back-end technologies. My skill set spans React, Node.js,
                MongoDB, Express.js, C++, Svelte, Next.js, OpenAI, and
                PostgreSQL. Passionate about creating innovative web and AI
                products that solve real-world problems and deliver exceptional
                user experiences.
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Next.js",
                    "AI Integration",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-100 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-indigo-600 opacity-70">
                    AT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* My Approach Section */}
          <div className="mt-12 py-8 border-t border-b border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
              My Approach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "User-Centered Design",
                  description:
                    "Creating intuitive interfaces that prioritize user experience and accessibility.",
                  icon: "👥",
                },
                {
                  title: "Clean Architecture",
                  description:
                    "Building scalable applications with maintainable code and efficient performance.",
                  icon: "🏗️",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "Always exploring new technologies and best practices to deliver cutting-edge solutions.",
                  icon: "🔄",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-5 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-blue-50 hover:translate-y-[-5px]"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Frontend Development",
                  skills: "React, Svelte, and Next.js",
                  icon: "👨‍💻",
                },
                {
                  title: "Backend Development",
                  skills: "Node.js and Express",
                  icon: "🔧",
                },
                {
                  title: "Database Management",
                  skills: "MongoDB and PostgreSQL",
                  icon: "💾",
                },
                {
                  title: "AI Integration",
                  skills: "OpenAI and Vector Databases",
                  icon: "🤖",
                },
                {
                  title: "Cloud Services",
                  skills: "AWS and GCP",
                  icon: "☁️",
                },
                {
                  title: "Container Orchestration",
                  skills: "Docker and Kubernetes",
                  icon: "🐳",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:bg-indigo-50 hover:border-indigo-200"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-indigo-700">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.skills}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 rounded-full blur bg-gradient-to-r from-blue-400 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link
                to="/contact"
                className="relative block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            <p className="mt-4 text-gray-500 text-sm">
              Let's discuss your next project
            </p>
          </div>
        </div>

        {/* Client Testimonial */}
        <div
          className={`mt-12 bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute -top-5 -left-5 text-6xl text-indigo-200 opacity-50">
              "
            </div>
            <div className="relative z-10">
              <p className="text-gray-700 italic text-lg">
                Ankit delivered an exceptional AI-powered platform that exceeded
                our expectations. His expertise in both frontend and backend
                technologies, combined with his understanding of AI integration,
                was precisely what our project needed.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Sourabh Modi</p>
                  <p className="text-sm text-gray-600">CTO, Pesto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} | Ankit Nath Tiwari | Full Stack
          Developer
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
