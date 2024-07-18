// import React from 'react';

// const IndustryPage = () => {
//   return (
//     <div className=" bg-gradient-to-br from-orange-50 to-white flex flex-col mt-3">
//       <div className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-between">
//         <div className="space-y-8 mb-6"> {/* Reduced the bottom margin here */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
//             Transforming Industries with Technology
//           </h1>
//           <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
//         </div>

//         <div className="flex flex-col lg:flex-row lg:space-x-2 mb-6"> {/* Reduced the bottom margin here */}
//           <div className="lg:w-full space-y-6">
//             <p className="text-gray-700 text-center">
//               Companies across various industries face significant challenges in digital transformation, data management, and staying competitive in a rapidly evolving technological landscape. They seek expert partners to develop innovative solutions that leverage cloud computing, AI, and data analytics to drive growth and efficiency.
//             </p>
//             <p className="text-gray-700 text-center">
//               Our industry experts have supported leading firms in sectors such as finance, healthcare, retail, and manufacturing to transform their operations using cutting-edge technologies. With solutions like intelligent data processing, IoT integration, and AI-driven insights, businesses can build robust digital infrastructures that power innovation and maintain a competitive edge.
//             </p>
//           </div>
//         </div>

//         {/* Additional Sections */}
//         <div className="mt-6"> {/* Reduced the top margin here */}
//           {/* Features Section */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Key Features</h2> {/* Reduced the bottom margin here */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M13 7h-2V3H9v4H7l3 3 3-3zM7 9h2v4H7v2h6v-2h-2V9h2l-3-3-3 3z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 text-center">Scalable Solutions</h3>
//                 <p className="text-gray-600 text-center">Our solutions grow with your business, ensuring you remain competitive.</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 text-center">Secure Infrastructure</h3>
//                 <p className="text-gray-600 text-center">Top-notch security measures to protect your data and operations.</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 2a8 8 0 00-8 8 8 8 0 0015.42 3.5h-1.62A6.5 6.5 0 0110 4.5v1.64A8.01 8.01 0 0010 2zm0 16a8 8 0 008-8 8 8 0 00-1.5-4.58v1.62A6.5 6.5 0 0115.5 10h1.64A8.01 8.01 0 0018 10a8 8 0 00-8 8zm-3-7h6v-2H7v2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 text-center">Innovative Solutions</h3>
//                 <p className="text-gray-600 text-center">Using cutting-edge technology to drive your business forward.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryPage;

import React from "react";
import { useTranslation } from "react-i18next";
import BlogsComp from "./BlogsComp";

const IndustryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white flex flex-col mt-3">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-between">
        <div className="space-y-8 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {t("industryPage.title")}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 mb-6">
          <div className="lg:w-full space-y-6">
            <p className="text-gray-700 text-center">
              {t("industryPage.introduction.paragraph1")}
            </p>
            <p className="text-gray-700 text-center">
              {t("industryPage.introduction.paragraph2")}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              {t("industryPage.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 7h-2V3H9v4H7l3 3 3-3zM7 9h2v4H7v2h6v-2h-2V9h2l-3-3-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {t("industryPage.features.scalableSolutions.title")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("industryPage.features.scalableSolutions.description")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {t("industryPage.features.secureInfrastructure.title")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("industryPage.features.secureInfrastructure.description")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 00-8 8 8 8 0 0015.42 3.5h-1.62A6.5 6.5 0 0110 4.5v1.64A8.01 8.01 0 0010 2zm0 16a8 8 0 008-8 8 8 0 00-1.5-4.58v1.62A6.5 6.5 0 0115.5 10h1.64A8.01 8.01 0 0018 10a8 8 0 00-8 8zm-3-7h6v-2H7v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {t("industryPage.features.innovativeSolutions.title")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("industryPage.features.innovativeSolutions.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <BlogsComp />
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
