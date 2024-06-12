import React, { useState } from 'react';

const ServiceItem = ({ img, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl group-hover:opacity-10"
      />
      <div className="absolute inset-0 hidden group-hover:block flex justify-center items-center text-center text-white">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
      </div>
      <div className="absolute bottom-2 left-2 hidden group-hover:block">
        <button
          onClick={handleButtonClick}
          className="p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer"
        >
          More Info
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[70%] max-w-[800px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;


