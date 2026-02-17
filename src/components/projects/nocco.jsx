import React from "react";
import { asset } from "../../utils/asset";
import { Link } from "react-router-dom";

const Covers = () => {
    const covers = [
        { src: asset("pics/nocco/img1.png"), title: "", caption: "" },
        { src: asset("pics/nocco/img2.png"), title: "", caption: "" },
        { src: asset("pics/nocco/img3.png"), title: "", caption: "" },
    ];

    return (
        <>
        <div className="h-full w-full bg-gradient-to-b bg-gradient-to-br from-base via-red-900 to-black flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto mt-24 mb-20 px-6">
            <h2 className="text-3xl font-bold text-primary mb-2">Nocco Posters</h2>
            <p className="text-text-primary mb-8">More Comming...</p>

            <div className="flex flex-wrap gap-8">
                {covers.map((c, i) => (
                    <div key={c.title} className="group">
                        <div
                            className={`relative rounded-xl overflow-hidden shadow-2xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary`}
                        >
                            <img
                                src={c.src}
                                alt={c.title}
                                className="max-h-screen max-w object-contain"
                            />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-xl font-semibold text-primary">{c.title}</h3>
                            <p className="text-sm text-text-primary">{c.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

<div className="flex justify-between mt-12 max-w-7xl mx-auto px-6 gap-20 mb-8">
                <Link 
                    to="/projects/covers" 
                    className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Previous Project
                </Link>
                
                <Link 
                    to="/projects/ro" 
                    className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
                >
                    Next Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
            </div>
             </div>
        </>
    );
};
 

export default Covers;
