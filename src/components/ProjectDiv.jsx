import React from "react";
import { Link } from "react-router-dom";

export const ProjectDiv = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {/* Projekt 1 med länk */}
      <Link to="/projects/mern-note-app" className="w-full md:w-[28%]">
        <div className="bg-gray-800 rounded-lg p-6 mb-6 h-80 hover:ring-2 ring-theme-highlight transition">
          <h3 className="text-xl font-bold mb-2">Projekt 1</h3>
          <p>Beskrivning av projekt 1.</p>
        </div>
      </Link>
      <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 2 */}
        <h3 className="text-xl font-bold mb-2">Projekt 2</h3>
        <p>Beskrivning av projekt 2.</p>
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
      <div className="w-full md:w-[28%] bg-gray-800 rounded-lg p-6 mb-6 h-80">
        {/* Projekt 3 */}
        <h3 className="text-xl font-bold mb-2">Projekt 3</h3>
        <p>Beskrivning av projekt 3.</p>
      </div>
    </div>
  );
};