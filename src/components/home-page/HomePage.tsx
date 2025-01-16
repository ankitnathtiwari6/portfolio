import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="max-w-3xl space-y-8 mt-32">
      <h1 className="text-6xl font-serif">
        I am a
        <br />
        Full Stack Developer
      </h1>

      <p className="text-xl text-gray-600">
        Specializing in React, Node.js, and modern web technologies. Building
        innovative solutions with AI integration.
      </p>

      <div className="flex gap-4">
        <Link
          to="/experience"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          VIEW PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};
