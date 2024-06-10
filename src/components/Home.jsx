import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import bkgrndLogo from '../assets/eclbkgrnd.jpg';

const Home = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bkgrndLogo})` }}>
      <div className="bg-white/70 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Elite Spotless Cleaning</h1>
        <p className="text-lg text-gray-700 mb-4">
          Elite Spotless Cleaning offers a unique and unparalleled service. Our primary focus is on exceeding our clients' expectations by consistently going the extra mile for you.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          As a well-established and highly skilled cleaning service provider, we pride ourselves on delivering exceptional customer service and top-tier cleaning solutions. We are a dedicated team of professionals who cater to the requirements of our esteemed clientele residing in the New York City Region.
        </p>
        <h2 className="justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800">
          <TypeAnimation
            sequence={[
              'Professional Cleaning Services 🧹',
              500,
              'Commercial & Residential 🏠',
              500,
              'Experienced & Reliable 🛠️',
              500,
            ]}
            wrapper="div"
            cursor={true}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;



