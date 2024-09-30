"use client"
import { useState } from 'react';
import Image from 'next/image';

const GlobeWithPins = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, country: '' });

  // Function to handle when the mouse enters the pin area
  const handleMouseEnter = (e, countryName) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      country: countryName,
    });
  };

  // Function to handle when the mouse moves over the pin
  const handleMouseMove = (e) => {
    if (tooltip.visible) {
      setTooltip({
        ...tooltip,
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  // Function to hide the tooltip when the mouse leaves the pin area
  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, country: '' });
  };

  return (
    <div className='b-2   text-center   py-8 lg:pt-12'>
                <span className=' py-1 text-lg md:text-2xl lg:text-5xl text-white  Poppins font-medium'> Location we are Catering</span>
    <div className='relative place-content-center py-10 lg:py-16 items-center  w-full flex justify-center'>
      <Image src="/World.png" alt="Globe" width={1000} height={1000} />
      <Image
        id="pin"
        src="/pin.svg"
        alt="Pin"
        className='absolute h-6 w-4 left-48  md:left-[200px] md:top-60 md:h-10 md:w-10 lg:left-[280px] xl:left-[400px] 2xl:left-[710px] lg:top-80 z-10'
        width={1000}
        height={1000}
        onMouseEnter={(e) => handleMouseEnter(e, 'Africa')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <Image
        id="pin"
        src="/pin.svg"
        alt="Pin"
        className='absolute top-32 left-24  md:left-[400px] md:top-44 lg:top-72 h-6 w-4 md:h-10 md:w-10 lg:left-[550px] 2xl:left-[980px] xl:left-[700px] xl:top-60  z-10'
        width={1000}
        height={1000}
        onMouseEnter={(e) => handleMouseEnter(e, 'Canada')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <Image
        id="pin"
        src="/pin.svg"
        alt="Pin"
        className='absolute left-14 top-20 md:left-[550px] md:top-20  lg:left-[680px]  xl:left-[800px] 2xl:left-[1100px] h-6 w-4 md:h-10 md:w-10 lg:top-28  z-10'
        width={1000}
        height={1000}
        onMouseEnter={(e) => handleMouseEnter(e, 'U.S.A')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <Image
        id="pin"
        src="/pin.svg"
        alt="Pin"
        className='absolute h-6 w-4 md:h-10 md:w-10 top-14 left-60 md:top-20 lg:top-40 md:left-40 xl:left-80 2xl:left-[600px]  lg:right-[700px] z-10'
        width={1000}
        height={1000}
        onMouseEnter={(e) => handleMouseEnter(e, 'RUSSIA')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      
      {tooltip.visible && (
        <div className='text-xs'
          style={{
            position: 'absolute',
            left: `${tooltip.x +10 }px`,
            top: `${tooltip.y-100 }px`,
            backgroundColor: '#fff',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {tooltip.country}
        </div>
      )}
    </div>
    </div>
  );
};

export default GlobeWithPins;
