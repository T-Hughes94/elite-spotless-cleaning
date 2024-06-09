import React from 'react';

const Services = () => {
  return (
    <div id="services" className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Our Services</h2>
      <div>
        <h3 className="text-xl font-semibold">Residential Cleaning</h3>
        <ul>
          <li>Basic Cleaning</li>
          <li>Deep Clean</li>
          <li>Regular Maintenance</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Move Out Cleaning</h3>
        <p>We ensure your place is spotless when you move out.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Post Construction Cleaning</h3>
        <p>We handle the mess after construction work.</p>
      </div>
    </div>
  );
};

export default Services;
