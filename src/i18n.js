import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const savelanguage = localStorage.getItem('language') || 'en';

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    lng: savelanguage,
    returnObjects: true,
});
