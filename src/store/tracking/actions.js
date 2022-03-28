import axios from 'axios'

import { ADD_TRACKING, GET_TRACKINGS } from 'actions/types'
import { tokenConfig } from 'store/auth/actions'
import { API_ENDPOINT } from 'config/constants'

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
