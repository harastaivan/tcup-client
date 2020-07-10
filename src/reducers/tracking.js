import {
    GET_COMPETITOR_STATUSES,
    UPDATE_COMPETITOR_STATUS,
    RESET_COMPETITOR_STATUSES,
    LOADING_COMPETITOR_STATUSES,
    GET_TRACKINGS,
    ADD_TRACKING
} from '../actions/types';

const initialState = {
    trackings: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKINGS:
            return {
                ...state,
                trackings: action.payload
            };
        default:
            return state;
    }
};
