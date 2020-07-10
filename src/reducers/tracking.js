import { GET_TRACKINGS } from '../actions/types';

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
