import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    USER_CHANGED,
    USER_PASSWORD_CHANGED
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isAdmin: false,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: action.payload.admin,
                isLoading: false,
                user: action.payload
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAdmin: action.payload.user.admin,
                isAuthenticated: true,
                isLoading: false
            };

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAdmin: false,
                isAuthenticated: false,
                isLoading: false
            };
        case USER_CHANGED:
            return {
                ...state,
                user: action.payload,
                isAdmin: action.payload.admin
            };
        case USER_PASSWORD_CHANGED:
            return {
                ...state,
                token: action.payload.token
            };

        default:
            return state;
    }
}
