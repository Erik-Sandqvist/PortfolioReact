import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative z-20 flex justify-between items-center font-onest px-5 sm:px-6 md:px-12 lg:px-72 py-2 w-full bg-[rgba(8, 26, 58, 0.8)] backdrop-blur-lg border-t border-yellow/10 shadow-lg">
      {/* Vänster sektion */}
      <div>
        <h2 className="font-bold uppercase text-lg text-primary">
          Erik Sandqvists Portfolio
        </h2>
        <a
          href="tel:+46735440570"
          className="block text-sm text-secondary hover:underline "
        >
          073 - 544 05 70
        </a>
        <a
          href="mailto:esandqvist04@gmail.com"
          className="block text-sm text-secondary hover:underline"
        >
          esandqvist04@gmail.com
        </a>
      </div>

      {/* Höger sektion - ikoner */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/erik-sandqvist-711480290"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-2 rounded"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-white w-5 h-5" />
        </a>
        <a
          href="https://github.com/Erik-Sandqvist"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#171515] p-2 rounded"
          aria-label="GitHub"
        >
          <FaGithub className="text-white w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};
