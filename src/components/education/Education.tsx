import React from "react";

const education = [
  {
    school: "NIT PATNA",
    degree: "Bachelor of Technology",
    period: "2010 - 2014",
    details: "CGPA: 8.18 / 10",
  },
];

function EducationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-serif mb-12">Education</h1>

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.school} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{edu.school}</h2>
            <div className="space-y-2">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.period}</p>
              <p className="text-sm">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;
