import {
    GET_COMPETITOR_STATUSES,
    UPDATE_COMPETITOR_STATUS,
    RESET_COMPETITOR_STATUSES,
    LOADING_COMPETITOR_STATUSES,
} from '../actions/types'

const initialState = {
    competitorStatuses: [],
    loading: false,
}

const competitorStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPETITOR_STATUSES:
            return {
                ...state,
                competitorStatuses: action.payload,
                loading: false,
            }
        case UPDATE_COMPETITOR_STATUS:
            return {
                ...state,
                competitorStatuses: state.competitorStatuses.map((status) => {
                    if (status._id === action.payload._id) {
                        status.status = action.payload.status
                    }
                    return status
                }),
            }
        case RESET_COMPETITOR_STATUSES:
            return {
                ...state,
                competitorStatuses: [],
            }
        case LOADING_COMPETITOR_STATUSES:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default competitorStatusReducer
