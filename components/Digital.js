import Image from 'next/image'
import React from 'react'
import Digi1 from "@/public/Team1.jpg";
import Digi2 from "@/public/discussion1.jpg";

const Digital = () => {
  return (
    <div className="bg-black xl:px-20 text-gray-400 h-[800px] pb-20 p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-auto items-center">
      <div className="grid grid-cols-2 gap-4">
        <Image src={Digi1} alt="Team collaborating" className="w-full h-full object-cover mb-20 " width={500} height={8}/>
        <Image src={Digi2} alt="Team discussion" className="w-full h-full object-cover mt-20 " width={500} height={8}/>
      </div>
      <div>
<<<<<<< HEAD
        <h1 className="text-secondary text-lg font-semibold uppercase mb-2">Digital Marketing</h1>
=======
        <h3 className="text-secondary text-sm font-semibold uppercase mb-2">Digital Marketing</h3>
>>>>>>> origin/main
        <h2 className="text-4xl  text-white  mb-4">Provide Digital Marketing <br/> Strategy for Our Clients</h2>
        <p className="text-muted-foreground mb-6">
          As a Digital Agency, every service we provide will be prepared with a proven strategy and also in accordance with the rules to achieve the goals of your business. There are various kinds of marketing strategies, which can be applied to your business, ranging from Search Engine Optimization, Search Engine Marketing, Social Media Marketing such as Facebook and Instagram ads, and many more.
        </p>
        <a href="#" className="text-white font-semibold flex items-center">
          More Detail <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Digital