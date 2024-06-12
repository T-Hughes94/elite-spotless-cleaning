import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold">Contact Us:</span>
          <ul className="mt-2">
            <li>Email: info@elitespotlesscleaning.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Follow us:</span>
          <a href="https://www.instagram.com/elitespotlesscleaning/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l2 5m-10 1a7 7 0 113.56-6.06 3 3 0 01-5.34 2.06A7 7 0 016 12v1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
