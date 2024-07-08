import React from 'react'

const Started = () => {
  return (
   
    <div class="flex items-center  justify-center max-h-screen py-20  p-20 bg-black ">
    <div class="bg-violet-800  text-primary-foreground  py-10 shadow-lg w-full text-center">
      <p class="text-lg text-white  mb-5">MAKING THE RIGHT CHOICES</p>
      <h2 class="text-6xl font-bold mb-4">LET’S <span class="text-white">START YOUR</span></h2>
      <h2 class="text-6xl font-bold mb-4"> DIGITAL <span class="text-white">BUSINESS</span></h2>

      <div class="md:flex justify-center mt-10 md:mx-40">
        <input type="email" placeholder="Enter your email address" class="p-2 border  border-input border-white bg-violet-800 w-auto md:w-3/3" />
        <button class="bg-white   p-2 ">Get Started</button>
      </div>
    </div>
  </div>
  
  )
}

export default Started