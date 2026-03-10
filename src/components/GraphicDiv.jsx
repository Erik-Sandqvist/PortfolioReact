import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { asset } from "../utils/asset";

export const GraphicDiv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll("[data-card]");
    cards.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("card-fade--in");
      }, 120 * i);
    });
  }, []);

return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6 w-full mt-14">
        <Link
            to="/projects/ro"
            data-card
            style={{ "--from": "-50px", transform: "rotate(3deg)" }}
            className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary rotate-3"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset("pics/ro/roLogo.webp")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow/60 via-black/0 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
                <h3 className="text-2xl font-bold mb-2 text-primary">Ro Wellnes</h3>
                <p className="text-sm opacity-90 text-primary">Brand and marketing</p>
                <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details →
                </span>
            </div>
        </Link>
        
         <Link
            to="/projects/patches"
            data-card
            style={{ "--from": "-50px" }}
            className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary mt-5"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset("pics/patches/img1.png")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
                <h3 className="text-2xl font-bold mb-2 text-primary">Patches</h3>
                <p className="text-sm opacity-90 text-primary">Patches I created for the schools Kick-off 2024</p>
                <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details →
                </span>
            </div>
        </Link>

         <Link
            to="/projects/covers"
            data-card
            style={{ "--from": "-50px", transform: "rotate(-3deg)" }}
           className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset("pics/covers/img1.png")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
                <h3 className="text-2xl font-bold mb-2 text-primary">JTH Covers</h3>
                <p className="text-sm opacity-90 text-primary">Covers I created for the schools program catalog</p>
                <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details →
                </span>
            </div>
        </Link>

        <Link
            to="/projects/nocco"
            data-card
            className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset("pics/nocco/img1.png")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
                <h3 className="text-2xl font-bold mb-2 text-primary">Nocco Posters</h3>
                <p className="text-sm opacity-90 text-primary">Posters I created for the schools Nocco 2024</p>
                <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details →
                </span>
            </div>
        </Link>

        <Link
            to="/projects/personalbrand"
            data-card   
            className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset("pics/personalbrand/img1.png")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
                <h3 className="text-2xl font-bold mb-2 text-primary">Personal Branding</h3>
                <p className="text-sm opacity-90 text-primary">Other graphic design projects I have done</p>
                <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details →
                </span>
            </div>
        </Link>

    </div>
);
};