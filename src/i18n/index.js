import I18n from "i18n-js"
import * as RnLocalize from "react-native-localize"
import { I18nManager } from "react-native"
import en from "./en"
import tr from "./tr"


I18n.translations = {
    tr,
    en,
}

// I18n.locales.no = "en"

export const locales = RnLocalize.getLocales();
// const { language } = useSelector(state => state.SystemReducer)

export const changeLang = (val) => {
    I18n.locale = val
}

//console.log("locales", locales) //{ countryCode: "GB", languageTag: "en-GB", languageCode: "en", isRTL: false },

//I18n.locale = locales[0].languageTag //i18n locale'e ilk dil tercihimizi vermiş olduk 


export const isRtl = locales[0].isRTL // rtl'e dil tercihimizin rtl sini verdik

I18nManager.forceRTL = isRtl; //ugulama rtl sini locales rtl sine göre ayarladık

I18n.fallbacks = true;// çevirimizde ilk dil tercihimizin karşılığı yoksa 2. yi alıyor




export default I18n