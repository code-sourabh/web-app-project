// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = ({ image, date, title, description, author }) => {
//   return (
//     <>
//       <Link
//         to={`/blogs/${title}`}
//         onClick={() => {
//           window.scrollTo(0, 0);
//           // window.scroll({
//           //   top: 0,
//           //   left: 0,
//           //   behavior: "smooth",
//           // });
//         }}
//         state={{ image, date, title, description, author }}
//       >
//         <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
//           <div className="overflow-hidden">
//             <img
//               src={image}
//               alt="No image"
//               className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
//             />
//           </div>
//           <div className="flex justify-between pt-2 text-slate-600">
//             <p>{date}</p>
//             <p className="line-clamp-1">By {author}</p>
//           </div>
//           <div className="space-y-2 py-3">
//             <h1 className="line-clamp-1 font-bold">{title}</h1>
//             <p className="line-clamp-2">{description}</p>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default BlogCard;

import React from "react";

const BlogCard = ({ title, description, author, date, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-orange-200">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" /> {/* Image component */}
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <div className="flex justify-between text-sm text-orange-500">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
