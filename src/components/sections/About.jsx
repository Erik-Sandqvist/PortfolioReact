import React from 'react';
import MeCard from '../MeCard';
import { SkillDiv } from '../SkillDiv';
import { OneSkill } from '../OneSkill';

const About = () => {
  return (
    <section id="about" className="about-section pt-14">
      <MeCard />
      <SkillDiv />
 <img
        src={`${import.meta.env.BASE_URL}pics/logobig.svg`}
        alt="Logo"
        loading="lazy"
        className="mx-auto my-4 w-1/2 h-auto"
      />
    </section>
  );
};

export default About;