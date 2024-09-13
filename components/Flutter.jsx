"use client"
import Image from 'next/image'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';


const Services = [
    {
        rating: 1,
        text: "OKOMO360 IS A UNIQUE PLATFORM",

        img: "/Portfolio.png",
    },



];
const Flutter = () => {

    const textRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);

    };


     // State to keep track of the currently open question
     const [openQuestion, setOpenQuestion] = useState(0); // Initially, no question is open

     // Function to handle question hover
     const handleQuestionHover = (index) => {
         setOpenQuestion(index); // Open the hovered question
     };
 
     // Function to handle mouse leave (to close the question when not hovering)
     const handleMouseLeave = () => {
         setOpenQuestion(-1); // Close the question when mouse leaves
     };
 
     // FAQ content
     const faqContent = [
         {
             question: "Q. How do you define a top Flutter app development company in India?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What are the three disadvantages of Flutter?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What’s makes you Flutter development services unique?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What are some of the most popular platforms using the Flutter framework?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. What is cross-platform app development?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. How does a Flutter app development company reduce costs of building Flutter apps?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
         {
             question: "Q. How does a Flutter app development company in India reduce costs of building Flutter apps?",
             answer:
                 "The best flutter application development company is the one that has a wide experience, an extensive skillset, a cutting-edge development process, elevated coding standards, flexible communication channels, and dedication towards the project. Thus, Space to Tech is an organization that provides all the above-mentioned traits under one roof for successful product development.",
         },
     ];


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
        <div className='bg-[#18191F] text-white'>
            <div className='mx-auto  text-white'>
                <div className="max-w-7xl flex flex-col justify-center 2xl:max-w-full m-auto items-center text-center  mx-auto px-2 md:px-10 xl:px-20 2xl:px-10 py-16 md:py-20 lg:pt-28 xl:pt-48 lg:pb-10 ">
                    <h2 className="text-base sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:leading-snug xl:leading-normal 2xl:leading-snug w-[340px] md:w-[680px] lg:w-[840px]  xl:w-[1100px] 2xl:w-[1400px] font-bold playfair_displays mb-4">Flutter App Development Company Helps You Build Applications for Multiple Screens!</h2>
                    <p className="  text-base lg:text-xl xl:text-2xl   text-muted-foreground mb-6">Introducing big waves in modern cross-platform app development, Flutter <br /> tech  builds exquisite, high-performing, and flawless mobile apps.</p>

                </div>
                <div className="flex   flex-wrap justify-center gap-4 px-2 sm:px-10 max-w-7xl mx-auto">
                    <video
                        autoPlay
                        muted
                        loop
                        className="inset-0 object-cover w-full h-auto"
                    >
                        <source src="/flutter.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='max-w-full m-auto  py-20 flex justify-center'>
                    <Image src="/Logoicons.png" className=' w-96 md:max-w-6xl xl:max-w-7xl px-2 md:px-10 xl:px-0 md:w-full 2xl:mx-40 ' alt='' width={1000} height={1000} />
                </div>
            </div>
            <div className="flex flex-col  lg:gap-10 p-2 md:p-6 max-w-7xl md:flex-row items-center  m-auto ">
                <div className="flex h-full lg:mt-20 ">
                    <Image src="/mobileflutter.png" alt='' className='w-full h-40 md:h-[350px] ' width={1000} height={1000} />
                </div>
                <div className="flex-1 xl:text-xl p-6 ">
                    <h2 className="text-2xl xl:text-5xl font-medium Poppin py-4 text-foreground">Introduction to Flutter</h2>
                    <p className=" Poppin mt-2  ">
                        Initially released by Google in 2017, it is an app framework rapidly amplified with yearly improvements and alterations. The tech is well-known for providing charismatic, distinctive, and natively compiled applications supporting desktop, mobile, and cloud-based platform development. Furthermore, with robust graphics and animation libraries, the Flutter framework ensures easy building UIs that respond fluently.
                    </p>
                    <p className="text-muted-foreground mt-2">
                        But how to get started working with the framework? <br />
                        Space to Tech - a CMMI Level 3 and top-notch flutter mobile application development company, is the way to go! We are a team of technocrats that will help you reach a wider audience by building an app for multiple platforms.

                    </p>
                    <p className="text-muted-foreground mt-2">The organization has weaved over 900 highly successful mobile apps and has helped businesses generate high revenue.
                        .</p>
                </div>

            </div>
            <div className='max-w-7xl m-auto py-10 md:py-20 lg:py-40 '>

                {Services.map((Services, index) => (
                    <div key={index} className="flex flex-row p-2  gap-4 lg:h-[450px] bg-[#fd5d5d] lg:flex-row items-center  justify-around bg-primary md:p-8 ">
                        <div className="flex-1 lg:relative  mb-4 md:mb-0 mt-10 md:mt-14 lg:mt-24">
                            <h2 className="text-4xl  lg:absolute lg:-top-40 xl:text-7xl xl:-top-40 md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white lg:mt-0  mb-6 md:mb-4">OKOMO360 <br />IS A UNIQUE <br />PLATFORM</h2>
                            <a href="#" className="text-white lg:absolute  lg:top-10 xl:top-20 text-lg hover:underline mb-2">See The Work &gt;</a>
                        </div>
                        <div className="flex-1 flex  xl:mr-20 justify-center relative ">
                            <Image src={Services.img} alt="Mobile app screenshot 1" className=" z-20 absolute w-[500px] h-[220px] md:h-[320px] lg:h-[480px] -top-28 md:-top-20 lg:-top-32 xl:-top-32  2xl:h-[500px] xl:h-[500px]" width={1000} height={50} />

                        </div>
                    </div>
                ))}

            </div>


            <div className="bg-card max-w-7xl Poppind flex-row m-auto justify-center text-card-foreground mt-4 p-6 ">
                <h2 className="text-3xl Poppin font-medium mb-4">Trump Card Played By Flutter App Development Company</h2>
                <p className="text-lg mb-6">The flutter mechanism comes along with a number of benefits, and the best flutter app development company in <br />India, UK & USA helps you bag the same.</p>
                <div className="bg-[#313131] p-4 rounded-lg  leading-loose mb-4">
                    <h2 className="text-xl pb-1">Reduced Time for App Development</h2>
                    <p className="text-base">
                        When working on a medium-sized Android application, the process of adjusting a layout feature can consume up to 40 seconds. However, with the built-in hot reload feature, your modifications
                        become nearly instantaneous.
                    </p>
                </div>

                <div className="bg-[#313131] p-4 rounded-lg leading-loose mb-4">
                    <h2 className="text-xl pb-1">Accelerated Time To Market</h2>
                    <p className="text-base">
                        Building apps separately for different platforms will require varied specialized teams. However, it takes only half a workforce of a Flutter app development company to work with the framework,
                        as platform-specific code is not required.
                    </p>
                </div>

                <div className="bg-[#313131] p-4 rounded-lg leading-loose mb-4">
                    <h2 className="text-xl pb-1">Similar Framework to Native App Development</h2>
                    <p className="text-base">
                        Building digital products also demands fabricating apps that prioritize the user experience. Therefore, the Flutter framework can create exceptional user interface animations and eliminate
                        performance bugs.
                    </p>
                </div>

                <div className="bg-[#313131] p-4 rounded-lg leading-loose mb-4">
                    <h2 className="text-xl pb-1">Speedy App Growth</h2>
                    <p className="text-base">
                        You can accelerate both development and expansion by utilizing numerous widgets in your development process. Additionally, if you aim to capture a share of the market for your application,
                        Flutter allows you to craft smooth-running apps.
                    </p>
                </div>

                <div className="bg-[#313131] p-4 rounded-lg leading-loose mb-4">
                    <h2 className="text-xl  pb-1">Minimalist Design Features</h2>
                    <p className="text-base">
                        Should you desire to employ unique widgets within your application, Flutter can fashion new ones. These newly crafted widgets can be utilized independently or seamlessly with pre-existing ones.
                    </p>
                </div>
            </div>



            <div className='bg-[#0F256E] Poppind mt-10 xl:px-20'>


                <div className=' sm:px-10 mt-10 flex  py-10 max-w-7xl gap-4 md:gap-20 mx-auto'>
                    <div>
                        <Image src="/phoni.png" className='w-40 sm:w-60 lg:w-[400px] h-full' alt="" width={1000} height={1000} />
                    </div>
                    <div className='place-content-center'>
                        <h2 className='text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl leading-snug lg:leading-normal xl:leading-snug open_sans_displays font-light text-white '> Flutter is the Future <br />of App Development</h2>
                        <button onClick={handleButtonClick} className="text-white mt-10  max-w-xl text-xs md:text-sm lg:text-base xl:text-lg bg-[#7b61ff] px-3  md:px-6 py-2 rounded-3xl">Let&apos;s Talk</button>

                    </div>
                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ContactForm onClose={closeModal} />
            </Modal>


            <div className="p-6 bg-background text-foreground max-w-7xl mt-10  m-auto">
                <h2 className="text-3xl font-medium mb-4">Types of Businesses That Prefer Using Flutter</h2>
                <p className="mb-6 Poppind">
                    While Flutter seems like a potential framework, there may be better fits for some projects. Can you leverage the  <br/>framework in your app with the help of a Flutter mobile app development company?
                    Take a look!
                </p>

                <section className="flex text-[#000000] Poppin flex-col md:flex-row gap-4">
                    <div className="p-4 border border-border pt-6 md:max-w-sm lg:max-w-lg bg-[#EBEBEB] rounded-lg bg-card">
                        <h3 className="text-lg font-semibold mb-2">Startups</h3>
                        <p>
                            Flutter, an easy-to-use and free framework, is highly convenient for startup businesses as the mechanism also possesses good tooling and libraries for developing a top-notch app. Icing on the
                            cake?
                        </p>
                    </div>

                    <div className="p-4 border border-border pt-6 md:max-w-lg lg:max-w-2xl bg-[#EBEBEB] rounded-lg bg-card">
                        <h3 className="text-lg font-semibold mb-2">Businesses Working on MVPs</h3>
                        <p>
                            A Minimum Viable Product (MVP) is a product with basic features that provides an idea of the success that can be attained. Therefore, Flutter is a dazzling option offered by a tremendous
                            Flutter app development company for MVP creation, as it’s quick and easy.
                        </p>
                    </div>
                </section>
                <section className="flex text-[#000000] Poppin my-4   flex-col md:flex-row gap-4">
                    <div className="p-4 border border-border pt-6 md:max-w-lg lg:max-w-2xl bg-[#EBEBEB]  rounded-lg bg-card">
                        <h3 className="text-lg font-semibold mb-2">Businesses with Limited Resources</h3>
                        <p>
                            Flutter is an excellent option for any business with limited resources, as it saves time and money. Moreover, the right strategies fabricated by one of India’s top Flutter app development
                            companies add the cherry on top!
                        </p>
                    </div>

                    <div className="p-4 border border-border pt-6 bg-[#EBEBEB]   md:max-w-sm lg:max-w-lg rounded-lg bg-card">
                        <h3 className="text-lg font-semibold mb-2">Other Well-Established Businesses</h3>
                        <p>As said, there’s always scope for improvement. Therefore, businesses looking forward to building their cross-network platforms can use the Flutter framework and reach a wider audience.</p>
                    </div>
                </section>
            </div>


            <div className="bg-background p-6 Poppin max-w-7xl mt-6 m-auto">
  <h2 className="text-3xl font-medium text-foreground mb-4">Types of Businesses That Prefer Using Flutter</h2>
  <p className="text-muted-foreground Poppind mb-6">
    While Flutter seems like a potential framework, there may be better fits for some projects. Can you leverage the <br/> framework in your app with the help of a Flutter mobile app development company?
    Take a look!
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Market Experience</h3>
      <p className='text-base leading-relaxed'>For efficient flutter development services, your dedicated flutter mobile application development company must have a clear understanding of your target audience.</p>
    </div>
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Cutting-Edge Development</h3>
      <p className='text-base leading-relaxed'>We offer a clear-cut app development process and stick to the pattern and strategies. Every individual involved in the project will be educated about the objectives to be achieved.</p>
    </div>
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Skills and Well-Defined Roles</h3>
      <p className='text-base leading-relaxed'>Sure, having an experience is not enough! Therefore, we have a team with diverse skills, and being a flawless and the best flutter application development company in India.</p>
    </div>
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Open Communication Channels</h3>
      <p className='text-base leading-relaxed'>
        We believe in an easy-to-reach approach, which is why, being a top flutter mobile app development company, we are always available for client support via emails, chat, or even video
        conferencing.
      </p>
    </div>
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Elevated Coding Standards</h3>
      <p className='text-base leading-relaxed'>A flutter app development company that chases high coding standards should always be your first pick; and fortunately, our team is familiar with using multiple programming languages.</p>
    </div>
    <div className="bg-gradient-to-b from-[#1880AF] to-[#18191F]  pb-6 xl:pb-10 text-primary-foreground p-6 rounded-2xl shadow-lg">
      <h3 className="pb-2 text-xl">Dedication To the Project</h3>
      <p className='text-base leading-relaxed'>
        We are a dedicated flutter app development company in India of 150+ experts who go to lengths to bring out the best in each of our projects. Our clients bring us raw ideas, and we turn them
        into a money.
      </p>
    </div>
  </div>
</div>
            <div className=" h-auto pt-2 mt-5 sm:px-10 xl:px-20">
                    <div className=" text-white open_sans_displays pt-6  max-w-7xl mx-auto text-foreground p-6">
                        <span className='text-4xl'> FAQs</span>
                        <div className="space-y-4 my-7 xl:my-10">
                            {faqContent.map((item, index) => (
                                <div key={index} className='xl:py-4'>
                                    <h3
                                        className="font-semibold border-b border-gray-700 xl:text-xl pb-2 cursor-pointer"
                                        onMouseEnter={() => handleQuestionHover(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item.question}
                                    </h3>
                                    {openQuestion === index && item.answer && (
                                        <p className="text-muted-foreground xl:text-lg  mt-2">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                <div className="  text-white  pb-14 xl:pt-5 text-center">
          <div ref={textRef} className='text flex flex-col gap-4 justify-center text-white' >
            <span className="  text-lg text-white md:text-3xl  xl:text-4xl Poppins">READY FOR YOUR NEXT PROJECT?</span>
            <span onClick={handleButtonClick} className=" text-white text-4xl md:text-6xl xl:text-8xl font-extrabold hover:italic hover:text-[#7b61ff] text-accent">
              LET&apos;S TALK
            </span>
          </div>
        </div>
        </div>
    )
}

export default Flutter
