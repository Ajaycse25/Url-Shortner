import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo / Title */}
          <Link to="/" className="text-xl font-bold tracking-wide hover:text-blue-400 transition">
            URL Shortener
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="hover:bg-gray-700 px-3 py-1 rounded transition"
            >
              Home
            </Link>
            <Link
              to="/admin"
              className="hover:bg-gray-700 px-3 py-1 rounded transition"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-3 space-y-2 bg-gray-800 border-t border-gray-700">
          <Link
            to="/"
            className="block hover:bg-gray-700 px-3 py-2 rounded transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/admin"
            className="block hover:bg-gray-700 px-3 py-2 rounded transition"
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}
