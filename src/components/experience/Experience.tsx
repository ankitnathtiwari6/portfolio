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
          "Developed an AI-powered platform for hiring partners to find top candidates, apply filters, and collaborate with team members. Used OpenAI and Pinecone for intelligent matching and efficient search, streamlining the hiring process and improving accuracy.",
        tech: "React, Node.js, Express.js, OpenAI, Vectordb (Pinecone)",
      },
      {
        name: "Developer Portal",
        description:
          "Built a platform where developers can onboard themselves to Pesto by simply uploading their resumes. An AI-powered parser automatically creates profiles from resumes, which are then visible to recruiters. The AI resume parser significantly enhanced the productivity of the operations team and drastically improved profile completion rates on the platform.",
        tech: "React, Node.js, MongoDB, TypeScript, OpenAI",
      },
      {
        name: "AI Interview Platform",
        description:
          "Developed a platform for developer interviews with AI-driven evaluation of video and coding sessions. Assessments are displayed on a dashboard, enabling teams to filter and shortlist candidates efficiently.",
        tech: "React, Node.js, MongoDB, TypeScript, OpenAI",
      },
      {
        name: "LMS Portal",
        description:
          "Developed a learning management system where students can book, view, and join mentor sessions, including live sessions, with options to reschedule. The platform also provides access to reading materials for seamless learning. This increased the productivity of program managers by 2x by streamlining mentorship scheduling and resource management.",
        tech: "React, Node.js, MongoDB, TypeScript",
      },
      {
        name: "Mentor Portal",
        description:
          "Built a platform for mentors to manage sessions, submit feedback, generate timesheets, and track payments, doubling the program team's productivity.",
        tech: "Svelte, Node.js, MongoDB, TypeScript",
      },
    ],
  },
  {
    company: "Indus OS",
    role: "Software Engineer",
    period: "Sep 2021 - Feb 2022",
    description:
      "Contributed to the development and maintenance of new features on the Developer Console for App Bazar (www.indusos.com, developer.appbazaar.com). Successfully integrated the Developer Console with the CMS Portal for developers and optimized its load time, improving performance and user experience.",
    tech: "Angular, React, Node.js, JavaScript, MongoDB",
  },
  {
    company: "Newsbird",
    role: "Software Engineer",
    period: "June 2019 - Aug 2021",
    projects: [
      {
        name: "News Application",
        description:
          "Developed a web application for a news agency (newsbird.live, reporters.newsbird.live) that delivers news across categories, including short videos, to keep users informed. Features include browsing top headlines, viewing short news videos, and setting up topic/category-based notifications. Designed the UI for both web and mobile applications using Adobe XD.",
        tech: "React.js, Express.js, MongoDB, Adobe XD",
      },
    ],
  },
  {
    company: "IHMCL (An NHAI Initiative)",
    role: "Engineer",
    period: "Nov 2016 - Nov 2018",
    description:
      "Acted as the key representative from IHMCL for implementing Hybrid ETC systems at over 100 national highway toll plazas. Led project planning for amenities along national highways, including reviewing site-specific developments, financial analysis reports, architectural drawings, cost estimations, feasibility assessments, and contract documentation.",
  },
  {
    company: "Capricot Technology Pvt Ltd",
    role: "GIS Engineer",
    period: "2015 - 2016",
    description: "Developed GIS application for Rajasthan government and NHAI.",
  },
];

function ExperiencePage() {
  return (
    <div className="max-w-4xl mt-32">
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
