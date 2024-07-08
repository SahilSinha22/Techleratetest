import Image from 'next/image'
import React from 'react'
import Serv1 from "@/public/uidesign1.jpg";
import Serv2 from "@/public/uidesignboard1.jpg";


const Services = () => {
  return (
    <div className="bg-black text-foreground py-12 px-6 lg:px-24">
                  <div className="text-center mb-12">
                    <h2 className="text-violet-800 text-xl font-semibold uppercase tracking-widest mb-2">Services</h2>
                    <h2 className="text-6xl text-black font-serif font-bold">HOW WE</h2>
                    <h2 className="text-6xl font-bold text-white">APPROACH CLIENTS</h2>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2  gap-12">
                    <div className="flex flex-row space-y-4 space-x-10">
                      <Image src={Serv1} alt="Person sketching UI design on paper" className="mb-20" width={500} height={10}/>
                      <Image src={Serv2} alt="Person presenting UI design on whiteboard" className="pt-20" width={500} height={10}/>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="mb-4 flex">
                        
                        <h1 className=" space-x-2 text-gray-400 text-lg uppercase tracking-widest">UI/UX Design</h1>
                      </div>
                      <h2 className="text-4xl text-white  mb-4">Effective Mobile and Web <br/>Design for Our Clients</h2>
                      <p className="text-gray-400 text-lg">
                        As a Digital Agency, we not only provide attractive mobile and web designs, we also ensure that the mobile/website is also effective in supporting your business activities in the digital world as it is today. Starting from getting leads to growing conversions that can be an investment for your business in the future.
                      </p>
                      <div className="mt-8">
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors duration-300">More Details <span className="ml-2">→</span></button>
                      </div>
                    </div>
                  </div>
                </div>

  )
}

export default Services