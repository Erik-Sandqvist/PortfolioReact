import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'

export const MobileMenu = ({ menuOpen, setMenuOpen, showRain, setShowRain }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-#D3B60A my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-primary my-4 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </Link>

      <Link
       to="/projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-#D3B60A my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </Link>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-#D3B60A my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </Link>
      <div className={`mt-2  flex items-center justify-between ${
        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } transition-transform duration-300`}>
        <span className="text-2xl font-semibold">Rain</span>
        <input
          type="checkbox"
          className="toggle"
          checked={showRain}
          onChange={() => setShowRain(v => !v)}
        />
      </div>
    </div>
    
  );
};