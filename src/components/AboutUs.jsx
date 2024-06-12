import React from 'react';
import cityImage from '../assets/newyork.png'; // Update the path to your image

const AboutUs = () => {
  return (
    <div id="about" className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img src={cityImage} alt="Mission Image" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div>
        <h2 className="text-2xl font-bold"> Our Mission</h2>
        <p>
          At Elite Spotless Cleaning, we strive to provide exceptional residential cleaning solutions that are not only of the highest quality but also affordable for our customers. We take immense pride in the unwavering dedication and hard work exhibited by our team, understanding the individual needs of each customer, and guaranteeing utmost satisfaction through remarkable outcomes.

          Our fundamental principles revolve around building trust and forging long-lasting relationships with our valued clients. We achieve this by maintaining transparency and demonstrating an unwavering commitment to excellence. Our ultimate goal is to exceed expectations while delivering an unmatched service that creates a lasting impact on every single client we have the privilege to serve.

          In our organization, we understand that a clean environment is more than just a visually appealing space; it’s a sanctuary that fosters clarity, tranquility, and overall well-being. Our comprehensive cleaning solutions are designed to cater to the specific needs of our clients, ensuring that their homes are not only spotless but also conducive to a healthy and harmonious lifestyle.

          Join us in our journey to create cleaner, healthier, and more beautiful living spaces. Together, we can transform your home into a pristine sanctuary where serenity and cleanliness reign supreme.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;


