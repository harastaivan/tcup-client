import { FORM_DATA_LOADING, GET_FORM_DATA } from './types';
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getFormData = () => async dispatch => {
    dispatch(setFormDataLoading);
    const res = await axios.get(`${API_ENDPOINT}/api/registration/form`);
    dispatch({
        type: GET_FORM_DATA,
        payload: res.data
    });
};

export const setFormDataLoading = () => {
    return {
        type: FORM_DATA_LOADING
    };
};
