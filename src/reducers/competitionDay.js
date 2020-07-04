import { GET_COMPETITION_DAYS, UPDATE_COMPETITION_DAY } from '../actions/types';
import { getCompetitionDaysUntilToday } from '../utils/getCompetitionDay';

const initialState = {
    competitionDays: [],
    competitionDaysUntilToday: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPETITION_DAYS:
            return {
                ...state,
                competitionDays: action.payload,
                competitionDaysUntilToday: getCompetitionDaysUntilToday(action.payload)
            };
        case UPDATE_COMPETITION_DAY: {
            const competitionDays = state.competitionDays.map((day) => {
                if (day._id === action.payload._id) {
                    day.task = action.payload.task;
                }
                return day;
            });

            return {
                ...state,
                competitionDays,
                competitionDaysUntilToday: getCompetitionDaysUntilToday(competitionDays)
            };
        }
        default:
            return state;
    }
};
