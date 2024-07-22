// // import i18next from "i18next";
// // import HttpBackend from "i18next-http-backend";
// // import LanguageDetector from "i18next-browser-languagedetector";
// // import { initReactI18next } from "react-i18next";

// // const apiKey = "ors_v1TLueiEmQBcZvrl4A";
// // const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// // i18next
// //   .use(HttpBackend)
// //   .use(LanguageDetector)
// //   .use(initReactI18next)
// //   .init({
// //     fallbackLng: "en",

// //     ns: ["default"],
// //     defaultNS: "default",

// //     supportedLngs: ["en","hi","hu","de"],
    
// //     backend: {
// //       loadPath: loadPath
// //     }
// //   })
// //   export default i18next;





// import i18next from "i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const apiKey = "tRckizemm-uUBElndhYQAw";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",

//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en","hu","de"],
    
//     backend: {
//       loadPath: loadPath
//     }
//   })

//   export default i18next





import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './local/english.json';

import german from './local/german.json';
import hungarian from './local/hungarian.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: english },
      
      de: { translation: german },
      hu: { translation: hungarian },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

