import React from 'react';

import Train from "@/public/train.png";
import Tablet from "@/public/tablet.png";
import Building from "@/public/Buildingcard.png";
import Gaming from "@/public/Gamingcard.png";
import Phone from "@/public/Phonecard.png";
import Gym from "@/public/Gymcard.png";
import Bluecard from "@/public/bluecard.png";
import Maskcard from "@/public/maskcard.png";
import Aicard from "@/public/Aicard.png";
import Educard from "@/public/Educard.png";

import Image from 'next/image';

const Sucess = () => {

  
  return (
    <div className='Poppins w-full'>
       <section class="bg-background text-white p-6 gap-6 md:gap-6 2xl:px-40 pt-24 xl:pt-32 flex justify-center 2xl:space-x-5 2xl:gap-8">
        <div className='w-1/2'>
          <h2 class="2xl:text-6xl  text-xl md:text-4xl Poppin font-bold lg:text-5xl text-white mb-4">Success stories <br />that demonstrate <br />our expertise</h2>
          <div className=' lg:mt-20 2xl:mt-10'>
            <div class="bg-card mt-10 2xl:mt-10 2xl:p-4 rounded-lg shadow-lg">
              <Image src={Train} alt="Train passing through a bridge" class="rounded-lg mb-2 " width={1000} height={1000} />
             <div className='mt-6 2xl:mt-10 '>
              <h3 class="2xl:text-5xl sm:text-2xl lg:text-3xl  poppins text-foreground">Cris - Indian Railway</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
            </div>

            <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
              <Image src={Building} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
              <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Siidcul UI Design</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
            </div>

            <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
              <Image src={Gaming} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
              <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Gaming App</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
            </div>
            <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
              <Image src={Phone} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
              <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Find the Doctors Online</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
            </div>
            <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
              <Image src={Gym} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
              <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Fit with Our App</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
            </div>
          </div>
        </div>




        <div className='2xl:mt-10 w-1/2'>
          <div class="bg-card mt-10 2xl:mt-10  2xl:p-4 rounded-lg shadow-lg">
            <Image src={Tablet} alt="Train passing through a bridge" class=" h-auto rounded-lg mb-2" width={1000} height={1000} />
            <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Water Purifier App</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
          </div>

          <div class="bg-card mt-6 lg:mt-16 2xl:mt-10 2xl:p-4 rounded-lg shadow-lg">
            <Image src={Bluecard} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
            <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Dating App</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
          </div>

          <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
            <Image src={Maskcard} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
            <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Free Games Online</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
          </div>

          <div class="bg-card mt-10  lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
            <Image src={Aicard} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
            <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Generative AI</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
          </div>

          <div class="bg-card mt-10 lg:mt-16 2xl:p-4 rounded-lg shadow-lg">
            <Image src={Educard} alt="Train passing through a bridge" class="  rounded-lg mb-2" width={1000} height={1000} />
            <div className='mt-6 2xl:mt-10'>
              <h3 class="2xl:text-5xl  sm:text-2xl lg:text-3xl  font-medium   text-foreground">Deep Dive in to Mobile</h3>
             
              <div class="flex space-x-1 sm:space-x-2 sm:flex Poppin-row 2xl:space-x-4 mt-4">
                <button class="bg-[#7b61ff] text-white px-2  sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Design</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Mobile</button>
                <button class="bg-[#7b61ff] text-white px-2 sm:px-3  py-1 2xl:text-lg  text-xs sm:text-lg rounded-3xl ">Web</button>
              </div>
               </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sucess
