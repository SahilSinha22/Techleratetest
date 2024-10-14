import Image from 'next/image'
import React from 'react'
import Digi1 from "@/public/Digital1.png";
import Digi2 from "@/public/Digital2.png";

const Digital = () => {
  return (
    <div className="bg-[#18191f] xl:px-40 text-gray-400 h-auto pb-20 p-8">
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-auto items-center">
      <div className="flex  justify-center sm:grid sm:grid-cols-2 2xl:flex gap-4 ">
        <Image src={Digi1} alt="Team collaborating" className="w-40 h-60 md:h-[600px] lg:w-auto lg:h-[600px]  xl:w-[400px] sm:ml-36 md:ml-0 object-cover mb-20 " width={500} height={8}/>
        <Image src={Digi2} alt="Team discussion" className="w-40 h-60 md:h-[600px] lg:w-auto lg:h-[600px]   xl:w-[400px] object-cover mt-20 " width={500} height={8}/>
      </div>
      <div  className="md:pt-20">
      <div className=" flex">
        <h1 className="text-secondary w-auto text-base sm:text-lg font-semibold tracking-widest uppercase mb-2">Full Stack Development</h1>
        </div>
        <h2 className="text-4xl  text-white  xl:my-3 md:mb-4">MERN</h2>
       {/*<h2 className="text-4xl  text-white  xl:mb-6 mb-4"> Strategy for Our Clients</h2>*/}

        <p className="text-muted-foreground mb-6">
        Our MERN stack development services cover end-to-end web solutions, utilizing MongoDB, Express.js, React.js, and Node.js to create responsive, secure, and scalable web applications tailored to your business needs.
        </p>        <a href="#"  className="text-white font-semibold flex items-center">
          More Details <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Digital