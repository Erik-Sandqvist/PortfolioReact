import React from "react";
import { ProjectDiv } from "../ProjectDiv";
import { GraphicDiv } from "../GraphicDiv";
import { asset } from "../../utils/asset";

export const Projects = () => {
    return (
        <section className="projects mt-28">
        <h1 className="font-onest ml-2 text-4xl md:ml-32 md:text-6xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
          Web Development
        </h1>
        <br />
        <ProjectDiv />
         <h1 className="font-onest ml-2 text-4xl md:ml-32 md:text-6xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
          Design
        </h1>
        <GraphicDiv />  
        <h1 className="font-onest ml-2 text-6xl md:ml-32 md:text-8xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
          More Work:
        </h1>
         <hr className="border-secondary w-10/12 mx-auto"></hr>
        <p className="font-onest ml-2 text-xl md:ml-32 md:text-2xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default w-8/12">
          This is a link to my Creative Coding Portfolio, which contains various projects I've worked on using different creative coding techniques as part of a course.
        </p>
        <a href="https://ju-nmd2023.github.io/creative-coding-portfolio-Erik-Sandqvist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10 mb-20 ml-2 text-xl md:ml-32">
            Creative Coding Portfolio
        </a>
        <hr className="border-secondary w-10/12 mx-auto"></hr>
         <p className="font-onest ml-2 text-xl md:ml-32 md:text-2xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default w-8/12">
         I enjoy creating posters and have created more than the ones showcased in the 
         projects, such as this one which is one of the latest posters.
        </p>
        <img src={asset("pics/nocco/jeeskkoo@0.5x.png")} alt="Jesko Poster" className="md:max-w-2xl w-10/12 mx-auto mt-10 mb-6 opacity-80 rounded" />
        </section>
    );
    }

export default Projects;