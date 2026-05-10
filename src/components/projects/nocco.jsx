import React from "react";
import { asset } from "../../utils/asset";
import { Link } from "react-router-dom";

const Covers = () => {
    const covers = [
        { src: asset("pics/nocco/img1.png"), title: "", caption: "" },
        { src: asset("pics/nocco/skumtomte.png"), title: "", caption: "" },
        { src: asset("pics/nocco/carnip.png"), title: "", caption: "" },
    ];

    return (
        <>
        <div className="h-full w-full  bg-gradient-to-br from-base via-red-900 to-black flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto mt-24 mb-20 px-6 ">
            <h2 className="text-3xl font-bold text-primary mb-2 mt-6">Nocco Posters</h2>
        <hr className="border-secondary"></hr>
            <p className="text-text-secondary mb-8"></p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
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
                        <img src=""></img>
                        
                    </div>
                ))}
    </div>
    <div className="max-w-6xl mx-auto mt-8 shadow-xl rounded-2xl overflow-hidden p-4">
        <h3 className="text-2xl font-bold text-secondary mb-2">Project Overview</h3>
        <hr className="border-secondary"></hr>
                <div className="flex flex-col md:flex-row w-full mt-6 gap-8">
                    <p className="text-text-secondary mb-4 text-xl w-full md:w-1/2 mt-10">
                        I created a few posters based on different Nocco flavors, the ones i am the most happy about are <span className="font-bold text-secondary">Skumtomte</span> and <span className="font-bold text-secondary">Melon Crush</span>. I then also 
                        had one of them printed out and put it up on my wall. It was a fun project to work on and I really
                        enjoyed the process of creating the posters and seeing them come to life.
                    </p>
                    <img
                        src={asset("pics/nocco/wall.jpeg")}
                        alt="Project Overview"
                        className="max-w-sm rounded-lg shadow-lg object-cover w-full md:w-auto"
                    />
                    <img
                        src={asset("pics/nocco/melon-crush-floor.png")}
                        alt="Project Overview"
                        className="max-w-sm rounded-lg shadow-lg object-cover w-full md:w-auto"
                    />
                </div>
   </div>     
</div>

<div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
    <Link
        to="/projects/covers"
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
    </Link>

    <Link
        to="/projects/personalbrand"
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
