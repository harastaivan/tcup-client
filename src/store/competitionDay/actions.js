import axios from 'axios'

import { GET_COMPETITION_DAYS, UPDATE_COMPETITION_DAY } from 'actions/types'
import { tokenConfig } from 'store/auth/actions'
import { API_ENDPOINT } from 'config/constants'
import { toast } from 'modules/toast'

export const getCompetitionDays = () => async (dispatch) => {
    const res = await axios.get(`${API_ENDPOINT}/api/days`)
    dispatch({
        type: GET_COMPETITION_DAYS,
        payload: res.data,
    })
}

export const updateCompetitionDay = (competitionDay) => async (dispatch, getState) => {
    try {
        const res = await axios.put(
            `${API_ENDPOINT}/api/days/${competitionDay._id}`,
            { task: competitionDay.task },
            tokenConfig(getState)
        )
        dispatch({
            type: UPDATE_COMPETITION_DAY,
            payload: res.data,
        })
        toast.success('competitionDays.update.success')
    } catch (err) {
        toast.error('competitionDays.update.error')
    }
}
