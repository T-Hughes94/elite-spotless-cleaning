import React from 'react';
import ServiceItem from './ServiceItem';
import { FaHome, FaTruckMoving, FaTools } from 'react-icons/fa'; // Import your icons

const Services = () => {
  return (
    <div className="w-full bg-[#94c2d2] py-16">
      <div className="max-w-[1040px] mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-950">Cleaning Services</h1>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <ServiceItem 
            icon={<FaHome />} // Pass the icon here
            title="Residential Cleaning" 
            description={
              <>
                <h2 className="text-xl font-semibold">Basic Cleaning - $60/hr per cleaner</h2>
                <p>Our basic house cleaning service is far from basic. We offer flexible scheduling options, including weekly, bi-weekly, or monthly services to suit your needs. Our general cleaning package covers tasks such as putting things in their proper places, sanitizing common areas, sweeping, vacuuming, dusting, mopping, and more. Every room will receive thorough attention, ensuring your home is left spotless with our meticulous attention to detail.</p>
                <h2 className="text-xl font-semibold">Deep Cleaning - $80/hr per cleaner</h2>
                <p>Our deep cleaning service goes beyond the surface to provide an intensive sanitization process. We use specialized techniques and high-quality cleaning products to eliminate germs, bacteria, and allergens from your home. From kitchen appliances to bathroom fixtures, we ensure every corner is thoroughly cleaned and sanitized, leaving your home fresh and hygienic.</p>
                <h2 className="text-xl font-semibold">Regular Maintenance - $60/hr per cleaner</h2>
                <p>Our regular maintenance program is designed to keep your home in pristine condition between deep cleaning sessions. With regular visits from our professional cleaning team, you can enjoy a consistently clean and organized living space. We tailor our maintenance services to meet your specific needs, ensuring your home always looks its best.</p>
                <h2 className="text-xl font-semibold">Double the Cleaning Power!</h2>
                <p>Take advantage of our special offer! When you schedule residential cleaning services with us, we'll send two cleaning specialists to your location. With two specialists working together, your cleaning will be completed in half the scheduled time, saving you time and ensuring exceptional results. Don't miss out on this opportunity to experience the convenience and efficiency of our double cleaning power!</p>
                <p className="text-sm text-red-400">*Please note that prices are subject to change based on circumstances and competitive pricing.</p>
              </>
            }
          />
          <ServiceItem 
            icon={<FaTruckMoving />} // Pass the icon here
            title="Move Out Cleaning" 
            description={
              <>
                <h2 className="text-xl font-semibold">Move Out Cleaning - $65/hr per cleaner</h2>
                <p>Our move out cleaning services are tailored to the specific needs of relocating in New York City, we understand the overwhelming nature of relocation here. Whether you're moving to a new home or preparing to leave your current one, our professional cleaners will leave your space looking pristine.</p>
                <h3 className="text-lg font-semibold">Moving Out Services</h3>
                <p>When moving out, it's essential to leave your property in top condition to secure your security deposit or impress potential buyers. Our comprehensive move out cleaning services include:</p>
                <ul className="list-disc pl-6">
                  <li>Thorough cleaning of all rooms</li>
                  <li>Deep cleaning of kitchen appliances</li>
                  <li>Scrubbing and sanitizing bathrooms</li>
                  <li>Dusting and wiping down surfaces</li>
                  <li>Cleaning interior windows and mirrors</li>
                  <li>Vacuuming and mopping floors</li>
                  <li>Removing trash and debris</li>
                  <li>Attention to commonly overlooked areas</li>
                </ul>
                <h3 className="text-lg font-semibold">Moving In Service - $65/hr per cleaner</h3>
                <p>When moving into a new home, it's important to start with a clean slate. Our move in cleaning services ensure that your new space is thoroughly cleaned and ready for you to settle in comfortably. Our move in cleaning services include:</p>
                <ul className="list-disc pl-6">
                  <li>Deep cleaning of kitchen appliances</li>
                  <li>Sanitizing bathrooms</li>
                  <li>Wiping down surfaces</li>
                  <li>Cleaning interior windows and mirrors</li>
                  <li>Vacuuming and mopping floors</li>
                  <li>Dusting and wiping down surfaces</li>
                  <li>Attention to commonly overlooked areas</li>
                </ul>
                <p>You can trust us to provide exceptional move in and move out cleaning services for your home in New York City.</p>
                <p className="text-sm text-red-400">*Please note that prices are subject to change based on circumstances and competitive pricing.</p>
              </>
            }
          />
          <ServiceItem 
            icon={<FaTools />} // Pass the icon here
            title="Post Construction Cleaning" 
            description={
              <>
                <h2 className="text-xl font-semibold">Post Construction Cleaning - $60/hr per cleaner</h2>
                <p>Our post construction cleaning service ensures your space is spotless after any renovation or construction project. We offer flexible, around-the-clock availability to fit your schedule. Our services include:</p>
                <ul className="list-disc pl-5">
                  <li>Dusting and wiping all surfaces</li>
                  <li>Cleaning windows, mirrors, and glass</li>
                  <li>Removing paint, caulking, and adhesive residues</li>
                  <li>Vacuuming carpets and mopping floors</li>
                  <li>Cleaning light fixtures, vents, and HVAC systems</li>
                  <li>Polishing fixtures and appliances</li>
                  <li>Disposing of construction debris</li>
                </ul>
                <p>We tailor our services to meet your specific needs, ensuring complete satisfaction and a pristine environment.</p>
                <p className="text-sm text-red-400">*Please note that prices are subject to change based on circumstances and competitive pricing.</p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;


