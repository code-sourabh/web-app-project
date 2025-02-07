// import React, { useState } from "react";
// import "./industryType.css";
// import { Link } from "react-router-dom";
// import finance from '../../image/businessmen-hands-white-table-with-documents-drafts.jpg'
// import banking from '../../image/smiling-woman-with-credit-card.jpg'
// import telecom from '../../image/blue-optic-fiber-with-ethernet-cable.jpg'
// import media from '../../image/man-recording-studio-music-production.jpg'
// import tech from '../../image/medium-shot-man-wearing-vr-glasses.jpg'

// const industries = [
//   {
//     icon: finance,
//     title: "Finance Service",
//     link: "/industries/finance",
//     content: {
//       title:
//         "Cloud-Based Platform Enabled hub.brussels Seamless Data Integration",

//       description:
//         "Financial services companies encounter significant challenges in securing digital payments, releasing affordable products, and navigating the complex regulatory landscape. To address these issues, they seek trusted experts in cloud computing for financial services to develop resilient digital infrastructures that facilitate technology-led innovation and keep pace with evolving value chains",
//     },
//   },
//   {
//     icon: telecom,
//     title: "Telecom",
//     link: "/industries/telecom",
//     content: {
//       title: "Dashboard Enabled Real-Time Insights for Telekom Malaysia",
//       description:
//         "Telekom Malaysia Berhad (TM), the nation's leading telecommunications provider, sought Webrass's expertise to develop a reporting solution. This solution performs near real-time sentiment analysis on Twitter and community forum data, supporting TM's mission to enhance telecommunications technology and services for all Malaysians.",
//     },
//   },
//   {
//     icon: media,
//     title: "Media & Entertainment",
//     link: "/industries/media",
//     content: {
//       title: "Engaging multimedia experiences across platforms.",
//       description:
//         "Webrass has helped media and entertainment firms enhance quality engineering, develop SaaS products, utilize advanced analytics, optimize storage costs, and secure payment gateways, driving cloud adoption. With Webrass’s proprietary frameworks, these companies have achieved over 50% cost savings and accelerated quality assurance processes, resulting in exceptional user experiences.",
//     },
//   },
//   {
//     icon: banking,
//     title: "Banking & Insurance",
//     link: "/industries/banking",
//     content: {
//       title: "Cloud Transformation Boosted ABFL Delivery Time",
//       description:
//         "Banking and insurance companies face stringent regulations and demand for real-time process automation and digital decision-making. To overcome these challenges, they need dependable digitization partners and cloud banking solutions that ensure efficiency and compliance.",
//     },
//   },
//   {
//     icon: tech,
//     title: "Technology",
//     link: "/industries/technology",
//     content: {
//       title: "Enhanced Security Measures Reduced Fraud by 70%",
//       description:
//         "Webrass offers tailored digital solutions for technology companies to enhance performance and agility. Our services include cloud consulting, DevSecOps, AI, and automation, focusing on modernizing infrastructure and applications..",
//     },
//   },
// ];

// const IndustryType = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slideDirection, setSlideDirection] = useState("");

//   const nextSlide = () => {
//     setSlideDirection("slide-left");
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % industries.length);
//       setSlideDirection("");
//     }, 300);
//   };

//   const prevSlide = () => {
//     setSlideDirection("slide-right");
//     setTimeout(() => {
//       setCurrentSlide(
//         (prev) => (prev - 1 + industries.length) % industries.length
//       );
//       setSlideDirection("");
//     }, 300);
//   };

//   return (
//     <div className="container mx-auto px-2  mt-[5rem]">
//       <h1 className="text-[2.5rem] font-bold text-center text-gray-800 mb-12">
//       Our Expertise Across Industry Verticals
//         <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
//       </h1>
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row h-auto md:h-96"> {/* Adjusted height for slider */}
//           <div className="relative w-full md:w-1/2 p-6 flex justify-center items-center border-b md:border-b-0 md:border-r">
//             <div className={`slider-content text-center ${slideDirection}`}> {/* Added slider-content class */}
//               <img className="mx-auto mb-4 max-h-80 bg-opacity-10" src={industries[currentSlide].icon} alt="Industry Icon" /> {/* Adjusted image size */}
//               <h2 className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-30 text-black text-1xl font-bold px-4 py-2">
//                 {industries[currentSlide].title}
//               </h2>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 bg-orange-500 p-6 flex flex-col justify-center">
//             <div>
//               <h2 className="text-2xl font-semibold text-white mb-4">
//                 {industries[currentSlide].content.title}
//               </h2>
//               <p className="text-white mb-4 line-clamp-3">
//                 {industries[currentSlide].content.description}
//               </p>
//               <Link
//                 to={industries[currentSlide].link}
//                 onClick={() => window.scrollTo(0, 0)}
//                 className="text-white hover:underline"
//               >
//                 Read More ➔
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-3 justify-center mt-6">
//         <button
//           onClick={prevSlide}
//           className="bg-orange-500 text-white px-4 py-2 rounded-l hover:bg-orange-600 transition-colors"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors"
//         >
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// };

// export default IndustryType;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import finance from '../../image/businessmen-hands-white-table-with-documents-drafts.jpg'
import banking from '../../image/smiling-woman-with-credit-card.jpg'
import telecom from '../../image/blue-optic-fiber-with-ethernet-cable.jpg'
import media from '../../image/man-recording-studio-music-production.jpg'
import tech from '../../image/medium-shot-man-wearing-vr-glasses.jpg'
import './industryType.css';

const industryImages = { finance, banking, telecom, media, tech };

const IndustryType = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const { t } = useTranslation();

  const industries = t('industriesType', { returnObjects: true });

  const nextSlide = () => {
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
      setSlideDirection("");
    }, 300);
  };

  const prevSlide = () => {
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + industries.length) % industries.length
      );
      setSlideDirection("");
    }, 300);
  };

  return (
    <div className="container mx-auto px-2 mt-[5rem]">
      <h1 className="text-[2.5rem] font-bold text-center text-gray-800 mb-12">
        {t('header.title')}
        <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
      </h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-96">
          <div className="relative w-full md:w-1/2 p-6 flex justify-center items-center border-b md:border-b-0 md:border-r">
            <div className={`slider-content text-center ${slideDirection}`}>
              <img
                className="mx-auto mb-4 max-h-80 bg-opacity-10"
                src={industryImages[industries[currentSlide].icon]}
                alt="Industry Icon"
              />
              <h2 className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-30 text-black text-1xl font-bold px-4 py-2">
                {industries[currentSlide].title}
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-orange-500 p-6 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {industries[currentSlide].content.title}
              </h2>
              <p className="text-white mb-4 line-clamp-3">
                {industries[currentSlide].content.description}
              </p>
              <Link
                to={industries[currentSlide].link}
                onClick={() => window.scrollTo(0, 0)}
                className="text-white hover:underline"
              >
                {t('readMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-l hover:bg-orange-600 transition-colors"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default IndustryType;
