import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { Carousel } from "../Carousel";

const Torst = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    {
      src: `${base}pics/torst/cover.png`,
      alt: "Törst cover",
      caption: "Törst - website for a pub/bar",
    },
  ];

  const stack = [
    { icon: SiNextdotjs, label: "Next.js 16" },
    { icon: SiReact, label: "React 19" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind CSS v4" },
    { icon: SiFramer, label: "Framer Motion" },
    { icon: SiSanity, label: "Sanity CMS" },
    { icon: SiZod, label: "Zod" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden bg-base-100/80 backdrop-blur-sm">
        <div className="p-6 md:p-10 space-y-8 mt-2">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 px-4 py-1 text-xs uppercase tracking-[0.24em] text-secondary">
              Case study
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold font-onest text-primary">Törst</h2>
              <p className="text-secondary text-base md:text-lg max-w-3xl">
                Törst is a website for a local bar that I built, to combine a
                clear visual presence, dynamic content, and simple booking in a modern
                Swedish web experience.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-secondary/20 bg-black/10 px-4 py-4 text-secondary"
              >
                <Icon className="text-2xl text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-secondary/20 bg-black/10 p-5 text-secondary space-y-3">
              <h3 className="text-lg font-semibold text-primary">Features</h3>
              <ul className="space-y-2">
                <li>• Hero, About, beer menu, food menu, gallery, opening hours, map, booking, and footer</li>
                <li>• Sanity-powered menus for beer and dishes</li>
                <li>• Booking form with react-hook-form, Zod, and email delivery via Resend</li>
                <li>• Framer Motion for scroll and section animations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-secondary/20 bg-black/10 p-5 text-secondary space-y-3">
              <h3 className="text-lg font-semibold text-primary">Role</h3>
              <p>
                I designed and built the entire site myself, from structure and visual
                direction to the CMS integration and booking flow.
              </p>
              <p>
                The site is written in Swedish.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
                href="https://torst.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>

      <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden"
      />

      <div className="flex justify-between mt-8 max-w-5xl mx-auto gap-10 mb-8">
        <Link
          to="/projects/stationkoll"
          className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Previous Project
        </Link>

        <Link
          to="/projects/burnbright"
          className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
        >
          Next Project
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
    </>
  );
};

export default Torst;
