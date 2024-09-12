"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from '../component/Navbarjsx'
import { FaCheckCircle } from "react-icons/fa";
import { generateArithmeticCaptcha } from "@/app/utils/generateCaptcha";
import Ban1 from "@/public/Logo1.svg";
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/dumyForm';
import Link from "next/link";
import Bannerxcontact from "@/components/bannerxcontact";

import Logo from "@/public/logo.svg";



import Arrow from "@/public/Arrow.png"
import Star from "@/public/Star.svg"
import Starx from "@/public/Starx.svg"
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

  { name: "React Native", logo: "/Technology/reactNative.svg", link:"/Technology/reactnative" },
  { name: "AI Development", logo: "/Technology/Ai.svg", link:"#" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg", link:"#" },
  { name: "IOT", logo: "/Technology/IOT.svg", link:"#" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg", link:"#" },
  { name: "Ionic", logo: "/Technology/Ionic.svg", link:"#" },
  { name: "VR Development", logo: "/Technology/VR.svg", link:"#" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link:"#" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg", link:"#" },
  { name: "Wearable", logo: "/Technology/Wearable.svg", link:"#" },
  { name: "iOS App", logo: "/Technology/IOS.svg", link:"#" },
  { name: "Flutter", logo: "/Technology/Flutter.svg", link:"/Technology/flutter" },
  { name: "Android App", logo: "/Technology/Android.svg", link:"#" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg", link:"#" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg", link:"#" },


];
const Page = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const [successBanner, setSuccessBanner] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);


  
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    message: "",
    Budget: "",
  });

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!user.Name) newErrors.Name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(user.Name))
      newErrors.Name = "Name can only contain letters and spaces";
    if (!user.Email) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.Email))
      newErrors.Email = "Email address is invalid";
    if (!user.Number.trim()) newErrors.Number = "Phone number is required";
    else if (!/^\d{7,12}$/.test(user.Number))
      newErrors.Number = "Phone number must be between 7 to 12 digits";
    if (!user.message) newErrors.message = "Message is required";
    if (!user.Budget) newErrors.File = "Budget is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getdata = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { Name, Email, Number, message, Budget } = user;

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Number", Number);
    formData.append("message", message);
    formData.append("Budget", Budget);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        message,
        Budget,
      }),
    };

    const res = await fetch(
      "https://nextfirebase-fab92-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res) {
      setSuccessBanner(true);
      setTimeout(() => {
        setSuccessBanner(false);
      }, 3000);
    } else {
      alert("Error Occurred");
    }
  };

  const [isCaptchaValid, setIsCaptchaValid] = useState(null);

  useEffect(() => {
    setCaptcha(generateArithmeticCaptcha());
  }, []);

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setInputCaptcha(value);
    setIsCaptchaValid(value === captcha.answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha.answer) {
      return;
    }
    // Handle form submission
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <div className='w-full  navbar '>
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
                    <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>
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
                  className="block text-white nav-link mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Technology
                  <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>

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
                  className="block nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                 Career
                </Link>
              </div>
              <div className="flex text-lg 2xl:text-xl justify-center items-center mt-4 lg:mt-0 text-center">
              <Link href="/contact"  className="inline-flex">
                <button className="block nav-link text-white lg:inline-block text-white-200 mr-2 xl:mr-4">
                  Contact Us
                </button>
                <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </nav>

      </div>



      <div className='bg-[#18191F]   2xl:h-[1100px] text-white  '>
        <div className="">

          <div className=" h-[1000px] relative 2xl:px-40  md:h-[550px] ">


            <div className='grid grid-rows-2  -top-60 md:-top-16 md:grid-cols-2   absolute z-10 lg:-top-20 h-[1000px] justify-self-start 2xl:-top-52  md:justify-between px-4 md:pl-20 md:pr-10 2xl:p-20 2xl:pr-40'>
              <div className="pr-6 lg:pr-16  ">
                <h2 className=' text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl leading-relaxed Poppinx font-medium'>
                  Unlock Your Business <br /> Potential Today!
                </h2>
                <p className='py-10 text-base xl:text-base 2xl:text-lg'>
                  “Connect with us now to discover how our expert solutions and unparalleled support can drive success for your business!”
                </p>
                <div className='flex flex-col leading-loose'>
                  <span className='text-[#7b61ff] text-xl'>  We are just a call away </span>
                  <div className='flex justify-left py-3 items-center gap-4 leading-loose'>
                    <div>
                    <a href= "mailto: contact@techlerate.com  ">  <Image src="./Mailbox.svg" alt="./Mailbox.svg" width={24} height={24} /></a>
                    </div>
                    <a href= "mailto: contact@techlerate.com  "> <span className='text-xl'>  contact@techlerate.com </span></a>

                  </div>
                  <div className='flex justify-left items-center gap-4'>
                    <div>
                    <a href="tel:+91 88 820 76 755" > <Image src="./Calling.svg" alt="./Calling.svg" width={24} height={24} /> </a>
                     </div>
                     <a href="tel:+91 88 820 76 755" > <span className='text-xl'>  +91 88 820 76 755 </span></a>
                  </div>
                </div>
                <div className='gap-6 xl:gap-10 my-10 md:my-16 flex'>
                  <Image src="/GoodFirms.png" alt='' className="2xl:w-40 2xl:h-40 w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32" width={400} height={400} />
                  <Image src="/Clutuch.png" alt='' className="2xl:w-40 2xl:h-40 w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 " width={400} height={400} />

                  <Image src="/Appfuture.png" alt='' className="2xl:w-40 2xl:h-40 w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 " width={400} height={400} />



                </div>
              </div>
              <div className="   " >



                <div className="lg:pt-16 pt-10   rounded-3xl bg-white  ">
                  <h2 className="text-[#000000] px-4 md:px-6 lg:px-10 2xl:px-10 text-2xl lg:text-3xl xl:text-4xl font-bold  Poppins ">Consult over experts!</h2>
                  {successBanner && (
                    <div className=" translate-x-2 absolute  z-10   xl:w-[500px] mb-4 lg:ml-40 2xl:ml-20  xl:ml-60 md:mx-2 sm:ml-10 bg-green-500 text-white p-4 rounded-lg">
                      <FaCheckCircle size={24} className="mr-2" />
                      <span>Query Submitted Successfully!</span>
                    </div>
                  )}
                  <form
                    method="POST"
                    onSubmit={handleSubmit}
                    className=" mx-auto px-4 md:px-6 lg:px-10 2xl:px-10 my-4 lg:my-10  "
                  >
                    <div className="grid w-full md:grid-cols-2 md:gap-10 xl:gap-10 2xl:gap-10 ">
                      <div className="relative z-0 mb-4  group">
                        <input
                          type="text"
                          name="Name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full md:w-32  lg:w-44 xl:w-60  2xl:w-72 text-lg text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={user.Name}
                          autoComplete="off"
                          required
                          onChange={data}
                        />
                        {errors.Name && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.Name}
                          </p>
                        )}

                        <label
                          for="Name"
                          className="peer-focus:font-medium  absolute text-lg  text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Full Name*
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="Email"
                          id="floating_last_name"
                          className="block py-2.5 px-0 w-full  md:w-32  lg:w-44 xl:w-60  2xl:w-72 text-lg  text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={user.Email}
                          autoComplete="off"
                          required
                          onChange={data}
                        />
                        {errors.Email && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.Email}
                          </p>
                        )}

                        <label
                          for="Email"
                          className="peer-focus:font-medium absolute text-lg  text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email*
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 mt-4 md:gap-10 xl:gap-10">
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="tel"
                          name="Number"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full  md:w-32  lg:w-44  xl:w-60  2xl:w-72 text-lg  text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={user.Number}
                          autoComplete="off"
                          required
                          onChange={data}
                        />
                        {errors.Number && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.Number}
                          </p>
                        )}

                        <label
                          for="Number"
                          className="peer-focus:font-medium absolute text-lg   text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          <div className="flex flex-row">

                            <div className="">Phone no.*</div>
                          </div>
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="Budget"
                          id="floating_company"
                          className="block py-2.5 px-0 w-full  md:w-32  lg:w-44 xl:w-60  2xl:w-72 text-lg  text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={user.Budget}
                          autoComplete="off"
                          required
                          onChange={data}
                        />
                        {errors.File && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.File}
                          </p>
                        )}

                        <label
                          for="floating_company"
                          className="peer-focus:font-medium absolute text-lg  text-gray-600 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          <label
                            id="question"
                            className=" peer h-full  text-lg  text-gray-600 font-bold  bg-transparent pb-1.5 font-poppins  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                          >
                            <div
                              className="peer text-lg  text-gray-600 border-gray-500 bg-transparent  pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"

                            >
                              Budget*
                            </div>

                          </label>
                        </label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 mt-10 group">
                      <input
                        type="text"
                        name="message"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-base text-[#000000] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.message}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.message && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}

                      <label
                        for="message"
                        className="peer-focus:font-medium absolute text-lg  text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Description*
                      </label>
                    </div>


                    <div className="flex flex-col  space-y-6 lg:space-y-0 lg:flex-row justify-between mt-10 ">
                      <div className="flex items-center">
                        <label className="  text-gray-600 text-lg lg:text-xl ">
                          {captcha.question} ={" "}
                        </label>
                        <input
                          type="text"
                          className="xl:w-28 ml-4 2xl:w-28  w-10 md:w-20  text-xl text-center  border-b-2   text-gray-600"
                          value={inputCaptcha}
                          onChange={handleCaptchaChange}
                          required
                        />
                        {isCaptchaValid === true && (
                          <span className="lg:mx-10 text-xl" style={{ color: "green" }}>
                            ✔️
                          </span>
                        )}
                        {isCaptchaValid === false && (
                          <span className=" mx-4 lg:mx-10 text-xl" style={{ color: "red" }}>
                            ❌
                          </span>
                        )}
                      </div>
                      <div className="">
                        <button
                          onClick={getdata}
                          className="rounds  text-white rounded-3xl border-2 Poppinx font-semibold bg-[#7b61ff] focus:ring-4 focus:outline-none   text-base w-full sm:w-auto px-6 py-2.5 xl:px-8  text-center  "
                          type="submit"
                          style={{
                            backgroundColor: isCaptchaValid ? "green" : "[#7b61ff]",
                            color: "white",
                          }}
                          disabled={isCaptchaValid === null || !isCaptchaValid}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-[#000000] px-4 py-4 md:px-6 md:py-4 lg:py-6 2xl:text-xl 2xl:pt-8 Poppinx ">
                  <p> For Job Opportunities : <span className="text-[#7b61ff]">  <a href= "mailto: contact@techlerate.com   ">contact@techlerate.com </a></span>, or visit our <span className="text-[#7b61ff]">careers page </span></p>
                </div>
                </div>
               

              </div>
            </div>
          </div>
          <div className="2xl:px-40">
          <Bannerxcontact/>
          </div>
        </div>

      </div>
      


      <div className="bg-[#252730] md:px-10 xl:px-20 px-2 py-10 md:py-16 text-muted-foreground flex justify-center space-x-4 lg:space-x-8">
        <Image src={Ban1} alt="afterpay logo" className="w-full" width={300} height={5} />

      </div>

      <div className="bg-[#18191F]  justify-start pb-20 px-6 md:px-10 2xl:px-52   ">
        <div className="flex text-3xl text-white gap-4 py-16 ">
          <h2>Find us on Google Maps</h2>
          <Image src="/Path.svg" alt="" width={20} height={20} />
        </div>
<div className="map-responsive">
<iframe className="w-72  md:w-[600px] max-w-screen-xl  sm:w-[600px] lg:w-[850px] lg:max-w-6xl xl:w-[1100px] 2xl:w-[1600px] 2xl:max-w-[1960px] xl:max-w-screen-xl"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.246309723172!2d77.361188!3d28.61108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5697f8ef789%3A0x89218b014db0771c!2sPlatina%20Heights!5e0!3m2!1sen!2sin!4v1724229359599!5m2!1sen!2sin" width="950" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe> 
</div>
       

      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  )
}

export default Page;
