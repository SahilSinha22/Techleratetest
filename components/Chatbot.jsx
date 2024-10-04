import Navbar from '@/app/component/Navbar'
import Image from 'next/image'
import React from 'react'

function Chatbot() {
    return (
        <div>
            <Navbar />
            <div className="items-center justify-center ">
                <div className="pt-40 md:pt-60 lg:pt-48 xl:pt-20 ">
                    <div className=" Open_Sans mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
                        <h2 className="text-2xl xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
                            Chatbot Services : A Floodgate of <br />Opportunities for Business
                        </h2>
                        <p className=" Open_Sans lg:w-[750px] xl:w-[1250px] 2xl:w-[1400px] text-sm open_sans_display  px-8 sm:px-24 md:px-32 lg:px-1 xl:px-64 xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
                            Introducing big waves in modern cross-platform app development, Flutter tech builds exquisite, high-performing, and flawless mobile apps.
                        </p>
                        <button className="border-2 z-20  border-solid rounded-full text-white  py-4 px-6  bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
                            Get in touch with our experts
                        </button>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className="   w-full  h-14 md:h-20 lg:h-28  bg-[#0062FF] ">
                    <Image
                        src="/bannerxlogo.webp"
                        className="w-[1290px]  p-4 rotate-2 mx-auto"
                        alt=""
                        width={1000}
                        height={1000}
                    />

                </div>
            </div>
            <div className=" max-w-7xl mx-auto my-10 mt-40 open_Sans px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-5xl  text-primary mb-4">Why do you need the Chatbot Integration?</h2>
                <p className=" text-xl md:text-2xl leading-relaxed  mb-1">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience?
                </p>
                <p className="text-xl md:text-2xl leading-relaxed mt-8 ">
                    Undoubtedly, an online business holds an expanded reach, and the consumers associated with the brand can be anywhere, considering geographical boundaries! Moreover, they can reach out for customer support anytime; therefore, it is essential to be there for them.
                </p> <p className="text-xl md:text-2xl leading-relaxed mb-4 mt-8">
                    Fortunately, chatbot apps are the way to go! The mechanism enables your business to stand out and acquire a competitive edge in the global marketplace.
                </p>
            </div>
            <div className=" max-w-7xl mx-auto my-10 mt-40 open_Sans px-4 sm:px-10 xl:px-20 ">
                <h2 className="text-3xl md:text-5xl  text-primary mb-4">Why Chatbot Integration?</h2>
                <p className=" text-xl md:text-2xl leading-relaxed  mb-1">
                    Why would any business need a dedicated team to listen to customer queries 24/7 when chatbot development can deliver the same experience? 
                    </p>

                    <div>

                        
                    </div>
            </div>
        </div>
    )
}

export default Chatbot
