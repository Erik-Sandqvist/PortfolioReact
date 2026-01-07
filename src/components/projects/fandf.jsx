import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "../Carousel";

const Fandf = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/fandf/fandf.png`, alt: "Homescreen", caption: "Homescreen" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-2 mt-2 max-w-6xl">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Fast and Fantastic</h2>
            <p className="text-text-primary text-base md:text-lg">
            Me and a partner devloped a game using p5canvas. P5.canvas is a framework based on JavaScript where you can create 
            cool visual games and mechanics. The game is published and you can play it if you click on the link.
            It was a fun and challenging task due to the essence of communication. I learned a lot from working closely with
             a collaborator, like the importance of communication and how to work together in GitHub.
            </p>
            <br></br>
            <a
            href="https://ju-nmd2023.github.io/fop-final-project-group18/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-base-200 rounded-lg hover:bg-base-300 hover:text-secondary transition"
          >
            Game (only works on desktop)
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
    <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/wix" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/store" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default Fandf;
