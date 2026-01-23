import React from 'react';
import { Link } from 'react-router-dom';

const Patches = () => {
    const base = import.meta.env.BASE_URL;
    const patches = [
        {
            id: 1,
            title: 'Gul Bull',
            image: `${base}pics/patches/img1.png`,
        },
        {
            id: 2,
            title: 'Are You Going to AKA Today?',
            image: `${base}pics/patches/img2.png`,
        },
        {
            id: 3,
            title: 'Donk',
            image: `${base}pics/patches/img3.png`,
        },
        {
            id: 4,
            title: 'Flag Design for University Kick-off 2024',
            image: `${base}pics/patches/img4.png`,
        },
    ];

    return (
        <>
            <div className="relative z-10 max-w-7xl mx-auto mt-28 px-6 mb-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Patches</h2>
                    <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                        I was responible for designing patches and a flag for my program during the universitys kick-off 2024. 
                        I mainly used Adobe Illustrator for this project. It was fun and turned out very good.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                    {patches.map((patch) => (
                        <div 
                            key={patch.id} 
                            className="group relative overflow-hidden rounded-2xl shadow-xl bg-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="overflow-hidden flex items-center justify-center">
                                <img 
                                    src={patch.image} 
                                    alt={patch.title}
                                    className={`${patch.id === 3 ? 'w-1/5' : 'w-full'} h-auto object-contain group-hover:scale-110 transition-transform duration-500`}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-primary">{patch.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-12 max-w-7xl mx-auto px-6 gap-20 mb-8">
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