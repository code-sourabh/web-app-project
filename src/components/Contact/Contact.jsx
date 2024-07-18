import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      
      // Display success toast and reset form data
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
      // Handle error if submission fails
      toast.error('An error occurred. Please try again.');
    }
  };

  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
  )}`;

  return (
    <div className="bg-white p-8 flex justify-center items-center min-h-screen mt-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
            WE ARE ALWAYS HERE TO HELP YOU.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            There are many variants of passages the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">VISIT US</h3>
                <p className="text-gray-700">66 Broklyn Street, New York, USA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">EMAIL ADDRESS</h3>
                <p className="text-gray-700">softoweb1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-start">CALL NOW</h3>
                <p className="text-gray-700">01934565397</p>
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
