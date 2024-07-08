import Image from 'next/image'
import React from 'react'
<<<<<<< HEAD
import Serv1 from "@/public/phn.png";
import Serv2 from "@/public/phn.png";
=======
import Serv1 from "@/public/uidesign1.jpg";
import Serv2 from "@/public/uidesignboard1.jpg";
>>>>>>> origin/main
const Portfolio = () => {
  return (
    
    <div className="bg-card   bg-black text-card-foreground p-20">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-violet-800 text-xl font-semibold mx-8 my-2">PORTFOLIO</h2>
<<<<<<< HEAD
                    <div className='relative'>
                    <span className="text-6xl font-bold absolute top-2 right-10 text-white Josefin_Sans ">01</span>
                    </div>
                  </div>
                  <div className="flex flex-col  bg-red-400 md:flex-row items-center justify-around bg-primary p-8 ">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h2 className="text-6xl font-bold text-white mb-4">OKOMO360 <br/>IS A UNIQUE <br/>PLATFORM</h2>
                      <a href="#" className="text-white text-lg hover:underline">See The Work &gt;</a>
                    </div>
                    <div className="flex-1 flex justify-center ">
                      <Image src="" alt="Mobile app screenshot 1" className="pb-20" width={100} height={50}/>
                      <Image src="" alt="Mobile app screenshot 2" className="pt-20" width={100} height={50}/>
=======
                    <span className="text-6xl font-bold text-white ">01</span>
                  </div>
                  <div className="flex flex-col  bg-red-400 md:flex-row items-center justify-around bg-primary p-8 ">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h1 className="text-6xl font-bold text-white mb-4">OKOMO360 <br/>IS A UNIQUE <br/>PLATFORM</h1>
                      <a href="#" className="text-white text-lg hover:underline">See The Work &gt;</a>
                    </div>
                    <div className="flex-1 flex justify-center space-x-4">
                      <Image src={Serv1} alt="Mobile app screenshot 1" className="rounded-lg shadow-lg" width={10} height={8}/>
                      <Image src={Serv2} alt="Mobile app screenshot 2" className="rounded-lg shadow-lg" width={10} height={8}/>
>>>>>>> origin/main
                    </div>
                  </div>
                  <div className="flex justify-between mx-8">
          <div className="flex justify-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
           <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
            <button className="text-blue-600 py-1 px-3 text-3xl hover:text-gray-600">&lt;</button>
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
            <button className="text-blue-600 py-1 px-3 text-3xl  hover:text-primary-foreground">&gt;</button>
            </button>
          </div>
          </div>
                </div>
               

  )
}

export default Portfolio