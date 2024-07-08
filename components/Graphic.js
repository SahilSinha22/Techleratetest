import Image from 'next/image'
import React from 'react'
import Grap1 from "@/public/lapii1.jpg";
import Grap2 from "@/public/pencil.jpg";


const Graphic = () => {
  return (
    <div className="bg-black text-foreground p-8  xl:px-20 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 p-4">
<<<<<<< HEAD
                    <h1 className="text-lg text-gray-400 mb-2">GRAPHIC DESIGN</h1>
=======
                    <div className="text-sm text-gray-400 mb-2">GRAPHIC DESIGN</div>
>>>>>>> origin/main
                    <h2 className="text-4xl   text-white mb-4">Creating beautiful design <br/>based Client Needs</h2>
                    <p className="text-gray-400 text-lg  mb-6">
                      Design not only needs to be good, but also sells. Brand Strategy is applied in every process to provide maximum results in the business. We are ready to help you in this matter, every design made will take into account various factors that are expected to help develop your business. Professionally designed and done for you.
                    </p>
                    <a href="#" className="text-white hover:underline flex items-center">
                      More Detail <span className="ml-2">→</span>
                    </a>
                  </div>
                  <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
                    <Image className="w-full mt-20 md:w-1/2 object-cover" src={Grap1} alt="Person working on a laptop with design sketches" width={500} height={8}/>
                    <Image className="w-full mb-20 md:w-1/2 object-cover" src={Grap2} alt="Person using a drawing tablet" width={500} height={8}/>
                  </div>
                </div>

  )
}

export default Graphic