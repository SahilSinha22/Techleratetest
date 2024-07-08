
"use client"
///components/Testimonials.js
import { useEffect, useState } from 'react';

import Image from 'next/image';
const testimonials = [
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
  },
  // Add more testimonials as needed
];

  

 



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="bg-gray-950 pt-60 md:py-12">
      <div className="text-center mb-8">
      <h2 className="text-violet-800 text-xl font-semibold uppercase tracking-widest mb-2">TESTIMONIALS</h2>
                    <h2 className="text-6xl text-black font-bold">FROM OUR </h2>
                    <h2 className="text-6xl font-bold text-white">BELOVED CLIENT</h2>
      </div>
      <div className="  ">
<div className='flex  md:ml-20 space-x-4'>
        <div className="bg-black hover:bg-blue-500 hover:mx-10 hover:mt-4  hover:scale-110 text-primary-foreground p-6 text-2xl  shadow-lg w-full md:w-1/2 lg:w-1/3">
          <div className='flex items-center mb-4'>
            <div className="space-x-1 text-yellow-600 text-2xl">
              {'★'.repeat(testimonials[currentIndex].rating)}
            </div>
          </div>
          <p className="mb-4 text-white">{testimonials[currentIndex].text}</p>
          <div className="flex items-center">
            <Image src="/path-to-avatar.jpg" className="w-10 h-10 rounded-full mr-4" alt={`${testimonials[currentIndex].name} avatar`} width={50} height={2} />
            <div>
              <h4 className="font-bold text-lg text-white">{testimonials[currentIndex].name}</h4>
              <p className="text-white text-base">{testimonials[currentIndex].role}</p>
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
            <button onClick={handleNextClick} className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
              <button className="text-blue-600 py-1 px-3 text-3xl hover:text-gray-600">&lt;</button>
            </button>
            <button onClick={handlePrevClick} className="bg-transparent border border-blue-600 text-blue-600 rounded-full p-2">
              <button className="text-blue-600 py-1 px-3 text-3xl  hover:text-primary-foreground">&gt;</button>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
