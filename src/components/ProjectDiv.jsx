import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Ensure this path is correct based on your project structure
import { asset } from '../utils/asset'

export const ProjectDiv = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      <Link
    to="/projects/mern-note-app"
    className="group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url(${asset('pics/MernHome.png')})` }}

    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
    <div className="relative z-10 p-6 flex flex-col h-full justify-end text-secondary-content">
      <h3 className="text-2xl font-bold mb-2 text-primary">MERN Note App</h3>
      <p className="text-sm opacity-90 text-primary">
        Fullstack notes-app. Klicka för att se mer.
      </p>
      <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
        Visa detaljer →
      </span>
    </div>
  </Link>

  <Link
    to="/projects/vinyl4u"
    className="group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url(${asset('pics/vinyl4u.jpg')})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
    <div className="relative z-10 p-6 flex flex-col h-full justify-end text-secondary-content">
      <h3 className="text-2xl font-bold mb-2 text-primary">Vinyl4U</h3>
      <p className="text-sm opacity-90 text-primary">
        Vinyl-app projekt. Klicka för att se mer.
      </p>
      <span className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium">
        Visa detaljer →
      </span>
    </div>
  </Link>
      <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 3 */}
        <h3 className="text-xl font-bold mb-2">Projekt 3</h3>
        <p>Beskrivning av projekt 3.</p>
      </div>
       <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 3 */}
        <h3 className="text-xl font-bold mb-2">Projekt 3</h3>
        <p>Beskrivning av projekt 3.</p>
      </div>
      <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 3 */}
        <h3 className="text-xl font-bold mb-2">Projekt 3</h3>
        <p>Beskrivning av projekt 3.</p>
      </div>
      <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 3 */}
        <h3 className="text-xl font-bold mb-2">Projekt 3</h3>
        <p>Beskrivning av projekt 3.</p>
      </div>
    </div>
  );
};