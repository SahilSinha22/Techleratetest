import React from 'react'

const Blog = () => {
  return (
    <div className="bg-black text-foreground p-8">
              <div className="text-center mb-8">
                <span className="text-blue-800  font-bold text-xl">BLOG</span>
                <h1 className="text-5xl text-black font-bold">
                  LATEST <span className="text-white">ARTICLES</span>
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://placehold.co/600x400" alt="Laptop, coffee cup, and notebook on a wooden table" />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-500 text-blue-800 text-base   font-bold py-1 px-2 rounded-xl">DESIGN</span>
                    <span className="text-gray-600 text-base">June 30, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white ">Balancing The Past With Contemporary Packaging Design</h2>
                </div>
        
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://placehold.co/600x400" alt="Close-up of a notebook with sketches and a pencil" />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-500 text-blue-800 text-base  font-bold py-1 px-2 rounded">MARKETING</span>
                    <span className="text-gray-600 text-base">June 30, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white">The Permanent Power of Retro Marketing</h2>
                </div>
        
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://placehold.co/600x400" alt="Hand holding a smartphone with a colorful background" />
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-500 text-blue-800 text-base font-bold py-1 px-2 rounded">MARKETING</span>
                    <span className="text-gray-600 text-base">June 29, 2024</span>
                  </div>
                  <h2 className="text-2xl text-white">4 great platforms for creating and selling designs online</h2>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-primary text-white hover:bg-gray-600 py-2 px-6 rounded-full ">See Another Blogs</button>
              </div>
            </div>
  )
}

export default Blog