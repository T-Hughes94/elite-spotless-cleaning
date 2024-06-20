import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

// Initial state for the form
const initialState = {
  name: '',
  address: '',
  zipCode: '',
  phone: '',
  email: '',
  serviceCategory: '',
  serviceType: '',
  today: new Date(),
  startDate: new Date(),
  startTime: '09:00',
  numberOfSpecialists: '1',
  estimatedTimeNeeded: '',
  additionalInfo: ''
};

// Service prices for different types of services
const servicePrices = {
  'Basic Clean': 60,
  'Deep Clean': 80,
  'Regular Maintenance': 60,
  'Move Out Cleaning': 70,
  'Post Construction Cleaning': 65
};

// NYC sales tax rate
const nycSalesTaxRate = 0.08875;

// Services available
const services = [
  { category: 'Residential Cleaning', types: ['Basic Clean', 'Deep Clean', 'Regular Maintenance'] },
  'Move Out Cleaning',
  'Post Construction Cleaning'
];

function QuoteForm() {
  const [formState, setFormState] = useState(initialState);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [estimatedQuote, setEstimatedQuote] = useState('');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); 
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please enter valid information.');
      return;
    }

    const estimatedQuoteValue = calculateEstimatedQuote();

    const templateParams = {
      ...formState,
      to_name: 'Service Provider',
      startDate: formState.startDate.toLocaleDateString(),
      today: formState.today.toLocaleDateString(),
      estimatedQuote: estimatedQuoteValue // Include estimated quote in template params
    };

    sendEmails(templateParams, estimatedQuoteValue);
  };

  // Calculate the estimated quote based on the service and time
  const calculateEstimatedQuote = () => {
    const hours = parseInt(formState.estimatedTimeNeeded, 10);
    let hourlyRate = 0;

    switch (formState.serviceCategory) {
      case 'Residential Cleaning':
        hourlyRate = servicePrices[formState.serviceType];
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

    const baseCost = hours * hourlyRate;
    const tax = baseCost * nycSalesTaxRate;
    const totalCost = baseCost + tax;

    return `$${totalCost.toFixed(2)}`;
  };

  // Validate the entire form
  const validateForm = () => {
    return (
      validateName(formState.name) &&
      validatePhone(formState.phone) &&
      validateEmail(formState.email) &&
      validateAddress(formState.address) &&
      validateZipCode(formState.zipCode)
    );
  };

  // Validation functions for each field
  const validateName = (name) => /^[A-Za-z\s]{1,}$/.test(name);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateAddress = (address) => /^[A-Za-z0-9\s,-]{1,}$/.test(address);
  const validateZipCode = (zipCode) => /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);

  // Send emails to the service provider
  const sendEmails = async (templateParams, estimatedQuoteValue) => {
    try {
      // Send email to service provider
      await emailjs.send('service_kbv0pek', 'template_dzhbgmc', templateParams);
      console.log('Email to service provider sent successfully');
    } catch (error) {
      console.error('Failed to send email to service provider:', error);
    }

    setShowConfirmation(true);
    setEstimatedQuote(estimatedQuoteValue);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
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
                  name='name'
                  value={formState.name}
                  onChange={handleChange}
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
                  name='phone'
                  value={formState.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Phone number should be 10 digits"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Address</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='text'
                  name='address'
                  value={formState.address}
                  onChange={handleChange}
                  placeholder="Enter street address"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>ZIP Code</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='text'
                  name='zipCode'
                  value={formState.zipCode}
                  onChange={handleChange}
                  placeholder="Enter ZIP code"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  type='email'
                  name='email'
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Service Category</label>
                <select
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  name='serviceCategory'
                  value={formState.serviceCategory}
                  onChange={handleChange}
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
              {formState.serviceCategory === 'Residential Cleaning' && (
                <div className='flex flex-col'>
                  <label className='uppercase text-sm font-semibold py-2'>Service Type</label>
                  <select
                    className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                    name='serviceType'
                    value={formState.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service type</option>
                    {services.find(service => service.category === 'Residential Cleaning')
                      .types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                  </select>
                </div>
              )}
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Start Date</label>
                <DatePicker
                  selected={formState.startDate}
                  onChange={date => setFormState(prevState => ({ ...prevState, startDate: date }))}
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  dateFormat='MM/dd/yyyy'
                  minDate={formState.today}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Start Time</label>
                <input
                  type='time'
                  name='startTime'
                  value={formState.startTime}
                  onChange={handleChange}
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Number of Specialists</label>
                <input
                  type='number'
                  name='numberOfSpecialists'
                  value={formState.numberOfSpecialists}
                  onChange={handleChange}
                  min='1'
                  max='2'
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Estimated Time Needed (Hours)</label>
                <input
                  type='number'
                  name='estimatedTimeNeeded'
                  value={formState.estimatedTimeNeeded}
                  onChange={handleChange}
                  min='1'
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Additional Information</label>
                <textarea
                  name='additionalInfo'
                  value={formState.additionalInfo}
                  onChange={handleChange}
                  rows='4'
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                ></textarea>
              </div>
            </div>
            <div className='w-full text-center'>
              <button
                type='submit'
                className='bg-gray-950 text-white py-3 px-6 mt-4 rounded-lg uppercase tracking-wide font-semibold hover:bg-gray-500 focus:outline-none'
              >
                Get My Quote
              </button>
            </div>
          </form>
        ) : (
          <div className='text-center'>
            <p className='text-4xl font-semibold text-red-500'>
              Thank you for your request!
            </p>
            <p className='py-4'>
              We have received your submission and will contact you shortly to confirm the details and schedule your cleaning.
            </p>
            <p className='py-4'>
              Your estimated quote is: <strong className='text-xl text-red-500'>{estimatedQuote}</strong>
            </p>
            <p className='py-4'>
              Keep in mind that your estimate is to give a general idea of how much the cost of our services will be. This can change with special requirements specific to your needs. Thank you.
            </p>
            <p className='py-4 text-xl'>Best regards,<br />Elite Spotless Cleaning</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuoteForm;
