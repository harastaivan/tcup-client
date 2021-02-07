import { NewsAction, newsActionTypes } from './actions'
import { NewsState } from './types'

const initialState: NewsState = {
    news: [],
    loading: false,
}

const newsReducer = (state = initialState, action: NewsAction) => {
    switch (action.type) {
        case newsActionTypes.GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false,
            }
        case newsActionTypes.NEWS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case newsActionTypes.ADD_NEWS:
            return {
                ...state,
                news: [action.payload.news, ...state.news],
            }
        case newsActionTypes.DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter((item) => item._id !== action.payload),
            }
        default:
            return state
    }
}

export default newsReducer
