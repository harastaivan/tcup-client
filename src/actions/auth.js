import axios from 'axios';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    axios
        .get(`${API_ENDPOINT}/api/auth/user`, tokenConfig(getState))
        .then(res => dispatch({ type: USER_LOADED, payload: res.data }))
        .catch(err => {
            dispatch(returnErrors(err));
            dispatch({ type: AUTH_ERROR });
        });
};

// Register User
export const register = ({ name, surname, email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, surname, email, password });

    axios
        .post(`${API_ENDPOINT}/api/users`, body, config)
        .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch(returnErrors(err, 'REGISTER_FAIL'));
        });
};

// Login user
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    axios
        .post(`${API_ENDPOINT}/api/auth`, body, config)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch(returnErrors(err, 'LOGIN_FAIL'));
        });
};

// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localStorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) config.headers['x-auth-token'] = token;

    return config;
};
