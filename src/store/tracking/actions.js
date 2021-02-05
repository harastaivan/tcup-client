import { ADD_TRACKING, GET_TRACKINGS } from '../../actions/types'
import axios from 'axios'
import { tokenConfig } from '../auth/actions'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const addTracking = (tracking) => async (dispatch, getState) => {
    const res = await axios.post(`${API_ENDPOINT}/api/tracking`, tracking, tokenConfig(getState))
    dispatch({
        type: ADD_TRACKING,
        payload: res.data,
    })
}

export const getTrackings = (today) => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/tracking/${today._id}`)
    dispatch({
        type: GET_TRACKINGS,
        payload: res.data,
    })
}
