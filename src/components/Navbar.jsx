// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail, AiOutlineTool } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const toggleNav = () => {
//     setNav(!nav);
//   };

//   const closeNav = () => {
//     setNav(false);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white shadow-md z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 <a href="#home" className="text-xl font-bold">Elite Spotless Cleaning</a>
//               </div>
//               <div className="hidden md:ml-6 md:flex md:space-x-8">
//                 <a href="#home" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Home
//                 </a>
//                 <a href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Services
//                 </a>
//                 <a href="#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   About Us
//                 </a>
//                 <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Contact
//                 </a>
//               </div>
//             </div>
//             <div className="-mr-2 flex items-center md:hidden">
//               <button onClick={toggleNav} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
//                 <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {nav && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a href="#home" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
//                 Home
//               </a>
//               <a href="#services" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
//                 Services
//               </a>
//               <a href="#about" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
//                 About Us
//               </a>
//               <a href="#contact" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import ecsLogo from '../assets/ecslogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full bg-green-400 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src={ecsLogo} // Replace with your logo path
                alt="Elite Spotless Cleaning"
                className="h-16 w-16 mr-2"
              />
              <a href="#home" className="text-xl font-bold text-white">Elite Spotless Cleaning</a>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <a href="#home" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900">
                Home
              </a>
              <a href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900">
                Services
              </a>
              <a href="#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900">
                About Us
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button onClick={toggleNav} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {nav && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-100">
                Home
              </a>
              <a href="#services" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-100">
                Services
              </a>
              <a href="#about" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-100">
                About Us
              </a>
              <a href="#contact" onClick={closeNav} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-100">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;