import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { asset } from '../utils/asset'

export const Navbar = ({ menuOpen, setMenuOpen }) => {

useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
}, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
      <div className="max-w-8xl pl-20  ">
        <div className="flex justify-between items-center h-20">
        <Link to="/" className="text-yellow-500 font-bold text-2xl flex items-center h-16 gap-2">
        <img src={asset('pics/logosmall.png')} alt="Logo" className="h-10 w-auto" />
  </Link>

  <input type="checkbox" value="acid" className="toggle theme-controller ml-10" />

          <div className="w-20 h8 relative cursor-pointer z-40 md:hidden" 
          onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="text-4xl">&#9776;</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
    <Link to="/" className=" hover:text-secondary transition-colors text-3xl">
    Home
    </Link>
    <Link to="/about" className="hover:text-secondary transition-colors text-3xl">
    About
    </Link>
    <a href="#projects" className="hover:text-secondary transition-colors text-3xl">
    Projects
    </a>
    <Link to="/contact" className="hover:text-secondary transition-colors text-3xl">
    Contact
    </Link>
  </div>
        </div>
      </div>
    </nav>
    );
};


  
 