import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed orbitron-font Zumma tracking-wider font-bold top-0 left-0 w-full bg-black text-[#cbbaad] p-4 flex items-center justify-between z-50">
      {/* Left - Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl Zumma font-bold">KASHAF</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden text-xl md:flex space-x-20">
        <a href="#about" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          About
        </a>
         <a href="#experience" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          Experience
        </a>
         <a href="#skills" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          Skills
        </a>
        <a href="#projects" className="hover:bg-[#cbbaad] hover:text-black px-4 py-2 rounded-2xl">
          Projects
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

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#cbbaad] text-black transform transition-transform duration-500 ease-in-out z-20 p-8 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-2xl font-bold">✕</button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-8 mt-12 text-4xl font-extrabold">
          <a href="#home" onClick={toggleMenu} className="flex items-baseline">
            HOME <span className="text-sm text-purple-700 ml-2">01</span>
          </a>
          <a href="#about" onClick={toggleMenu} className="flex items-baseline">
            ABOUT <span className="text-sm text-purple-700 ml-2">02</span>
          </a>
          <a href="#skills" onClick={toggleMenu} className="flex items-baseline">
            SKILLS <span className="text-sm text-purple-700 ml-2">04</span>
          </a>
          <a href="#experience" onClick={toggleMenu} className="flex uppercase items-baseline">
            Experience <span className="text-sm text-purple-700 ml-2">02</span>
          </a>
          <a href="#projects" onClick={toggleMenu} className="flex items-baseline">
            PROJECTS <span className="text-sm text-purple-700 ml-2">03</span>
          </a>
          <a href="#contact" onClick={toggleMenu} className="flex items-baseline">
            CONTACT <span className="text-sm text-purple-700 ml-2">04</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
