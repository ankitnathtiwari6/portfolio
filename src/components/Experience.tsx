import React, { useState, useEffect } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("pesto");
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle smooth transition between tabs
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 300);
  };

  const experiences = [
    {
      id: "pesto",
      company: "Pesto Tech",
      logo: "P",
      role: "Full Stack Developer",
      period: "FEB 2022 - PRESENT",
      projects: [
        {
          title: "AI Interview Platform",
          description:
            "Developed an AI-driven interview platform for automated video and coding session evaluations, streamlining the hiring process.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
            "GCP Cloud Storage",
            "OpenAI",
          ],
          achievements: [
            "Increased interview capacity from just 100 interviews per month to thousands.",
          ],
          deployment: "Google Cloud Platform (GCP)",
          icon: "🎥",
        },
        {
          title: "AI Hiring Platform",
          description:
            "Developed an AI-powered recruitment platform for efficient talent matching, enabling hiring teams to collaborate, apply advanced filters, and identify ideal candidates using AI-driven recommendations.",
          technologies: [
            "React",
            "Node.js",
            "OpenAI",
            "Pinecone",
            "Firebase Authentication",
            "JWT",
            "Google Sign-In",
            "Docker",
            "Kubernetes",
          ],
          achievements: ["Reduced time-to-hire by more than 50%."],
          deployment: "GCP with Kubernetes",
          icon: "🔍",
        },
        {
          title: "Developer Platform",
          description:
            "Built an AI-powered platform for seamless developer onboarding with automated profile creation, intelligent resume parsing.",
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "OpenAI",
          ],
          achievements: [
            "Reduced developer onboarding time by 80%",
            "Simplified the signup process",
            "Increased onboarding rates by 3x",
            "Reduced profile creation time from more than 2 hours to just 10 minutes",
          ],
          deployment: "Cloud deployment",
          icon: "👨‍💻",
        },
      ],
    },
    {
      id: "indus",
      company: "Indus OS (PhonePe)",
      logo: "IO",
      role: "Software Engineer",
      period: "SEP 2021 - FEB 2022",
      description: [
        "Enhanced the Developer Console for App Bazar's marketplace by developing the APK upload feature and resolving critical bugs. Utilized Angularjs for the frontend, Node.js for the backend, and MongoDB for efficient data management.",
        "Integrated CMS portal with Developer Console, implementing AWS S3 for scalable media storage and efficient content delivery.",
        "Implemented authentication and role-based authorization using JWT tokens.",
        "Optimized database queries through indexing, significantly improving load times and enhancing developer experience.",
      ],
      technologies: ["Angularjs", "Node.js", "MongoDB", "AWS S3", "JWT"],
    },
    {
      id: "newsbird",
      company: "Newsbird",
      logo: "NB",
      role: "Software Engineer",
      period: "JUNE 2019 - AUG 2021",
      projects: [
        {
          title: "News Application",
          description:
            "Created a news platform with categorized browsing, short-form videos, and personalized notifications, dedicated portals for users and reporters.",
          technologies: ["React", "Express", "MongoDB", "AWS S3", "JWT"],
          achievements: [
            "Designed with Figma and developed full-stack application",
          ],
          extra: "newsbird.live, reporters.newsbird.live",
          icon: "📰",
        },
        {
          title: "Mentor Portal",
          description:
            "Built a mentor management platform to streamline session tracking, feedback, and payments.",
          technologies: ["Svelte", "Node.js", "PostgreSQL", "GraphQL"],
          achievements: [
            "Reduced session tracking and payment time by 80%, boosting efficiency.",
          ],
          icon: "👨‍🏫",
        },
        {
          title: "LMS (Learning Management System)",
          description:
            "Developed a LMS for seamless mentor session coordination, enabling students to schedule, manage, and attend live sessions while accessing educational resources.",
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "REST APIs",
          ],
          achievements: [
            "Doubled program team productivity",
            "Reduced session coordination time from 2-3 days to just 5-10 minutes",
          ],
          icon: "🧠",
        },
      ],
    },
  ];

  const renderTechStack = (technologies) => {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    );
  };

  const renderAchievements = (achievements) => {
    return (
      <ul className="mt-3 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-green-100 rounded-full text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    );
  };

  const isMobile = windowWidth < 768;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Work Experience
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions with cutting-edge technologies to
            solve complex problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8">
          {/* Sidebar for larger screens */}
          {!isMobile && (
            <div className="hidden md:block md:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-20">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                  <h3 className="font-semibold">Companies</h3>
                </div>
                <div className="divide-y">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => handleTabChange(exp.id)}
                      className={`w-full px-4 py-4 text-left transition-all flex items-center hover:bg-gray-50 ${
                        activeTab === exp.id
                          ? "bg-indigo-50 border-l-4 border-indigo-600"
                          : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {exp.logo}
                      </div>
                      <div>
                        <div
                          className={`font-medium ${
                            activeTab === exp.id
                              ? "text-indigo-700"
                              : "text-gray-800"
                          }`}
                        >
                          {exp.company}
                        </div>
                        <div className="text-xs text-gray-500">
                          {exp.period}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tabs for mobile view */}
          {isMobile && (
            <div className="col-span-1 mb-4 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-2">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => handleTabChange(exp.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center ${
                      activeTab === exp.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${
                        activeTab === exp.id
                          ? "bg-white text-indigo-600"
                          : "bg-indigo-100 text-indigo-600"
                      } flex items-center justify-center text-xs font-bold mr-2`}
                    >
                      {exp.logo}
                    </div>
                    <span>{exp.company}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main content area */}
          <div
            className={`col-span-1 md:col-span-5 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Experience Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className={activeTab === experience.id ? "block" : "hidden"}
                >
                  <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="text-xl font-bold">{experience.role}</h3>
                        <p className="text-indigo-100">{experience.company}</p>
                      </div>
                      <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {experience.description && (
                      <div className="mb-8 space-y-4">
                        {experience.description.map((desc, index) => (
                          <div key={index} className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-700">{desc}</p>
                          </div>
                        ))}
                        {experience.technologies &&
                          renderTechStack(experience.technologies)}
                      </div>
                    )}

                    {experience.projects && (
                      <div className="space-y-8">
                        {experience.projects.map((project, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md">
                                <span className="text-xl">{project.icon}</span>
                              </div>
                              <div className="ml-4">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="text-lg font-semibold text-gray-900">
                                    {project.title}
                                  </h4>
                                  {project.extra && (
                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                      {project.extra}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-2 text-gray-700">
                                  {project.description}
                                </p>
                                {renderTechStack(project.technologies)}
                                {project.achievements &&
                                  renderAchievements(project.achievements)}
                                {project.deployment && (
                                  <div className="mt-3 flex items-center">
                                    <span className="text-gray-500 text-sm">
                                      Deployed on:
                                    </span>
                                    <span className="ml-2 text-sm font-medium bg-gray-100 px-2 py-0.5 rounded-md text-gray-700">
                                      {project.deployment}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline section for mobile */}
        {isMobile && (
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Career Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-3.5 top-0 h-full w-0.5 bg-indigo-200"></div>

              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10">
                    <span className="text-xs font-bold">
                      {experiences.length - index}
                    </span>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <div className="font-medium text-gray-900">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-600">{exp.role}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {exp.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
