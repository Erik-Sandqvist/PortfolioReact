import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiReact, SiUmbraco } from "react-icons/si";

const Burnbright = () => {
  const base = import.meta.env.BASE_URL;
  
  const images = [
    { src: `${base}burnbright/mainpic.jpg`, alt: "Main Picture", caption: "Hero Landing Page" },
    { src: `${base}burnbright/products.jpg`, alt: "Products", caption: "Product Showcase" },
    { src: `${base}burnbright/scrollytelling.jpg`, alt: "Scrollytelling", caption: "Interactive Storytelling" },
    { src: `${base}burnbright/visual.jpg`, alt: "Visual", caption: "Visual Design" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 mb-16 px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold font-onest text-primary mb-4">Burnbright</h2>
            <p className="text-secondary text-lg md:text-xl mb-4 leading-relaxed max-w-2xl">
              A fictional e-commerce clothing brand showcasing modern web development with React and Umbraco CMS. 
              This project demonstrates seamless integration of dynamic frontend components with enterprise-level content management.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-3 px-5 py-3 bg-secondary/10 rounded-lg border border-secondary/30 hover:border-secondary/60 transition">
                <SiReact className="text-3xl text-blue-400" />
                <div>
                  <p className="text-secondary text-xs uppercase tracking-wide font-semibold">Frontend</p>
                  <p className="text-primary font-bold">React</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-secondary/10 rounded-lg border border-secondary/30 hover:border-secondary/60 transition">
                <SiUmbraco className="text-3xl" style={{color: '#3544B1'}} />
                <div>
                  <p className="text-secondary text-xs uppercase tracking-wide font-semibold">CMS</p>
                  <p className="text-primary font-bold">Umbraco</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://erik-sandqvist.github.io/BurnBright"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2 md:mb-2 whitespace-nowrap"
          >
            View Live Project
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 17 5 5m5-5-5-5M7 7h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/></svg>
          </a>
        </div>
      </div>

      {/* Image Gallery - Main Focus */}
      <div className="max-w-7xl mx-auto mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full auto-rows-[600px]">
          {images.map((img, i) => (
            <figure
              key={img.src}
              className="group relative overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-lg px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-semibold">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-12 max-w-6xl mx-auto gap-10 mb-8 px-4">
        <Link 
          to="/projects/vinyl4u" 
          className="btn btn-outline btn-secondary flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Previous
        </Link>
        
        <Link 
          to="/projects/expensetracker" 
          className="btn btn-outline btn-secondary flex items-center gap-2"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
    </>
  );
};

export default Burnbright;
