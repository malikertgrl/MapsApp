import {
    TOGGLE_LOADER,
    HİDE_LOADER,
    USER_LOGOUT,
    SET_THEME,
    SET_LANGUAGE,
    SET_USER,
    SET_LOGİN
} from "../action/actionTypes"


const initialState = {
    loading: false,
    userInfo: {},
    token: "",
    language: "en",
    isDarkMode: false,
    isLogin: false
};

export const SystemReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADER:
            return { ...state, loading: true };

        case HİDE_LOADER:
            return { ...state, loading: false };

        case USER_LOGOUT:
            return { ...state, userInfo: {}, isLogin: false };

        case SET_USER:
            return { ...state, userInfo: action.payload, isLogin: true }

        case SET_THEME:
            return { ...state, isDarkMode: action.payload };
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_LOGİN:
            return { ...state, isLogin: action.payload };

        default:
            return state;
    }

}