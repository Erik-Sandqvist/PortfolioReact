// jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const WixPortfolio = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    // { src: `${base}pics/wix/img1.png`, alt: "Home", caption: "Home Page" },
    { src: `${base}pics/wix/img2.png`, alt: "Home"},
    { src: `${base}pics/wix/img3.png`, alt: "Colors"},
    { src: `${base}pics/wix/img4.png`, alt: "Branding"}
  ];

  return (
    <><div className="max-w-6xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold font-onest text-primary mb-2">Wix Portfolio</h2>
          <hr className="border-secondary"></hr>
          <p className="text-secondary text-base md:text-lg mt-4">
            I created a portfolio using Wix Studio, a platform designed for intuitive web development through drag-and-drop functionality. My goal with this project was not only to design a personal portfolio but also to gain a understanding of how modern no-code tools like Wix can be used to build visually appealing and functional websites.
            Wix Studio works by allowing developers and designers to build websites through a drag-and-drop editor.
            You can structure the layout visually by moving elements such as text
            boxes, images, buttons, and galleries directly onto the page. This combination of simplicity and flexibility makes it
            an interesting platform to experiment with.
            During the project, I spent many hours refining the design of my portfolio. I explored different layouts, experimented
            with typography and color schemes, and tested interactive elements to ensure the site was both user-friendly and
            visually engaging. Working with Wix also gave me insight into the balance between design freedom and structured
            development.
            The final result is a portfolio that reflects both my technical interest and
            my creative approach. More importantly, the project strengthened my confidence in using modern
            website builders and gave me a understanding of how no-code platforms can be used. It is not my main portfolio anymore.
          </p>
        </div>

        <ul className="list-disc list-inside text-primary space-y-1">
          <li>Custom theme and sections</li>
          <li>Responsive layout and optimized images</li>
          <li>Animations and hover effects</li>
          <li>Contact form</li>
          <li>Basic SEO (titles, meta tags, alt text, sitemap)</li>
        </ul>

        <div className="pt-4">

          <a
            href="https://esandqvist04.wixsite.com/eriks-sandqvist-port"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 ml-4 px-5 py-2.5 bg-secondary text-white rounded-lg hover:bg-blue-700 transition"
          >
            Live
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[220px]">
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={`group relative overflow-hidden rounded-xl shadow-xl ${
              i === 0 ? "md:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt || `Bild ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {img.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/55 text-white text-sm px-3 py-2">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>

        <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/vinyl4u" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/expensetracker" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default WixPortfolio;