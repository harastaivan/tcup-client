import {
    FORM_DATA_LOADING,
    GET_FORM_DATA,
    SUBMIT_REGISTRATION,
    UPDATE_REGISTRATION,
    GET_REGISTRATION,
    REGISTRATION_LOADING,
    RESET_REGISTRATION
} from './types';
import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getFormData = () => async (dispatch) => {
    dispatch({
        type: FORM_DATA_LOADING
    });
    const res = await axios.get(`${API_ENDPOINT}/api/registration/form`);
    dispatch({
        type: GET_FORM_DATA,
        payload: res.data
    });
};

export const getRegistration = () => async (dispatch, getState) => {
    dispatch({
        type: REGISTRATION_LOADING
    });
    try {
        const res = await axios.get(`${API_ENDPOINT}/api/registration`, tokenConfig(getState));
        dispatch({
            type: GET_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true
            }
        });
    } catch (e) {
        dispatch({
            type: GET_REGISTRATION,
            payload: {
                registration: {},
                isRegistered: false
            }
        });
    }
};

export const submitRegistration = (registration) => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${API_ENDPOINT}/api/registration`, registration, tokenConfig(getState));
        dispatch({
            type: SUBMIT_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true
            }
        });
    } catch (err) {
        dispatch(returnErrors(err));
    }
};

export const updateRegistration = (registration) => async (dispatch, getState) => {
    try {
        const res = await axios.put(`${API_ENDPOINT}/api/registration`, registration, tokenConfig(getState));
        dispatch({
            type: UPDATE_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true
            }
        });
    } catch (err) {
        dispatch(returnErrors(err));
    }
};

export const resetRegistration = () => {
    return {
        type: RESET_REGISTRATION
    };
};

export const setFormDataLoading = () => {
    return {
        type: FORM_DATA_LOADING
    };
};
