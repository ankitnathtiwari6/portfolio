import React from "react";

function ContactPage() {
  return (
    <div className="max-w-4xl mt-32">
      <h1 className="text-4xl font-serif mb-12">Contact</h1>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-sm text-gray-600">New Delhi, India</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-gray-600">ankitnathtiwari@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-sm text-gray-600">+91-7791059913</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
