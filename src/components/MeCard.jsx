import React from 'react';
import { asset } from '../utils/asset';

export const ProfileCard = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 backdrop-blur-lg
        text-primary rounded-lg shadow-xl overflow-hidden
        supports-[backdrop-filter]:bg-white/10">
        <div className="flex flex-col md:flex-row h-[620px]">
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img
              src={asset('pics/me.JPG')}
              alt="Erik Sandqvist"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-8 flex flex-col justify-start">
            <h1 className="text-3xl font-bold mb-2">Erik Sandqvist</h1>
            <p className="text-lg font-semibold mb-4">Web developer</p>

            <p className="mb-2 text-xl"><span className="font-bold text-xl">Phone:</span> 073-544 05 70</p>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">Email:</span> esandqvist04@gmail.com</p>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">City:</span> Jönköping, Sweden</p>
            <p className="mb-2 text-xl"><span className="font-bold text-xl">Date of Birth:</span> July 12, 2004</p>

            <button
              onClick={() => window.location.href = '/contact'}
              className="mt-72 px-6 py-2 bg-primary text-secondary font-semibold rounded-lg shadow-md hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
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