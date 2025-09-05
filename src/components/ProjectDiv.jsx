import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { asset } from "../utils/asset";

export const ProjectDiv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll("[data-card]");
    cards.forEach((el, i) => {
      // Stagger
      setTimeout(() => {
        el.classList.add("card-fade--in");
      }, 120 * i);
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6 w-full">
      <Link
        to="/projects/mern-note-app"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/MernHome.png")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 p-6 flex flex-col h-full justify-end text-secondary-content">
          <h3 className="text-2xl font-bold mb-2 text-primary">MERN Note App</h3>
          <p className="text-sm opacity-90 text-primary">Fullstack notes-app. Klicka för att se mer.</p>
          <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

      <Link
        to="/projects/vinyl4u"
        data-card
        style={{ "--from": "50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/vinyl4u.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 p-6 flex flex-col h-full justify-end text-secondary-content">
          <h3 className="text-2xl font-bold mb-2 text-primary">Vinyl4U</h3>
          <p className="text-sm opacity-90 text-primary">Vinyl-app projekt. Klicka för att se mer.</p>
          <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

      <Link
        to="/projects/wix"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/wix.png")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 p-6 flex flex-col h-full justify-end text-secondary-content">
          <h3 className="text-2xl font-bold mb-2 text-primary">Wix Portfolio</h3>
          <p className="text-sm opacity-90 text-primary">Also a portfolio built in Wix</p>
          <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

      {/* Exempel på placeholders med alternerande riktning */}
      {[1,2,3].map((n,i)=>(
        <div
          key={n}
            data-card
            style={{ "--from": i % 2 ? "50px" : "-50px" }}
            className="card-fade w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-2 text-primary">Projekt {n}</h3>
          <p className="text-primary">Beskrivning av projekt {n}.</p>
        </div>
      ))}
    </div>
  );
};