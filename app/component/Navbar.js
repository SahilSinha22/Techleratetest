"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Star from "@/public/Star.svg";
import Starx from "@/public/Starx.svg"
import Arrow from "@/public/Arrow.png"

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  items-center px-4 p-4 bg-black  lg:p-8 2xl:px-40">
          <div className=" relative xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white">
              <Image
                src={Logo}
                alt="Techlerate Logo"
                className="h-10 w-48 md:w-96 lg:w-72 md:h-16"
                width={400}
                height={5}
              />
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
                    href="/Services"
                    className="nav-link block text-white mt-4 lg:inline-block group lg:mt-0 text-white-200 mr-8"
                    aria-haspopup="true"
                    aria-expanded={isOpen ? true : false}
                  >
                    Services
                    <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>
                  </Link>
                  <div
                    className={`absolute left-0 p-6 mt-10 w-auto h-full md:h-auto Glassy backdrop-blur-3xl text-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                  >
                    <section className="grid grid-rows-2  md:flex Poppinx ">
                      <div className="p-6 xl:p-10">


                        <div className=" text-2xl lg:text-3xl  text-left xl:text-3xl 2xl:text-5xl ">

                          <p className="leading-relaxed text-left">
                            60
                            <div className="inline-block ml-1 align-middle">
                              <Image src={Starx} alt="star" className="h-4 w-4 xl:h-6 xl:w-6" width={28} height={28} />
                            </div>
                            &nbsp;Software Types <br /> in Our Development <br /> Portfolio
                          </p>

                        </div>
                        <div className="mt-5 text-left">
                          <Image src={ServicesPic} className=" md:w-60 lg:w-96 xl:w-full" alt="" width={1000} height={1000} />
                          <h2 className="mt-5 text-lg  2xl:text-2xl leading-relaxed font-light">Read our developments that has helped <br />the industry boom in India </h2>
                        </div>
                      </div>
                      <ul className="py-1 text-sm xl:text-lg grid grid-cols-3">
                        {services.map((service, index) => (
                           <li key={index} className="flex items-center mr-5 lg:mr-2 xl:mr-10 hover:text-[#7b61ff] custom-filter">
                           <Image
                             src={service.logo}
                             alt={`${service.name} logo`}
                             className="lg:h-10 lg:w-10 h-6 w-6 mr-2"
                             width={100}
                             height={100}
                           />
                           <Link
                             href={`/services/${service.name.toLowerCase().replace(/\s+/g, "")}`}
                             className="block lg:px-2 md:py-4 lg:py-0"
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
                  href="/Technology"
                  className="block text-white nav-link mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Technology
                  <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>

                </Link>
                </div>
                <Link
                  href="/Blog"
                  className="block nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Blog
                </Link>
              </div>
              <div className="flex text-lg 2xl:text-xl justify-center items-center mt-4 lg:mt-0 text-center">
                <button className="block nav-link text-white lg:inline-block text-white-200 mr-2 xl:mr-4">
                  Contact Us
                </button>
                <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
              </div>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;
