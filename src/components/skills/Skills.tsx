import React from "react";

const skills = {
  Frontend: ["React", "Svelte", "Next.js", "TypeScript", "Redux", "HTML/CSS"],
  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "GraphQL",
  ],
  "DevOps & Tools": ["AWS", "GCP", "Docker", "Kubernetes", "Git", "Nginx"],
};

function SkillsPage() {
  return (
    <div className="max-w-3xl mt-32">
      <h1 className="text-4xl font-serif mb-12 mt-20">Skills</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold">{category}</h2>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
