import { GET_STARTING_LIST, STARTING_LIST_LOADING } from '../actions/types';

const initialState = {
    classes: [],
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STARTING_LIST:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        case STARTING_LIST_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
