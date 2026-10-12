import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaGithub, FaImages } from "react-icons/fa";
import { SiVite, SiJavascript } from "react-icons/si";

import { Carousel } from "../Carousel";

const Flowers = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/flowers/hero.webp`, alt: "Bloom hero with a cornflower", caption: "Hero" },
    { src: `${base}pics/flowers/corn-poppy.webp`, alt: "Corn poppy panel in red", caption: "Corn Poppy" },
    { src: `${base}pics/flowers/sunflower.webp`, alt: "Sunflower panel in yellow", caption: "Sunflower" },
    { src: `${base}pics/flowers/bearded-iris.webp`, alt: "Bearded iris panel in violet", caption: "Bearded Iris" },
    { src: `${base}pics/flowers/water-lily.webp`, alt: "Water lily panel in jade", caption: "Water Lily" },
    { src: `${base}pics/flowers/palette.webp`, alt: "All ten accent colours side by side", caption: "The whole palette" },
  ];

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="max-w-7xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-2 mt-2">
          <div>
            <h2 className="text-3xl font-bold font-onest text-primary mb-6">Bloom</h2>
            <hr className="border-primary"></hr>

            <div className="flex flex-col gap-8 mt-4">

              <div className="flex-1 order-2 md:order-1">
                <p className="text-text-secondary text-base md:text-lg">
                  Bloom is a single-page scroll through ten flowers, where the whole page takes its colour
                  from whichever flower is on screen. It runs warm to cool, from a scarlet poppy through to
                  a jade water lily.
                  <br></br>
                  <br></br>
                 
                  <br></br>
                </p>
                <a
                  href="https://github.com/Erik-Sandqvist/flowers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 w-fit"
                >
                  <FaGithub className="text-xl" />
                  View on GitHub
                </a>
              </div>

              <div className="flex-1 order-1 md:order-2">
                <div className="space-y-8 text-secondary text-sm">
                  <div>
                    <h4 className="text-lg font-semibold mb-8">Tech Stack</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <SiJavascript className="text-yellow-400 text-3xl" />
                        <span>Vanilla JavaScript</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-sky-500 text-3xl" />
                        <span>CSS @property</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaHtml5 className="text-orange-500 text-3xl" />
                        <span>HTML & SVG</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiVite className="text-violet-500 text-3xl" />
                        <span>Vite</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaImages className="text-lime-500 text-3xl" />
                        <span>sharp image pipeline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

<hr></hr>

        </div>
      </div>

      <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden mt-36"
      />

    </div>
     <div className="flex justify-between max-w-6xl mx-auto gap-10 mb-8">
      <Link
        to="/projects/store"
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>

      <Link
        to="/projects/keylinx"
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default Flowers;
