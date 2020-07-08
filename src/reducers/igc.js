import { ADD_IGC, GET_IGC_FORM_DATA, ADD_IGC_SUCCESS, ADD_IGC_ERROR, IGC_CLEAR_MESSAGE } from '../actions/types';

const initialState = {
    pilots: [],
    loading: false,
    success: '',
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_IGC:
            return {
                ...state,
                loading: true,
                success: '',
                error: ''
            };
        case ADD_IGC_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'Soubor byl odeslán organizátorovi',
                error: ''
            };
        case ADD_IGC_ERROR:
            return {
                ...state,
                loading: false,
                success: '',
                error: 'Soubor se nepodařilo odeslat organizátorovi, zkuste to později'
            };
        case IGC_CLEAR_MESSAGE:
            return {
                ...state,
                success: '',
                error: ''
            };
        case GET_IGC_FORM_DATA:
            return {
                ...state,
                pilots: action.payload
            };
        default:
            return state;
    }
};
