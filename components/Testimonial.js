import React from 'react'

const Testimonial = () => {
  return (
    <div className="bg-gray-950  py-12">
          <div className="text-center mb-8">
            <h2 className="text-blue-800 text-lg">TESTIMONIALS</h2>
            <h1 className="text-4xl text-black font-bold">FROM OUR <br/> <span className='text-4xl text-white font-bold'>BELOVED CLIENT</span></h1>
          </div>
          <div className="flex justify-center space-x-4">
            
            <div className="bg-black hover:bg-blue-500 hover:scale-110 text-primary-foreground p-6  shadow-lg w-full md:w-1/2 lg:w-1/3">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                </div>
              </div>
              <p className="mb-4 text-white">“What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agency.”</p>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://placehold.co/40x40" alt="Gilbert Stev"/>
                <div>
                  <p className="font-bold text-white">Gilbert Stev</p>
                  <p className="text-white text-base">Entrepreneur</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-gray-200 text-card-foreground p-6 shadow-lg w-full md:w-1/2 lg:w-1/3">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                  <span className="text-yellow-600 text-2xl">⭐</span>
                </div>
              </div>
              <p className="mb-4 text-white">“Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!”</p>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://placehold.co/40x40" alt="Nathalia Solcher"/>
                <div>
                  <p className="font-bold text-white">Nathalia Solcher</p>
                  <p className="text-white">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around">
          <div className="flex justify-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
           <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
            <button className="text-blue-600 py-1 px-3 text-3xl hover:text-gray-600">&lt;</button>
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
            <button className="text-blue-600 py-1 px-3 text-3xl  hover:text-primary-foreground">&gt;</button>
            </button>
          </div>
          </div>
        </div>
  )
}

export default Testimonial