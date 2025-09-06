import React from "react";
import OneSkill from "./OneSkill"; // om du har default export, annars { OneSkill }

export const SkillDiv = () => {
  return (
    <div className="relative mx-auto z-10 w-full mt-10 md:w-3/4 lg:w-2/3 backdrop-blur-lg text-primary rounded-lg shadow-xl overflow-hidden supports-[backdrop-filter]:bg-white/10 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <OneSkill name="JavaScript" level="Advanced" />
        <OneSkill name="React" level="Advanced" />
        <OneSkill name=".Net" level="Intermediate" />
        <OneSkill name="Node.js" level="Intermediate" />
        <OneSkill name="Tailwind" level="Advanced" />
        <OneSkill name="Git" level="Advanced" />
        <OneSkill name="HTML" level="Advanced" />
        <OneSkill name="CSS" level="Advanced" />
        <OneSkill name="TypeScript" level="New" />
      </div>
    </div>
  );
};

export default SkillDiv;