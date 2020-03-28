import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../types/authTypes'

export const login = (credentials) => {
    return (dispatch, getState) => {
        const emailFromInput = credentials.email
        const passwordFromInput = credentials.password

        if (emailFromInput === 'teacher@teacher.com' && passwordFromInput === '1234') {
            dispatch({
                type: LOGIN_SUCCESS,
                email: 'teacher@teacher.com',
                userType: 'teacher'
            })
        } else if (emailFromInput === 'student@student.com' && passwordFromInput === '1234') {
            dispatch({
                type: LOGIN_SUCCESS,
                email: 'student@student.com',
                userType: 'student'
            })
        } else {
            dispatch({
                type: LOGIN_FAILURE
            })
        }
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({
            type: LOGOUT_SUCCESS
        })
    }
}