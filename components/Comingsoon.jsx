import Image from 'next/image'
import React from 'react'

const Comingsoon = () => {
  return (
    <div >
       <section class="containerx text-white">
      <Image src="/Comingsoon.jpg" alt="" class="image w-full h-full" width={1000} height={1000}/>
      <header>Coming Soon Page</header>
      <p>
        Our website is under construction. We&apos;re working hard to improve our
        website and we &apos;ll ready to launch after.
      </p>
      <div class="time-content">
        <div class="time days">
          <span class="number"></span>
          <span class="text">days</span>
        </div>
        <div class="time hours">
          <span class="number"></span>
          <span class="text">hours</span>
        </div>
        <div class="time minutes">
          <span class="number"></span>
          <span class="text">minutes</span>
        </div>
        <div class="time seconds">
          <span class="number"></span>
          <span class="text">seconds</span>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default Comingsoon
