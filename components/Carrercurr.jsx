import Image from 'next/image';
import React from 'react'

const Opening = [

    { image:"/Career/opening1.png", name: "Sr. Android Developer", exp: "Experience : 3-4 yrs" },
    { image:"/Career/Flutter.png", name: "Flutter Developer", exp: "Experience : 3-4 yrs" },
    { image:"/Career/nodejs.png", name: "Node JS Developer", exp: "Experience : 3-4 yrs" },
    { image:"/Career/laravel.png", name: "Laravel Developer", exp: "Experience : 3-4 yrs" },
    { image:"/Career/business.png", name: "Business Sales Head", exp: "Experience : 3-4 yrs" },
    { image:"/Career/social.png", name: "Social Media Manager", exp: "Experience : 3-4 yrs" },
   
  
  
  
  ];
const Carrercurr = () => {
  return (
    <div id="carrercurr" className='text-[#FFFFFF] max-w-7xl 2xl:max-w-[1580px] w-full m-auto px-4 md:px-10 xl:px-0'>
      <h2 className='text-2xl md:text-3xl 2xl:text-4xl Poppin font-medium'>Current Openings</h2>
      <p className='Poppind my-2 text-base md:text-xl md:w-[580px] '>Here’s our leadership team that is driving our purpose to help our clients succeed.</p>

      <div className='grid md:grid-cols-3 gap-4 2xl:gap-10 mt-10'>
      {Opening.map((open, index) => (
        <div key={index} className='rounded-3xl bg-[#FFFFFF] text-[#000000] p-4 lg:p-6 xl:p-8 '>
            <div>
            <Image src={open.image}  className=" w-10 h-10 lg:w-12 lg:h-12" alt="" width={100} height={100} />
            <h2 className='Poppin text-base xl:text-lg mt-1'>{open.name}</h2>
            <h2 className='Poppoins text-sm xl:text-sm'>{open.exp}</h2>
            </div>
            <div className=' text-right md:mt-4 lg:mt-0'>
<button className='text-[#FFFFFF] rounded-full text-sm xl:text-base px-3 py-1 bg-[#18191F]'>
    Apply →
</button>
                </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Carrercurr
