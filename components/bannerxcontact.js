"use client";
import React, { useState, useEffect } from "react";
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
import Image from "next/image";
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
       <div className="py-10 md:py-20 ">
            <div className="bg-[#04040C]  mx-4 md:mx-10 flex  justify-around">
              <div>
<Image className="object-cover w-28 h-40 sm:w-60 md:h-72 lg:w-80 xl:w-96 lg:h-96 xl:h-[450px] sm:h-60 " src="/FormImg.png" alt="" width={1000} height={1000} />
              </div>
              <div className="pt-12 sm:py-10 lg:py-20 md:pt-24 lg:pt-28 xl:pt-40">
                <h2 className="playfair_display leading-snug text-xs md:text-2xl lg:text-3xl xl:text-5xl text-[#7b61ff]">
                  Get your ideas validated.<br /> Let’s give you an honest opinion.
                </h2>

                <button onClick={handleButtonClick} className="text-white  mt-4 mb-6 lg:mb-8 lg:mt-6  bg-[#7b61ff]  rounded-full   items-center text-xs lg:text-base  py-1 px-2 md:py-2 md:px-4 xl:px-8    lg:mr-10 xl:mr-0">
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
