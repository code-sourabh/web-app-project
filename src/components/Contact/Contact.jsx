import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      toast.success('You have successfully filled the form. Thanks!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  const whatsappLink = `https://wa.me/+919560903337?text=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
  )}`;

  return (
    <div className="bg-gray-50 p-8 flex flex-col items-center min-h-screen mt-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
            WE ARE ALWAYS HERE TO HELP YOU.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
          Learn how we can help you take the next step in your transformation journey.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">VISIT US</h3>
                <ul className="list-disc text-gray-700 pl-6 text-start">
                  <li>179 Leisie Road, Renfrew Pennsylvania (PA), 16053 [United States of America]</li>
                  <li>36 Sunder Nagar, Industrial Estate, Indore Madhya Pradesh - 452015, [India]</li>
                  <li>11 Bestwood Park Dr W, Nottingham NG5 5EJ, [United Kingdom]</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EMAIL ADDRESS</h3>
                <p className="text-gray-700">enquiry@webrass.com</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CALL NOW</h3>
                  <ul className="text-gray-700 text-start">
                    <li>+1-7247771339</li>
                    <li>+91-9560903337</li>
                    <li>+44-7379959424</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                className="w-full p-4 rounded-md border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
              <div className="flex justify-between items-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Send via WhatsApp
                </a>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-8 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
