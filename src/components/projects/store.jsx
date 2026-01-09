import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { Carousel } from "../Carousel";



const Store  = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/store/img2.png`, alt: "Product", caption: "Product" },
  ];

  return (
    <><div className="max-w-6xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold font-onest text-secondary mb-2">A Webshop in the making</h2>
          <p className="text-primary text-base md:text-lg">
          More information coming...</p>
        </div>

      </div>
    </div><Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden" />
        <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/fandf" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/keylinx" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default Store;
