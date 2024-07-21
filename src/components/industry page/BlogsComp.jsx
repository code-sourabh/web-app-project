import React from "react";
import BlogCard from "./BlogCard";
// import Img1 from "../../assets/places/tajmahal.jpg";
// import Img2 from "../../assets/places/water.jpg";
// import Img3 from "../../assets/places/boat.jpg";

const BlogsComp = ({useCases}) => {
  

  return (
    <div className="bg-gray-50 py-10">
      <section data-aos="fade-up" className="container mx-auto px-4">
        <h1 className=" text-[2.5rem] my-8 border-l-8 border-orange-500 py-2 pl-2 text-center font-bold text-black">
          Our Use Cases
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {useCases.map((item) => (
            <BlogCard  {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
