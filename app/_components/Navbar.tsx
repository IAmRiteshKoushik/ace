'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button'; // Assuming your ShadCN Button component path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full">
      {/* Main navbar content */}
      <motion.div
        className="fixed top-0 z-50 w-full flex items-center justify-between py-4 px-6 bg-transparent backdrop-blur-sm" // Reduced blur effect here
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-orange-300 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-center h-12 text-center">
            <span className="text-lg text-gray-300 font-semibold leading-none">Amrita Center For</span>
            <span className="text-lg text-gray-300 font-semibold leading-none">Entrepreneurship</span>
          </div>
        </div>

        {/* Links in the center */}
        <div className="mr-20 hidden md:flex flex-grow items-center justify-center space-x-4">
          {['Home', 'Events', 'Blogs', 'Newsletter', 'Achievements', 'Timeline'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg text-gray-300 px-4 py-2 rounded-md transition-transform duration-300 hover:scale-110 font-sans"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Login button on the right */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" className="mr-2 rounded-lg px-4 py-2 hover:text-orange-500 hover:bg-transparent transition-colors duration-300">
              Login
            </Button>
          </Link>

          {/* Hamburger menu button for mobile view */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 md:hidden">
          <div className="w-[80%] mx-auto space-y-4">
            {['Home', 'Events', 'Blogs', 'Newsletter', 'Achievements', 'Timeline'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-xl text-gray-300 hover:scale-110 transition-transform duration-300 px-3 py-2 rounded-md text-center font-sans"
              >
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
