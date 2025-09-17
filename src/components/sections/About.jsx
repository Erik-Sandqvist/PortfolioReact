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
        className="mx-auto my-8 w-90 sm:w-74 md:w-90 lg:w-116 h-auto"
      />
    </section>
  );
};

export default About;