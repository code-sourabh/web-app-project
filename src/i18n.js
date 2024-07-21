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

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     ns: ["default"],
//     defaultNS: "default",
//     supportedLngs: ["en", "hi", "hu", "de"],
//     backend: {
//       loadPath: "/locales/{{lng}}.json", // Adjust the path as per your JSON file naming convention
//       crossDomain: false, // Assuming these files are in the same domain
//     },
//   });

// export default i18next;


import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "tRckizemm-uUBElndhYQAw";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","hu","de"],
    
    backend: {
      loadPath: loadPath
    }
  })

  export default i18next