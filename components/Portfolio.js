import React from 'react'

const Portfolio = () => {
  return (
    
    <div className="bg-card  bg-black text-card-foreground p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-blue-800 text-xl font-bold">PORTFOLIO</h2>
                    <span className="text-4xl font-bold text-white">01</span>
                  </div>
                  <div className="flex flex-col  bg-red-400 md:flex-row items-center bg-primary p-8 ">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h1 className="text-6xl font-bold text-white mb-4">OKOMO360 <br/>IS A UNIQUE <br/>PLATFORM</h1>
                      <a href="#" className="text-white text-lg hover:underline">See The Work &gt;</a>
                    </div>
                    <div className="flex-1 flex justify-center space-x-4">
                      <img src="https://placehold.co/150x300" alt="Mobile app screenshot 1" className="rounded-lg shadow-lg"/>
                      <img src="https://placehold.co/150x300" alt="Mobile app screenshot 2" className="rounded-lg shadow-lg"/>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 space-x-2">
                    <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
                    <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
                  </div>
                  <div className="flex justify-center mt-4 space-x-4">
                    <button className="text-blue-600 hover:text-primary-foreground">&lt;</button>
                    <button className="text-blue-600 hover:text-primary-foreground">&gt;</button>
                  </div>
                </div>
               

  )
}

export default Portfolio