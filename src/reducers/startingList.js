import { GET_STARTING_LIST, STARTING_LIST_LOADING, PAY_REGISTRATION } from '../actions/types';

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
        case PAY_REGISTRATION:
            return {
                ...state,
                classes: state.classes.map((one) => {
                    one.registrations = one.registrations.map((registration) => {
                        if (registration._id === action.payload.registrationId) {
                            registration.paid = action.payload.paid;
                        }
                        return registration;
                    });
                    return one;
                })
            };
        default:
            return state;
    }
};
