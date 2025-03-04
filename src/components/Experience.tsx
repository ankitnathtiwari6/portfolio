import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("pesto");

  const experiences = [
    {
      id: "pesto",
      company: "Pesto Tech",
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
        },
      ],
    },
    {
      id: "indus",
      company: "Indus OS (Acquired by PhonePe)",
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
        },
        {
          title: "Mentor Portal",
          description:
            "Built a mentor management platform to streamline session tracking, feedback, and payments.",
          technologies: ["Svelte", "Node.js", "PostgreSQL", "GraphQL"],
          achievements: [
            "Reduced session tracking and payment time by 80%, boosting efficiency.",
          ],
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
        },
      ],
    },
  ];

  const renderTechStack = (technologies) => {
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800"
          >
            {tech}
          </span>
        ))}
      </div>
    );
  };

  const renderAchievements = (achievements) => {
    return (
      <ul className="mt-2 space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Work Experience
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600">
            Full Stack Developer with expertise in both front-end and back-end
            technologies
          </p>
        </div>

        {/* Company Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === exp.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`transition-opacity duration-300 ${
                activeTab === experience.id ? "block" : "hidden"
              }`}
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
                  <div className="mb-6 space-y-3">
                    {experience.description.map((desc, index) => (
                      <p key={index} className="text-gray-700">
                        {desc}
                      </p>
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
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {project.title}
                            </h4>
                            {project.extra && (
                              <p className="text-sm text-indigo-600">
                                {project.extra}
                              </p>
                            )}
                            <p className="mt-1 text-gray-700">
                              {project.description}
                            </p>
                            {renderTechStack(project.technologies)}
                            {project.achievements &&
                              renderAchievements(project.achievements)}
                            {project.deployment && (
                              <div className="mt-2 flex items-center">
                                <span className="text-gray-500 text-sm">
                                  Deployed on:
                                </span>
                                <span className="ml-2 text-sm font-medium text-gray-700">
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
    </section>
  );
};

export default Experience;
