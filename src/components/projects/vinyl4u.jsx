import React from "react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { Carousel } from "../Carousel";



const Vinyl4u  = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/v4u/img1.png`, alt: "Home", caption: "Home Page" },
    { src: `${base}pics/v4u/img2.png`, alt: "Search", caption: "Search" },
    { src: `${base}pics/v4u/img3.png`, alt: "Cart", caption: "Cart" },
    { src: `${base}pics/v4u/img4.png`, alt: "tanks for order", caption: "Order complete" }
  ];

  return (
    <><div className="max-w-4xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Vinyl4u</h2>
          <p className="text-primary text-base md:text-lg">
            Vinyl Shop Web Application
            As part of a collaborative team project, I helped develop a vinyl record e-commerce website using HTML, CSS, and JavaScript. The project involved building a responsive and user-friendly interface, implementing dynamic features, and ensuring smooth navigation.

            We worked closely using GitHub for version control, resolving code conflicts efficiently and maintaining clean, organized code. This experience strengthened my skills in front-end development, teamwork, and collaborative problem-solving while delivering a polished final product.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-primary">
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-[#E34F26] text-3xl" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCss3 className="text-[#1572B6] text-3xl" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-[#F7DF1E] text-3xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">🔐</span>
            <span>Authentication</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">📱</span>
            <span>Responsive UI</span>
          </div>
        </div>

        <ul className="list-disc list-inside text-primary space-y-1">
          <li>Fullständigt CRUD-stöd för anteckningar</li>
          <li>JWT-baserad användarautentisering</li>
          <li>Responsiv design för både desktop och mobil</li>
          <li>REST API byggt med Express och Node</li>
          <li>Frontend i React med moderna hooks och komponentstruktur</li>
        </ul>

        <div className="pt-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            Visa på GitHub
          </a>
          <a
            href="https://ju-nmd2023.github.io/wuid-project-group-11/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 ml-4 px-5 py-2.5 bg-secondary text-white rounded-lg hover:bg-blue-700 transition"
          >App</a>

        </div>
      </div>
    </div><Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden" /></>
  );
};

export default Vinyl4u;
