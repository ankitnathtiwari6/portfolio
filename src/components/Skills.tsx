import React, { useState, useEffect } from "react";

// Updated skills with more detailed information
const skills = {
  Frontend: [
    { name: "React", level: 95, years: 4, color: "#61DAFB" },
    { name: "Svelte", level: 85, years: 2, color: "#FF3E00" },
    { name: "Next.js", level: 90, years: 3, color: "#000000" },
    { name: "TypeScript", level: 88, years: 3, color: "#3178C6" },
    { name: "Redux", level: 85, years: 3, color: "#764ABC" },
    { name: "HTML/CSS", level: 95, years: 5, color: "#E34F26" },
  ],
  Backend: [
    { name: "Node.js", level: 92, years: 4, color: "#339933" },
    { name: "Express", level: 90, years: 4, color: "#000000" },
    { name: "MongoDB", level: 88, years: 4, color: "#47A248" },
    { name: "PostgreSQL", level: 85, years: 3, color: "#336791" },
    { name: "REST APIs", level: 92, years: 4, color: "#0096D6" },
    { name: "GraphQL", level: 82, years: 2, color: "#E10098" },
  ],
  "DevOps & Cloud": [
    { name: "AWS", level: 85, years: 3, color: "#FF9900" },
    { name: "GCP", level: 80, years: 2, color: "#4285F4" },
    { name: "Docker", level: 85, years: 3, color: "#2496ED" },
    { name: "Kubernetes", level: 75, years: 2, color: "#326CE5" },
    { name: "CI/CD", level: 85, years: 3, color: "#FC6D26" },
    { name: "Git", level: 90, years: 5, color: "#F05032" },
  ],
  "AI & Data": [
    { name: "OpenAI", level: 88, years: 2, color: "#00A67E" },
    { name: "Langchain", level: 80, years: 1, color: "#3C46FF" },
    { name: "Vector DBs", level: 78, years: 1, color: "#7B68EE" },
    { name: "Data Processing", level: 82, years: 3, color: "#4169E1" },
  ],
};

function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(skills)[0]
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Reset animation and active state when category changes
  useEffect(() => {
    setActiveIndex(null);
    // After a short delay, reset the animation state
    const timer = setTimeout(() => {
      setIsLoaded(false);
      setTimeout(() => setIsLoaded(true), 50);
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <section className="py-8">
      {/* Page Header with 3D effect */}
      <div className="mb-12">
        <div className="relative">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 relative z-10">
            My Skills
          </h1>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-lg"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl">
          Full stack expertise with a focus on creating seamless, performant
          applications using modern technologies.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <div className="inline-flex flex-wrap items-center bg-gray-100 p-1.5 rounded-xl shadow-inner">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-white text-blue-700 shadow-md transform-gpu scale-105"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main skills visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left column: Visual bars */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="mr-2 capitalize">{selectedCategory}</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {skills[selectedCategory].length} skills
              </span>
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              {skills[selectedCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transform transition-all duration-500 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="font-semibold text-gray-700 flex items-center">
                        <div
                          className="w-3 h-3 rounded-sm mr-2"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        {skill.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {skill.years} {skill.years === 1 ? "year" : "years"}{" "}
                        experience
                      </div>
                    </div>
                    <div className="text-sm font-mono font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                      {skill.level}%
                    </div>
                  </div>

                  <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isLoaded ? `${skill.level}%` : "0%",
                        backgroundColor:
                          activeIndex === index ? skill.color : "#3B82F6",
                        opacity: activeIndex === index ? 1 : 0.8,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Skills summary and details */}
        <div className="space-y-6">
          {/* Skills breakdown card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h3 className="font-bold">Skills Breakdown</h3>
            </div>
            <div className="p-5">
              <div className="flex justify-between mb-3">
                <div className="text-sm text-gray-500">Skill Distribution</div>
                <div className="text-sm text-gray-500">
                  Year {new Date().getFullYear()}
                </div>
              </div>

              {/* Distribution chart */}
              <div className="mb-6">
                <div className="h-8 w-full rounded-lg overflow-hidden flex">
                  {Object.entries(skills).map(([category, items], idx) => {
                    // Calculate percentage of this category based on total skills
                    const totalSkills = Object.values(skills).flat().length;
                    const percentage = (items.length / totalSkills) * 100;

                    // Colors for different categories
                    const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981"];

                    return (
                      <div
                        key={category}
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: colors[idx % colors.length],
                        }}
                        className={`h-full ${idx === 0 ? "rounded-l-lg" : ""} ${
                          idx === Object.keys(skills).length - 1
                            ? "rounded-r-lg"
                            : ""
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Chart legend */}
                <div className="flex flex-wrap mt-3 gap-3">
                  {Object.entries(skills).map(([category, items], idx) => {
                    const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981"];

                    return (
                      <div key={category} className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-sm mr-1.5"
                          style={{
                            backgroundColor: colors[idx % colors.length],
                          }}
                        />
                        <span className="text-xs text-gray-600">
                          {category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Categories list */}
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => {
                  // Calculate average proficiency for this category
                  const avgProficiency =
                    items.reduce((sum, item) => sum + item.level, 0) /
                    items.length;

                  return (
                    <div
                      key={category}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                        selectedCategory === category
                          ? "bg-blue-50 border-l-4 border-blue-500"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <div>
                        <div className="font-medium text-gray-800">
                          {category}
                        </div>
                        <div className="text-sm text-gray-500">
                          {items.length} skills
                        </div>
                      </div>
                      <div className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                        {Math.round(avgProficiency)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-5 border border-blue-100">
            <h3 className="font-bold text-gray-800 mb-3">
              Currently Focused On
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Integration",
                "Next.js",
                "TypeScript",
                "Kubernetes",
                "Cloud Architecture",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-blue-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies Section */}
      <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">
            Tools & Technologies
          </h2>
          <p className="text-gray-600 mt-1">
            Additional technologies I work with regularly
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Tailwind CSS", color: "#06B6D4" },
              { name: "Jest", color: "#C21325" },
              { name: "Firebase", color: "#FFCA28" },
              { name: "Figma", color: "#F24E1E" },
              { name: "Material UI", color: "#0081CB" },
              { name: "Postman", color: "#FF6C37" },
              { name: "Azure", color: "#0078D4" },
              { name: "Redis", color: "#DC382D" },
              { name: "Nginx", color: "#009639" },
              { name: "Stripe", color: "#008CDD" },
              { name: "GitHub Actions", color: "#2088FF" },
              { name: "JWT", color: "#000000" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center p-3 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md transition-all transform hover:-translate-y-1 hover:bg-white"
              >
                <div
                  className="w-4 h-4 rounded-full mr-2 flex-shrink-0"
                  style={{ backgroundColor: tool.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700 truncate">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
