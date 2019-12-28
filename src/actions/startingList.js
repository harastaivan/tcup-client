import { STARTING_LIST_LOADING, GET_STARTING_LIST } from './types';
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getStartingList = () => async (dispatch) => {
    dispatch(setStartingListLoading);
    const res = await axios.get(`${API_ENDPOINT}/api/starting-list`);
    dispatch({
        type: GET_STARTING_LIST,
        payload: res.data
    });
};

export const setStartingListLoading = () => {
    return {
        type: STARTING_LIST_LOADING
    };
};
