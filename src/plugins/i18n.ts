import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./translation/translation-en.json";
import translationJa from "./translation/translation-ja.json";
//
// Multi Language plugin (English and Japanese translation)
//
const resources = {
    en: translationEn,
    ja: translationJa
};
//
//
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: "en",
        fallbackLng: "ja",
        resources
    });
export default i18n;