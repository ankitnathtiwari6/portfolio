import React from "react";

function AboutPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-serif mb-8">About Me</h1>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          Full Stack Developer with robust expertise in both front-end and
          back-end technologies. My skill set spans React, Node.js, MongoDB,
          Express.js, C++, Svelte, Next.js, OpenAI, and PostgreSQL. Passionate
          about creating innovative web and AI products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Technical Expertise
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Frontend Development with React, Svelte, and Next.js</li>
          <li>Backend Development with Node.js and Express</li>
          <li>Database Management with MongoDB and PostgreSQL</li>
          <li>AI Integration using OpenAI and Vector Databases</li>
          <li>Cloud Services including AWS and GCP</li>
          <li>Container Orchestration with Docker and Kubernetes</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
