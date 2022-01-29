import {
    TOGGLE_LOADER,
    HİDE_LOADER,
    USER_LOGOUT,
    SET_THEME,
    SET_LANGUAGE,
    SET_USER
} from "./actionTypes"

//actionlarımızı bu şekilde dispatch edicez
// export const setSelectCase = (selectedCase) => (dispatch) => {
//     dispatch({
//         type: SET_SELECT_CASE,
//         payload: selectedCase
//     });
// };


//Loader açar
export const toggle_laoder = () => (dispatch) => {
    dispatch({
        type: TOGGLE_LOADER
    });
}
//loader kapatır
export const hide_loader = () => (dispatch) => {
    dispatch({
        type: HİDE_LOADER
    });
}
// sistemin temasını set eder
export const set_theme = (payload) => (dispatch) => {
    dispatch({
        type: SET_THEME,
        payload

    });
}
// USER'ı set eder

export const set_user = (info) => (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: info
    })
}

export const user_logOut = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,

    })
}
