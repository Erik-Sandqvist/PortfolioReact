import React from 'react';
import { asset } from '../utils/asset';

export const ProfileCard = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 bg-base-200 text-primary rounded-lg shadow-lg overflow-hidden">
       <div className="flex flex-col md:flex-row h-[460px]">
          {/* Bild – vänster halva */}
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img
              src={asset('pics/me.JPG')}
              alt="Erik Sandqvist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info – höger halva */}
          <div className="w-full md:w-1/2 p-8 md:p-8 flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-2">Erik Sandqvist</h1>
            <p className="text-lg font-semibold mb-4">Web developer</p>

            <p className="mb-2"><span className="font-bold">Phone:</span> 073-544 05 70</p>
            <p className="mb-2"><span className="font-bold">Email:</span> esandqvist04@gmail.com</p>
            <p className="mb-2"><span className="font-bold">City:</span> Jönköping, Sweden</p>
            <p className="mb-2"><span className="font-bold">Date of Birth:</span> July 12, 2004</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;