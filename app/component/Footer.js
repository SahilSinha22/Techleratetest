<<<<<<< HEAD
import React from 'react';

import Insta from "@/public/instagram.svg";
import Linkedin from "@/public/linkedin.svg";
import Youtube from "@/public/youtube.svg";
import Twitter from "@/public/twitter.svg";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-card-foreground py-8 p-12">
    <div className="container  ">
      <div className="flex border-t  mx-10 pt-20  border-gray-400 flex-wrap pb-12 justify-between">
        <div className="w-full md:w-2/4 mb-6  md:mb-0 ">
          <div className="flex items-center mb-4">
            <Image src="" alt="Techlerate Logo" className="mr-2" width={40} height={2}/>
            <span className="font-bold text-white text-lg">TECHLERATE</span>
          </div>
          <p className="text-blue-800  ">Connect with us:</p>
          <p className="text-slate-400 ">Call: +91 88 820 76 755</p>
          <p className="text-slate-400 ">Email: amit@spacetotech.com</p>
          <p className="text-slate-400">Office: C-171 Sector-63 Noida, Uttar Pradesh 201301</p>
          <div className="flex mt-6 space-x-4 ">
            <a href="#" aria-label="Instagram">
              <Image src={Insta} alt="Instagram Icon" className='rounded-full' width={40} height={2}/>
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src={Linkedin} alt="LinkedIn Icon" className='rounded-full' width={40}  height={2}/>
            </a>
            <a href="#" aria-label="Twitter">
              <Image src={Twitter} alt="Twitter Icon" className='rounded-full' width={40}  height={2}/>
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Youtube} alt="YouTube Icon" className='rounded-full' width={40}  height={2}/>
=======
import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-black text-card-foreground py-8">
    <div class="container border-t border-gray-400 pt-20 mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <div class="flex items-center mb-4">
            <img src="https://placehold.co/40x40" alt="Techlerate Logo" class="mr-2" />
            <span class="font-bold text-white text-lg">TECHLERATE</span>
          </div>
          <p class="text-blue-800  mb-2">Connect with us:</p>
          <p class="text-white mb-2">Call: +91 88 820 76 755</p>
          <p class="text-white mb-2">Email: amit@spacetotech.com</p>
          <p class="text-white">Office: C-171 Sector-63 Noida, Uttar Pradesh 201301</p>
          <div class="flex mt-4 space-x-4">
            <a href="#" aria-label="Instagram">
              <img src="https://placehold.co/24x24" alt="Instagram Icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="https://placehold.co/24x24" alt="LinkedIn Icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="https://placehold.co/24x24" alt="Twitter Icon" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="https://placehold.co/24x24" alt="YouTube Icon" />
>>>>>>> origin/main
            </a>
          </div>
        </div>
  
<<<<<<< HEAD
        <div className="w-full md:w-2/4 flex flex-wrap">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Solution</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">Brand & Design</a></li>
              <li><a href="#" className="text-white hover:text-primary">Video Production</a></li>
              <li><a href="#" className="text-white hover:text-primary">Social Media</a></li>
              <li><a href="#" className="text-white hover:text-primary">Digital Campaign</a></li>
              <li><a href="#" className="text-white hover:text-primary">UI/UX</a></li>
              <li><a href="#" className="text-white hover:text-primary">SEO</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">About</a></li>
              <li><a href="#" className="text-white hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-white hover:text-primary">Testimonial</a></li>
              <li><a href="#" className="text-white hover:text-primary">Partners</a></li>
              <li><a href="#" className="text-white hover:text-primary">Portfolio</a></li>
              <li><a href="#" className="text-white hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className=" text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">Help center</a></li>
              <li><a href="#" className="text-white hover:text-primary">Terms of service</a></li>
              <li><a href="#" className="text-white hover:text-primary">Legal</a></li>
              <li><a href="#" className="text-white hover:text-primary">Privacy policy</a></li>
=======
        <div class="w-full md:w-3/4 flex flex-wrap">
          <div class="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 class=" text-white mb-4">Solution</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-white hover:text-primary">Brand & Design</a></li>
              <li><a href="#" class="text-white hover:text-primary">Video Production</a></li>
              <li><a href="#" class="text-white hover:text-primary">Social Media</a></li>
              <li><a href="#" class="text-white hover:text-primary">Digital Campaign</a></li>
              <li><a href="#" class="text-white hover:text-primary">UI/UX</a></li>
              <li><a href="#" class="text-white hover:text-primary">SEO</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 class=" text-white mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-white hover:text-primary">About</a></li>
              <li><a href="#" class="text-white hover:text-primary">Contact</a></li>
              <li><a href="#" class="text-white hover:text-primary">Testimonial</a></li>
              <li><a href="#" class="text-white hover:text-primary">Partners</a></li>
              <li><a href="#" class="text-white hover:text-primary">Portfolio</a></li>
              <li><a href="#" class="text-white hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-1/3">
            <h3 class=" text-white mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-white hover:text-primary">Help center</a></li>
              <li><a href="#" class="text-white hover:text-primary">Terms of service</a></li>
              <li><a href="#" class="text-white hover:text-primary">Legal</a></li>
              <li><a href="#" class="text-white hover:text-primary">Privacy policy</a></li>
>>>>>>> origin/main
            </ul>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="mt-8 border-t border-gray-400 pt-8 mx-8 pb-10 text-center">
        <p className="text-slate-400 text-sm">&copy;2024 TECHLERATE. All rights reserved</p>
=======
      <div class="mt-8 border-t border-gray-400 pt-4 text-center">
        <p class="text-white">&copy;2024 TECHLERATE. All rights reserved</p>
>>>>>>> origin/main
      </div>
    </div>
  </footer>
  )
}

export default Footer