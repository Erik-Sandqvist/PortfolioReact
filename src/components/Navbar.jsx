import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';
import { FaSun, FaMoon } from 'react-icons/fa';

export const Navbar = ({ menuOpen, setMenuOpen, showRain, setShowRain, showLightRays, setShowLightRays }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="font-onest fixed top-0 w-full z-40 bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
      <div className="max-w-8xl pl-10 md:pl-20">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-yellow-500 font-bold text-2xl flex items-center h-16 gap-2">
            <img src={asset('pics/logosmall.png')} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Tema-toggle med ikoner */}
          <div className="relative flex items-center ml-4">
            <FaSun className="absolute right-1 text-yellow-500 text-sm pointer-events-none z-10" />
            <input type="checkbox" value="acid" className="toggle theme-controller" />
            <FaMoon className="absolute left-1 text-blue-400 text-sm pointer-events-none z-10" />
          </div>

          <div className="hidden md:flex items-center gap-4 ml-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary">Rain</span>
              <button
                type="button"
                role="switch"
                aria-checked={showRain}
                aria-label="Toggle rain effect"
                onClick={() => setShowRain(v => !v)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ${
                  showRain ? 'bg-yellow-500/40' : 'bg-base-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-[#D3B60A] shadow transition-transform duration-200 ${
                    showRain ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-primary">Rays</span>
              <button
                type="button"
                role="switch"
                aria-checked={showLightRays}
                aria-label="Toggle light rays effect"
                onClick={() => setShowLightRays(v => !v)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ${
                  showLightRays ? 'bg-yellow-500/40' : 'bg-base-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-[#D3B60A] shadow transition-transform duration-200 ${
                    showLightRays ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="w-20 h-8 relative cursor-pointer z-40 md:hidden ml-auto mr-8"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className="text-4xl">&#9776;</span>
          </button>

          {/* Desktop länkar */}
          <div className="hidden md:flex items-center space-x-8 ml-auto mr-11">
            <Link to="/" className="hover:text-secondary transition-colors text-3xl">Home</Link>
            <Link to="/about" className="hover:text-secondary transition-colors text-3xl">About</Link>
            <Link to="/projects" className="hover:text-secondary transition-colors text-3xl">Projects</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors text-3xl">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};