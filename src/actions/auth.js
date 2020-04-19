import axios from 'axios';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_CHANGED,
    USER_CHANGE_ERROR,
    USER_PASSWORD_CHANGED,
    USER_PASSWORD_CHANGE_ERROR
} from './types';
import { returnErrors } from './error';
import { returnSuccess } from './success';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {
    try {
        // User loading
        dispatch({ type: USER_LOADING });
        const res = await axios.get(`${API_ENDPOINT}/api/auth/user`, tokenConfig(getState));
        dispatch({ type: USER_LOADED, payload: res.data });
    } catch {
        // dispatch(returnErrors(err));
        dispatch({ type: AUTH_ERROR });
    }
};

export const changeUserInfo = ({ name, surname, email }) => async (dispatch, getState) => {
    try {
        const res = await axios.put(`${API_ENDPOINT}/api/users`, { name, surname, email }, tokenConfig(getState));
        dispatch({ type: USER_CHANGED, payload: res.data });
    } catch (err) {
        dispatch(returnErrors(err));
        dispatch({ type: USER_CHANGE_ERROR });
    }
};

export const changePassword = ({ oldPassword, newPassword }) => async (dispatch, getState) => {
    try {
        const res = await axios.post(
            `${API_ENDPOINT}/api/auth/change-password`,
            { oldPassword, newPassword },
            tokenConfig(getState)
        );
        dispatch({ type: USER_PASSWORD_CHANGED, payload: res.data });
        dispatch(returnSuccess('Heslo bylo změněno', USER_PASSWORD_CHANGED));
    } catch (err) {
        dispatch(returnErrors(err, USER_PASSWORD_CHANGE_ERROR));
        dispatch({ type: USER_PASSWORD_CHANGE_ERROR });
    }
};

// Register User
export const register = ({ name, surname, email, password }) => async (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, surname, email, password });

    try {
        const res = await axios.post(`${API_ENDPOINT}/api/users`, body, config);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch(returnErrors(err, 'REGISTER_FAIL'));
    }
};

// Login user
export const login = ({ email, password }) => async (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${API_ENDPOINT}/api/auth`, body, config);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch(returnErrors(err, 'LOGIN_FAIL'));
    }
};

// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token
export const tokenConfig = (getState, contentType = 'application/json') => {
    // Get token from sessionStorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': contentType
        }
    };

    if (token) config.headers['x-auth-token'] = token;

    return config;
};
