import {
    FORM_DATA_LOADING,
    GET_FORM_DATA,
    SUBMIT_REGISTRATION,
    UPDATE_REGISTRATION,
    UPDATE_OTHER_REGISTRATION,
    GET_REGISTRATION,
    GET_OTHER_REGISTRATION,
    REGISTRATION_LOADING,
    RESET_REGISTRATION,
} from '../../actions/types'
import axios from 'axios'
import { tokenConfig } from '../auth/actions'
import { returnErrors, parseError } from '../error/actions'

const isError = ({ msg, status }) => {
    if (msg === 'Registration does not exist for this user' && status === 404) return false
    return true
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getFormData = () => async (dispatch) => {
    dispatch({
        type: FORM_DATA_LOADING,
    })
    const res = await axios.get(`${API_ENDPOINT}/api/registration/form`)
    dispatch({
        type: GET_FORM_DATA,
        payload: res.data,
    })
}

export const getRegistration = () => async (dispatch, getState) => {
    dispatch({
        type: REGISTRATION_LOADING,
    })
    try {
        const res = await axios.get(`${API_ENDPOINT}/api/registration`, tokenConfig(getState))
        dispatch({
            type: GET_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true,
            },
        })
    } catch (err) {
        if (isError(parseError(err))) {
            dispatch(returnErrors(err))
        }
        dispatch({
            type: GET_REGISTRATION,
            payload: {
                registration: {},
                isRegistered: false,
            },
        })
    }
}

export const getOtherRegistration = (id) => async (dispatch, getState) => {
    dispatch({
        type: REGISTRATION_LOADING,
    })
    try {
        const res = await axios.get(`${API_ENDPOINT}/api/registration/${id}`, tokenConfig(getState))
        dispatch({
            type: GET_OTHER_REGISTRATION,
            payload: {
                otherRegistration: res.data,
            },
        })
    } catch (err) {
        dispatch(returnErrors(err))
        dispatch({
            type: GET_OTHER_REGISTRATION,
            payload: {
                otherRegistration: {},
            },
        })
    }
}

export const submitRegistration = (registration) => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${API_ENDPOINT}/api/registration`, registration, tokenConfig(getState))
        dispatch({
            type: SUBMIT_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true,
            },
        })
    } catch (err) {
        dispatch(returnErrors(err))
    }
}

export const updateRegistration = (registration) => async (dispatch, getState) => {
    try {
        const res = await axios.put(`${API_ENDPOINT}/api/registration`, registration, tokenConfig(getState))
        dispatch({
            type: UPDATE_REGISTRATION,
            payload: {
                registration: res.data,
                isRegistered: true,
            },
        })
    } catch (err) {
        dispatch(returnErrors(err))
    }
}

export const updateOtherRegistration = (id, registration) => async (dispatch, getState) => {
    try {
        const res = await axios.put(`${API_ENDPOINT}/api/registration/${id}`, registration, tokenConfig(getState))
        dispatch({
            type: UPDATE_OTHER_REGISTRATION,
            payload: {
                otherRegistration: res.data,
            },
        })
    } catch (err) {
        dispatch(returnErrors(err))
    }
}

export const resetRegistration = () => {
    return {
        type: RESET_REGISTRATION,
    }
}

export const setFormDataLoading = () => {
    return {
        type: FORM_DATA_LOADING,
    }
}