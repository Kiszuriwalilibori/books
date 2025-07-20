import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

const i18nConfig: InitOptions = {
    fallbackLng: "pl",
    lng: "pl",
    resources: {
        en: {
            translation: {},
        },
        pl: {
            translation: {},
        },
    },
    ns: ["translation"],
    defaultNS: "translation",
    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
        escapeValue: false,
    },
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

i18n.addResourceBundle("en", "translation", require("./locales/en/translation.json"), true, true);
i18n.addResourceBundle("pl", "translation", require("./locales/pl/translation.json"), true, true);

i18n.languages = ["en", "pl"];

export default i18n;
