import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../types/authTypes'

const initialState = {
    isLoggedIn: false,
    authError: null,
    currentUserMail: '',
    currentUserType: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log("Login success")
            return {
                ...state,
                isLoggedIn: true,
                authError: null,
                currentUserMail: action.email,
                currentUserType: action.userType
            }
        case LOGIN_FAILURE:
            console.log("Login failure")
            return {
                ...state,
                isLoggedIn: false,
                authError: 'Login failed',
                currentUserMail: null,
                currentUserType: null
            }
        case LOGOUT_SUCCESS:
            console.log("Logged out")
            return {
                ...state,
                isLoggedIn: false,
                authError: null,
                currentUserMail: null,
                currentUserType: null
            }
        default:
            return state
    }
}

export default authReducer