import { GET_DOCUMENTS, ADD_DOCUMENT, DELETE_DOCUMENT, DOCUMENTS_LOADING } from '../actions/types';

const initialState = {
	documents: [],
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DOCUMENTS:
			return {
				...state,
				documents: action.payload,
				loading: false
			};
		case DOCUMENTS_LOADING:
			return {
				...state,
				loading: true
			};
		case ADD_DOCUMENT:
			const documents = state.documents.filter(item => item._id !== action.payload._id);
			return {
				...state,
				documents: [action.payload, ...documents]
			};
		case DELETE_DOCUMENT:
			return {
				...state,
				documents: state.documents.filter(item => item._id !== action.payload)
			};
		default:
			return state;
	}
};
