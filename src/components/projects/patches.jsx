import React from 'react';
import { Link } from 'react-router-dom';

const Patches = () => {
    const base = import.meta.env.BASE_URL;
    const patches = [
        {
            id: 1,
            title: 'Gul Bull',
            image: `${base}pics/patches/img1.png`,
            description: 'The most popular patch that was sold during the kick-off. A creative design combining the popular energy drink Redbull, and the "yellow" as well as Dônk, that is significant to the students attending JTH at JU.'
        },
        {
            id: 3,
            title: 'Donk',
            image: `${base}pics/patches/img3.png`,
            description: 'A twist on the Loka design significant to the JU community, including the special drink Dônk.'
        },
        {
            id: 2,
            title: 'Are You Going to AKA Today?',
            image: `${base}pics/patches/img2.png`,
            description: 'A fun design with characters from the Madagascar movie, asking if you are going to AKA (Akademien, JU student club).'
        },
        {
            id: 4,
            title: 'Flag Design for JU Kick-off 2024',
            image: `${base}pics/patches/img4.png`,
            description: 'This was the flag design for the program New Media Design at JU.'
        },
    ];

    return (
        <>
            <div className="relative z-10 max-w-7xl mx-auto mt-28 px-6 mb-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Patches</h2>
                    <hr className="border-secondary"></hr>
                    <p className="text-lg text-secondary/80 max-w-3xl mx-auto mt-6">
                        During the preperations for the Jönköping University (JU) kick-off in 2024, I designed three pathces and a flag
                        for the program New Media Design at Jönköping Tekniska Högskola (JTH). The patches were sold during the kick-off and were very popular among the students. 
                        It was a fun project to work on were I got to express my creativity and see the designs come to life.
                    </p>
                </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
    {patches.map((patch) => (
        <div 
            key={patch.id} 
            className="group relative flex flex-col gap-8 items-center transition-all duration-300 hover:-translate-y-2"
        >
            <div className="overflow-hidden flex items-center justify-center w-full min-h-[240px]">
                <img 
                    src={patch.image} 
                    alt={patch.title}
                    className={`${patch.id === 3 ? 'w-1/5' : 'w-full'} h-auto object-contain group-hover:scale-110 transition-transform duration-500`}
                />
            </div>

            <div className="p-6 w-full">
                <h3 className="text-2xl font-bold text-secondary">{patch.title}</h3>
                <p className="text-text-secondary">
                    {patch.description}
                </p>
                <hr className="border-secondary"></hr>
            </div>
        </div>
    ))}
</div>

            </div>

            <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
                <Link 
                    to="/projects/ro" 
                    className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Previous Project
                </Link>
                
                <Link 
                    to="/projects/covers" 
                    className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
                >
                    Next Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
            </div>
        </>
    );
};

export default Patches;