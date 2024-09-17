"use client"
import React from 'react';
import Link from 'next/link';
import Insta from "@/public/Insta.svg";
import Linkedin from "@/public/Linkdinn.svg";
import Twitter from "@/public/Twit.svg";
import Youtube from "@/public/Yout.svg";
import Image from 'next/image';
import Logo from "@/public/Techlerate logo.svg"

const Footer = () => {
  return (
    <footer className="bg-black text-card-foreground py-8 md:p-12">
    <div className=" border-t  border-[#535353] ">
      <div className="flex-1 md:flex  px-10 pt-20   pb-12 justify-between">
        <div className="w-full md:w-2/4 mb-6 Poppins md:mb-0 ">
          <div className="flex w-full items-center mb-2">
            <Link href="/">
            <Image src={Logo} alt="Techlerate Logo" className="" width={220} height={20}/>
            </Link>
          </div>
          <p className="text-[#7b61ff]  ">Connect with us:</p>
          <p className="text-[#9a9898] ">Call: +91 88 820 76 755</p>
          <p className="text-[#9a9898] ">Email: contact@techlerate.com</p>
          <p className="text-[#9a9898]">Office: Platina Heights, C24, C Block, Phase 2,<br/> Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</p>
          <div className="flex mt-6 space-x-4 ">
            <Link href="#" onClick={(e) => e.preventDefault()}  aria-label="Instagram">
              <Image src={Insta} alt="Instagram Icon" className='rounded-full' width={40} height={2}/>
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
              <Image src={Linkedin} alt="LinkedIn Icon" className='rounded-full' width={40}  height={2}/>
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
              <Image src={Twitter} alt="Twitter Icon" className='rounded-full ' width={40}  height={2}/>
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()} aria-label="YouTube">
              <Image src={Youtube} alt="YouTube Icon" className='rounded-full ' width={40}  height={2}/>
            </Link>
          </div>
        </div>
  
        <div className="w-full md:w-2/4 flex flex-row">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Solution</h3>
            <ul className="space-y-2">
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Brand & Design</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Video Production</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Social Media</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Digital Campaign</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">UI/UX</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">SEO</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">About</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Contact</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Testimonial</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Partners</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Portfolio</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className=" text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Help center</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Terms of service</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Legal</Link></li>
              <li><Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-primary">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#535353] pt-8 px-8 pb-10 text-center">
        <p className="text-[#9a9898] text-sm">&copy;2024 TECHLERATE. All rights reserved</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer