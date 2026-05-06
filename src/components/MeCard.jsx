import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { asset } from '../utils/asset';
import { useNavigate } from 'react-router-dom';

export const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-14">
      <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 backdrop-blur-lg text-primary rounded-lg shadow-xl overflow-hidden supports-[backdrop-filter]:bg-white/10">
        <div className="flex flex-col md:flex-row md:h-[620px]">
          <div className="w-full md:w-1/2 h-80 sm:h-96 md:h-full overflow-hidden">
            <img
              src={asset('pics/me.JPG')}
              alt="Erik Sandqvist"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-8 flex flex-col justify-start">
            <h1 className="text-3xl font-bold mb-2">Erik Sandqvist</h1>
            <p className="text-lg font-semibold mb-4">Web developer</p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/erik-sandqvist-711480290"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] p-2 rounded w-10 h-10 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white w-5 h-5" />
              </a>
              <a
                href="https://github.com/erik-sandqvist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] p-2 rounded w-10 h-10 flex items-center justify-center"
                aria-label="GitHub"
              >
                <FaGithub className="text-white w-5 h-5" />
              </a>
            </div>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">Phone:</span> 073-544 05 70</p>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">Email:</span> esandqvist04@gmail.com</p>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">Country:</span> Sweden</p>

            <div className="mt-auto pt-14 border-t border-white/10">
              <div className="w-full flex flex-wrap items-center gap-3 justify-center md:justify-start mb-4">
                <a
                  href={asset('erik-sandqvist.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Öppna CV i ny flik"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-primary transition duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zM8 7h5v5H8V7zm8 10H8v-3h8v3z" />
                  </svg>
                  Open Resume
                </a>

                <a
                  href={asset('erik-sandqvist.pdf')}
                  download="Erik_Sandqvist_CV.pdf"
                  title="Download CV"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-base-200 text-secondary hover:bg-secondary hover:text-primary transition duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10l4-4 1.41 1.41L12 16.83l-5.41-5.42L8 9l4 4V3h0zM5 19h14v2H5v-2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="mt-auto h-12 px-6 bg-base-200 text-secondary font-semibold rounded-lg shadow-md hover:bg-secondary hover:text-primary hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;