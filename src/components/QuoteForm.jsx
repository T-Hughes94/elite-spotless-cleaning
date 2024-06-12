import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function QuoteForm() {
  const [service, setService] = useState('');
  const [today, setToday] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const services = [
    'Residential Cleaning',
    'Move Out Cleaning',
    'Post Construction Cleaning'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data for EmailJS here
    // Example:
    // const templateParams = {
    //   name: e.target.name.value,
    //   phone: e.target.phone.value,
    //   email: e.target.email.value,
    //   service: service,
    //   today: today.toLocaleDateString(),
    //   startDate: startDate.toLocaleDateString(),
    //   endDate: endDate.toLocaleDateString(),
    //   startTime: e.target.starttime.value,
    //   endTime: e.target.endtime.value,
    //   info: e.target.info.value
    // };
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //   });
  };

  return (
    <div className="w-full bg-white py-16">
      <div id="quote" className="max-w-[1040px] mx-auto p-4 bg-[#94c2d2] shadow-lg rounded-lg">
        <h1 className="py-4 text-4xl font-bold text-center text-[#030712]">
          Get A Quote
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='grid md:grid-cols-2 gap-4 w-full'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Name</label>
              <input className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' type='text' name='name' required />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Phone Number</label>
              <input className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' type='text' name='phone' required />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Email</label>
              <input className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' type='email' name='email' required />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Service</label>
              <select className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' name='service' value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Today's Date</label>
              <DatePicker
                selected={today}
                onChange={(date) => setToday(date)}
                className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e] w-full'
                name='today'
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
                name='startday'
                dateFormat='MM/dd/yyyy'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>Start Time</label>
              <input className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' type='time' name='starttime' required />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e] w-full'
                name='endday'
                dateFormat='MM/dd/yyyy'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm font-semibold py-2'>End Time</label>
              <input className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]' type='time' name='endtime' required />
            </div>
            <div className='flex flex-col col-span-2'>
              <label className='uppercase text-sm font-semibold py-2'>Additional Information</label>
              <textarea className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e] w-full' rows='10' name='info'></textarea>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <button className='px-6 py-2 bg-gray-950 text-white rounded-lg hover:bg-[#94c2d2] hover:text-white transition duration-200'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
