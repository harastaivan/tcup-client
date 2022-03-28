import { ErrorAction, errorActionTypes } from './actions'
import type { ErrorState } from './types'

const initialState: ErrorState = {
    msg: null,
    status: null,
    id: null,
}

const errorReducer = (state: ErrorState = initialState, action: ErrorAction) => {
    switch (action.type) {
        case errorActionTypes.GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id,
            }
        case errorActionTypes.CLEAR_ERRORS:
            return {
                msg: null,
                status: null,
                id: null,
            }
        default:
            return state
    }
}

export default errorReducer
