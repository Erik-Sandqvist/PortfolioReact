import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiFigma,
  SiPython,
  SiMongodb,
  SiBlazor,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaQuestionCircle,
} from "react-icons/fa";
import { TbArrowsShuffle, TbComponents, TbBrandAzure } from "react-icons/tb";

const iconMap = {
  javascript: SiJavascript,
  react: FaReact,
  typescript: SiTypescript,
  "node.js": FaNodeJs,
  node: FaNodeJs,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  git: FaGitAlt,
  html: FaHtml5,
  css: FaCss3Alt,
  ".net": SiDotnet,
  dotnet: SiDotnet,
  figma: SiFigma,
  sql: FaDatabase,
  agile: TbArrowsShuffle,
  python: SiPython,
  mongodb: SiMongodb,
  azure: TbBrandAzure,
  blazor: SiBlazor,
  mudblazor: TbComponents,
};

export const OneSkill = ({ name, level, className = "" }) => {
  const key = name.toLowerCase();
  const Icon = iconMap[key] || FaQuestionCircle;

  return (
    <div
      className={
        "group flex flex-col justify-center items-start gap-3 px-4 py-3 h-32 " +
        "rounded-xl bg-white/10 border border-white/20 backdrop-blur-md " +
        "shadow-md hover:shadow-lg transition hover:bg-white/15 cursor-default " +
        className
      }
    >
      <div className="flex items-center gap-3">
        <Icon className="text-3xl text-primary drop-shadow" />
        <span className="font-semibold">{name}</span>
      </div>
      <span className="text-xs uppercase tracking-wide text-primary/80">
        {level}
      </span>
    </div>
  );
};

export default OneSkill;
