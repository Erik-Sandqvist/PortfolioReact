import React from 'react';
import { Link } from 'react-router-dom';

const Personalbrand = () => {
    const base = import.meta.env.BASE_URL;
    const personal = [
        {
            id: 1,
            title: 'Hoodie Design',
            image: `${base}pics/personalbrand/img1.png`,
        },
        {
            id: 2,
            title: 'T-shirt Design',
            image: `${base}pics/personalbrand/img2.png`,
        },
        {
            id: 3,
            title: 'Buessnies Card Design',
            image: `${base}pics/personalbrand/visiteget.png`,
        },
        {
            id: 4,
            title: 'Stickers',
            image: `${base}pics/personalbrand/sticker.png`,
        },
    ];

    return (
        <>
            <div className="relative z-10 max-w-screen-2xl mx-auto mt-28 px-6 mb-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Personal Branding</h2>
                    <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                        I created a personal brand for myself. I wanted to
                         create a brand that was simple, yet memorable. And most importantly, something that felt like me. 

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 bg- w-full">
                    {personal.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative  rounded-2xl  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="overflow-hidden flex items-center justify-center">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className={`'w-full' h-auto object-contain group-hover:scale-110 transition-transform duration-500`}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
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
                    to="/projects/ro" 
                    className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
                >
                    Next Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
            </div>
        </>
    );
};

export default Personalbrand;