"use client";
import React, { useState, useEffect } from "react";
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/dumyForm';
const Bannerxcontact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
       <div className="py-20">
            <div className="bg-black flex py-10 md:py-20 justify-around">
              <div>

              </div>
              <div>
                <h2 className="playfair_display leading-snug text-lg md:text-3xl lg:text-4xl xl:text-5xl text-[#7b61ff]">
                  Get your ideas validated.<br /> Let’s give you an honest opinion.
                </h2>

                <button onClick={handleButtonClick} className="  mt-4 mb-6 lg:mb-8 lg:mt-6  bg-[#7b61ff]  rounded-full  inline-flex items-center md:text-base  py-2 px-4 xl:px-8    lg:mr-10 xl:mr-0">
                  Let&apos;s Talk
                </button>

              </div>

            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  )
}

export default Bannerxcontact
