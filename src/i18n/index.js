import I18n from "i18n-js"
import * as RnLocalize from "react-native-localize"
import { I18nManager } from "react-native"
import en from "./en"
import tr from "./tr"


const translations = {
    tr,
    en,
}


const locales = RnLocalize.getLocales();
// const { language } = useSelector(state => state.SystemReducer)

I18n.locale = locales[0].languageTag

export const changeLang = val => {
    I18n.locale = val
}

//console.log("locales", locales) //{ countryCode: "GB", languageTag: "en-GB", languageCode: "en", isRTL: false },

//I18n.locale = locales[0].languageTag //i18n locale'e ilk dil tercihimizi vermiş olduk 


export const isRtl = locales[0].isRTL // rtl'e dil tercihimizin rtl sini verdik

I18nManager.forceRTL = isRtl; //ugulama rtl sini locales rtl sine göre ayarladık

I18n.fallbacks = true;// çevirimizde ilk dil tercihimizin karşılığı yoksa 2. yi alıyor

I18n.locales.no = "tr"

I18n.translations = translations;


export default I18n