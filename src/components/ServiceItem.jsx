import React, { useState } from 'react';

const ServiceItem = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const scrollToQuoteForm = () => {
    const quoteFormElement = document.getElementById('quote');
    if (quoteFormElement) {
      quoteFormElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group bg-white p-6">
      <div className="text-center flex flex-col items-center">
        <div className="text-4xl mb-4">{icon}</div> {/* Display icon above title */}
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
      </div>
      <div className="absolute inset-0 hidden group-hover:flex justify-center items-center bg-gray-800 bg-opacity-75 text-white">
        <button
          onClick={handleButtonClick}
          className="p-3 rounded-lg bg-white text-gray-800 font-bold"
        >
          Learn More
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[80%] max-w-[1000px] mx-auto relative">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="max-h-80 overflow-y-auto">{description}</div>
            <div className="flex justify-between mt-4">
              <button onClick={closePopup} className="px-4 py-2 bg-gray-800 text-white rounded">
                Close
              </button>
              <button
                onClick={scrollToQuoteForm}
                className="px-4 py-2 bg-gray-800 text-white rounded"
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;

