"use client"; 

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg"
import Star from "@/public/Star.svg"


const logos = {
  '/': 'logo.png',
  '/Portfolio': 'logo1.png',
  '/LiquiClear': 'logo1.png',
  '/Services':'logo1.png',
  
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
 
    
  return (
    <nav className="items-center px-4 p-4 bg-black lg:p-8  2xl:px-40" >
      <div className=" xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white ">
        <div className="flex items-center ">
          <Image
            src={Logo}
            alt="Techlerate Logo"
            className="h-10 w-48 md:w-96 xl:w-72 md:h-16"
            width={400} height={5}
          />
         
        </div>
        </div>
        <div className="block lg:hidden">
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
        <div className={`w-full block flex-grow justify-center text-center lg:flex text-lg lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-lg justify-around text-center    lg:flex-grow">
            <Link href="/" className="nav-link  block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ">
              Work
            </Link>
            <Link href="/Media" className="nav-link  block text-white  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
              Media
            </Link>
            <Link href="/" className="block  nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
              Blog
            </Link>
            <Link href="/Portfolio" className="block text-white nav-link  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ">
              About
            </Link>
            <Link href="/" className="block nav-link text-white  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8  ">
              Careers
            </Link>
          </div>
          <div className="flex">
            <button className="block nav-link text-white  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-2 xl:mr-4  ">
              Contact Us
            </button>
            <Image src={Star} alt="" width={20} height={20}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;