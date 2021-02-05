import { STARTING_LIST_LOADING, GET_STARTING_LIST, PAY_REGISTRATION, EXPORT_REGISTRATIONS } from '../../actions/types'
import axios from 'axios'
import { tokenConfig } from '../auth/actions'
import { returnErrors } from '../error/actions'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getStartingList = () => async (dispatch) => {
    dispatch(setStartingListLoading)
    const res = await axios.get(`${API_ENDPOINT}/api/starting-list`)
    dispatch({
        type: GET_STARTING_LIST,
        payload: res.data,
    })
}

export const setStartingListLoading = () => {
    return {
        type: STARTING_LIST_LOADING,
    }
}

export const markPaid = (registrationId, paid) => async (dispatch, getState) => {
    try {
        const res = await axios.put(
            `${API_ENDPOINT}/api/registration/pay/${registrationId}`,
            { paid },
            tokenConfig(getState)
        )
        dispatch({
            type: PAY_REGISTRATION,
            payload: {
                registrationId: res.data._id,
                paid: res.data.paid,
            },
        })
    } catch (err) {
        dispatch(returnErrors(err))
    }
}

export const exportRegistrations = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${API_ENDPOINT}/api/starting-list/export`, tokenConfig(getState))
        dispatch({
            type: EXPORT_REGISTRATIONS,
            payload: res,
        })
    } catch (err) {
        dispatch(returnErrors(err))
    }
}
