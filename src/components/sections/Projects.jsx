import React from "react";
import { ProjectDiv } from "../ProjectDiv";

export const Projects = () => {
    return (
        <section className="projects mt-40">
        <h2>Projects</h2>
        <p className="projects-description">
            Here are some of the projects I have worked on. Click on the images to
            see more details.
        </p>
        <ProjectDiv />
        </section>
    );
    }

export default Projects;