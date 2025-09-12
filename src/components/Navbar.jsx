import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed orbitron-font font-bold top-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between z-10">
      {/* Left - Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Kashaf</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-20">
        <a href="#about" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          About
        </a>
        <a href="#projects" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          Projects
        </a>
        <a href="#skills" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          Skills
        </a>
      </div>

      {/* Right - Contact or Burger */}
      <div className="flex items-center md:mr-10">
        {/* Contact - Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 border border-gray-500 rounded-2xl hover:border-blue-500 hover:text-black hover:bg-[#cbbaad] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Burger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute  top-full left-0 w-full bg-black flex flex-col items-center md:hidden space-y-4 p-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-500"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
