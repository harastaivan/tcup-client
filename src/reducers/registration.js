import {
    GET_FORM_DATA,
    FORM_DATA_LOADING,
    GET_REGISTRATION,
    SUBMIT_REGISTRATION,
    UPDATE_REGISTRATION
} from '../actions/types';

const initialState = {
    registration: {},
    isRegistered: false,
    formData: {
        accomodationTypes: [],
        competitionClasses: [],
        gliderTypes: [],
        regions: []
    },
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FORM_DATA:
            return {
                ...state,
                formData: {
                    accomodationTypes: action.payload.accomodationTypes,
                    competitionClasses: action.payload.competitionClasses,
                    gliderTypes: action.payload.gliderTypes,
                    regions: action.payload.regions
                },
                loading: false
            };
        case GET_REGISTRATION:
            return {
                ...state,
                registration: action.payload.registration,
                isRegistered: action.payload.isRegistered
            };
        case SUBMIT_REGISTRATION:
        case UPDATE_REGISTRATION:
            return {
                ...state,
                registration: action.payload.registration,
                isRegistered: action.payload.isRegistered
            };
        case FORM_DATA_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
