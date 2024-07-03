import React from 'react'

const Digital = () => {
  return (
    <div className="bg-black text-gray-400 p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="grid grid-cols-2 gap-4">
        <img src="https://placehold.co/300x450" alt="Team collaborating" className="w-full h-full object-cover rounded-lg"/>
        <img src="https://placehold.co/300x450" alt="Team discussion" className="w-full h-full object-cover rounded-lg"/>
      </div>
      <div>
        <h3 className="text-secondary text-sm font-semibold uppercase mb-2">Digital Marketing</h3>
        <h2 className="text-4xl  text-white  mb-4">Provide Digital Marketing <br/> Strategy for Our Clients</h2>
        <p className="text-muted-foreground mb-6">
          As a Digital Agency, every service we provide will be prepared with a proven strategy and also in accordance with the rules to achieve the goals of your business. There are various kinds of marketing strategies, which can be applied to your business, ranging from Search Engine Optimization, Search Engine Marketing, Social Media Marketing such as Facebook and Instagram ads, and many more.
        </p>
        <a href="#" className="text-white font-semibold flex items-center">
          More Detail <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Digital