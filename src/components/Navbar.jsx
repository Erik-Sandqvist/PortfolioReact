
export const Navbar = () => {

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
<a href="#home"
className="tex-gray-300 hove:text-white transition-colors"
>
    {""}
    Home {""}
</a>
                </div>
            </div>
        </div>
    </nav>
    );
};