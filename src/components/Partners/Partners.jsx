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
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">
        Discovering Opportunities Together
        <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
      </h2>
      <motion.div
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <div
          className="rounded-lg border text-card-foreground shadow-lg w-full max-w-6xl lg:skew-x-[10deg] bg-muted p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14"
          data-v0-t="card"
          style={{ minHeight: '300px' }}
        >
          
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="col-span-1 flex items-center justify-center -skew-x-[10deg] hover:scale-105 transition-transform h-12 md:h-24 lg:h-32 lg:skew-x-[10deg]"
              variants={itemVariants}
            >
              <img
                src={partner}
                width="120"
                height="120"
                alt={`Partner Logo ${index + 1}`}
                className="aspect-[1/3] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Partners;
