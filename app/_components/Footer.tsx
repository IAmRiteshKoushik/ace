import React from 'react';
import Image from 'next/image';
import { Button, Box, Typography } from '@mui/material'; // Import Material UI components
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material'; // Import Material UI icons

export const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <footer className="relative flex flex-col items-center pt-10 pb-5">
        <div className="relative w-full max-w-4xl mx-auto"> {/* Set max width and center */}
          <Image
            src="/FooterCard.svg"
            alt="Footer"
            width={1000}
            height={500} // Adjust height as needed
            className="object-cover w-full h-auto" // Maintain aspect ratio
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-black">
            <Typography variant="h4" component="h2" fontWeight="bold">
              Amrita Center for Entrepreneurship
            </Typography>
            <Typography variant="h6" className="mt-2">
              Empowering Innovators, Building Tomorrow's Leaders
            </Typography>
            <Box mt={4} display="flex" gap={2}>
              <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} className="hover:bg-gray-700 transition duration-200">
                Join Us
              </Button>
              <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} className="hover:bg-gray-700 transition duration-200">
                Learn More
              </Button>
            </Box>
            <Box mt={6} display="flex" gap={4}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-black text-3xl hover:text-blue-600 transition duration-200" /> {/* Increased size */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-black text-3xl hover:text-blue-400 transition duration-200" /> {/* Increased size */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="text-black text-3xl hover:text-blue-700 transition duration-200" /> {/* Increased size */}
              </a>
            </Box>
          </div>
        </div>
      </footer>

      {/* Bottom links */}
      <div className="p-4 text-center text-slate-500 font-light w-[80%]">
        Amrita Centre for Entrepreneurship 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
