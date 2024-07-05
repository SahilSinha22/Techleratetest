import React from 'react';

import Ban1 from "@/public/afterpay1.png";
import Ban2 from "@/public/plaid1.png";
import Ban3 from "@/public/github1.png";
import Ban4 from "@/public/attentive1.png";
import Ban5 from "@/public/basecamp1.png";
import Image from 'next/image';

const banner = () => {
  return (
    <>
    <div className="bg-blue-500 py-4 text-white text-primary-foreground  text-center">
    <div className="animate-marquee whitespace-nowrap">
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      
    </div>
  </div>
  
  <div className="bg-gray-700 px-20  py-16 text-muted-foreground flex justify-center space-x-4 lg:space-x-8">
    <Image src={Ban1} alt="afterpay logo" className="h-10 w-10  md:w-28 md:h-16 lg:w-36 lg:h-12 xl:w-48" width={300} height={5}/>
    <Image src={Ban2}  alt="plaid logo" className="h-10 w-10 md:w-28 md:h-16 lg:w-36 lg:h-12 xl:w-48" width={300} height={5}/>
    <Image src={Ban3}  alt="github logo" className="h-10 w-10 md:w-28 md:h-16 lg:w-36 lg:h-12 xl:w-48" width={300} height={5}/>
    <Image src={Ban4}  alt="attentive logo" className="h-10 w-10 md:w-28 md:h-16 lg:w-36 lg:h-12  xl:w-48" width={300} height={5}/>
    <Image src={Ban5}  alt="basecamp logo" className="h-10 w-10 md:w-28 md:h-16  lg:w-36 lg:h-12 xl:w-48" width={300} height={5}/>
  </div>


  </>

  )
}

export default banner