// jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { Carousel } from "../Carousel";

const WixPortfolio = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    // { src: `${base}pics/wix/img1.png`, alt: "Home", caption: "Home Page" },
    { src: `${base}pics/wix/img2.png`, alt: "Search", caption: "Search" },
    { src: `${base}pics/wix/img3.png`, alt: "Cart", caption: "Cart" },
    { src: `${base}pics/wix/img4.png`, alt: "tanks for order", caption: "Order complete" }
  ];

  return (
    <><div className="max-w-6xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold font-onest text-secondary mb-2">Wix Portfolio</h2>
          <p className="text-primary text-base md:text-lg">
            I recently created a professional portfolio using Wix Studio, a powerful platform designed for intuitive web development through drag-and-drop functionality. My goal with this project was not only to design a personal portfolio but also to gain a deeper understanding of how modern no-code tools like Wix can be used to build visually appealing and functional websites.
            Wix Studio works by allowing developers and designers to build websites through a drag-and-drop editor.
            Instead of writing code line by line, you can structure the layout visually by moving elements such as text
            boxes, images, buttons, and galleries directly onto the page. At the same time, Wix offers customization
            options where you can adjust design details, manage responsive behavior for different screen sizes, and even
            add advanced features like animations or dynamic content. This combination of simplicity and flexibility makes it
            an interesting platform to experiment with.
            During the project, I spent many hours refining the design of my portfolio. I explored different layouts, experimented
            with typography and color schemes, and tested interactive elements to ensure the site was both user-friendly and
            visually engaging. Working with Wix also gave me insight into the balance between design freedom and structured
            development — while the drag-and-drop system speeds up the creative process, it also requires careful planning to
            maintain consistency and performance.
            The final result is a portfolio that reflects both my technical interest and
            my creative approach. More importantly, the project strengthened my confidence in using modern
            website builders and gave me a clear understanding of how no-code platforms can be applied in real-world projects.
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
    </div><Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden" />
        <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/vinyl4u" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/fandf" 
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