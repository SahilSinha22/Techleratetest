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
            </a>
          </div>
        </div>
  
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
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-400 pt-4 text-center">
        <p class="text-white">&copy;2024 TECHLERATE. All rights reserved</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer