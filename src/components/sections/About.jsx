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
    </section>
  );
};

export default About;