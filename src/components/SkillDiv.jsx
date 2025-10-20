import React from "react";
import OneSkill from "./OneSkill"; // om du har default export, annars { OneSkill }

export const SkillDiv = () => {
  return (
    <div className="relative mx-auto z-10 w-full mt-10 md:w-3/4 lg:w-2/3 backdrop-blur-lg text-primary rounded-lg shadow-xl overflow-hidden supports-[backdrop-filter]:bg-white/10 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <OneSkill name="JavaScript" level="Advanced" />
        <OneSkill name="HTML" level="Advanced" />
        <OneSkill name="CSS" level="Advanced" />
        <OneSkill name="React" level="Advanced" />
        <OneSkill name="Git" level="Intermediate" />
        <OneSkill name=".Net" level="Intermediate" />
        <OneSkill name="Azure" level="Intermediate" />
        <OneSkill name="Blazor" level="Intermediate" />
        <OneSkill name="MudBlazor" level="Intermediate" />
        <OneSkill name="Node.js" level="Intermediate" />
        <OneSkill name="Tailwind" level="Intermediate" />
        <OneSkill name="Figma" level="Intermediate" />
        <OneSkill name="C#" level="Intermediate" />
        <OneSkill name="SQL" level="Intermediate" />
        <OneSkill name="REST APIs" level="Intermediate" />
        <OneSkill name="DevOps" level="Intermediate" />
        <OneSkill name="Agile" level="Intermediate" />
        <OneSkill name="Scrum" level="Intermediate" />
        <OneSkill name="TypeScript" level="New" />
        <OneSkill name="Python" level="New" />
        <OneSkill name="MongoDB" level="New" />
      </div>
    </div>
  );
};

export default SkillDiv;