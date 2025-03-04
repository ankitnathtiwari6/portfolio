import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 mb-4 transition-all duration-300 hover:scale-105">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-8 transition-all duration-300 hover:shadow-2xl">
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 first-letter:text-4xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-1 first-letter:float-left">
              Full Stack Developer with robust expertise in both front-end and
              back-end technologies. My skill set spans React, Node.js, MongoDB,
              Express.js, C++, Svelte, Next.js, OpenAI, and PostgreSQL.
              Passionate about creating innovative web and AI products.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} | Full Stack Developer
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
