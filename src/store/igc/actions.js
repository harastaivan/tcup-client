import {
    ADD_IGC,
    GET_IGC_FORM_DATA,
    ADD_IGC_SUCCESS,
    ADD_IGC_ERROR,
    IGC_CLEAR_MESSAGE,
    GET_IGC_FILES,
    RESET_IGC_FILES,
    UPDATE_IGC_FILE,
} from '../../actions/types'
import axios from 'axios'
import { tokenConfig } from '../auth/actions'
import { returnErrors } from '../error/actions'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const addIgc = (igc) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_IGC,
        })
        const data = new FormData()
        data.append('igc', igc.igc)
        data.append('pilot', igc.pilot)
        data.append('day', igc.day)
        const res = await axios.post(`${API_ENDPOINT}/api/igc`, data, tokenConfig(getState, 'multipart/form-data'))
        dispatch({
            type: ADD_IGC_SUCCESS,
            payload: res.data,
        })
        setTimeout(() => {
            dispatch({ type: IGC_CLEAR_MESSAGE })
        }, 5000)
    } catch (err) {
        dispatch(returnErrors(err))
        dispatch({
            type: ADD_IGC_ERROR,
            payload: err,
        })
        setTimeout(() => {
            dispatch({ type: IGC_CLEAR_MESSAGE })
        }, 5000)
    }
}

export const getIgcFormData = () => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/igc/form`)
    dispatch({
        type: GET_IGC_FORM_DATA,
        payload: res.data,
    })
}

export const getIgcFiles = (day) => async (dispatch, getState) => {
    const res = await axios.get(`${API_ENDPOINT}/api/igc/${day}`, tokenConfig(getState))
    dispatch({
        type: GET_IGC_FILES,
        payload: res.data,
    })
}

export const resetIgcFiles = () => ({
    type: RESET_IGC_FILES,
})

export const updateIgcFile = (igcFile) => async (dispatch, getState) => {
    const { downloaded, processed } = igcFile
    const res = await axios.put(
        `${API_ENDPOINT}/api/igc/${igcFile._id}`,
        { downloaded, processed },
        tokenConfig(getState)
    )
    dispatch({
        type: UPDATE_IGC_FILE,
        payload: res.data,
    })
}
