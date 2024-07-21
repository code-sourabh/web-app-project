import React from "react";

const BlogCard = ({ title, description,image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-orange-200">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" /> {/* Image component */}
      <h3 className="text-[1.5rem] font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-6 text-[1rem]">{description}</p>
      
    </div>
  );
};

export default BlogCard;
