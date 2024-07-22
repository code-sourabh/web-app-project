// import React, { useState, useEffect } from 'react';
// import './MissionVision.css';

// const MissionVision = () => {
//   const [activeTab, setActiveTab] = useState('mission');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

//   // Handle resizing to switch between mobile and desktop views
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleTab = (tab) => {
//     setActiveTab(activeTab === tab ? '' : tab);
//   };

//   return (
//     <div className="mission-vision-container">
//       <div className="left-section">
//         <div className="tab-container">
//           <div 
//             className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
//             onClick={() => toggleTab('mission')}
//           >
//             Our Mission
//             <div className="connecting-line mission"></div>
//           </div>
//           {isMobile && activeTab === 'mission' && (
//             <div className="content-box active">
//               <p>At our core, we are architects of change, dedicated to redefining possibilities through a fusion of cutting-edge technology and human ingenuity. With a relentless pursuit of excellence, we collaborate with our clients and partners to co-create value and transformative solutions that propel them towards success in the digital age.</p>
//             </div>
//           )}
//           <div 
//             className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
//             onClick={() => toggleTab('vision')}
//           >
//             Our Vision
//             <div className="connecting-line vision"></div>
//           </div>
//           {isMobile && activeTab === 'vision' && (
//             <div className="content-box active">
//               <p>Empowering businesses through the art of digital innovation, we envision a future where technology seamlessly integrates with human potential to unlock unprecedented opportunities and drive collective progress.</p>
//             </div>
//           )}
//         </div>
//         {!isMobile && (
//           <div className="decorative-squares">
//             <div className="square"></div>
//             <div className="square"></div>
//             <div className="square"></div>
//           </div>
//         )}
//       </div>
//       {!isMobile && (
//         <div className="right-section">
//           <div className="content-box active">
//             <p>{activeTab === 'mission' ? 
//               "At our core, we are architects of change, dedicated to redefining possibilities through a fusion of cutting-edge technology and human ingenuity. With a relentless pursuit of excellence, we collaborate with our clients and partners to co-create value and transformative solutions that propel them towards success in the digital age." :
//               activeTab === 'vision' ?
//               "Empowering businesses through the art of digital innovation, we envision a future where technology seamlessly integrates with human potential to unlock unprecedented opportunities and drive collective progress." : ''}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MissionVision;


import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './MissionVision.css';

const MissionVision = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Handle resizing to switch between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <div className="mission-vision-container">
      <div className="left-section">
        <div className="tab-container">
          <div 
            className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => toggleTab('mission')}
          >
            {t('missionVision.missionTab')}
            <div className="connecting-line mission"></div>
          </div>
          {isMobile && activeTab === 'mission' && (
            <div className="content-box active">
              <p>{t('missionVision.missionContent')}</p>
            </div>
          )}
          <div 
            className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => toggleTab('vision')}
          >
            {t('missionVision.visionTab')}
            <div className="connecting-line vision"></div>
          </div>
          {isMobile && activeTab === 'vision' && (
            <div className="content-box active">
              <p>{t('missionVision.visionContent')}</p>
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="decorative-squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="right-section">
          <div className="content-box active">
            <p>{activeTab === 'mission' ? 
              t('missionVision.missionContent') :
              activeTab === 'vision' ?
              t('missionVision.visionContent') : ''}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionVision;
