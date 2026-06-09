import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [open, setOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <span className="text-blue-500">My </span>
          <span className="text-gray-300">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="hover:text-blue-400 duration-300">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 duration-300">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 duration-300">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 duration-300">
            Contact
          </a>

          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-14 h-8 bg-gray-800 rounded-full flex items-center px-1 transition"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs bg-blue-500 transition-transform duration-300 ${darkMode ? "translate-x-0" : "translate-x-6"
                }`}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </div>
          </button> */}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 px-6 py-5">
          <div className="flex flex-col gap-5">

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}