"use client"
import React, { useState } from 'react';
import Train from "@/public/train.png";
import Image from 'next/image';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsRotated(!isRotated);

  return (
    <div
      className={`${'card'} ${isHovered ? 'hovered' : ''} ${isRotated ? 'rotated' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className='cardFront'>
      <div  class="bg-card mt-10 2xl:mt-10 2xl:p-4 rounded-lg shadow-lg">
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
      </div>
      {isRotated && (
        <div className='cardBack'>
                      <Image src={Train} alt="Train passing through a bridge" class="rounded-lg mb-2 " width={1000} height={1000} />

        </div>
      )}
    </div>
  );
};

export default Card;
