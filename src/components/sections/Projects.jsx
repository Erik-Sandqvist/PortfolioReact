import React from "react";
import { ProjectDiv } from "../ProjectDivforppage";
import { GraphicDiv } from "../GraphicDiv";

export const Projects = () => {
    return (
        <section className="projects mt-40">
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
        <p className="font-onest ml-2 text-xl md:ml-32 md:text-2xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default w-8/12">
          This is a link to my Creative Coding Portfolio, which contains various projects I've worked on using different creative coding techniques as part of a course.
        </p>
        <a href="https://ju-nmd2023.github.io/creative-coding-portfolio-Erik-Sandqvist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10 mb-20 ml-2 text-xl md:ml-32">
            Creative Coding Portfolio
        </a>
        </section>
    );
    }

export default Projects;