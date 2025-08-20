// jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const WixPortfolio = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 my-8 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Wix Portfolio</h2>
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
          <li>Egenskapat tema och sektioner för projekt, om mig och kontakt</li>
          <li>Responsiv layout och optimerade bilder</li>
          <li>Lätta animeringar och hover-effekter</li>
          <li>Kontaktformulär med validering</li>
          <li>Grundläggande SEO (titlar, meta, alt-texter, sitemap)</li>
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
  );
};

export default WixPortfolio;