import { FORM_DATA_LOADING, GET_FORM_DATA, SUBMIT_REGISTRATION, GET_REGISTRATION } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getFormData = () => async (dispatch) => {
    dispatch(setFormDataLoading);
    const res = await axios.get(`${API_ENDPOINT}/api/registration/form`);
    dispatch({
        type: GET_FORM_DATA,
        payload: res.data
    });
};

export const getRegistration = () => async (dispatch, getState) => {
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

export const setFormDataLoading = () => {
    return {
        type: FORM_DATA_LOADING
    };
};
