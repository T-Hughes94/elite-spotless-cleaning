import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail, AiOutlineTool } from 'react-icons/ai';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      {/* Hamburger Menu */}
      <AiOutlineMenu onClick={toggleNav} className="absolute top-4 right-4 z-[99] md:hidden" />

      {/* Mobile Navigation */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a href="#home" onClick={closeNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="#services" onClick={closeNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineTool size={20} />
            <span className="pl-4">Services</span>
          </a>
          <a href="#about" onClick={closeNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineInfoCircle size={20} />
            <span className="pl-4">About Us</span>
          </a>
          <a href="#contact" onClick={closeNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a href="#home" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineHome size={20} />
          </a>
          <a href="#services" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineTool size={20} />
          </a>
          <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineInfoCircle size={20} />
          </a>
          <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
