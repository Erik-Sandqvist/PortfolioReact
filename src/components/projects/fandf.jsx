import React from "react";

import { Carousel } from "../Carousel";

const Fandf = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/fandf/fandf.png`, alt: "Homescreen", caption: "Homescreen" },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-6 mt-2">
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
            Game
          </a>
            

  </div>
</div>

  
  </div>
      <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden"
      />
    </>
  );
};

export default Fandf;
