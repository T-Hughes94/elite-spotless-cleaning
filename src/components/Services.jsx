// import React from 'react';
// import ServiceItem from './ServiceItem';
// import residentialImg from '../assets/residential.png';
// import moveOutImg from '../assets/moveout.png';
// import postConstructionImg from '../assets/postconstruction.png';

// const Services = () => {
//   return (
//     <div id="services" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
//       <h1 className="text-4xl font-bold text-center text-[#001b5e]">Our Services</h1>
//       <div className="flex gap-8 mt-8">
//         <ServiceItem 
//           img={residentialImg} 
//           title="Residential Cleaning" 
//           description="We offer basic cleaning, deep cleaning, and regular maintenance services for residential properties."
//         />
//         <ServiceItem 
//           img={moveOutImg} 
//           title="Move Out Cleaning" 
//           description="We ensure your place is spotless when you move out."
//         />
//         <ServiceItem 
//           img={postConstructionImg} 
//           title="Post Construction Cleaning" 
//           description="We handle the mess after construction work."
//         />
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import ServiceItem from './ServiceItem';
import residentialImg from '../assets/residential.png';
import moveOutImg from '../assets/moveout.png';
import postConstructionImg from '../assets/postconstruction.png';

const Services = () => {
  return (
    <div id="services" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <ServiceItem 
          img={residentialImg} 
          title="Residential Cleaning" 
          description="We offer basic cleaning, deep cleaning, and regular maintenance services for residential properties."
        />
        <ServiceItem 
          img={moveOutImg} 
          title="Move Out Cleaning" 
          description="We ensure your place is spotless when you move out."
        />
        <ServiceItem 
          img={postConstructionImg} 
          title="Post Construction Cleaning" 
          description="We handle the mess after construction work."
        />
      </div>
    </div>
  );
};

export default Services;

