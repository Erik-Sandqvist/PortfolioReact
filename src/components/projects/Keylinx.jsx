// Keylinx.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiBlazor, SiFigma, SiGit, SiSwagger, SiMiro } from "react-icons/si";
import { FaDatabase, FaProjectDiagram, FaLink, FaVial, FaCode } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";
import { VscBeaker } from "react-icons/vsc";
import { TbComponents } from "react-icons/tb";

import { Carousel } from "../Carousel";

const Keylinx = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/keylinx/mockup.webp`, alt: "Homescreen", caption: "Homescreen" },
    { src: `${base}pics/keylinx/img2.png`, alt: "Cv creation", caption: "Cv creation" },
    { src: `${base}pics/keylinx/img3.png`, alt: "Databasedesign", caption: "Databasedesign" },
    { src: `${base}pics/keylinx/img4.png`, alt: "Lightmode", caption: "Lightmode" },
    { src: `${base}pics/keylinx/img5.png`, alt: "Cv creation", caption: "Cv creation" } 
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-2 mt-2">
          <div>
            <h2 className="text-3xl font-bold font-onest text-secondary mb-4">Keylinx (Internship)</h2>
            <hr className="border-secondary"></hr>
            {/* Flex container for desktop layout */}
            <div className="mt-4 flex flex-col md:flex-row gap-8">
              
              {/* Left side - Text content */}
              <div className="flex-1 order-2 md:order-1">
                <p className="text-text-primary text-base md:text-lg">
                  <strong>Intro</strong><br></br>
                  During my internship at Keylinx, a full-stack web development consultancy, I contributed to a team project developing an 
                  internal web application for employee and task management. The experience allowed me to gain hands-on experience in both 
                  backend and frontend development, while learning industry workflows and collaborative practices.
                  <br /><br />
                  <strong>Backend Development</strong>
                  <br />
                  I started with backend tasks, including:
                  Designing the database schema and defining models
                  Building REST APIs for data handling
                  Writing unit tests using xUnit
                  Handling microservices-based architecture and understanding service interactions
                  Testing APIs with Swagger and Scalar
                  These tasks strengthened my understanding of backend development, data modeling, and service-oriented architecture, 
                  while reinforcing concepts from my Web Development courses.

                  <br /><br />
                  <strong>Frontend Development</strong>
                  <br />

                  Later, I shifted focus to frontend development:
                  Planning interfaces with low-fidelity wireframes in Figma
                  Building UI components with MudBlazor, a Blazor component library
                  Integrating frontend with backend APIs to display and manage data
                  Implementing administrative functionality for managing employee records and CVs<br></br>

                  <br></br>
                  <strong>Collaboration & Workflow</strong>
                  <br />

                  I gained experience in professional software development practices, including:
                  Git version control, branch management, pull requests, and conflict resolution
                  Agile workflows with daily stand-ups, sprint planning, and code reviews
                  Documenting and explaining architectural decisions to peers

                  <br></br><br></br>
                  <strong>Learning Outcomes</strong>
                  <br />
                  This internship allowed me to:
                  Apply theoretical knowledge in a real-world, team-oriented setting
                  Deepen technical skills in C#, .NET 9, API design, database management, and frontend development
                  Improve soft skills such as communication, teamwork, problem-solving, and self-directed learning
                  Gain confidence working in microservice architectures and full-stack development projects
                  Overall, this experience confirmed my career goal of becoming a full-stack web developer, and gave me both the technical and professional insight needed to contribute effectively in a development team.
                </p>
              </div>

              {/* Right side - Icons */}
              <div className="flex-1 order-1 md:order-2">
                <div className="space-y-8 text-primary text-sm">
                  <div>
                    <h4 className="text-lg font-semibold mb-8">Programming Languages & Frameworks</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <FaCode className="text-indigo-500 text-3xl" />
                        <span>C#</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiDotnet className="text-purple-500 text-3xl" />
                        <span>.NET 9</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiBlazor className="text-fuchsia-600 text-3xl" />
                        <span>MudBlazor</span>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="border-secondary"></hr>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Backend</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <MdOutlineApi className="text-teal-500 text-3xl" />
                        <span>REST API</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaDatabase className="text-amber-600 text-3xl" />
                        <span>Databasedesign</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaProjectDiagram className="text-rose-500 text-3xl" />
                        <span>Microservices</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <VscBeaker className="text-emerald-500 text-3xl" />
                        <span>xUnit tests</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiSwagger className="text-green-600 text-3xl" />
                        <span>Swagger</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaVial className="text-pink-500 text-3xl" />
                        <span>Scalar</span>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <hr className="border-secondary"></hr>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Frontend & Design</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <SiFigma className="text-pink-500 text-3xl" />
                        <span>Figma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaLink className="text-cyan-500 text-3xl" />
                        <span>Intergration</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <TbComponents className="text-violet-500 text-3xl" />
                        <span>Components</span>
                      </div>
                    </div>
                  </div>
                  <hr className="border-secondary"></hr>
                  <br></br>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Tools & Methodologies</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <SiGit className="text-orange-600 text-3xl" />
                        <span>Git</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaProjectDiagram className="text-sky-500 text-3xl" />
                        <span>Agile/Scrum</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiMiro className="text-yellow-500 text-3xl" />
                        <span>Miro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

 
<hr className="border-secondary"></hr>
        
        </div>
      </div>

      <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden"
      />
      <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/store" 
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/stationkoll" 
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default Keylinx;