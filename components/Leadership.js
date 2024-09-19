import Image from 'next/image'
import React from 'react'
const Leadership = [

  { name: "Amit Singh", logo: "/Leader.png", subname: "Co-Founder" },
  { name: "Monika Chawala", logo: "/Leader2.png", subname: "Creative Head" },
  { name: "Abhinav Baisley", logo: "/Leader3.png", subname: "Creative Head" },



];
const Leader = () => {

  return (
    <div className='flex flex-col max-w-[1560px] m-auto bg-[#18191F] text-white p-4 playfair_displays'>
      <div className=" md:mx-10 xl:mx-20 2xl:px-0 2xl:mx-0 py-10 ">
        <h2 className="text-2xl md:text-4xl font-semibold text-left mb-4 ">Big Experience Guys to post on here</h2>
        <p className=" text-xl  text-left mb-8 open_sans_display">Here’s our leadership team that is driving our purpose to help<br /> our clients succeed.</p>
        <div className=' relative '>


          <div className='w-full h-[88px] sm:h-[152px] lg:h-[200px] xl:h-[296px] bg-[#7b61ff]  my-16 md:my-20 mt-16 md:mt-24 lg:mt-40 lg:my-40 '>

          </div>
          <div className="flex justify-around gap-6 xl:gap-10 2xl:gap-20 w-full absolute -top-16 sm:-top-24 lg:-top-32 z-10 ">
           
              <div  className="text-center  ">
                <div className=' inline-block place-content-center  mt-10 items-center'>

                  <div className=' place-content-center   '>


                    <Image className="w-44 sm:w-48 h-28 sm:h-52 lg:w-72 lg:h-72 xl:w-96 xl:h-96  " src="/Leader.png" alt="" width={600} height={600} />
                  </div>

                </div>
                <h3 className="mt-2 text-sm sm:text-xl lg:text-3xl font-semibold">Amit Singh</h3>
                <p className="text-xs sm:text-lg lg:text-xl open_sans_display">Co-Founder</p>
              </div>

              <div  className="text-center  ">
                <div className=' inline-block place-content-center  mt-10 items-center'>

                  <div className=' place-content-center   '>


                    <Image className="w-44 sm:w-48 h-28 sm:h-52 lg:w-72 lg:h-72 xl:w-96 xl:h-96  " src="/Leader2.png" alt="" width={600} height={600} />
                  </div>

                </div>
                <h3 className="mt-2 text-sm sm:text-xl lg:text-3xl font-semibold">Monika Chawala</h3>
                <p className="text-xs sm:text-lg lg:text-xl open_sans_display">Creative Head</p>
              </div>
           

              <div  className="text-center  ">
                <div className=' inline-block place-content-center  mt-11 xl:mt-12 items-center'>

                  <div className=' place-content-center   '>


                    <Image className="w-44 sm:w-48 h-28 sm:h-52 lg:w-72 -rotate-1 md:-rotate-2 lg:h-72 xl:w-96 xl:h-96  " src="/Leader3.png" alt="" width={600} height={600} />
                  </div>

                </div>
                <h3 className="mt-2 text-sm sm:text-xl lg:text-3xl font-semibold">Abhinav Baisley</h3>
                <p className="text-xs sm:text-lg lg:text-xl open_sans_display">Creative Head</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leader
