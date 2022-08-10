import {authAPI} from './../api/api'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const AUTHORIZE_ME = 'AUTHORIZE_ME'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case AUTHORIZE_ME:
            return {}


        default:
            return state;
    }

}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authMe = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data

                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}


export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    alert('Залогинился!')
    console.log('12')


    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        alert('Done!')
        dispatch(getAuthUserData())
    } else {
        alert("Не вышло")
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;
