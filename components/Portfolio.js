import Image from 'next/image'
import React from 'react'
import Serv1 from "@/public/Portfolio.png";
import Arrow1 from "@/public/Arrow1.svg";
import Arrow2 from "@/public/Arrow2.svg";
const Portfolio = () => {
  return (
    
    <div className="bg-card   bg-[#18191f] text-card-foreground p-4 md:p-20 xl:px-40 xl:py-0 ">
                  <div className="flex justify-between pl-10 items-center mb-3  lg:mb-4">
                    <h2 className="text-[#7b61ff] text-xl  2xl:text-2xl PORTFOLIO font-semibold mx-8 my-2">PORTFOLIO</h2>
                    <div className='relative'>
                    <span className="text-6xl top-24  right-4 md:text-8xl font-bold absolute md:top-20 2xl:-top-2 2xl:right-14 md:right-10 text-white Poppins ">01</span>
                    </div>
                  </div>
                  <div className="flex flex-col   bg-[#fd5d5d] lg:flex-row items-center lg:space-x-4 justify-around bg-primary md:p-8 ">
                    <div className="flex-1 lg:relative  mb-4 md:mb-0">
                      <h2 className="text-4xl  lg:absolute lg:-top-40 xl:text-7xl xl:-top-40 md:text-7xl lg:text-6xl  font-bold text-white lg:mt-0 mt-12 mb-6 md:mb-4">OKOMO360 <br/>IS A UNIQUE <br/>PLATFORM</h2>
                      <a href="#" className="text-white lg:absolute  lg:top-10 xl:top-20 text-lg hover:underline mb-2">See The Work &gt;</a>
                    </div>
                    <div className="flex-1 flex mr-20 justify-center ">
                      <Image src={Serv1} alt="Mobile app screenshot 1" className=" w-auto h-full xl:h-[400px]" width={1000} height={50}/>
                      
                    </div>
                  </div>
                  <div className="flex justify-between mx-8">
          <div className="flex justify-center mt-12 space-x-2">
            <span className="w-3 h-3 bg-[#7b61ff] rounded-full"></span>
            <span className="w-3 h-3 bg-[#535353] rounded-full"></span>
           <span className="w-3 h-3 bg-[#535353] rounded-full"></span>
          </div>
          <div className="flex justify-center mt-4 ">
            <Image src={Arrow1} alt="arrow" width={80} height={8}/>
            <Image src={Arrow2} alt="arrow" width={80} height={8}/>
          </div>
          </div>
                </div>
               

  )
}

export default Portfolio