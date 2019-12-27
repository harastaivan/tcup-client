import { GET_ERRORS, CLEAR_ERRORS } from './types';

const parseError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            msg: error.response.data,
            status: error.response.status
        };
    } else if (error.request) {
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return {
            msg: error.message,
            status: error.request.status
        };
    } else {
        return {
            msg: error.message,
            status: 500
        };
    }
};

// RETURN ERRORS
export const returnErrors = (error, id = null) => {
    const { msg, status } = parseError(error);
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
