import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { asset } from "../utils/asset";

export const ProjectDiv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll("[data-card]");
    cards.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("card-fade--in");
      }, 120 * i);
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6 w-full">
      
      <Link
        to="/projects/keylinx"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/keylinx/mockup.webp")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Keylinx</h3>
          <p className="text-sm opacity-90 text-secondary">About my internship at Keylinx</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>
      
      <Link
        to="/projects/stationkoll"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/stationkoll/img1.png")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Station handeler for Ikea</h3>
          <p className="text-sm opacity-90 text-secondary">Solved a real problem with my software</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

      <Link
        to="/projects/torst"
        data-card
        style={{ "--from": "50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/torst/cover.png")})` }}
        />
       <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Törst</h3>
          <p className="text-sm opacity-90 text-secondary">A website for a local pub</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

      <Link
        to="/projects/burnbright"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("burnbright/mainpic.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Burnbright</h3>
          <p className="text-sm opacity-90 text-secondary">Fictional clothing e-commerce with React & Umbraco</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>


      <Link
        to="/projects/expensetracker"
        data-card
        style={{ "--from": "50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/expensetracker/img1.png")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Expense tracker</h3>
          <p className="text-sm opacity-90 text-secondary">A fullstack expense tracker</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>
 
      <Link
        to="/projects/store"
        data-card
        style={{ "--from": "-50px" }}
        className="card-fade group relative w-full md:w-[28%] h-80 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${asset("pics/store/sunit-mockup.png")})` }}
        />
         <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 p-6 transition-all duration-300 group-hover:bg-black/5">
          <h3 className="text-2xl font-bold mb-2 text-secondary">Webshop</h3>
          <p className="text-sm opacity-90 text-secondary">In the making</p>
          <span className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium">
            View Details →
          </span>
        </div>
      </Link>

    </div>
  );
};