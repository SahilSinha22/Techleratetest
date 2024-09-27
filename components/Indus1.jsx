'use client'
import React, { useEffect } from "react";
import Link from "next/link";

const Indus = () => {
  useEffect(() => {

    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("mouseover", handleMouseEnter);
    });

    function handleMouseEnter(event) {
      removeActiveClasses();
      event.currentTarget.classList.add("active");
    }

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("mouseover", handleMouseEnter);
      });
    };
  }, []);  // Empty dependency array means this runs once after initial render

  return (
    <div className=" max-w-7xl mx-10  lg:px-8 py-12">
      <div className="text-left ml-2 md:mx-20">
        <h2 className="text-3xl font-bold playfair md:text-6xl text-[#000000]">
          Industries we serve
        </h2>
        <p className="mt-2 text-lg md:text-2xl text-[#000000] ">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        <div className="galerrys ">
          <div className="containers mr-10">
            <div className="panel active Indus">
              <div className="img-boxs">
                <h3 className="text-xs md:text-sm lg:text-lg">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Transforming patient care with innovative solutions and compassionate support.
                  </p>
                </div>
                <div className=" mt-5  lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className="round  ">
                    <span className=" px-1 md:px-2 py-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus1">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Manufacturing</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Streamlining production with cutting-edge technology and precision expertise.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus2">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Health Sector</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Improving lives through collaborative research and exceptional care.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus3">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Water Purification</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Ensuring access to clean water for a healthier tomorrow.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus4">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Social Media</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Connecting communities and empowering voices through digital innovation.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus5">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Food and Hospitality</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Delivering memorable experiences and savory delights with passion
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Indus;
