import { combineReducers } from 'redux'
import authReducer from './auth/reducers'
import newsReducer from './news/reducers'
import documentReducer from './document/reducers'
import startingListReducer from './startingList/reducers'
import competitionDayReducer from './competitionDay/reducers'
import competitorStatusReducer from './competitorStatus/reducers'
import igcReducer from './igc/reducers'
import trackingReducer from './tracking/reducers'
import { api } from 'services/api'

export default combineReducers({
    auth: authReducer,
    news: newsReducer,
    document: documentReducer,
    startingList: startingListReducer,
    competitionDay: competitionDayReducer,
    competitorStatus: competitorStatusReducer,
    igc: igcReducer,
    tracking: trackingReducer,
    [api.reducerPath]: api.reducer,
})
