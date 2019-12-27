import { NEWS_LOADING, GET_NEWS, ADD_NEWS, DELETE_NEWS } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getNews = () => async (dispatch) => {
    dispatch(setNewsLoading);
    const res = await axios.get(`${API_ENDPOINT}/api/news`);
    dispatch({
        type: GET_NEWS,
        payload: res.data
    });
};

export const addNews = (news) => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${API_ENDPOINT}/api/news`, news, tokenConfig(getState));
        dispatch({
            type: ADD_NEWS,
            payload: res.data
        });
    } catch (err) {
        dispatch(returnErrors(err));
    }
};

export const deleteNews = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`${API_ENDPOINT}/api/news/${id}`, tokenConfig(getState));
        dispatch({
            type: DELETE_NEWS,
            payload: id
        });
    } catch (err) {
        dispatch(returnErrors(err));
    }
};

export const setNewsLoading = () => {
    return {
        type: NEWS_LOADING
    };
};
