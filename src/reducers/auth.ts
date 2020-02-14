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
import { AnyAction } from 'redux';

type Token = string | null;

interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    admin: boolean;
}

interface AuthState {
    token: Token;
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLoading: boolean;
    user: User | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isAdmin: false,
    isLoading: false,
    user: null
};

// TODO: Don't use type AnyAction

export default function(state = initialState, action: AnyAction): AuthState {
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
