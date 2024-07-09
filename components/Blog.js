import Image from 'next/image';
import React from 'react';
import Blog1 from "@/public/Blog1.png";
import Blog2 from "@/public/Blog3.png";

import Blog3 from "@/public/Blog2.png";


const Blog = () => {
  return (
    <div className="bg-gray-900 text-foreground p-8 md:p-16">
              <div className="text-center mb-8 ">
                <span className="text-violet-800 xl:text-lg  PORTFOLIO font-bold text-xl">BLOG</span>
                <h2 className="text-6xl py-10 lg:py-0 xl:text-6xl md:text-7xl text-black Poppins font-bold ">
                  LATEST <span className="text-white  py-10 lg:py-0">ARTICLES</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8">
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <Image className="h-[500px] w-[400px]  object-cover  mb-4" src={Blog1} alt="Laptop, coffee cup, and notebook on a wooden table" width={500} height={8} />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-800 text-violet-800 text-base   font-bold py-1 px-2 rounded-xl">DESIGN</span>
                    <span className="text-gray-600 text-base">June 30, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white ">Balancing The Past With Contemporary Packaging Design</h2>
                </div>
        
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <Image className="h-[500px] w-[400px] object-cover mb-4" src={Blog3} alt="Close-up of a notebook with sketches and a pencil" width={500} height={5} />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-800 text-violet-800 text-base  font-bold py-1 px-2 rounded-xl">MARKETING</span>
                    <span className="text-gray-600 text-base">June 30, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white">The Permanent Power of Retro Marketing</h2>
                </div>
        
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <Image className=" h-[500px] w-[400px] object-cover  mb-4" src={Blog2} alt="Hand holding a smartphone with a colorful background" width={500} height={5} />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-800 text-violet-800 text-base font-bold py-1 px-2 rounded-xl">MARKETING</span>
                    <span className="text-gray-600 text-base">June 29, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white">4 great platforms for creating and selling designs online</h2>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-primary text-white hover:bg-gray-600 py-2 px-6 rounded-full ">See Another Blogs</button>
              </div>
            </div>
  )
}

export default Blog