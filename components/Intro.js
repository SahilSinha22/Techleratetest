"use client"
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";

import { useState, useEffect } from "react";


import Star from "@/public/Star.svg"

const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div className="banner   md:h-[700px] lg:h-screen  overflow-hidden w-full text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute z-0 inset-0 w-full h-full object-cover"
        >
          <source src="/earths.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className="items-center px-4 p-4 lg:p-8  2xl:px-40" >
          <div className=" xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
            <div className="   ">
              <div className=" ">
                <Image
                  src={Logo}
                  alt="Techlerate Logo"
                  className="h-10 w-48 md:w-96 xl:w-72 md:h-16"
                  width={400} height={5}
                />

              </div>
            </div>
            <div className="block  lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
              >
                <svg
                  className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${isOpen ? "hidden" : "block"}`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                  className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div className={`w-full block flex-grow justify-between text-center lg:flex text-lg lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
              <div className="text-lg xl:text-xl  justify-around text-center    lg:flex-grow">
                <Link href="/" className="nav-link  block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ">
                  Work
                </Link>
                <Link href="/Media" className="nav-link  block text-white  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
                  Portfolio
                </Link>
                <Link href="#" className="block  nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
                  Blog
                </Link>
                <Link href="#" className="block text-white nav-link  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ">
                  About
                </Link>
                <Link href="#" className="block nav-link text-white  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8  ">
                  Careers
                </Link>
              </div>
              <div className=" text-lg xl:text-xl flex justify-center items-center mt-4 lg:mt-0 text-center">
              <button className="block nav-link text-white   lg:inline-block  text-white-200 mr-2 xl:mr-4  ">
                Contact Us
              </button>
              <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
            </div>
            </div>
           
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center md:h-full xl:space-y-8">
          <div className="text-center mt-32 lg:mt-0 xl:-mt-20 lg:mb-10 mb-10 xl:mb-20">
            <h2 className="md:text-6xl lg:text-7xl xl:text-7xl mx-2 text-3xl 2xl:text-8xl font-bold">
              HELP <span className="text-black font-bold Poppins">YOUR WORK </span> WITH <br />
            </h2>
            <h2 className="md:text-6xl mt-6 lg:text-7xl xl:text-7xl mx-2 text-3xl 2xl:text-8xl font-bold">
              <span className="text-black Poppins">OUR </span> STRATEGY
            </h2>
          </div>
          <div className="flex md:space-x-8 mb-8 lg:mb-20 xl:mt-60 bg-blue-400 bg-opacity-20 pt-4">
            <div className="text-center md:h-20 border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl lg:text-7xl xl:text-6xl text-2xl 2xl:text-7xl Bebas_Neue">32</p>
              <p className="text-xs md:text-base xl:text-sm lg:text-lg">EXPERT</p>
            </div>
            <div className="text-center border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl Bebas_Neue 2xl:text-7xl">164</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">CLIENTS</p>
            </div>
            <div className="text-center border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl xl:text-6xl text-2xl lg:text-7xl Bebas_Neue 2xl:text-7xl">186</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">PROJECTS</p>
            </div>
            <div className="text-center md:mx-2 2xl:px-12 md:mb-8 mx-1 px-2 mb-4 md:px-8">
              <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl Bebas_Neue 2xl:text-7xl">324</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">CAMPAIGNS</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Intro;
