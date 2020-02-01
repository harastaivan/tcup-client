import { GET_SUCCESS, CLEAR_SUCCESS } from './types';

export const returnSuccess = (msg, id = null) => {
    return {
        type: GET_SUCCESS,
        payload: { msg, id }
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_SUCCESS
    };
};
