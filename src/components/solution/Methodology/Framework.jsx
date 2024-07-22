import React from 'react';
// import img1 from '../../../image/workflow1.jpg'

const Framework= ({img}) => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto mt-[4rem]">
      <h2 className="text-4xl font-bold text-center mb-8">Our Framework</h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img 
          src={img} 
          alt="Framework Diagram" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Framework;