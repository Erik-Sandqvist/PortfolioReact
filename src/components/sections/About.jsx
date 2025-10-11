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
        className="mx-auto my-4 w-1/2 h-auto"
      />
      <h2 className="font-onest max-w-4xl text-2xl font-bold text-primary mx-auto animate-slide-in-right cursor-default">My thoughtes regarding my logo:</h2>
      <br></br>
      <p className="font-onest max-w-4xl text-lg text-primary mx-auto animate-slide-in-right cursor-default mb-4">
        It is simple, the design of the logo was inspired by lines of code and by the Swedish flag since I am from Sweden and I like to code.
        It is also made to match the way my namwe is written, with the same ratio with the lines
      </p>
    </section>
  );
};

export default About;