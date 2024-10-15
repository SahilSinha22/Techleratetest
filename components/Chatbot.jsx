"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

import { useRouter } from 'next/navigation';

import FAQ from './FAQ'

function Chatbot() {
    const textRef = useRef(null);
    const router = useRouter();
  const handleButtonClick = () => {
    router.push('/contact');
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
        <div className='bg-[#18191F] text-[#FFFFFF]'>
          
            <div className="  ">
                <div className=" pt-10 sm:pt-20  lg:pt-28 xl:pt-20 ">
                    <div className="  mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
                        <h2 className="text-lg xl:mx-0 lg:text-5xl xl:leading-loose sm:text-4xl 2xl:text-6xl font-medium mb-4 Poppins">
                            Chatbot Services : A Floodgate of <br />Opportunities for Business
                        </h2>
                        <p className=" Poppind font-bold w-[300px] sm:w-[450px] lg:w-[650px]  2xl:w-[850px] text-base   xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
                            Have you ever wondered if a computer program could impersonate human interaction?
                        </p>
                        
                    </div>
                </div>
                <div className='m-auto w-auto  my-10 flex justify-center'>

                
                <Image src="/Chatbot/Bot.webp" alt=' ' width={1000} height={1000} />
                </div>
            </div>

            <div className='max-w-6xl 2xl:max-w-full m-auto  py-20 flex justify-center'>
                    <Image src="/Logoicons.png" className=' w-auto sm:max-w-6xl xl:max-w-7xl px-2 md:px-10 xl:px-0 sm:w-full 2xl:mx-40 ' alt='' width={1000} height={1000} />
                </div>

                <div className="flex flex-col gap-6 lg:gap-10  p-2 md:p-6 max-w-6xl 2xl:max-w-7xl md:flex-row items-center  m-auto ">
                <div className="flex h-full  ">
                    <Image src="/Chatbot/Chaty.webp" alt='' className='w-auto h-auto sm:w-[250px] lg:w-[350px]' width={1000} height={1000} />
                </div>
                <div className="flex-1 xl:text-lg pt-8 sm:pt-0 sm:p-6 lg:p-0">
                    <h2 className="text-2xl xl:text-4xl font-medium Poppin pb-4 text-foreground">Why do you need the Chatbot Integration?</h2>
                    <p className=" Poppind mt-2  ">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience?                    </p>
                    <p className="Poppind mt-2">
                    Undoubtedly, an online business holds an expanded reach, and the consumers associated with the brand can be anywhere, considering geographical boundaries! Moreover, they can reach out for customer support anytime; therefore, it is essential to be there for them.

                    </p>
                    <p className="Poppind mt-2">Fortunately, chatbot apps are the way to go! The mechanism enables your business to stand out and acquire a competitive edge in the global marketplace.

                    </p>
                </div>

            </div>
          
            <div className=" max-w-7xl mx-auto my-10 xl:my-20 Poppin px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-2xl md:text-4xl xl:text-4xl  text-primary mb-4">Why Chatbot Integration?</h2>
                <p className=" text-lg md:text-xl leading-relaxed  mb-1">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience?
                </p>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10  text-base md:text-xl  text-[#000000] my-10  '>
                    <div className=' p-2 md:p-6 flex flex-col text-center justify-center items-center rounded-xl bg-[#EFEFEF]'>
                        <Image src="/Chatbot/Chatbot1.webp" alt="" width={60} height={60} />
                        <p className='mt-4'>
                            It bridges the gap between a business and its audience
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center rounded-xl bg-[#EFEFEF]'>
                    <Image src="/Chatbot/Chatbot2.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Performs efficiently 24/7
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center rounded-xl bg-[#EFEFEF]'>
                    <Image src="/Chatbot/Chatbot3.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Enables collecting Valuable data
                        </p>
                    </div>
                    <div className='p-2 md:p-6 flex flex-col text-center justify-center items-center rounded-xl bg-[#EFEFEF]'>
                    <Image src="/Chatbot/Chatbot4.webp" alt="" width={60} height={60} />
                    <p className='mt-4'>
                            Saves time, money and other resources
                        </p>
                    </div>
                </div>
               
            </div>

            <div className='max-w-5xl 2xl:max-w-7xl m-auto py-10 sm:py-20 lg:py-20 '>


    <div  className="flex flex-row p-2  md:gap-4 lg:h-[450px] bg-[#fd5d5d] lg:flex-row items-center  justify-around bg-primary md:p-8 ">
        <div className="flex-1 lg:relative  mb-4 md:mb-0 mt-10 md:mt-14 lg:mt-24">
            <h2 className="text-2xl sm:text-4xl  lg:absolute lg:-top-40 xl:text-7xl xl:-top-40 md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white lg:mt-0  mb-6 md:mb-4">OKOMO360 <br />IS A UNIQUE <br />PLATFORM</h2>
            <a href="#" className="text-white lg:absolute  lg:top-10 xl:top-20 text-lg hover:underline mb-2">See The Work &gt;</a>
        </div>
        <div className="flex-1 flex  xl:mr-20 justify-center relative ">
            <Image src="/Portfolio.png" alt="Mobile app screenshot 1" className=" z-20 absolute w-[500px] h-[220px] sm:h-[320px] lg:h-[480px] -top-12 sm:-top-20 lg:-top-32 xl:-top-32  2xl:h-[500px] xl:h-[500px]" width={1000} height={50} />

        </div>
    </div>


</div>
            <div className='py-10 xl:py-20 '>
                <div className='max-w-7xl flex flex-col justify-start m-auto my-10 h-auto text-white '>
                    <div className='mx-4 lg:mx-10 xl:px-10'>
                        <h2 className='text-2xl md:text-4xl xl:text-3xl Poppins font-medium '>
                            How can Techlerate help you achieve the Desired Results?       </h2>
                        <p className='my-4 text-base md:text-lg xl:text-xl  Poppind md:w-[640px] lg:w-[850px] xl:w-[1050px]'>
                            Teclerate, the best chatbot development company in USA, Canada, UK, and UAE, comprises a brood of experts dedicated to delivering efficient chatbot apps.
                        </p>

                        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 text-[#ffffff] h-auto mt-8 gap-6 lg:gap-10 Poppin   text-lg md:text-xl justify-around  '>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>01</span>
                                    </div>
                                </div>
                                <p className='  mt-4  '>
                                    Helps businesses reply <br /> promptly
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>02</span>
                                    </div>
                                </div>
                                <p className='   mt-4 '>
                                    Build a secure <br/>communication networks
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>03</span>
                                    </div>
                                </div>
                                <p className='   mt-4  '>
                                    Ensure reduced workload</p>
                            </div>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>04</span>
                                    </div>
                                </div>
                                <p className='  mt-4  '>
                                    Forwards relevant post notifications
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-4 md:p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>05</span>
                                    </div>
                                </div>
                                <p className='  mt-4  '>
                                    Automates the support system
                                </p>
                            </div>
                            <div className='flex flex-col bg-[#18191F] border-white border-2 rounded-3xl p-6'>
                                <div >
                                    <div className='py-3 px-5 bg-white Bebas_Neue  inline-flex rounded-full'>
                                        <span className='text-[#000000] text-3xl'>06</span>
                                    </div>
                                </div>
                                <p className='   mt-4  '>
                                    Allows order placement <br/> via bots</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-[#05142B] Poppind mt-10 '>


<div className='  m-auto  mt-10 flex justify-around py-10 max-w-7xl gap-4 lg:gap-20  2xl:gap-10 mx-auto'>
    <div>
        <Image src="/Chatbot/Chats.webp" className='w-40 sm:w-60 lg:w-[500px] xl:w-[600px] h-full' alt="" width={1000} height={1000} />
    </div>
    <div className='place-content-center w-auto '>
        <div className='flex flex-col gap-1 md:gap-4'>

        
        <h2 className='text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl  Open_Sanss  text-white '> A Complete Guide to</h2>
        <h2 className='text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl  Open_Sanss  text-white '> Chatbot Development </h2>
        </div>
        <button onClick={handleButtonClick} className="text-[#ffffff]  mt-4 md:mt-10  Open_Sans max-w-xl text-xs md:text-sm font-thin lg:text-base  bg-[#7B61FF] px-6 py-2 md:px-8 md:py-3 rounded-3xl">Let&apos;s Talk</button>

    </div>
</div>

</div>

            <div className=" max-w-7xl mx-auto my-10 mt-20  px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-4xl xl:text-3xl Poppins font-medium text-primary mb-4">Do you want to Hop on Board?</h2>
                <h2 className=" py-2 text-xl  Poppin  leading-relaxed  mb-1">
                    Then you need us!
                </h2>
                <div className='flex flex-col my-8 bg-white text-[#000000] p-8 rounded-xl'>
                    <h2 className="  text-base sm:text-lg  xl:text-xl leading-relaxed  mb-1">
                        — We will improve your customer service patterns.
                    </h2>
                    <h2 className=" text-base sm:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We will help you serve efficiently to the customers for their satisfaction.
                    </h2>
                    <h2 className=" text-base sm:text-lg xl:text-xl  leading-relaxed  mb-1">
                        — We help you build a business trusted by your customers in the long run.
                    </h2>
                    <h2 className=" text-base sm:text-lg xl:text-xl  leading-relaxed  mb-1">
                        — Our Chatbot apps help you monitor consumer’s shopping patterns and collect relevant data.
                    </h2>
                    <h2 className=" text-base sm:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We ensure improved lead generation.
                    </h2>
                    <h2 className=" text-base sm:text-lg xl:text-xl leading-relaxed  mb-1">
                        — We build an experience that’ll enable you to connect with your customers globally.
                    </h2>
                </div>
            </div>
        
            <FAQ/>
            <div className="  text-white  py-14 xl:pt-16 text-center">
          <div ref={textRef} className='text flex flex-col gap-4 justify-center text-white' >
            <span className="  text-lg text-white md:text-3xl  xl:text-4xl Poppins">READY FOR YOUR NEXT PROJECT?</span>
            <span onClick={handleButtonClick} className=" text-white cursor-pointer text-4xl md:text-6xl xl:text-8xl font-extrabold hover:italic hover:text-[#7b61ff] text-accent">
              LET&apos;S TALK
            </span>
          </div>
        </div>
        </div>
        </>
    )
}

export default Chatbot
