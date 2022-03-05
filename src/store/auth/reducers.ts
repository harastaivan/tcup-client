import { AuthAction, authActionTypes } from './actions'
import { AuthState } from './types'

const initialState: AuthState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: false,
    isAdmin: false,
    isLoading: Boolean(sessionStorage.getItem('token')),
    user: null,
}

const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case authActionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case authActionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: action.payload.admin,
                isLoading: false,
                user: action.payload,
            }

        case authActionTypes.LOGIN_SUCCESS:
        case authActionTypes.REGISTER_SUCCESS:
            sessionStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAdmin: action.payload.user.admin,
                isAuthenticated: true,
                isLoading: false,
            }

        case authActionTypes.AUTH_ERROR:
        case authActionTypes.LOGIN_FAIL:
        case authActionTypes.LOGOUT_SUCCESS:
        case authActionTypes.TIMEOUT_LOGOUT_SUCCESS:
        case authActionTypes.REGISTER_FAIL:
            sessionStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAdmin: false,
                isAuthenticated: false,
                isLoading: false,
            }
        case authActionTypes.USER_CHANGED:
            return {
                ...state,
                user: action.payload,
                isAdmin: action.payload.admin,
            }
        case authActionTypes.USER_PASSWORD_CHANGED:
            return {
                ...state,
                token: action.payload.token,
            }

        default:
            return state
    }
}

export default authReducer
