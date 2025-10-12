import React from 'react';
import MeCard from '../MeCard';
import { SkillDiv } from '../SkillDiv';

const About = () => {
  const base = import.meta.env.BASE_URL;
  
  return (
    <section id="about" className="about-section pt-14">
      <MeCard />
      <SkillDiv />
      
      <img
        src={`${base}pics/logobig.svg`}
        alt="Logo"
        loading="lazy"
        className="mx-auto mt-4 md:w-1/2 w-full h-auto"
      />
      
      <h2 className="font-onest max-w-4xl text-2xl font-bold text-primary mx-auto animate-slide-in-right cursor-default pl-4">
        My thinking regarding my logo:
      </h2>
      <br />
      <p className="font-onest max-w-4xl text-lg text-primary mx-auto animate-slide-in-right cursor-default mb-4 pl-4">
        It is simple, the design of the logo was inspired by lines of code and by the Swedish flag since I am from Sweden and I like to code.
        It is also made to match the way my name is written, with the same ratio with the lines
      </p>

      {/* About Me Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-12">
        <h2 className="font-onest text-4xl md:text-5xl font-bold text-primary mb-8 animate-slide-in-right cursor-default">
          About Me
        </h2>
        
        <div className="font-onest text-lg text-primary mb-12 animate-slide-in-right cursor-default space-y-4">
          <p>
            I'm a passionate fullstack developer with a foundation in computer science and informatics. With hands-on experience 
            building scalable applications. I thrive on solving problems and creating elegant solutions that 
            make a difference.
          </p>
          <p>
            With expertise spanning both frontend and backend technologies, I enjoy the full spectrum of software 
            development—from crafting user interfaces to architecting server-side systems.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-onest text-2xl md:text-3xl font-bold text-primary mb-4 cursor-default">
            🎓 Education
          </h3>
          <div className="space-y-2">
            <p className="font-onest text-xl font-semibold text-primary">
              Bachelor's Degree in webdevelopment and garaphic design
            </p>
            <p className="font-onest text-lg text-primary/80">
              Jönköping University
            </p>
            <p className="font-onest text-base text-primary/60">
              2023 - 2026
            </p>
          </div>
          <br></br>
          <div className="space-y-2">
            <p className="font-onest text-xl font-semibold text-primary">
              The technical program at ErikDhalbergs gymnasium
            </p>
            <p className="font-onest text-base text-primary/60">
              2020 - 2023
            </p>
          </div>
        </div>
        

        {/* Professional Experience */}
        {/* <div className="mb-12">
          <h3 className="font-onest text-2xl md:text-3xl font-bold text-primary mb-6 cursor-default">
            💼 Professional Experience
          </h3>
          
          <div className="space-y-6">

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h4 className="font-onest text-xl font-bold text-primary">
                  Backend Developer
                </h4>
                <span className="font-onest text-base text-primary/60 mt-1 md:mt-0">
                  Aug 2022 - Present
                </span>
              </div>
              <p className="font-onest text-lg font-semibold text-primary/90 mb-3">
                Netlight Consulting
              </p>
              <p className="font-onest text-base text-primary/70">
                Developing scalable backend solutions for enterprise clients, working with modern technologies 
                and agile methodologies to deliver high-quality software solutions.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;