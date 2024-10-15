"use client";

import React, { useState, useEffect, useRef } from 'react';

import Sucess from '@/components/Sucess';
import Cop from "@/components/Cop"
import Navbar from '../component/Navbar';
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form';

const Page = () => {
  const textRef = useRef(null);
  const router = useRouter(); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    router.push('/contact');

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Use the global CSS class
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
    
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='bg-[#18191F] Poppins lg:p-8'>

        <div className="justify-center  flex flex-col text-center py-20  p-2 2xl:py-32 2xl:p-24">
          <div>
            <h2 className="text-2xl Poppins sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary">
              <span className='text-black'>SUCCESSFUL</span>
              <span className="text-accent text-[#7b61ff]"> APPLICATIONS</span>
            </h2>
          </div>
          <div className=''>
            <p className="mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl Poppin 2xl:text-5xl 2xl:px-72 text-center text-white">
              Solving diverse business needs through <br /> great  design and UX.
            </p>
          </div>
        </div>


        <Cop />
        <Sucess />
        <div className=" bg-[#18191F] text-white  py-14 xl:pt-10 text-center">
          <div ref={textRef} className='text flex flex-col gap-4 justify-center text-white' >
            <span className="  text-lg text-white md:text-3xl  xl:text-4xl Poppins">READY FOR YOUR NEXT PROJECT?</span>
            <span onClick={handleButtonClick} className="cursor-pointer text-white text-4xl md:text-6xl xl:text-8xl font-extrabold hover:italic hover:text-[#7b61ff] text-accent">
              LET&apos;S TALK
            </span>
          </div>
        </div>
      </div>
      <Form/>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
    </>
  );
}

export default Page;
