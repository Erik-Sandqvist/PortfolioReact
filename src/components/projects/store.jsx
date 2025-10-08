import React from "react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { Carousel } from "../Carousel";



const Store  = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/store/img2.png`, alt: "Product", caption: "Product" },
  ];

  return (
    <><div className="max-w-4xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">A Webshop in the making</h2>
          <p className="text-primary text-base md:text-lg">
          More information comming...</p>
        </div>

      </div>
    </div><Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden" /></>
  );
};

export default Store;
