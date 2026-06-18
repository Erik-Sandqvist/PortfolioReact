import React from "react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Carousel } from "../Carousel";
import { Link } from "react-router-dom";

const MernNoteApp = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/mern/img1.png`, alt: "Översikt", caption: "Edit Note" },
    { src: `${base}pics/mern/img2.png`, alt: "Formulär", caption: "Create Note" },
  ];

  return (
    <><div className="max-w-4xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">📝 MERN Note App</h2>
          <p className="text-text-secondary text-base md:text-lg">
            A full-stack note-taking tool built with the <strong>MERN stack</strong> – optimized for speed, security, and ease of use.
            Users create, edit, and delete notes through a responsive and modern interface.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-secondary">
          <div className="flex flex-col items-center">
            <SiMongodb className="text-green-600 text-3xl" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-black text-3xl" />
            <span>Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500 text-3xl" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-700 text-3xl" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">📱</span>
            <span>Responsive UI</span>
          </div>
        </div>

        <ul className="list-disc list-inside text-secondary space-y-1">
          <li>Complete CRUD support for notes</li>
          <li>Responsive design for both desktop and mobile</li>
          <li>REST API built with Express and Node</li>
          <li>Frontend in React with modern hooks and component structure</li>
        </ul>

        <div className="pt-4 flex gap-4 flex-wrap">
          <a
            href="https://github.com/Erik-Sandqvist/MERN_App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            View on GitHub
          </a>
          <a
            href="https://mern-app-c548.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-base-200 rounded-lg hover:bg-base-300 hover:text-secondary transition"
          >
            App
          </a>
        </div>
      </div>
    </div>
    <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden" 
    />

    <div className="flex justify-between mt-8 max-w-4xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/keylinx" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/torst" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
);
};

export default MernNoteApp;
