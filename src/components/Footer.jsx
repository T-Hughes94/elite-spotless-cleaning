import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-950 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl md:text-3xl font-bold">Contact Us:</span>
          <ul className="mt-2 text-lg">
            <li><FaEnvelope className="inline-block mr-3 text-xl" />info@elitespotlesscleaning.com</li>
            <li><FaPhone className="inline-block mr-3 text-xl" />+1 (123) 456-7890</li>
          </ul>
        </div>
        <div className="flex items-center">
          <span className="text-xl md:text-2xl mr-4">Follow us:</span>
          <a href="https://www.instagram.com/elitespotlesscleaningllc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FaInstagram className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

