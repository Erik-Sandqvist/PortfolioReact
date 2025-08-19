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
            En personlig portfolio byggd i Wix med fokus på tydlig struktur, responsiv design
            och visuella detaljer. Jag anpassade mallarna med egna sektioner, animeringar och
            optimerade SEO-inställningar för bättre synlighet. Projektet inkluderar kontaktformulär,
            projektsidor och integrering av externa länkar.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-primary">
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-[#E34F26] text-3xl" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCss3 className="text-[#1572B6] text-3xl" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-[#F7DF1E] text-3xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">🔍</span>
            <span>SEO</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">🎨</span>
            <span>Animationer</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">📱</span>
            <span>Responsiv UI</span>
          </div>
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