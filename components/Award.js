import React from "react";
import Image from "next/image";
import Mobi from "@/public/1grow.png";  // Adjust the import path if necessary
const Award = () => {
  return (
    <div className="bg-[#000000] text-white p-8 sm:mx-4 xl:mx-28 mt-10 lg:mt-20">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row lg:flex-row xl:justify-between w-full">
          <div className="xl:mt-2 text-4xl w-full  flex flex-col sm:text-4xl md:text-2xl xl:text-5xl lg:text-4xl mb-4">
            <div className="font-bold Poppin">
            Awards & Recognition
            </div>
            <div className="text-lg outfit_dispaly font-light  sm:text-base lg:text-xl 2xl:text-2xl md:text-lg">
            We have been featured and certified by recognised <br/>authorities Worldwide.
            </div>
          </div>
          <div className="sm:pl-14 lg:pl-32 xl:mx-2 mt-0 w-full h-full  xl:pl-52 xl:justify-right items-right">
            <Image src={Mobi} alt="Technical Expertise" width={500} height={8} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  my-10 xl:my-14 gap-4 mb-10">
        <div className="flex  text-center  flex-col items-center">
          <div className="rounded-xl p-6  bg-white ">
            <Image
              src="/TopDevelopers 1.svg"  // Updated to public directory path
              alt="Top Developer"
              className="2xl:h-40 2xl:w-60" 
              width={150}
              height={10}
            />
          </div>
          <p className="mt-6 font-semibold text-xl text-center">Top Developer</p>
          <p className="text-sm text-center mt-2 leading-snug md:text-base">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex  text-center flex-col items-center">
          <div className="rounded-xl px-2 py-6 lg:px-2 lg:py-7 xl:py-9  xl:px-4 sm:p-8 bg-white ">
            <Image
              src="/freelancer-1.svg" 
              className="2xl:h-36 md:h-32 lg:h-28 xl:h-24 2xl:w-60" // Updated to public directory path
              alt="Freelancer"
              width={150}
              height={12}
            />
          </div>
          <p className="mt-6 font-semibold text-xl text-center">Freelancer</p>
          <p className="text-sm text-center mt-2 leading-snug md:text-base">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex  text-center  flex-col items-center">
          <div className="rounded-xl p-6 bg-white ">
            <Image
              src="/AppFutura-1.svg"  // Updated to public directory path
              className="2xl:h-40 2xl:w-60" 
              alt="AppFutura"
              width={150}
              height={10}
            />
          </div>
          <p className="mt-6 font-semibold text-xl text-center">AppFutura</p>
          <p className="text-sm text-center mt-2 leading-snug md:text-base">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex   flex-col text-center items-center">
          <div className="rounded-xl p-8 bg-white ">
            <Image src="/GoodFirms.svg" className="2xl:h-36 2xl:w-60"  alt="GoodFirms" width={150} height={10} />
          </div>
          <p className="mt-6 font-semibold text-xl text-center">GoodFirms</p>
          <p className="text-sm text-center mt-2 leading-snug md:text-base">Top Mobile App<br/> Developers</p>
        </div>
        <div className="flex  text-center  flex-col items-center">
          <div className="rounded-xl p-7 bg-white ">
            <Image src="/Clutch-1.svg" className="2xl:h-40 2xl:w-60"   alt="Clutch" width={150} height={10} />
          </div>
          <p className="mt-6 font-semibold text-xl text-center">Clutch</p>
          <p className="text-sm text-center mt-2 leading-snug md:text-base">Top Mobile App<br/> Developers</p>
        </div>
      </div>
     
    </div>
  );
};

export default Award;

