import { GET_COMPETITION_DAYS, UPDATE_COMPETITION_DAY } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getCompetitionDays = () => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/days`);
    dispatch({
        type: GET_COMPETITION_DAYS,
        payload: res.data
    });
};

export const updateCompetitionDay = (competitionDay) => async (dispatch, getState) => {
    const res = await axios.put(
        `${API_ENDPOINT}/api/days/${competitionDay._id}`,
        { task: competitionDay.task },
        tokenConfig(getState)
    );
    dispatch({
        type: UPDATE_COMPETITION_DAY,
        payload: res.data
    });
};
