export const Navbar = () => {  {/* Här ändrade vi till Navbar */}
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="text-yellow-500 font-bold text-2xl flex items-center h-16 gap-2">
                    {""}
                    Logo<span className="text-yellow-500">,tech</span>{""}
                </a>

                <div className="w-7 h5 relative cursor-pointer z-40 md:hidden">
                   &#9776
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> {/* Fixade stavfel: tex->text */}
                        {""}
                        Home 
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> {/* Fixade stavfel: tex->text */}
                        {""}
                        About {""}
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> {/* Fixade stavfel: tex->text */}
                        {""}
                        Projects {""}
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> {/* Fixade stavfel: tex->text */}
                        {""}
                        Contact {""}
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};