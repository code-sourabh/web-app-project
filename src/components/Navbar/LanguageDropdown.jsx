// import React, { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// const languages = [
//   { code: 'EN', name: 'English', flag: 'en' },
//   { code: 'HU', name: 'German', flag: 'hu' },
//   { code: 'DE', name: 'Hungerian', flag: 'de' },
  
// ];

// const LanguageDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const selectLanguage = (language) => {
//     setSelectedLanguage(language);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-transparent "
//           onClick={toggleDropdown}
//         >
//           <span className="mr-2">{selectedLanguage.flag}</span>
//           {selectedLanguage.code}
//           {isOpen ? (
//             <ChevronUp className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
//           ) : (
//             <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
//           )}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="absolute right-0 w-56 mt-2 origin-top-right text-white bg-black bg-opacity-80 border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             {languages.map((language) => (
//               <button
//                 key={language.code}
//                 className={`${
//                   language.code === selectedLanguage.code ? 'bg-black bg-opacity-5 text-gray-100' : 'text-white'
//                 } flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900`}
//                 role="menuitem"
//                 onClick={() => selectLanguage(language)}
//               >
//                 <span className="mr-2">{language.flag}</span>
//                 {language.name}
//                 {language.code === selectedLanguage.code && (
//                   <span className="flex-grow text-right">✓</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageDropdown;


import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-transparent"
          onClick={toggleDropdown}
        >
          <span className="mr-2">{selectedLanguage.flag}</span>
          {selectedLanguage.code.toUpperCase()}
          {isOpen ? (
            <ChevronUp className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right text-white bg-black bg-opacity-80 border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`${
                  language.code === selectedLanguage.code ? 'bg-black bg-opacity-5 text-gray-100' : 'text-white'
                } flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
                onClick={() => selectLanguage(language)}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
                {language.code === selectedLanguage.code && (
                  <span className="flex-grow text-right">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
