import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    '/partner1.svg',
    '/partner2.svg',
    '/partner3.svg',
    '/partner4.svg',
    '/partner5.svg',
    '/partner6.svg',
    '/partner7.svg',
    '/partner8.svg',
    '/partner9.svg',
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">
        Our Partners
      </h2>
      <motion.div
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="rounded-lg border text-card-foreground shadow-lg w-full max-w-6xl lg:skew-x-[10deg] bg-muted p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-v0-t="card"
          style={{ minHeight: '200px' }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="col-span-1 flex items-center justify-center -skew-x-[10deg] hover:scale-105 transition-transform h-12 md:h-24 lg:h-32 lg:skew-x-[10deg]"
              variants={itemVariants}
            >
              <img
                src={partner}
                width="100"
                height="50"
                alt={`Partner Logo ${index + 1}`}
                className="aspect-[2/1] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Partners;
