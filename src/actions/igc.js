import { ADD_IGC, GET_IGC_FORM_DATA, ADD_IGC_SUCCESS, ADD_IGC_ERROR, IGC_CLEAR_MESSAGE } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const addIgc = (igc) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_IGC
        });
        const data = new FormData();
        data.append('igc', igc.igc);
        data.append('pilot', igc.pilot);
        data.append('day', igc.day);
        const res = await axios.post(`${API_ENDPOINT}/api/igc`, data, tokenConfig(getState, 'multipart/form-data'));
        dispatch({
            type: ADD_IGC_SUCCESS,
            payload: res.data
        });
        setTimeout(() => {
            dispatch({ type: IGC_CLEAR_MESSAGE });
        }, 5000);
    } catch (err) {
        dispatch(returnErrors(err));
        dispatch({
            type: ADD_IGC_ERROR,
            payload: err
        });
        setTimeout(() => {
            dispatch({ type: IGC_CLEAR_MESSAGE });
        }, 5000);
    }
};

export const getIgcFormData = () => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/igc/form`);
    dispatch({
        type: GET_IGC_FORM_DATA,
        payload: res.data
    });
};