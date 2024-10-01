import React from 'react'
import Image from 'next/image'
import Loc from "@/components/Loc"
const About = () => {
    return (
        <div className='bg-[#18191F]' >

            <div className=' m-auto p-4 md:px-10 xl:px-20  text-center flex flex-col justify-center pt-20 lg:pt-28 xl:pt-40 pb-20 max-w-screen-2xl 2xl:max-w-screen-2xl 2xl:mx-auto text-white '>
                <div className="flex flex-col m-auto max-w-7xl text-center  justify-center  place-content-center leading-relaxed ">
                    <h2 className="text-base sm:text-3xl lg:text-4xl md:leading-[1.5]  xl:text-5xl md:w-[640px] lg:w-[780px] xl:w-[1040px] font-medium leading-loose text-center flex justify-center  Poppin">Know our team who is putting day & night for yourwonderful digital experience</h2>

                    <p className=" text-[12px] mt-2 xl:mt-6 sm:text-lg lg:text-xl xl:text-3xl text-muted-foreground w-[320px] sm:w-[650px] lg:w-[750px] xl:w-[1120px] text-center Poppind leading-relaxed font-semibold  m-auto">
                        Techlerate is turning ideas into reality for a decade now. Partner with us & drive digitization to your business with innovation and technology.
                    </p>
                </div>


            </div>
            <Image src="/About.webp" className="w-screen h-full" alt='' width={1000} height={1000} />

            <div className='bg-[#7B61FF]'>
                <div className=' flex  xl:gap-10  max-w-7xl  justify-around m-auto'>
                    <div className="text-center items-center  flex flex-col my-10 lg:my-20 justify-center">
                        <Image src="/Partners.png" alt=""  className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24" width={80} height={80} />
                        <div className="flex flex-row text-center pt-4 lg:pt-0 justify-center  ">
                            <h2
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl  2xl:text-8xl lg:pt-8"
                                data-target="25"
                            >
                                25
                            </h2>
                            <span className="Bebas_Neue text-6xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl   2xl:text-8xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg  Poppin  md:text-lg lg:text-2xl   2xl:text-3xl ">
                            PARTNERS
                        </p>
                        <p className='text-white text-xs lg:text-lg text-center xl:text-xl '>
                        Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="text-center  flex flex-col justify-center lg:my-20 my-10 lg:pt-0 2xl:pt-0 items-center">
                    <Image src="/TeamSize.png" alt="" className="w-20 h-14 lg:w-28 lg:h-20 xl:w-auto object-contain xl:h-24" width={100} height={100} />
                        <div className="flex flex-row text-center pt-4 lg:pt-0 justify-center">
                            <h2
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl lg:pt-8"
                                data-target="50"
                            >
                                50
                            </h2>
                            <span className="Bebas_Neue text-5xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-8xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg  md:text-center  Poppin md:text-lg  lg:text-2xl px-0  2xl:text-3xl sm:px-1 ">
                            Team Size
                        </p>
                        <p className='text-white text-center text-xs lg:text-lg xl:text-xl '>
                        Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="text-center px-4 md:px-10 lg:px-4 flex flex-col lg:my-20  my-10 justify-center items-center">
                    <Image src="/Sproduct.png" alt="" className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" width={100} height={100} />
                        <div className="flex flex-row  xl:text-8xl 2xl:text-12xl pt-4 lg:pt-0 justify-center">
                            <h2
                                className="number Bebas_Neue text-6xl proportional-nums md:text-7xl lining-nums xl:text-8xl 2xl:text-8xl lg:text-7xl lg:pt-8"
                                data-target="100"
                            >
                                100
                            </h2>
                            <span className="Bebas_Neue text-6xl lg:text-7xl lg:pt-8 md:text-7xl xl:text-8xl 2xl:text-8xl">
                                +
                            </span>
                        </div>
                        <p className="text-sm sm:text-lg  Poppin  md:text-lg lg:text-2xl pr-2  2xl:text-3xl ">
                            SUCCESSFUL 
                            PRODUCTS
                        </p>
                        <p className='text-white  text-center text-xs lg:text-lg xl:text-xl '>
                        Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.
                        </p>
                    </div>

                </div>
            </div>
           <Loc/>
        </div>
    )
}

export default About
