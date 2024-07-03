import React from 'react'

const banner = () => {
  return (
    <>
    <div className="bg-blue-500 text-white text-primary-foreground py-2 text-center">
    <div className="animate-marquee whitespace-nowrap">
      <span className="mx-4 text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-4 text-4xl font-bold">•</span>
      <span className="mx-4 text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-4 text-4xl font-bold">•</span>
      <span className="mx-4 text-4xl font-bold ">CREATIVE WORKS</span>
      <span className="mx-4 text-4xl font-bold">•</span>
      <span className="mx-4 text-4xl font-bold">CREATIVE WORKS</span>
    </div>
  </div>
  
  <div className="bg-gray-700 py-10 text-muted-foreground flex justify-center space-x-8">
    <img src="" alt="afterpay logo" className="h-10"/>
    <img src="" alt="plaid logo" className="h-10"/>
    <img src="" alt="github logo" className="h-10"/>
    <img src="" alt="attentive logo" className="h-10"/>
    <img src="" alt="basecamp logo" className="h-10"/>
  </div>


  </>

  )
}

export default banner