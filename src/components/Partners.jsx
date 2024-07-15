import React from 'react';

const Partners = () => {
  const partners = Array(9).fill("/placeholder.svg"); // Dummy partner logos

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">
        Our Partners
      </h2>
      <div className="flex justify-center">
        <div
          className="rounded-lg border text-card-foreground shadow-lg w-full max-w-6xl skew-x-[10deg] bg-muted p-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4"
          data-v0-t="card"
          style={{ minHeight: '200px' }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="col-span-1 flex items-center justify-center -skew-x-[10deg] hover:scale-105 transition-transform h-12 md:h-24 lg:h-32"
            >
              <img
                src={partner}
                width="100"
                height="50"
                alt="Partner Logo"
                className="aspect-[2/1] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
