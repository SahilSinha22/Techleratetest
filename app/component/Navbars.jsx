import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="relative">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        {/* Your video source here */}
        <source src="/earth.mp4" type="video/mp4" />
      </video>
      <nav className="absolute inset-0 flex justify-center items-center z-10">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Media">Portfolio</Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
