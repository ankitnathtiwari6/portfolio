import React from "react";

const education = [
  {
    school: "NIT PATNA",
    degree: "Bachelor of Technology",
    period: "2010 - 2014",
    details: "CGPA: 8.18 / 10",
    location: "Patna, Bihar, India",
    achievements: [
      "Specialized in Computer Fundamentals with focus on software development and system architecture",
      "Developed strong foundational skills in algorithms, data structures, and software engineering principles",
      "Participated in coding competitions and tech symposiums",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
    ],
  },
];

const certifications = [
  {
    name: "Advanced React and Redux",
    issuer: "Udemy",
    date: "2021",
    credential: "UC-12345",
  },
  {
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2020",
    credential: "AWS-DEV-12345",
  },
  {
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "2020",
    credential: "MDB-12345",
  },
];

function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="relative mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 relative z-10">
          Education & Certifications
        </h1>
        <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
        <p className="text-gray-600 mt-4 max-w-2xl">
          My educational background and professional certifications that have
          built the foundation for my technical expertise.
        </p>
      </div>

      {/* Main Education Section */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 ml-3">
            Academic Education
          </h2>
        </div>

        {education.map((edu, index) => (
          <div
            key={edu.school}
            className="bg-white shadow-xl rounded-xl overflow-hidden border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">{edu.school}</h3>
                  <p className="text-blue-100">{edu.degree}</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{edu.period}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="mb-4">
                    <h4 className="text-sm uppercase text-gray-500 mb-2 font-medium">
                      Academic Performance
                    </h4>
                    <div className="text-2xl font-bold text-blue-700">
                      {edu.details}
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{
                          width: `${
                            (parseFloat(edu.details.split(":")[1]) / 10) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Scale: 0-10
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase text-gray-500 mb-2 font-medium">
                      Location
                    </h4>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-600 mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743-.356l1.918-.56a.75.75 0 00.509-.713V2.35a.75.75 0 00-.347-.632l-1.932-1.274A.75.75 0 009.676 0H4.323a.75.75 0 00-.466.256L1.92 1.718A.75.75 0 001.5 2.35v.271c1.136-.271 2.302-.5 3.486-.681a.75.75 0 01.18.008zm5.582 7.646L9.75 9.689l-1.918.56a8.22 8.22 0 01-3.354.435A8.24 8.24 0 0112 20.25a8.24 8.24 0 017.522-8.236 8.216 8.216 0 01-3.354-.435l-1.918-.56-1.002.578a.75.75 0 01-.374.098h-.02zm-4.223-3.2L6 5.677v1.254a.75.75 0 01-.536.713 18.51 18.51 0 00-2.639.513 5.26 5.26 0 005.09 4.593c.806 0 1.587-.141 2.318-.413l2.266-.662v-2.89l-2.989 1.73a.75.75 0 01-.585.047zm10.99 2.34a.75.75 0 01-.534-.713V5.677l-.525-.306-2.99 1.73a.75.75 0 01-.584-.047l-2.266-.662v2.89l2.266.662a5.26 5.26 0 002.318.413 5.26 5.26 0 005.09-4.593 18.51 18.51 0 00-2.64-.513.75.75 0 01-.135 0zM7.5 3.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm8.25 0a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 ml-3">
            Professional Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all p-5"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Issued by {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Credential ID: {cert.credential}
                </div>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors focus:outline-none">
                  Verify →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Learning Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Continuous Learning
        </h2>
        <p className="text-gray-700 mb-4">
          Beyond formal education, I continuously improve my skills through
          online courses, technical reading, and hands-on projects. Some of my
          recent learning activities include:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">
              Advanced AI integration techniques for modern web applications
            </span>
          </li>
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">
              Cloud-native architecture and microservices patterns
            </span>
          </li>
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">
              Performance optimization techniques for React applications
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EducationPage;
