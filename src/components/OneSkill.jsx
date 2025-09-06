import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

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
  css: FaCss3Alt
};

export const OneSkill = ({ name, level, className = "" }) => {
  const key = name.toLowerCase();
  const Icon = iconMap[key];

  return (
    <div
      className={
        "group flex items-center gap-3 px-4 py-3 h-32 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md hover:shadow-lg transition hover:bg-white/15 cursor-default " +
        className
      }
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
        {Icon ? <Icon className="w-6 h-6" /> : <span className="text-sm font-semibold">{name.charAt(0)}</span>}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-primary">{name}</span>
        {level && <span className="text-xs text-primary/70">{level}</span>}
      </div>
    </div>
  );
};
export default OneSkill;