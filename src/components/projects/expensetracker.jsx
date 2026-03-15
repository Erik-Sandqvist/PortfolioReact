// Keylinx.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaLock, FaApple, FaAndroid, FaPlaneDeparture } from "react-icons/fa";
import { SiSupabase, SiExpo } from "react-icons/si";

import { Carousel } from "../Carousel";

const Expensetracker = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/expensetracker/img1.png`, alt: "Homescreen", caption: "Homescreen" },
    { src: `${base}pics/expensetracker/img2.png`, alt: "Car management", caption: "Car management" },
  ];

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="max-w-7xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-2 mt-2">
          <div>
            <h2 className="text-3xl font-bold font-onest text-secondary mb-6">Expense tracker mobile app</h2>
            <hr className="border-secondary"></hr>
            
            {/* Flex container for desktop layout */}
            <div className="flex flex-col gap-8 mt-4">
              
              {/* Left side - Text content */}
              <div className="flex-1 order-2 md:order-1">
                <p className="text-text-primary text-base md:text-lg">
                  <strong>Intro</strong><br></br>
                  ExpensesTracker is a cross-platform mobile app for managing vehicle-related spending. But it could be expenses related to whatever the user wants.
                    It is designed to let users authenticate, manage cars, and track categorized expenses with
                     a clean tab/stack navigation flow.
                      <br></br>
                      <br></br>
                  <strong>Purpose:</strong>
                   <br></br>
                       The apps purpose is to provide a practical personal-finance tool focused on car ownership 
                       costs (fuel, maintenance, etc.), with cloud-backed data and user accounts.
                       The app works for both iOS and Android, built with React Native and Expo for a smooth cross-platform 
                        experience. It uses Supabase for backend services like authentication and database management, 
                        and is distributed via TestFlight for iOS testing. The design emphasizes simplicity, usability, and 
                        a modern aesthetic with a dark theme and intuitive navigation. The app is not avilable on app store or 
                        google play since it was a personal project to soleve a persenol problem i saw.
                  <br /><br />
                </p>
              </div>

              {/* Right side - Icons */}
              <div className="flex-1 order-1 md:order-2">
                <div className="space-y-8 text-primary text-sm">
                  <div>
                    <h4 className="text-lg font-semibold mb-8">Tech Stack</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <FaReact className="text-cyan-500 text-3xl" />
                        <span>React Native</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiSupabase className="text-emerald-500 text-3xl" />
                        <span>Supabase</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SiExpo className="text-zinc-500 text-3xl" />
                        <span>Expo</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaPlaneDeparture className="text-sky-500 text-3xl" />
                        <span>TestFlight</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaLock className="text-violet-500 text-3xl" />
                        <span>Authentication</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaApple className="text-slate-500 text-3xl" />
                        <span>iOS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaAndroid className="text-lime-500 text-3xl" />
                        <span>Android</span>
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
        to="/projects/wixportfolio" 
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/store" 
        className="btn btn-outline btn-secondary !flex !flex-row items-center justify-center gap-2 whitespace-nowrap max-w-xs md:min-w-80 md:max-w-96"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};





export default Expensetracker;