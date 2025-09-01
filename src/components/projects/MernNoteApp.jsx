import React from "react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Carousel } from "../Carousel";

const MernNoteApp = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/mern/img1.png`, alt: "Översikt", caption: "Edit Note" },
    { src: `${base}pics/mern/img2.png`, alt: "Formulär", caption: "Create Note" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-6 my-11 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">📝 MERN Note App</h2>
          <p className="text-text-primary text-base md:text-lg">
            Ett fullstack-anteckningsverktyg byggt med <strong>MERN-stack</strong> – optimerat för snabbhet, säkerhet och enkel användning.
            Användare kan logga in, skapa, redigera och radera anteckningar via ett responsivt och modernt gränssnitt.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-primary">
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

      
        <ul className="list-disc list-inside text-primary space-y-1">
          <li>Fullständigt CRUD-stöd för anteckningar</li>
          <li>Responsiv design för både desktop och mobil</li>
          <li>REST API byggt med Express och Node</li>
          <li>Frontend i React med moderna hooks och komponentstruktur</li>
        </ul>

        <div className="pt-4 flex gap-4 flex-wrap">
          <a
            href="https://github.com/Erik-Sandqvist/MERN_App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            Visa på GitHub
          </a>
          <a
            href="https://mern-app-c548.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-lg hover:bg-blue-700 transition"
          >
            App
          </a>

        </div>
        <Carousel
images={images}
autoPlay={4000}
showIndicators
showArrows
className="aspect-video"
/>
      </div>
    </div>
  );
};



export default MernNoteApp;
