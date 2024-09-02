"use client"
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../component/Navbar'
import Award from '@/components/Award'
import Testimonials from '@/components/Testimonial'
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
import Leader from '@/components/Leadership';
import Bannerxcontact from '@/components/bannerxcontact';
import About from '@/components/About';
import Aboutproc from '@/components/Aboutprocess';

const Page = () => {
  const textRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
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
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  return (
    <div className=''>
      <Navbar/>
      <About/>
      <Aboutproc/>
      <div className='bg-[#000000]'>
      <Bannerxcontact/>
<Award/>
<Leader/>
</div>
      <Testimonials/>
      <div className=" bg-black text-white  py-14 xl:pt-10 text-center">
          <div ref={textRef} className='text flex flex-col gap-4 justify-center text-white' >
            <span className="  text-lg text-white md:text-3xl  xl:text-4xl Poppins">READY FOR YOUR NEXT PROJECT?</span>
            <span onClick={handleButtonClick} className=" text-white text-4xl md:text-6xl xl:text-8xl font-extrabold hover:italic hover:text-[#7b61ff] text-accent">
              LET&apos;S TALK
            </span>
          </div>
        </div>
     
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
    
    </div>
  )
}

export default Page
