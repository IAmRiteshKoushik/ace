'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Info, Menu, X, CircleUser } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Main navbar content centered */}
      <motion.div
        className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-2/3"
        initial={{ opacity: 0, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
      >
        <div className="flex w-full justify-between mx-auto shadow-xl shadow-neutral-900/50 backdrop-blur-md border border-gray-500/30 p-4 rounded-[1.5rem]">
          <Link href="/" className="flex items-center space-x-2">
            {/* Increased Phoenix SVG size */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45" height="45">
              <g fill="none" strokeWidth="2">
                <path d="M32,12 C28,14 27,19 32,22 C37,19 36,14 32,12 Z" stroke="black" fill="#FF4500"/>
                <path d="M32,22 Q28,26 20,30 Q22,20 14,18" stroke="#FF4500" fill="none"/>
                <path d="M32,22 Q36,26 44,30 Q42,20 50,18" stroke="#FF4500" fill="none"/>
                <path d="M32,22 Q26,30 30,44 Q32,40 34,44 Q38,30 32,22" stroke="#FF4500" fill="none"/>
                <path d="M32,12 Q20,30 12,38 Q30,30 32,44 Q34,30 52,38 Q44,30 32,12" stroke="orange" fill="none"/>
              </g>
            </svg>
          </Link>

          {/* Hamburger menu button aligned to the right */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Links visible only on larger screens */}
          <div className="hidden md:flex flex-grow items-center justify-around">
            {['Home', 'About', 'Contact', 'Events'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="ml-2 text-lg text-gray-300 px-4 py-2 rounded-md flex-1 text-center 
                transition-transform duration-300 hover:scale-110 font-sans"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="relative md:hidden w-[80%] mx-auto">
          <div className="absolute right-0 bg-gray-900 text-gray-100 w-full space-y-1 px-4 pt-4 pb-3 rounded-md shadow-lg">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="block text-lg text-gray-300 hover:scale-110 transition-transform duration-300 px-3 py-2 rounded-md flex items-center font-sans">
                {item === 'Home' && <Menu size={20} className="mr-2" />}
                {item === 'About' && <Info size={20} className="mr-2" />}
                {item === 'Contact' && <CircleUser size={20} className="mr-2" />}
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
