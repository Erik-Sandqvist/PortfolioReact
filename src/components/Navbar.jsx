import { useEffect } from "react";
import { Link } from 'react-router-dom';

export const Navbar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Byt tema och spara i localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
      <div className="max-w-8xl pl-20 flex justify-between items-center h-20">
        <Link to="/" className="text-yellow-500 font-bold text-2xl flex items-center h-16 gap-2">
          <img src="/pics/logosmall.png" alt="Logo" className="h-10 w-auto" />
        </Link>
       
        <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
          <Link to="/" className="text-custom-yellow-2 hover:text-white transition-colors text-3xl">Home</Link>
          <Link to="About" className="text-custom-yellow-2 hover:text-white transition-colors text-3xl">About</Link>
          <Link to="projects" className="text-custom-yellow-2 hover:text-white transition-colors text-3xl">Projects</Link>
          <Link to="/contact" className="text-custom-yellow-2 hover:text-white transition-colors text-3xl">Contact</Link>
           {/* Dark mode knapp */}
           <button
  onClick={() => setDarkMode((prev) => !prev)}
  className="ml-4 px-4 py-2 rounded-lg bg-custom-yellow-2 text-[#081A3A] font-bold shadow hover:bg-custom-yellow-1 transition"
>
  {darkMode ? "🌙" : "☀️"}
</button>
        </div>
      </div>
    </nav>
  );
};