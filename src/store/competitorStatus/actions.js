import axios from 'axios'

import {
    GET_COMPETITOR_STATUSES,
    UPDATE_COMPETITOR_STATUS,
    RESET_COMPETITOR_STATUSES,
    LOADING_COMPETITOR_STATUSES,
} from 'actions/types'
import { tokenConfig } from 'store/auth/actions'
import { API_ENDPOINT } from 'config/constants'

export const getCompetitorStatuses = (day) => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/competitorstatuses/${day}`)
    dispatch({
        type: GET_COMPETITOR_STATUSES,
        payload: res.data,
    })
}

export const updateCompetitorStatus = (competitorStatus) => async (dispatch, getState) => {
    const res = await axios.put(
        `${API_ENDPOINT}/api/competitorstatuses/${competitorStatus._id}`,
        { status: competitorStatus.status },
        tokenConfig(getState)
    )
    dispatch({
        type: UPDATE_COMPETITOR_STATUS,
        payload: res.data,
    })
}

export const resetCompetitorStatuses = () => async (dispatch) => {
    dispatch({
        type: RESET_COMPETITOR_STATUSES,
    })
}

export const setLoadingCompetitorStatuses = () => async (dispatch) => {
    dispatch({
        type: LOADING_COMPETITOR_STATUSES,
    })
}
