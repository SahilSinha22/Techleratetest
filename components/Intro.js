import Image from "next/image";
import React from "react";
import videoSrc from '@/public/earth.mp4'

const Intro = () => {
  return (
    <div className="relative h-screen overflow-hidden  text-white">
      <video
        autoplay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        
      >
        <source src={videoSrc}   type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full xl:space-y-8">
        <div className="text-center xl:mt-20 xl:mb-20">
          <h1 className="md:text-6xl font-bold">
            HELP <span className=" text-black">YOUR WORK </span> WITH <br />
            <span className="text-black"> OUR </span> STRATEGY
          </h1>
        </div>
        <div className="flex  md:space-x-8 mt-60 bg-blue-400 bg-opacity-20 pt-4 ">
          <div className="text-center h-20 border-gray-400  border-r-2 mx-2 mb-8 md:px-8">
            <p className="md:text-6xl Bebas_Neue ">32</p>
            <p className="text-base">EXPERT</p>
          </div>
          <div className="text-center border-gray-400  border-r-2 mx-2 mb-8 px-8">
            <p className="md:text-6xl Bebas_Neue ">164</p>
            <p className="text-muted-foreground">CLIENTS</p>
          </div>
          <div className="text-center border-gray-400 border-r-2 mx-2 mb-8 px-8">
            <p className="md:text-6xl Bebas_Neue  ">186</p>
            <p className="text-muted-foreground">PROJECTS</p>
          </div>
          <div className="text-center mx-2 mb-8 px-8">
            <p className="md:text-6xl Bebas_Neue ">324</p>
            <p className="text-muted-foreground">CAMPAIGNS</p>
          </div>
        </div>
      </div>
      <div className=" pt-8 xl:px-28 absolute top-0 left-0 w-full flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src=""
            alt="Techlerate Logo"
            className="h-10"
            width={10} height={2}
          />
          <span className="text-xl font-bold">Techlerate</span>
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="#" className="hover:text-primary">
            Work
          </a>
          <a href="#" className="hover:text-primary">
            Media
          </a>
          <a href="#" className="hover:text-primary">
            Blog
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Careers
          </a>
        </nav>
        <a href="#" className="hover:text-primary">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Intro;
