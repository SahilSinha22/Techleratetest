import Image from 'next/image'
import React from 'react'
const Leadership = [

  { name: "Amit Singh", logo: "/Leader.png", subname: "Co-Founder" },
  { name: "Monika Chawala", logo: "/Leader2.png", subname: "Creative Head" },
  { name: "Abhinav Baisley", logo: "/Leader3.png", subname: "Creative Head" },



];
const Leader = () => {

  return (
    <div className='flex flex-col max-w-[1560px] m-auto text-white p-4 playfair_displays'>
      <div class=" md:mx-10 xl:mx-20 2xl:px-0 2xl:mx-0 py-10 ">
        <h2 class="text-2xl md:text-4xl font-bold text-left mb-4 ">Leadership That Inspires</h2>
        <p class=" text-xl  text-left mb-8 open_sans_display">Here’s our leadership team that is driving our purpose to help<br /> our clients succeed.</p>
        <div className=' relative'>


          <div className='w-full h-[81px] md:h-[136px] lg:h-[200px] xl:h-[296px] bg-[#7b61ff]  my-16 md:my-20 mt-16 md:mt-24 lg:mt-40 lg:my-40 '>

          </div>
          <div class="flex justify-around gap-6 xl:gap-10 absolute -top-16 md:-top-24 lg:-top-32 z-10 ">
            {Leadership.map((leader, index) => (
              <div key={index} class="text-center  ">
                <div className=' inline-block place-content-center  mt-10 items-center'>

                  <div className=' place-content-center   '>


                    <Image className="w-44 md:w-48 h-26 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96  " src={leader.logo} alt={leader.subname} width={600} height={600} />
                  </div>

                </div>
                <h3 class="mt-2 text-sm md:text-xl lg:text-3xl font-semibold">{leader.name}</h3>
                <p class="text-xs md:text-lg lg:text-xl open_sans_display">{leader.subname}</p>
              </div>

            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Leader
