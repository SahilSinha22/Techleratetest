"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image'
import React from 'react'
import Stone from "@/public/stonebg.png";

const cop = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const router = useRouter();

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleViewMoreClick = () => {
        router.push('/introduction');
    };

    useEffect(() => {
        if (hoveredCard !== null) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hoveredCard]);

    const cards = [
        { image: Stone, title: "Cris - Indian Railway" },

    ];
    return (
        <div>
           
            <div className='px-4 Poppind  items-center justify-center 2xl:px-40' 
            >
                 {cards.slice(0, 5).map((card, index) => (
                    <div key={index} onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} >
                        <div className='relative' >
                            <Image src={card.image} alt='' className="lg:w-full h-96 object-cover md:h-full" width={1000} height={1000} />
                            <div className='absolute top-10 md:top-24  lg:left-10 xl:top-40 lg:top-28 left-4 xl:left-16 2xl:top-32 2xl:left-0 text-white' >
                                <div className='flex justify-start items-start 2xl:p-20'>
                                    <div className='text-2xl md:text-4xl lg:text-5xl'>
                                        <h2 className="2xl:text-6xl font-bold leading-tight 2xl:leading-snug text-foreground mb-4">
                                            Making Virtual <br /> Reality Accessible
                                        </h2>
                                        <p className="2xl:text-2xl pr-48 xl:text-lg font-light leading-normal lg:text-base text-[#FFFFFF] text-xs mb-6">
                                            Welcome to Okomo360, the world’s first <br /> dedicated 360-degree VR platform. We’re <br /> redefining video technology, making immersive <br /> VR experiences not just a luxury.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        { hoveredCard == index && (
                        <div
                            className="view-mores absolute z-10 Poppins  text-sm sm:text-base lg:text-2xl text-black px-2 sm:px-4 py-1 lg:px-6 lg:py-1 rounded-3xl cursor-pointer"
                            style={{
                                top: `${cursorPosition.y - 10}px`,
                                left: `${cursorPosition.x + 20}px`,
                            }}
                            onClick={handleViewMoreClick}
                        >
                           VIEW
                        </div>
                    )}
                    </div>
         ))}
               
            </div>
            
        </div>
    )
}

export default cop
