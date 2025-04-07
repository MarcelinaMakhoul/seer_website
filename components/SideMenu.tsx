"use client";
import React, { useState } from "react";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white fixed top-4 right-4 z-50 p-2 rounded-md shadow"
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        {menuOpen ? (
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Slide-in Menu */}
      <div
        className={`fixed left-0 w-full h-3/4 px-4 py-8 transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="space-y-6 text-lg pt-10 text-gray-200 font-light">
          {["Services", "Team", "Vision", "Contact"].map((item, index) => (
            <li
              key={item}
              className={`transition-all duration-700 ease-out transform ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 200}ms` : "0ms",
              }}
            >
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
