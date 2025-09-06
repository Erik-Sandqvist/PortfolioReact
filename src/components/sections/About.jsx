import React from 'react';
import MeCard from '../MeCard';
import { SkillDiv } from '../SkillDiv';
import { OneSkill } from '../OneSkill';

const About = () => {
  return (
    <section id="about" className="about-section pt-14">
      <MeCard />
      <SkillDiv />
    </section>
  );
};

export default About;