"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
import Arrow from "@/public/Arrow.png"
import Star from "@/public/Star.svg"
import Starx from "@/public/Starx.svg"
import ServicesPic from "@/public/ServicesPic.png";
import Leader from "@/components/Leadership";
import Award from "@/components/Award";
import Carrercurr from "@/components/Carrercurr";
const services = [

    { name: "On Demand", logo: "/OnDemand.svg" },
    { name: "eCommerce", logo: "/Ecommerce.svg" },
    { name: "Real Estate", logo: "/Realestate.svg" },
    { name: "Healthcare", logo: "/Healthcare.svg" },
    { name: "SaaS", logo: "/Saas.svg" },
    { name: "Education", logo: "/Education.svg" },
    { name: "Restaurant", logo: "/Restaurant.svg" },
    { name: "Games", logo: "/Games.svg" },
    { name: "News", logo: "/News.svg" },
    { name: "Entertainment", logo: "/Entertainment.svg" },
    { name: "Wellness", logo: "/Wellness.svg" },
    { name: "Logistics", logo: "/Logistics.svg" },
    { name: "Travel", logo: "/Travel.svg" },
    { name: "Finance", logo: "/Finance.svg" },
    { name: "Aviation", logo: "/Travel.svg" },
    { name: "E-Scooter", logo: "/Escooter.svg" },
    { name: "Politics", logo: "/Politics.svg" },
    { name: "Agriculture", logo: "/Agriculture.svg" },
    { name: "Events", logo: "/Events.svg" },
    { name: "Social Networking", logo: "/SocialN.svg" },
    { name: "EV", logo: "/EV.svg" },
    { name: "Oil and Gas", logo: "/Oil&gas.svg" },
    { name: "Banking", logo: "/Banking.svg" },
    { name: "Automotive", logo: "/Automotive.svg" },
    { name: "Telecom", logo: "/Telecom.svg" },
    { name: "Insurance", logo: "/Insurance.svg" },
    { name: "Manufacturing", logo: "/Manufacturing.svg" },

    { name: "Construction", logo: "/Construction.svg" },


];
const technology = [

    { name: "React Native", logo: "/Technology/reactNative.svg", link: "/Technology/reactnative" },
    { name: "AI Development", logo: "/Technology/Ai.svg", link: "#" },
    { name: "Chatbot", logo: "/Technology/Chatbot.svg", link: "#" },
    { name: "IOT", logo: "/Technology/IOT.svg", link: "#" },
    { name: "Augmented Reality", logo: "/Technology/AR.svg", link: "#" },
    { name: "Ionic", logo: "/Technology/Ionic.svg", link: "#" },
    { name: "VR Development", logo: "/Technology/VR.svg", link: "#" },
    { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link: "#" },
    { name: "Quality Analyst", logo: "/Technology/Quality.svg", link: "#" },
    { name: "Wearable", logo: "/Technology/Wearable.svg", link: "#" },
    { name: "iOS App", logo: "/Technology/IOS.svg", link: "#" },
    { name: "Flutter", logo: "/Technology/Flutter.svg", link: "/Technology/flutter" },
    { name: "Android App", logo: "/Technology/Android.svg", link: "#" },
    { name: "Blockchain", logo: "/Technology/Blockchain.svg", link: "#" },
    { name: "UI/UX Designing", logo: "/Technology/Ui.svg", link: "#" },


];
const Page = () => {
    const textRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
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

        };
    }, []);
    return (
        <div className="w-full">
            <div className='w-full  '>
                <Image src="/Career/Intro.png" alt="" className="w-screen h-screen -z-10 object-cover " width={1000} height={1000} />
                <nav className=" absolute left-0 right-0 top-0 items-center z-50 px-4 p-4  lg:p-8 2xl:px-40">
                    <div className=" relative xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
                        <div className="flex items-center flex-shrink-0 text-white">
                            <Link href="/" > <Image
                                src={Logo}
                                alt="Techlerate Logo"
                                className="h-10 w-48 md:w-96  md:h-14 lg:h-10 xl:h-12 lg:w-60 2xl:w-76"
                                width={400}
                                height={5}
                            />
                            </Link>
                        </div>
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
                            >
                                <svg
                                    className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${isOpen ? "hidden" : "block"
                                        }`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <svg
                                    className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`w-full block flex-grow justify-between text-center lg:flex text-lg lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                                }`}
                        >
                            <div className="text-lg 2xl:text-xl justify-around text-center lg:flex-grow">
                                <Link
                                    href="/"
                                    className="nav-link block text-white hover:text-[#7B61FF] mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/Work"
                                    className="nav-link block text-white hover:text-[#7B61FF] mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                                >
                                    Work
                                </Link>
                                <div className=" lg:inline-block  group">
                                    <Link
                                        href="#"
                                        className="nav-link block text-white hover:text-[#7B61FF] mt-4 lg:inline-block group lg:mt-0 text-white-200 mr-8"
                                        aria-haspopup="true"
                                        aria-expanded={isOpen ? true : false}
                                    >
                                        Services
                                        <Image src={Arrow} alt="" className="inline-flex" width={32} height={32} />
                                    </Link>
                                    <div
                                        className={`absolute left-0 p-2 md:p-6 mt-10 w-auto h-auto md:h-auto  text-white  Glassy rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                                    >
                                        <section className="grid grid-rows-2  md:flex Poppinx ">
                                            <div className="p-6 xl:p-10">


                                                <div className=" text-2xl md:text-xl lg:text-3xl  text-left xl:text-3xl 2xl:text-5xl  ">

                                                    <p className="leading-relaxed text-left">
                                                        60
                                                        <div className="inline-block ml-1 align-middle">
                                                            <Image src={Starx} alt="star" className="h-4 w-4 xl:h-6 xl:w-6" width={28} height={28} />
                                                        </div>
                                                        &nbsp;Software Types <br /> in Our Development <br /> Portfolio
                                                    </p>

                                                </div>
                                                <div className={`mt-5 text-left block  `}>
                                                    <Image src={ServicesPic} className=" md:w-60 lg:w-96 xl:w-60 2xl:w-[600px]" alt="" width={1000} height={1000} />
                                                    <h2 className="mt-5 text-sm md:text-xs lg:text-lg   2xl:text-2xl leading-relaxed font-light">Read our developments that has helped <br />the industry boom in India </h2>
                                                </div>
                                            </div>
                                            <ul className="py-1 text-xs  lg:text-base xl:text-lg grid grid-cols-3">
                                                {services.map((service, index) => (
                                                    <li key={index} className="flex items-center mr-2 lg:mr-2 xl:mr-10 dropslash 2xl:mr-2 hover:text-[#7b61ff] custom-filter">
                                                        <Image
                                                            src={service.logo}
                                                            alt={`${service.name} logo`}
                                                            className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10 "
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <Link
                                                            /* href={`/services/${service.name.toLowerCase().replace(/\s+/g, "")}`} */
                                                            href="#"
                                                            className="block lg:px-2  dropslash py-2 md:py-4 lg:py-0"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                                <div className=" lg:inline-block  group">
                                    <Link
                                        href="#"
                                        className="block text-white hover:text-[#7B61FF] nav-link mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                                    >
                                        Technology
                                        <Image src={Arrow} alt="" className="inline-flex" width={32} height={32} />

                                    </Link>
                                    <div
                                        className={`absolute  w-auto left-0 xl:left-10   justify-center  mt-10  h-auto md:h-auto Glassy text-white   z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                                    >


                                        <section className="flex flex-col md:flex-row justify-between rounded-3xl w-full md:gap-10 lg:gap-6 md:pt-10 lg:pt-16 pb-6 md:px-0  md:flex Poppinx ">
                                            <div className="max-w-5xl xl:w-1/2 lg:w-1/4  w-[300px] sm:w-[250px]  mt-6 lg:mt-0  ">
                                                <h2 className="text-xl lg:text-4xl text-left font-medium pl-6 Poppind">Technologies</h2>
                                                <Image src="/Technology/Technologyimg.png" className=" m-6 w-72 md:w-auto xl:w-auto 2xl:w-3/4 " alt="" width={400} height={400} />
                                            </div>
                                            <ul className="py-1 text-xs sm:text-xs  lg:text-base xl:text-lg xl:gap-4 2xl:gap-6 Poppin grid grid-cols-2 md:grid-cols-3">
                                                {technology.map((service, index) => (
                                                    <li key={index} className="flex items-center w-auto sm:w-[220px] md:w-full lg:w-[250px] 2xl:w-[300px] dropslash lg:mr-2 xl:mr-2 p-2 hover:text-[#7b61ff] custom-filter">
                                                        <div className="lg:h-8 lg:w-8 h-6 w-6 sm:h-6 sm:w-6  hover:bg-yellow-700  hover:dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full md:h-6 md:w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-8 2xl:h-8">

                                                            <Image
                                                                src={service.logo}
                                                                alt={`${service.name} logo`}
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>
                                                        <Link
                                                            /* href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}  */
                                                            href={`${service.link}`}


                                                            className="block lg:px-2 py-2 md:py-4 lg:py-0 "
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                                <Link
                                    href="/Career"
                                    className="block nav-link text-[#7B61FF] mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                                >
                                    Career
                                </Link>
                            </div>
                            <div className="flex text-lg 2xl:text-xl justify-center items-center mt-4 lg:mt-0 text-center">
                                <Link  href="/contact" className="inline-flex">
                                    <button className="block nav-link text-white hover:text-[#7B61FF] lg:inline-block text-white-200 mr-2 xl:mr-4">
                                        Contact Us
                                    </button>
                                    <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="absolute items-center  text-center bottom-60 lg:bottom-20 xl:bottom-40 2xl:bottom-60  w-full text-white z-10 m-auto">
                    <div className="m-auto flex flex-col  w-full justify-center text-center items-center">
                        <h2 className="Poppins text-3xl md:text-4xl 2xl:text-5xl ">We are Techlerate</h2>
                        <p className="text-sm md:text-xl md:px-10 lg:px-0 lg:w-[800px]  xl:text-xl 2xl:text-2xl Poppind font-semibold my-4 mx-4 xl:w-[800px] 2xl:w-[1000px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
                        <button className=" rounded-full Poppind font-bold text-sm lg:text-sm xl:text-sm 2xl:text-lg xl:px-3 xl:py-2 bg-[#7b61ff] px-3 py-2 lg:px-4 lg:py-2 md:px-5 md:py-4">
                            Current Openings
                        </button>
                    </div>
                </div>


                <div className="bg-[#18191F] text-zinc-500  pt-20 pb-10 xl:py-20 px-4 md:px-10">
                    <div className="max-w-7xl 2xl:max-w-[1500px] justify-between flex flex-col md:flex-row gap-10 xl:gap-28 m-auto ">
                        <div>

                            <h2 className="text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[#FFFFFF] Poppins font-medium mb-4">Welcome to our career site</h2>
                            <p className="text-base md:text-base xl:text-xl 2xl:text-2xl mb-6 md:w-[350px] lg:w-[500px] xl:w-[590px] 2xl:w-[730px]">We are Techlerate. A group of talented designers and developers, accelerating hand picked start-ups to become the best they can be. </p>
                            <p className="text-base md:text-base xl:text-xl 2xl:text-2xl md:mb-8 md:w-[350px] lg:w-[500px] xl:w-[610px] 2xl:w-[730px]">
                                Our team is full of passionate professionals who work on the newest technologies to push the limits of their knowledge. We believe by putting ourselves at the forefront of our industry, we will build products that are high quality, meaningful and original.
                            </p>
                        </div>
                        <div>
                            <Image className="rounded-lg shadow-lg w-auto h-auto" src="/Career/Intro2.png" alt="Team working together" width={1000} height={1000} />

                        </div>
                    </div>
                </div>


                <div className='bg-[#18191F] items-center'>
                    <div className=' flex    max-w-7xl 2xl:max-w-[1700px] md:px-10 lg:justify-center xl:justify-normal lg:px-0  m-auto'>
                        <div className="text-center items-center px-4 md:px-8 xl:px-10 2xl:px-20 border-r-2 flex flex-col my-10 lg:my-20 justify-center ">
                            <Image src="/Partners.png" alt="" className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24" width={80} height={80} />
                            <div className="flex flex-row text-center pt-4 text-[#7B61FF] lg:pt-0 justify-center  ">
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

                            <p className='text-white text-xs lg:text-sm text-center xl:text-base  lg:w-[280px] xl:w-[340px] 2xl:w-[360px] 2xl:text-lg'>
                                Lorem Ipsum is simply dummy text of the 
                                printing and typesetting industry.
                            </p>
                        </div>
                        <div className="text-center  flex flex-col px-4 md:px-8  lg:px-8 2xl:px-20  border-r-2 justify-center lg:my-20 my-10 lg:pt-0 2xl:pt-0 items-center">
                            <Image src="/TeamSize.png" alt="" className="w-20 h-14 lg:w-28 lg:h-20 xl:w-32 xl:h-24" width={100} height={100} />
                            <div className="flex flex-row text-center text-[#7B61FF] pt-4 lg:pt-0 justify-center">
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

                            <p className='text-white text-xs lg:text-sm text-center xl:text-base lg:w-[280px] xl:w-[340px] 2xl:w-[360px] 2xl:text-lg'>
                                Lorem Ipsum is simply dummy text of the
                                 printing and typesetting industry.
                            </p>
                        </div>
                        <div className="text-center px-4 md:px-8  lg:pl-8 lg:pr-0 2xl:px-20 flex flex-col lg:my-20  my-10 justify-center items-center">
                            <Image src="/Sproduct.png" alt="" className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" width={100} height={100} />
                            <div className="flex flex-row  xl:text-8xl text-[#7B61FF] 2xl:text-12xl pt-4 lg:pt-0 justify-center">
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

                            <p className='text-white text-xs lg:text-sm text-center xl:text-base lg:w-[280px] xl:w-[340px] 2xl:w-[360px] 2xl:text-lg'>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="bg-[#18191F]">
                    <Leader />
                    <Carrercurr/>
                    <Award />
                   
                </div>
                <div className=" bg-[#18191F] text-white  py-10 xl:pt-16 text-center">
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


        </div>
    )
}

export default Page
