import React from "react";
import ReactDOM from "react-dom";

// ----- Package for the translation -----
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import App from "./App";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // automatically detect language
  .use(HttpApi) // fetch all the stored json translations folders
  .init({
    supportedLngs: ["fr", "en"],
    fallbackLng: "fr",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
    },
    caches: ["cookie"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

ReactDOM.render(<App />, document.getElementById("root"));
