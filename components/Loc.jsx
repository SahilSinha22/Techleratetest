"use client"
import { useState } from 'react';
import Image from 'next/image';

const GlobeWithPins = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, country: '' });

  // Function to show the tooltip near the pin
  const handleMouseEnter = (countryName, pinPosition) => {
    setTooltip({
      visible: true,
      x: pinPosition.x,
      y: pinPosition.y,
      country: countryName,
    });
  };

  // Function to hide the tooltip when the mouse leaves the pin area
  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, country: '' });
  };

  return (
    <div className="b-2 text-center py-8 lg:pt-12">
      <span className="py-1 text-lg md:text-2xl lg:text-5xl text-white Poppins font-medium">
        Locations We Are Catering
      </span>
      <div className="relative flex justify-center items-center py-10 lg:py-16 w-full">
        <Image src="/World.png" alt="Globe" width={1000} height={1000} />
<div>
        {/* Pin for Africa */}
        <Image
          src="/pin.svg"
          alt="Pin"
          className="absolute h-6 w-4 md:h-10 md:w-10"
          style={{ top: '60%', left: '28%' }} // Percentage-based positioning
          width={1000}
          height={1000}
          onMouseEnter={() => handleMouseEnter('Africa', { x: '28%', y: '60%' })}
          onMouseLeave={handleMouseLeave}
        />

        {/* Pin for Canada */}
        <Image
          src="/pin.svg"
          alt="Pin"
          className="absolute h-6 w-4 md:h-10 md:w-10"
          style={{ top: '20%', left: '35%' }} // Adjusted to stay fixed
          width={1000}
          height={1000}
          onMouseEnter={() => handleMouseEnter('Canada', { x: '35%', y: '20%' })}
          onMouseLeave={handleMouseLeave}
        />

        {/* Pin for U.S.A */}
        <Image
          src="/pin.svg"
          alt="Pin"
          className="absolute h-6 w-4 md:h-10 md:w-10"
          style={{ top: '30%', left: '45%' }}
          width={1000}
          height={1000}
          onMouseEnter={() => handleMouseEnter('U.S.A', { x: '45%', y: '30%' })}
          onMouseLeave={handleMouseLeave}
        />

        {/* Pin for Russia */}
        <Image
          src="/pin.svg"
          alt="Pin"
          className="absolute h-6 w-4 md:h-10 md:w-10"
          style={{ top: '10%', left: '70%' }}
          width={1000}
          height={1000}
          onMouseEnter={() => handleMouseEnter('Russia', { x: '70%', y: '10%' })}
          onMouseLeave={handleMouseLeave}
        />

        {tooltip.visible && (
          <div
            className="text-xs absolute"
            style={{
              left: tooltip.x,
              top: `calc(${tooltip.y} - 20px)`, // Adjusted to stay fixed near the pin
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
    </div>
  );
};

export default GlobeWithPins;
