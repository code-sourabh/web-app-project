// import React, { useState } from 'react';
// import './Description.css';
// // import img1 from '../../image/frontpage2.png'
// // import img2 from '../../image/Untitled design (4).png'
// // import img3 from '../../image/a2.jpg'
// import img1 from '../../image/innovate3.png'
// import img2 from '../../image/accelerate-removebg-preview.png'
// import img3 from '../../image/multiply-removebg-preview.png'
// import img4 from '../../image/back5.png'


// const Description = () => {
//   const [activeSection, setActiveSection] = useState('innovate');

//   const handleFooterButtonClick = (sectionId) => {
//     setActiveSection(sectionId);
//   };

//   return (
//     <div className="homepage">
//       <header className="header">
//         <h1 className="header-title ">
//           Striving to<span className="header-subtitle"> Build Your Next</span>
//           <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-white"></span>
//         </h1>
//       </header>
//       <section className={`section ${activeSection}-section`}>
//         <div className="content-wrapper">
//           <div className="text-content">
//             <h2 className="section-title">{activeSection === 'innovate' ? 'Innovate' : activeSection === 'accelerate' ? 'Accelerate' : 'Multiply'}</h2>
//             <p className="section-description">
//               {activeSection === 'innovate' && (
//                 'Explore disruptive building blocks unique to Blazeclan to manage the infrastructure with a birds-eye view and optimize expenditure. Deliver high-performance applications, implement proactive infrastructure security, and maximize the value of the business.'
//               )}
//               {activeSection === 'accelerate' && (
//                 'Accelerate your business processes and workflows with cutting-edge solutions designed to boost efficiency and speed.'
//               )}
//               {activeSection === 'multiply' && (
//                 'Multiply your business value through scalable and sustainable practices that ensure long-term growth and success.'
//               )}
//             </p>
//           </div>
//           <div className="image-content">
//             <img
//               src={
//                 activeSection === 'innovate'
//                   ? img4
//                   : activeSection === 'accelerate'
//                   ? img2 
//                   : img3
//               }
//               alt={activeSection === 'innovate' ? 'Innovate' : activeSection === 'accelerate' ? 'Accelerate' : 'Multiply'}
//               className="section-image"
//             />
//           </div>
//         </div>
//       </section>
//       <footer className="footer">
//         <div className="footer-links">
//           <button
//             className={`footer-button ${activeSection === 'accelerate' ? 'active' : ''}`}
//             onClick={() => handleFooterButtonClick('accelerate')}
//           >
//             Accelerate
//           </button>
//           <button
//             className={`footer-button ${activeSection === 'innovate' ? 'active' : ''}`}
//             onClick={() => handleFooterButtonClick('innovate')}
//           >
//             Innovate
//           </button>
//           <button
//             className={`footer-button ${activeSection === 'multiply' ? 'active' : ''}`}
//             onClick={() => handleFooterButtonClick('multiply')}
//           >
//             Multiply
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Description;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Description.css';
import img1 from '../../image/innovate3.png';
import img2 from '../../image/accelerate-removebg-preview.png';
import img3 from '../../image/multiply-removebg-preview.png';
import img4 from '../../image/back5.png';

const Description = () => {
  const [activeSection, setActiveSection] = useState('innovate');
  const { t } = useTranslation();

  const handleFooterButtonClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="header-title">
          {t('description.title')}<span className="header-subtitle"> {t('description.subtitle')}</span>
          <span className="block w-28 mx-auto mt-2 h-2 skew-x-[10deg] bg-white"></span>
        </h1>
      </header>
      <section className={`section ${activeSection}-section`}>
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">
              {activeSection === 'innovate'
                ? t('description.innovateTitle')
                : activeSection === 'accelerate'
                ? t('description.accelerateTitle')
                : t('description.multiplyTitle')}
            </h2>
            <p className="section-description">
              {activeSection === 'innovate'
                ? t('description.innovateDescription')
                : activeSection === 'accelerate'
                ? t('description.accelerateDescription')
                : t('description.multiplyDescription')}
            </p>
          </div>
          <div className="image-content">
            <img
              src={
                activeSection === 'innovate'
                  ? img4
                  : activeSection === 'accelerate'
                  ? img2
                  : img3
              }
              alt={
                activeSection === 'innovate'
                  ? t('description.innovateTitle')
                  : activeSection === 'accelerate'
                  ? t('description.accelerateTitle')
                  : t('description.multiplyTitle')
              }
              className="section-image"
            />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <button
            className={`footer-button ${activeSection === 'accelerate' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('accelerate')}
          >
            {t('description.accelerateButton')}
          </button>
          <button
            className={`footer-button ${activeSection === 'innovate' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('innovate')}
          >
            {t('description.innovateButton')}
          </button>
          <button
            className={`footer-button ${activeSection === 'multiply' ? 'active' : ''}`}
            onClick={() => handleFooterButtonClick('multiply')}
          >
            {t('description.multiplyButton')}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Description;
