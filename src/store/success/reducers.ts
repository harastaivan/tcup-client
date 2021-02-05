import { SuccessAction, successActionTypes } from './actions'
import { SuccessState } from './types'

const initialState: SuccessState = {
    msg: null,
    id: null,
}

const successReducer = (state: SuccessState = initialState, action: SuccessAction) => {
    switch (action.type) {
        case successActionTypes.GET_SUCCESS:
            return {
                msg: action.payload.msg,
                id: action.payload.id,
            }
        case successActionTypes.CLEAR_SUCCESS:
            return {
                msg: null,
                id: null,
            }
        default:
            return state
    }
}

export default successReducer
