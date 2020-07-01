import { GET_COMPETITION_DAYS, UPDATE_COMPETITION_DAY } from '../actions/types';

const initialState = {
    competitionDays: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPETITION_DAYS:
            return {
                ...state,
                competitionDays: action.payload
            };
        case UPDATE_COMPETITION_DAY:
            return {
                ...state,
                competitionDays: state.competitionDays.map((day) => {
                    if (day._id === action.payload._id) {
                        day.task = action.payload.task;
                    }
                    return day;
                })
            };
        default:
            return state;
    }
};
