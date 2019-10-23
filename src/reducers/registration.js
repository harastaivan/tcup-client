import { GET_FORM_DATA, FORM_DATA_LOADING } from '../actions/types';

const initialState = {
    registration: {},
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
        case FORM_DATA_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
