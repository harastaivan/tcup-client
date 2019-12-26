import { DOCUMENTS_LOADING, GET_DOCUMENTS, ADD_DOCUMENT, DELETE_DOCUMENT } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const getDocuments = () => async dispatch => {
	dispatch(setDocumentsLoading);
	const res = await axios.get(`${API_ENDPOINT}/api/documents`);
	dispatch({
		type: GET_DOCUMENTS,
		payload: res.data
	});
};

export const addDocument = document => async (dispatch, getState) => {
	try {
		const data = new FormData();
		data.append('document', document.document);
		const res = await axios.post(
			`${API_ENDPOINT}/api/documents`,
			data,
			tokenConfig(getState, 'multipart/form-data')
		);
		dispatch({
			type: ADD_DOCUMENT,
			payload: res.data
		});
	} catch (err) {
		dispatch(returnErrors(err));
	}
};

export const deleteDocument = id => async (dispatch, getState) => {
	try {
		await axios.delete(`${API_ENDPOINT}/api/documents/${id}`, tokenConfig(getState));
		dispatch({
			type: DELETE_DOCUMENT,
			payload: id
		});
	} catch (err) {
		dispatch(returnErrors(err));
	}
};

export const setDocumentsLoading = () => {
	return {
		type: DOCUMENTS_LOADING
	};
};
