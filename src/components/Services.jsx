import React from 'react';
import ServiceItem from './ServiceItem';
import residentialImg from '../assets/residential.png';
import moveOutImg from '../assets/moveout.png';
import postConstructionImg from '../assets/postconstruction.png';

const Services = () => {
  return (
    <div id="services" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Cleaning Services</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        <ServiceItem 
          img={residentialImg} 
          title="Residential Cleaning" 
          description={
            <>
              <h2 className="text-xl font-semibold">Basic Cleaning</h2>
              <p>Our basic house cleaning service is far from basic. We offer flexible scheduling options, including weekly, bi-weekly, or monthly services to suit your needs. Our general cleaning package covers tasks such as putting things in their proper places, sanitizing common areas, sweeping, vacuuming, dusting, mopping, and more. Every room will receive thorough attention, ensuring your home is left spotless with our meticulous attention to detail.</p>
              <h2 className="text-xl font-semibold">Deep Cleaning</h2>
              <p>Our deep cleaning service goes beyond the surface to provide an intensive sanitization process. We use specialized techniques and high-quality cleaning products to eliminate germs, bacteria, and allergens from your home. From kitchen appliances to bathroom fixtures, we ensure every corner is thoroughly cleaned and sanitized, leaving your home fresh and hygienic.</p>
              <h2 className="text-xl font-semibold">Regular Maintenance</h2>
              <p>Our regular maintenance program is designed to keep your home in pristine condition between deep cleaning sessions. With regular visits from our professional cleaning team, you can enjoy a consistently clean and organized living space. We tailor our maintenance services to meet your specific needs, ensuring your home always looks its best.</p>
              <h2 className="text-xl font-semibold">Double the Cleaning Power!</h2>
              <p>Take advantage of our special offer! When you schedule residential cleaning services with us, we'll send two cleaning specialists to your location. With two specialists working together, your cleaning will be completed in half the scheduled time, saving you time and ensuring exceptional results. Don't miss out on this opportunity to experience the convenience and efficiency of our double cleaning power!</p>
            </>
          }
        />
        <ServiceItem 
        img={moveOutImg} 
        title="Move Out Cleaning" 
        description={
            <>
            <h2 className="text-xl font-semibold">Move Out Cleaning</h2>
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
            <h3 className="text-lg font-semibold">Moving In Services</h3>
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
            <p>With our understanding of the overwhelming nature of moving in the city, coupled with our attention to detail and commitment to excellence, you can trust us to provide exceptional move in and move out cleaning services for your home in New York City.</p>
            </>
        }
        />
        <ServiceItem 
        img={postConstructionImg} 
        title="Post Construction Cleaning" 
        description={
            <>
            <h2 className="text-xl font-semibold">Post Construction Cleaning</h2>
            <p>
                Tired of the hassle and mess that comes with post-construction cleaning? Look no further than Elite Spotless Cleaning. We understand the importance of making your home shine like new after a construction project, which is why we offer top-notch cleaning solutions.
            </p>
            <p>
                Whether you’ve just completed renovations or various construction procedures, our team at Elite Spotless Cleaning is here to take care of all the dirt and debris. With a wide range of customizable options, we can tailor our services to fit your specific needs and preferences.
            </p>
            <p>
                We pride ourselves on providing around-the-clock availability. Whether it’s a residential space or an office in need of a fresh start, our meticulous approach ensures optimal results every time. Before you step back into your transformed space, rest assured it will be left immaculate and rejuvenated.
            </p>
            <p>
                Our promise to you is complete satisfaction with each clean. Say goodbye to unsightly dust and hello to a pristine environment.
            </p>
            <ul className="list-disc pl-5">
                <li>Dusting and wiping down all surfaces, including ceilings, walls, and floors.</li>
                <li>Cleaning windows, mirrors, and other glass surfaces.</li>
                <li>Removing paint, caulking, and adhesive residues.</li>
                <li>Vacuuming carpets and mopping hard floors.</li>
                <li>Cleaning light fixtures, vents, and HVAC systems.</li>
                <li>Polishing fixtures, faucets, and appliances.</li>
                <li>Disposing of construction debris and trash.</li>
            </ul>
            </>
        }
        />

      </div>
    </div>
  );
};

export default Services;

