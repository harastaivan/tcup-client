import { GET_DOCUMENTS, ADD_DOCUMENT, DELETE_DOCUMENT, DOCUMENTS_LOADING } from '../../actions/types'

const initialState = {
    documents: [],
    loading: false,
}

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOCUMENTS:
            return {
                ...state,
                documents: action.payload,
                loading: false,
            }
        case DOCUMENTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ADD_DOCUMENT:
            return {
                ...state,
                documents: [action.payload, ...state.documents.filter((item) => item._id !== action.payload._id)],
            }
        case DELETE_DOCUMENT:
            return {
                ...state,
                documents: state.documents.filter((item) => item._id !== action.payload),
            }
        default:
            return state
    }
}

export default documentReducer
