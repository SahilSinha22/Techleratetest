import React from 'react'

const Started = () => {
  return (
   
    <div className="flex items-center  justify-center max-h-screen py-20 p-10 md:p-20 bg-black ">
    <div className="bg-violet-800  text-primary-foreground  py-10 shadow-lg w-full text-center">
      <p className="text-lg text-white  mb-5">MAKING THE RIGHT CHOICES</p>
      <h2 className="text-2xl md:text-6xl font-bold mb-4">LET’S <span className="text-white">START YOUR</span></h2>
      <h2 className="text-2xl md:text-6xl font-bold mb-4"> DIGITAL <span className="text-white">BUSINESS</span></h2>

      <div className="flex justify-center mt-10 md:mx-40">
        <input type="email" placeholder="Enter your email address" className="p-2 border  border-input border-white bg-violet-800 w-1/2 md:w-3/3" />
        <button className="bg-white   p-2 ">Get Started</button>
      </div>
    </div>
  </div>
  
  )
}

export default Started