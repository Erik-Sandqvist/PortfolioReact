import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiSupabase, SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { Carousel } from "../Carousel";
import { Link } from "react-router-dom";

const Stationkoll = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/stationkoll/img1.png`, alt: "Oversikt", caption: "Dashboard Overview" },
    { src: `${base}pics/stationkoll/img2.png`, alt: "Oversikt", caption: "Dashboard Overview" },
    { src: `${base}pics/stationkoll/img3.png`, alt: "Planering", caption: "Daily Planning" },
    { src: `${base}pics/stationkoll/img4.png`, alt: "Medarbetare", caption: "Employee Management" },
    { src: `${base}pics/stationkoll/img5.png`, alt: "stationer", caption: "Station Assignments" },
    { src: `${base}pics/stationkoll/img6.png`, alt: "Historik", caption: "Work History" },
  ];

  return (
    <><div className="max-w-6xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
      <div className="p-6 md:p-10 space-y-6 mt-2">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Stationkoll - Workplace Planning System</h2>
          <p className="text-text-primary text-base md:text-lg">
            A sophisticated workforce management platform for IKEA warehouses that automates employee station assignments 
            and daily planning. Built with <strong>React, TypeScript, and Supabase</strong>, it features intelligent station 
            rotation algorithms, drag-and-drop scheduling, and real-time synchronization to ensure fair workload distribution 
            across multiple shifts and stations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm text-primary">
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500 text-3xl" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-600 text-3xl" />
            <span>TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSupabase className="text-emerald-500 text-3xl" />
            <span>Supabase</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVite className="text-purple-500 text-3xl" />
            <span>Vite</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-cyan-500 text-3xl" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">🔄</span>
            <span>TanStack Query</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary mb-3">Key Features</h3>
          <ul className="list-disc list-inside text-primary space-y-2">
            <li><strong>Employee Management:</strong> Add/remove employees, assign competencies, track shifts (Shift 1, Shift 2, Night, Staffing Agency)</li>
            <li><strong>Daily Planning:</strong> Define station needs and automatic employee distribution with smart rotation</li>
            <li><strong>Station Rotation Algorithm:</strong> Prevents consecutive assignments to same station, prioritizes least-visited stations over 6 months</li>
            <li><strong>Drag-and-Drop Interface:</strong> Manually adjust assignments with intuitive scheduling</li>
            <li><strong>Real-time Dashboard:</strong> Overview of active employees, today's assignments, and station needs summary</li>
            <li><strong>Fair Rotation Tracking:</strong> Maintains history to ensure equitable work distribution</li>
          </ul>
        </div>

        <div className="pt-4 flex gap-4 flex-wrap">
          {/* <a
            href="https://github.com/stationkoll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            View on GitHub
          </a> */}
        </div>
      </div>
    </div>
    <Carousel
        images={images}
        autoPlay={4000}
        showIndicators
        showArrows
        className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden" 
    />

    <div className="mt-8 w-full max-w-6xl mx-auto space-y-2 mb-8 shadow-xl rounded-2xl overflow-hidden">
      <div className=" rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-primary mb-3 font-onest">Technology Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
          <div>
            <h4 className="font-semibold mb-2 font-onest">Frontend</h4>
            <ul className="text-sm space-y-1 font-onest">
              <li>• React with TypeScript</li>
              <li>• Vite (build tool)</li>
              <li>• Tailwind CSS & shadcn/ui</li>
              <li>• Lucide React Icons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 font-onest">Backend & Services</h4>
            <ul className="text-sm space-y-1 font-onest">
              <li>• Supabase (PostgreSQL & Auth)</li>
              <li>• TanStack Query (React Query)</li>
              <li>• React Router DOM</li>
              <li>• Vercel Hosting</li>
            </ul>
          </div>
        </div>
      </div>

     <div className=" rounded-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-3 font-onest">Database Schema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
          <div>
            <h4 className="font-semibold mb-2 font-onest">Core Tables</h4>
            <ul className="text-sm space-y-1 font-onest ">
              <li>📊 <strong>employees</strong> - Master data</li>
              <li>🏢 <strong>employee_stations</strong> - Qualifications</li>
              <li>📅 <strong>daily_assignments</strong> - Work shifts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 font-onest">Tracking & Configuration</h4>
            <ul className="text-sm space-y-1 font-onest">
              <li>📈 <strong>work_history</strong> - 6-month rotation</li>
              <li>📋 <strong>station_needs</strong> - Daily headcount</li>
              
            </ul>
            <br></br><br></br>
          </div>
        </div>
      </div>
      </div>

    <div className="flex justify-between mt-8 max-w-5xl mx-auto gap-10 mb-8">
      <Link 
        to="/projects/keylinx" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Previous Project
      </Link>
      
      <Link 
        to="/projects/vinyl4u" 
        className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
      >
        Next Project
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  </>
  );
};

export default Stationkoll;
