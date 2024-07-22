// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const industries = [
//   { name: 'Banking & Insurance', icon: '🏦', path: '/industries/banking' },
//   { name: 'Financial Services', icon: '💰', path: '/industries/finance' },
//   { name: 'Media & Entertainment', icon: '🎥', path: '/industries/media' },
//   { name: 'Telecom', icon: '📡', path: '/industries/telecom' },
//   { name: 'Technology ', icon: '💻', path: '/industries/technology' },
// ];

// const Industries = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-pink-50 py-12">
//       <h2 className="text-[2.5rem] font-bold text-center mb-8 relative">
//     Industries We Serve
//     <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
// </h2>


//       <div className="flex flex-wrap justify-center gap-4">
//         {industries.map((industry, index) => (
//           <div
//             key={index}
//             onClick={() => { window.scrollTo(0,0);navigate(industry.path)}}
//             className="w-64 md:w-56 h-56 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-500 group"
//           >
//             <div className="text-4xl mb-4">{industry.icon}</div>
//             <div className="text-[1rem] font-medium text-center">{industry.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const industries = [
  { nameKey: 'banking', icon: '🏦', path: '/industries/banking' },
  { nameKey: 'finance', icon: '💰', path: '/industries/finance' },
  { nameKey: 'media', icon: '🎥', path: '/industries/media' },
  { nameKey: 'telecom', icon: '📡', path: '/industries/telecom' },
  { nameKey: 'technology', icon: '💻', path: '/industries/technology' },
];

const Industries = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-pink-50 py-12">
      <h2 className="text-[2.5rem] font-bold text-center mb-8 relative">
        {t('industries.title')}
        <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-red-500"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            onClick={() => { window.scrollTo(0,0);navigate(industry.path);}}
            className="w-64 md:w-56 h-56 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-orange-500 group"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <div className="text-[1rem] font-medium text-center">{t(`industries.${industry.nameKey}`)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;

