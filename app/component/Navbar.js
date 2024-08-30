"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Star from "@/public/Star.svg";
import Starx from "@/public/Starx.svg"
import Arrow from "@/public/Arrow.png"
import { useRouter } from 'next/navigation';
import ServicesPic from "@/public/ServicesPic.png";
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

  { name: "React Native", logo: "/Technology/reactNative.svg" },
  { name: "AI Development", logo: "/Technology/Ai.svg" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg" },
  { name: "IOT", logo: "/Technology/IOT.svg" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg" },
  { name: "Ionic", logo: "/Technology/Ionic.svg" },
  { name: "VR Development", logo: "/Technology/VR.svg" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg" },
  { name: "Wearable", logo: "/Technology/Wearable.svg" },
  { name: "iOS App", logo: "/Technology/IOS.svg" },
  { name: "Flutter", logo: "/Technology/Flutter.svg" },
  { name: "Android App", logo: "/Technology/Android.svg" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg" },


];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isContactPage = router.pathname === '/contact';

  return (
    <nav className={` ${isContactPage ? 'bg-white' : 'bg-black'} items-center px-4 p-4   lg:p-6 2xl:px-40 `}>
      <div className=" relative xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white">
       <Link href="/"> <Image
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
              className="nav-link block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
            >
              About
            </Link>
            <Link
              href="/Work"
              className="nav-link block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
            >
              Work
            </Link>
            <div className=" lg:inline-block  group">
              <Link
                href="#"
                className="nav-link block text-white mt-4 lg:inline-block group lg:mt-0 text-white-200 mr-8"
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
                      <Image src={ServicesPic} className=" md:w-60 lg:w-96 2xl:w-[600px]" alt="" width={1000} height={1000} />
                      <h2 className="mt-5 text-sm md:text-xs lg:text-lg  2xl:text-2xl leading-relaxed font-light">Read our developments that has helped <br />the industry boom in India </h2>
                    </div>
                  </div>
                  <ul className="py-1 text-xs  lg:text-base xl:text-lg Poppin grid grid-cols-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center mr-2 dropslash lg:mr-2 xl:mr-10  hover:text-[#7b61ff] custom-filter">
                        <Image
                          src={service.logo}
                          alt={`${service.name} logo`}
                          className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10"
                          width={100}
                          height={100}
                        />
                        <Link
                         /* href={`/services/${service.name.toLowerCase().replace(/\s+/g, "")}`}*/
                         href="#"
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
            <div className=" lg:inline-block  group">
              <Link
                href="#"
                className="block text-white nav-link mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
              >
                Technology
                <Image src={Arrow} alt="" className="inline-flex" width={32} height={32} />

              </Link>
              <div
                className={`absolute  w-auto left-0 xl:left-10   justify-center  mt-10  h-full md:h-auto Glassy text-white   z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
              >


                <section className="flex flex-row justify-between rounded-3xl w-full md:gap-10 lg:gap-6 pt-16 pb-6 md:px-0  md:flex Poppinx ">
                  <div className="max-w-5xl xl:w-1/2 lg:w-1/4  sm:w-[250px]  mt-6 lg:mt-0  hidden md:block">
                    <h2 className="text-xl lg:text-4xl text-left font-medium pl-6 Poppind">Technologies</h2>
                    <Image src="/Technology/Technologyimg.png" className=" m-6  xl:w-auto 2xl:w-3/4 " alt="" width={400} height={400} />
                  </div>
                  <ul className="py-1 text-xs sm:text-base  lg:text-base xl:text-lg xl:gap-4 2xl:gap-6 Poppin grid grid-cols-3">
                    {technology.map((service, index) => (
                      <li key={index} className="flex items-center w-auto sm:w-[220px] md:w-full lg:w-[250px] 2xl:w-[300px] dropslash lg:mr-2 xl:mr-2 p-2 hover:text-[#7b61ff] custom-filter">
                        <div className="lg:h-8 lg:w-8 h-4 w-4 sm:h-6 sm:w-6  hover:bg-yellow-700  hover:dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full md:h-6 md:w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-8 2xl:h-8">

                          <Image
                            src={service.logo}
                            alt={`${service.name} logo`}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Link
                          /* href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}  */
                          href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}${service.name.toLowerCase() === 'flutter' || service.name.toLowerCase() === 'reactnative' ? '' : '#'}`}


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
              href="#"
              className=" hidden nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
            >
              
            </Link>
          </div>
          <div className="flex text-lg 2xl:text-xl justify-center items-center mt-4 lg:mt-0 text-center">
            < Link href="/contact" className="inline-flex">
              <button className="block nav-link text-white lg:inline-block text-white-200 mr-2 xl:mr-4">
                Contact Us
              </button>
              <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
