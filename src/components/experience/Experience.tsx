import React from "react";

const experiences = [
  {
    company: "Pesto Tech",
    role: "Full Stack Developer",
    period: "FEB 2022 - PRESENT",
    projects: [
      {
        name: "Hiring Portal",
        description:
          "Developed an AI-powered platform for hiring partners to find top candidates, apply filters, and collaborate with team members.",
        tech: "React, Node.js, Express.js, OpenAI, Vectordb (Pinecone)",
      },
      {
        name: "Developer Portal",
        description:
          "Built a platform where developers can onboard themselves by uploading their resumes with AI-powered parsing.",
        tech: "React, Node.js, MongoDB, TypeScript, OpenAI",
      },
    ],
  },
  {
    company: "Indus OS",
    role: "Software Engineer",
    period: "Sep 2021 - Feb 2022",
    description:
      "Contributed to the development and maintenance of new features on the Developer Console for App Bazar. Successfully integrated the Developer Console with the CMS Portal.",
    tech: "Angular, React, Node.js, JavaScript, MongoDB",
  },
];

function ExperiencePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-serif mb-12">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <p className="text-sm text-gray-600">
                {exp.company} • {exp.period}
              </p>
            </div>
            <div className="space-y-4">
              {exp.projects ? (
                <div className="space-y-6">
                  {exp.projects.map((project) => (
                    <div key={project.name} className="space-y-2">
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-700">
                        {project.description}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Tech Stack:</span>{" "}
                        {project.tech}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-700">{exp.description}</p>
                  <p className="text-sm">
                    <span className="font-medium">Tech Stack:</span> {exp.tech}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
