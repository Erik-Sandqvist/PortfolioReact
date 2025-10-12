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
      <h2 className="font-onest max-w-4xl text-2xl font-bold text-primary mx-auto animate-slide-in-right cursor-default pl-4">My thinking regarding my logo:</h2>
      <br></br>
      <p className="font-onest max-w-4xl text-lg text-primary mx-auto animate-slide-in-right cursor-default mb-4 pl-4">
        It is simple, the design of the logo was inspired by lines of code and by the Swedish flag since I am from Sweden and I like to code.
        It is also made to match the way my namwe is written, with the same ratio with the lines
      </p>
      {/* <h1 className="font-onest text-6xl md:pl-64 p-4 md:ml-32 md:text-8xl font-medium mt-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight animate-slide-in-right cursor-default">
         Who am I?
        </h1> */}
    </section>
  );
};

export default About;