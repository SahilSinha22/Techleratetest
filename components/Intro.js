import React from "react";

const Intro = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <video
        autoplay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center">
          <h1 className="text-7xl font-bold">
            HELP <span className="text-black">YOUR WORK </span> WITH <br />
            <span className="text-black"> OUR </span> STRATEGY
          </h1>
        </div>
        <div className="flex space-x-8 mt-60 bg-blue-400 bg-opacity-50 p-4 ">
          <div className="text-center border-gray-400  border-r-2 m-8 px-8">
            <p className="text-4xl font-bold">32</p>
            <p className="text-muted-foreground">EXPERT</p>
          </div>
          <div className="text-center border-gray-400  border-r-2 m-8 px-8">
            <p className="text-4xl font-bold">164</p>
            <p className="text-muted-foreground">CLIENTS</p>
          </div>
          <div className="text-center border-gray-400 border-r-2 m-8 px-8">
            <p className="text-4xl font-bold ">186</p>
            <p className="text-muted-foreground">PROJECTS</p>
          </div>
          <div className="text-center m-8 px-8">
            <p className="text-4xl font-bold">324</p>
            <p className="text-muted-foreground">CAMPAIGNS</p>
          </div>
        </div>
      </div>
      <div className=" px-28 absolute top-0 left-0 w-full flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40?text=Logo"
            alt="Techlerate Logo"
            className="h-10"
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
