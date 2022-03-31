import axios from 'axios'

import { DOCUMENTS_LOADING, GET_DOCUMENTS, ADD_DOCUMENT, DELETE_DOCUMENT } from 'actions/types'
import { tokenConfig } from '../auth/actions'
import { toast } from 'modules/toast'
import { API_ENDPOINT } from 'config/constants'

export const getDocuments = () => async (dispatch) => {
    dispatch(setDocumentsLoading)
    const res = await axios.get(`${API_ENDPOINT}/api/documents`)
    dispatch({
        type: GET_DOCUMENTS,
        payload: res.data,
    })
}

export const addDocument = (document) => async (dispatch, getState) => {
    try {
        const data = new FormData()
        data.append('document', document.document)
        const res = await axios.post(
            `${API_ENDPOINT}/api/documents`,
            data,
            tokenConfig(getState, 'multipart/form-data')
        )
        dispatch({
            type: ADD_DOCUMENT,
            payload: res.data,
        })
    } catch (err) {
        toast.apiError(err)
    }
}

export const deleteDocument = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`${API_ENDPOINT}/api/documents/${id}`, tokenConfig(getState))
        dispatch({
            type: DELETE_DOCUMENT,
            payload: id,
        })
    } catch (err) {
        toast.apiError(err)
    }
}

export const setDocumentsLoading = () => {
    return {
        type: DOCUMENTS_LOADING,
    }
}
