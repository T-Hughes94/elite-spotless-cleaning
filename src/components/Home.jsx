import React from 'react';
import ecsLogo from '../assets/ecslogo.png';

const Home = () => {
  const handleQuoteButtonClick = () => {
    const quoteForm = document.getElementById('quote');
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${ecsLogo})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        paddingTop: '4rem', // Adjust the padding top as needed
      }}
    >
      <div className="bg-white/70 p-8 rounded-lg shadow-lg max-w-3xl text-center mx-4 md:mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Elite Spotless Cleaning</h1>
        <p className="text-xl md:text-2xl text-gray-950 mb-4">
          Elite Spotless Cleaning offers a unique and unparalleled service. Our primary focus is on exceeding our clients' expectations by consistently going the extra mile for you.
        </p>
        <p className="text-xl md:text-2xl text-gray-850 mb-4">
          As a well-established and highly skilled cleaning service provider, we pride ourselves on delivering exceptional customer service and top-tier cleaning solutions. We are a dedicated team of professionals who cater to the requirements of our esteemed clientele residing in the New York City Region.
        </p>
        {/* Button to navigate to the quote form */}
        <button className="px-6 py-3 mt-8 bg-gray-950 text-white rounded-lg hover:bg-[#94c2d2] transition duration-300" onClick={handleQuoteButtonClick}>
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Home;




