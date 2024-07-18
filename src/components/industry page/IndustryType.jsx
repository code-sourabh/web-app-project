import React, { useState } from 'react';
import "./industryType.css";
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: '☁️',
    title: 'Finance Service',
    link: '/industries/finance',
    content: {
      title: 'Cloud-Based Platform Enabled hub.brussels Seamless Data Integration',

      description: 'Financial services companies encounter significant challenges in securing digital payments, releasing affordable products, and navigating the complex regulatory landscape. To address these issues, they seek trusted experts in cloud computing for financial services to develop resilient digital infrastructures that facilitate technology-led innovation and keep pace with evolving value chains',
    },
  },
  {
    icon: '🤖',
    title: 'Telecom',
    link: '/industries/telecom',
    content: {
      title: 'Dashboard Enabled Real-Time Insights for Telekom Malaysia',
      description:
                "Telekom Malaysia Berhad (TM), the nation's leading telecommunications provider, sought Webrass's expertise to develop a reporting solution. This solution performs near real-time sentiment analysis on Twitter and community forum data, supporting TM's mission to enhance telecommunications technology and services for all Malaysians.",
    },
  },
  {
    icon: '🤖',
    title: 'Media & Entertainment',
    link: '/industries/media',
    content: {
      title: 'Engaging multimedia experiences across platforms.',
      description: 'Webrass has helped media and entertainment firms enhance quality engineering, develop SaaS products, utilize advanced analytics, optimize storage costs, and secure payment gateways, driving cloud adoption. With Webrass’s proprietary frameworks, these companies have achieved over 50% cost savings and accelerated quality assurance processes, resulting in exceptional user experiences.',
    },
  },
  {
    icon: '🤖',
    title: 'Banking & Insurance',
    link: '/industries/banking',
    content: {
      title: 'Cloud Transformation Boosted ABFL Delivery Time',
      description: 'Banking and insurance companies face stringent regulations and demand for real-time process automation and digital decision-making. To overcome these challenges, they need dependable digitization partners and cloud banking solutions that ensure efficiency and compliance.',
    },
  },
  {
    icon: '🔒',
    title: 'Technology',
    link: '/industries/technology',
    content: {
      title: 'Enhanced Security Measures Reduced Fraud by 70%',
      description: 'Webrass offers tailored digital solutions for technology companies to enhance performance and agility. Our services include cloud consulting, DevSecOps, AI, and automation, focusing on modernizing infrastructure and applications..',
    },
  },
  
];

const IndustryType = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const nextSlide = () => {
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
      setSlideDirection('');
    }, 300);
  };

  const prevSlide = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
      setSlideDirection('');
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Use Cases</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-64">
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center border-b md:border-b-0 md:border-r">
            <div className={`text-center ${slideDirection}`}>
              <div className="text-6xl mb-4">{industries[currentSlide].icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{industries[currentSlide].title}</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-orange-500 p-6 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{industries[currentSlide].content.title}</h2>
              <p className="text-white mb-4 line-clamp-3">{industries[currentSlide].content.description}</p>
              <Link to={`${industries[currentSlide].link}/#industry`} className="text-white hover:underline">Read More ➔</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-l hover:bg-orange-600 transition-colors"
        >
          ❮ 
        </button>
        <button
          onClick={nextSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default IndustryType;
