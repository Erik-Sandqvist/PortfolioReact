import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-48 py-4 w-full bg-base-100">
      {/* Vänster sektion */}
      <div>
        <h2 className="font-bold uppercase text-lg text-primary">Erik Sandqvists Portfolio</h2>
        <p className="text-sm">073 - 544 05 70</p>
        <a
          href="mailto:esandqvist04@gmail.com"
          className="text-blue-400 hover:underline"
        >
          esandqvist04@gmail.com
        </a>
      </div>

      {/* Höger sektion */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/dinprofil" // byt till din länk
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-2 rounded"
        >
          <FaLinkedinIn className="text-white w-5 h-5" />
        </a>
       
      </div>
    </footer>
  );
};
