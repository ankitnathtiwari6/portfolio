import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "HOME", href: "/" },
  { title: "ABOUT", href: "/about" },
  { title: "SKILLS", href: "/skills" },
  { title: "EXPERIENCE", href: "/experience" },
  { title: "EDUCATION", href: "/education" },
  { title: "CONTACT", href: "/contact" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] border-r bg-white p-8 flex flex-col">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
        <h1 className="font-bold text-xl mb-1">Ankit Nath Tiwari</h1>
        <p className="text-sm text-gray-600">FULL STACK DEVELOPER</p>
        <p className="text-sm text-gray-600">IN NEW DELHI</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className={`block py-2 text-sm hover:text-blue-600 transition-colors ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="text-xs text-center text-gray-500">
        <p>© {new Date().getFullYear()} All rights reserved</p>
        <p>ankitnathtiwari@gmail.com</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
