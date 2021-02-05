import { GET_SUCCESS, CLEAR_SUCCESS } from '../../actions/types'

export const returnSuccess = (msg, id = null) => {
    return {
        type: GET_SUCCESS,
        payload: { msg, id },
    }
}

export const clearSuccess = () => {
    return {
        type: CLEAR_SUCCESS,
    }
}
