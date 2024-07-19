import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
    'https://www.cloudbuilders.es/wp-content/uploads/2024/01/google_cloud_2.png',
    'https://logos-world.net/wp-content/uploads/2021/03/Microsoft-Azure-Logo.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwZVVF4UI44Ykrix4eZ6C2Z_SiB94hm1K-w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeJO__bvY8aCqPc9TcySm7UDEnZa6xrEpHnJZc-vIzuP8L8FxqNjzflvtBwK9h2sZ4dI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8l8F-9j455T9Dmc96J0qMnm8vU85npV076Q&s',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-gray-200 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Discovering Opportunities Together</h2>
      <motion.div
        className="flex flex-wrap justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="m-4"
            variants={itemVariants}
            whileHover={{ scale: 1.1, zIndex: 1, boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={partner} alt={`Partner ${index}`} className="w-32 h-32 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
