import {
    GET_FORM_DATA,
    FORM_DATA_LOADING,
    GET_REGISTRATION,
    SUBMIT_REGISTRATION,
    UPDATE_REGISTRATION,
    REGISTRATION_LOADING,
    RESET_REGISTRATION
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
    loading: false,
    formDataLoading: false,
    registrationLoading: false
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
                formDataLoading: false,
                loading: false || state.registrationLoading
            };
        case GET_REGISTRATION:
            return {
                ...state,
                registration: action.payload.registration,
                isRegistered: action.payload.isRegistered,
                registrationLoading: false,
                loading: false || state.formDataLoading
            };
        case SUBMIT_REGISTRATION:
        case UPDATE_REGISTRATION:
            return {
                ...state,
                registration: action.payload.registration,
                isRegistered: action.payload.isRegistered
            };
        case REGISTRATION_LOADING:
            return {
                ...state,
                registrationLoading: true,
                loading: true
            };
        case RESET_REGISTRATION:
            return {
                ...state,
                registration: {},
                isRegistered: false,
                registrationLoading: false,
                loading: false || state.formDataLoading
            };
        case FORM_DATA_LOADING:
            return {
                ...state,
                formDataLoading: true,
                loading: true
            };
        default:
            return state;
    }
};
