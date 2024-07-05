import React from 'react'

const Started = () => {
  return (
   
    <div class="flex items-center  justify-center min-h-screen bg-black ">
    <div class="bg-violet-800  text-primary-foreground mx-40 px-20 py-10 shadow-lg w-full text-center">
      <p class="text-lg text-white  mb-5">MAKING THE RIGHT CHOICES</p>
      <h1 class="text-6xl font-bold mb-4">LET’S <span class="text-white">START YOUR</span></h1>
      <h1 class="text-6xl font-bold mb-4"> DIGITAL <span class="text-white">BUSINESS</span></h1>

      <div class="flex justify-center mt-10 mx-40">
        <input type="email" placeholder="Enter your email address" class="p-2 border  border-input border-white bg-violet-800 w-3/3" />
        <button class="bg-white   p-2 ">Get Started</button>
      </div>
    </div>
  </div>
  
  )
}

export default Started