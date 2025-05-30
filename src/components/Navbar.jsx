import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
}, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="text-yellow-500 font-bold text-2xl flex items-center h-16 gap-2">
                    <img src="/pics/logosmall.png" alt="Logo" className="h-8 w-auto" />
                
                </a>

                <div className="w-7 h5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <span>&#9776;</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-#D3B60A-300 hover:text-white transition-colors">
                        Home 
                    </a>
                    <a href="#about" className="text-#D3B60A-300 hover:text-white transition-colors">
                        About 
                    </a>
                    <a href="#projects" className="text-#D3B60A-300 hover:text-white transition-colors">
                        Projects 
                    </a>
                    <a href="#contact" className="text-#D3B60A-300 hover:text-white transition-colors">
                        Contact 
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};