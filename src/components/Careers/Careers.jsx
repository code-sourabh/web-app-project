import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const jobListings = [
  { title: 'Product Designer', description: "We're looking for a mid-level product designer to join our team." },
  { title: 'Engineering Manager', description: "We're looking for an experienced engineering manager to join our team." },
  { title: 'Customer Success Manager', description: "We're looking for a customer success manager to join our team." },
  { title: 'Account Executive', description: "We're looking for an account executive to join our team." },
  { title: 'SEO Marketing Manager', description: "We're looking for an experienced SEO marketing manager to join our team." },
];

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Join our world-class team of creators & dreamers</h1>
        <p className="text-lg mb-8">
          Our philosophy is simple — hire a team of diverse, passionate people 
          and foster a culture that empowers you to do your best work.
        </p>
        
        <div className="space-y-4">
          {jobListings.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex space-x-2">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">100% remote</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Full-time</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                  Apply <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's get started on something great</h2>
          <p className="mb-4 text-gray-600">Join over 4,000+ startups already growing with Untitled</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium">
              Watch demo
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;