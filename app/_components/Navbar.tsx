'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Info, Menu, X, CircleUser } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from "../../components/Logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Main navbar content centered */}
      <motion.div
        className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-4 w-3/4"
        initial={{ opacity: 0, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
      >
        <div className="flex w-full justify-between mx-auto shadow-lg shadow-neutral-600/10 backdrop-blur-lg border border-gray-800/10 p-4 rounded-2xl"> {/* Changed border color */}
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Logo"
                width={50} // Adjust width as needed
                height={50} // Adjust height as needed
                className="object-contain" // Ensures the image scales properly
              />
            </Link>
          </div>

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
            <Link
              href="/"
              className="ml-2 font-mono text-xl text-gray-400 hover:text-gray-100 px-4 py-2 rounded-md flex-1 text-center 
              border border-transparent hover:border-gray-500 hover:rounded-full hover:bg-gray-700 hover:bg-opacity-5 
              transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="ml-2 font-mono text-xl text-gray-400 hover:text-gray-100 px-4 py-2 rounded-md flex-1 text-center 
              border border-transparent hover:border-gray-500 hover:rounded-full hover:bg-gray-700 hover:bg-opacity-5 
              transition-all duration-300"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="ml-2 font-mono text-xl text-gray-400 hover:text-gray-100 px-4 py-2 rounded-md flex-1 text-center 
              border border-transparent hover:border-gray-500 hover:rounded-full hover:bg-gray-700 hover:bg-opacity-5 
              transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="relative md:hidden w-[80%] mx-auto">
          <div className="absolute right-0 bg-gray-800 text-gray-100 w-full space-y-1 px-4 pt-4 pb-3 rounded-md shadow-lg">
            <Link href="/" className="block font-mono hover:bg-gray-700 px-3 py-2 rounded-md flex items-center">
              <Menu size={20} className="mr-2" />
              Home
            </Link>
            <Link href="/about" className="block font-mono hover:bg-gray-700 px-3 py-2 rounded-md flex items-center">
              <Info size={20} className="mr-2" />
              About
            </Link>
            <Link href="/contact" className="block font-mono hover:bg-gray-700 px-3 py-2 rounded-md flex items-center">
              <CircleUser size={20} className="mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
