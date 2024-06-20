import React from 'react';
import cityImage from '../assets/newyork.png'; // Update the path to your image

const AboutUs = () => {
  return (
    <div id="about" className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:order-2">
        <img src={cityImage} alt="Mission Image" className="w-full h-auto rounded-lg shadow-lg md:ml-auto" />
      </div>
      <div className="md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          At Elite Spotless Cleaning, we provide exceptional cleaning solutions that are of the highest quality and affordable for our customers. We take pride in the unwavering dedication and hard work exhibited by our team, understanding the individual needs of each customer, and guaranteeing your satisfaction with remarkable outcomes.

          Our principles revolve around building trust and forging lasting relationships with our valued clients. We achieve this through maintaining transparency and demonstrating a commitment to excellence. Our ultimate goal is to exceed expectations while delivering service that creates a lasting impact on every single client we have the privilege to serve.

         ful living spaces. Together, we can transform your home into a pristine sanctuary where serenity and cleanliness reign supreme.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

