import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function QuoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [today, setToday] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('09:00'); // Initial start time
  const [numberOfSpecialists, setNumberOfSpecialists] = useState('1');
  const [estimatedTimeNeeded, setEstimatedTimeNeeded] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [estimatedQuote, setEstimatedQuote] = useState('');

  // Define service prices (hourly rates)
  const servicePrices = {
    'Basic Clean': 60,
    'Deep Clean': 80,
    'Regular Maintenance': 60,
    'Move Out Cleaning': 70,
    'Post Construction Cleaning': 65
  };

  // NYC sales tax rate
  const nycSalesTaxRate = 0.08875;

  const services = [
    { category: 'Residential Cleaning', types: ['Basic Clean', 'Deep Clean', 'Regular Maintenance'] },
    'Move Out Cleaning',
    'Post Construction Cleaning'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateName(name) || !validatePhone(phone) || !validateEmail(email)) {
      alert('Please enter valid information.');
      return;
    }

    // Calculate estimated quote
    const estimatedQuoteValue = calculateEstimatedQuote();

    // Display confirmation message with estimated quote
    setShowConfirmation(true);
    setEstimatedQuote(estimatedQuoteValue);

    // Example: Uncomment and adjust for EmailJS integration
    // const templateParams = {
    //   name: name,
    //   phone: phone,
    //   email: email,
    //   serviceCategory: serviceCategory,
    //   serviceType: serviceType,
    //   today: today.toLocaleDateString(),
    //   startDate: startDate.toLocaleDateString(),
    //   startTime: startTime,
    //   numberOfSpecialists: numberOfSpecialists,
    //   estimatedTimeNeeded: estimatedTimeNeeded,
    //   additionalInfo: additionalInfo
    // };
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //   });
  };

  const calculateEstimatedQuote = () => {
    // Ensure estimatedTimeNeeded is a number
    const hours = parseInt(estimatedTimeNeeded);
  
    // Get hourly rate based on selected service type
    let hourlyRate = 0;
    switch (serviceCategory) {
      case 'Residential Cleaning':
        hourlyRate = servicePrices[serviceType];
        break;
      case 'Move Out Cleaning':
        hourlyRate = servicePrices['Move Out Cleaning'];
        break;
      case 'Post Construction Cleaning':
        hourlyRate = servicePrices['Post Construction Cleaning'];
        break;
      default:
        return 'Service type not recognized';
    }
  
    // Calculate base cost
    const baseCost = hours * hourlyRate;
  
    // Calculate tax
    const tax = baseCost * nycSalesTaxRate;
  
    // Calculate total cost including tax
    const totalCost = baseCost + tax;
  
    return `$${totalCost.toFixed(2)}`; // Return formatted cost
  };
  

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]{1,}$/;
    return regex.test(name);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="w-full bg-white py-16">
      <div id="quote" className="max-w-[1040px] mx-auto p-4 bg-[#94c2d2] shadow-lg rounded-lg">
        <h1 className="py-4 text-4xl font-bold text-center text-[#030712]">
          Get A Quote
        </h1>
        {!showConfirmation ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className='grid md:grid-cols-2 gap-4 w-full'>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Name</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  pattern="[A-Za-z\s]{1,}"
                  title="Name should contain only letters"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Phone Number</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='tel'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{10}"
                  title="Phone number should be 10 digits"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Service Category</label>
                <select
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  required
                >
                  <option value="">Select a service category</option>
                  {services.map((service, index) => (
                    typeof service === 'object' ? (
                      <option key={index} value={service.category}>{service.category}</option>
                    ) : (
                      <option key={index} value={service}>{service}</option>
                    )
                  ))}
                </select>
              </div>
              {serviceCategory === 'Residential Cleaning' && (
                <div className='flex flex-col'>
                  <label className='uppercase text-sm font-semibold py-2'>Service Type</label>
                  <select
                    className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                  >
                    <option value="">Select a service type</option>
                    {services.find(service => service.category === 'Residential Cleaning').types.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Today's Date</label>
                <DatePicker
                  selected={today}
                  onChange={(date) => setToday(date)}
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e] w-full'
                  dateFormat='MM/dd/yyyy'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Start Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e] w-full'
                  dateFormat='MM/dd/yyyy'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Start Time</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='time'
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Number Of Specialists</label>
                <select
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  value={numberOfSpecialists}
                  onChange={(e) => setNumberOfSpecialists(e.target.value)}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Estimated Time Needed (Hours)</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='number'
                  value={estimatedTimeNeeded}
                  onChange={(e) => setEstimatedTimeNeeded(e.target.value)}
                  min='1'
                  required
                />
              </div>
              <div className='flex flex-col col-span-2'>
                <label className='uppercase text-sm font-semibold py-2'>Additional Information</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  rows='4'
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-gray-950 hover:bg-[#003566] text-white font-bold py-3 px-6 mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001b5e]'
              >
                Get Quote
              </button>
            </div>
          </form>
        ) : (
          <div className='text-center'>
            <p className='text-3xl font-semibold text-red-500 mb-4'>Thank you for your request!</p>
            <p className='text-lg text-[#030712] mb-4'>
              We have received your information. Our team will contact you soon with an estimated quote of <span className='font-bold text-red-500'>{estimatedQuote}</span>.
            </p>
            <p className='text-lg text-[#030712] mb-4'>
              If you have any more questions or need immediate assistance, please call us at <span className='font-bold text-red-500'>123-456-7890</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuoteForm;

