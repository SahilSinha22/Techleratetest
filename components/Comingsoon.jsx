import Image from 'next/image'
import React from 'react'

const Comingsoon = () => {
  return (
    <div >
       <section className="containerx text-white">
      <Image src="/Comingsoon.jpg" alt="" className="image w-full h-full" width={1000} height={1000}/>
      <header>Coming Soon Page</header>
      <p>
        Our website is under construction. We&apos;re working hard to improve our
        website and we &apos;ll ready to launch after.
      </p>
      <div className="time-content">
        <div className="time days">
          <span className="number"></span>
          <span className="text">days</span>
        </div>
        <div className="time hours">
          <span className="number"></span>
          <span className="text">hours</span>
        </div>
        <div className="time minutes">
          <span className="number"></span>
          <span className="text">minutes</span>
        </div>
        <div className="time seconds">
          <span className="number"></span>
          <span className="text">seconds</span>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default Comingsoon
