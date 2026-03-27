import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiReactrouter,
  SiReactquery,
  SiStripe,
  SiSupabase,
  SiVitest,
  SiExpress,
} from "react-icons/si";
import { Carousel } from "../Carousel";

const Store = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}pics/store/img2.png`, alt: "Product", caption: "Product" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 my-8 shadow-xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 space-y-6 mt-2">
          <div>
            <h2 className="text-3xl font-bold font-onest text-secondary mb-2">
            Webshop</h2>
            <hr className="border-secondary"></hr>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm text-primary mt-6">
                <div className="flex flex-col items-center">
                  <SiVite className="text-3xl text-secondary" />
                  <span>Vite</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="text-3xl text-secondary" />
                  <span>React 18</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-3xl text-secondary" />
                  <span>TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-3xl text-secondary" />
                  <span>Tailwind + shadcn/ui + Radix</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiReactrouter className="text-3xl text-secondary" />
                  <span>react-router-dom</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiReactquery className="text-3xl text-secondary" />
                  <span>TanStack Query</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiStripe className="text-3xl text-secondary" />
                  <span>Stripe</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiSupabase className="text-3xl text-secondary" />
                  <span>Supabase</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiVitest className="text-3xl text-secondary" />
                  <span>Vitest</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaNodeJs className="text-3xl text-secondary" />
                  <span>Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiExpress className="text-3xl text-secondary" />
                  <span>Express</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-col items-center justify-center gap-8 mt-10">
                  <img
        src={`${base}pics/store/sunit-mockup.png`}
        alt="Store Mockup"
        className="w-full  h-full shadow-xl rounded-xl overflow-hidden"
      />
      {/* <img
        src={`${base}pics/store/img2.png`}
        alt="Store Mockup"
        className="w-full  h-full shadow-xl rounded-xl overflow-hidden"
      /> */}
      </div>
       <hr className="border-secondary mt-4"></hr>
            <p className="text-primary text-base md:text-lg mt-4">
              I am currently building a webshop as a project to learn more about full-stack development and e-commerce platforms.
              I am also learning alot about cookies. 
              The webshop is being developed using a modern tech stack.
            </p>
            <br></br>
            <div>
              <strong>Frontend</strong>
              <br></br> storefront built with React + Vite + TypeScript, styled
              with Tailwind CSS and shadcn/ui (Radix UI components).
              <br></br><br></br>
              <strong>Backend API</strong>
              (Express) that: Creates Stripe Checkout sessions from cart items
              (/create-checkout-session) Receives a Stripe webhook (/webhook)
              and, on successful checkout, reduces inventory in the database
              (and deletes variants/products when stock reaches 0) Provides a
              payment verification endpoint (/verify-payment/:sessionId)
              <br></br><br></br>
              <strong>Database/Auth</strong> via Supabase on the frontend side: The repo includes
              a typed Supabase client and generated DB types for tables like
              cart_items, orders, order_items, etc. 
              <br></br><br></br>
             
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
        <Link
          to="/projects/fandf"
          className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Previous Project
        </Link>

        <Link
          to="/projects/keylinx"
          className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
        >
          Next Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Store;
