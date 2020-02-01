import { GET_SUCCESS, CLEAR_SUCCESS } from '../actions/types';

const initialState = {
    msg: null,
    id: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SUCCESS:
            return {
                msg: action.payload.msg,
                id: action.payload.id
            };
        case CLEAR_SUCCESS:
            return {
                msg: null,
                id: null
            };
        default:
            return state;
    }
}
