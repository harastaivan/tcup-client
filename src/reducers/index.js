import { combineReducers } from 'redux';
import errorReducer from './error';
import successReducer from './success';
import authReducer from './auth';
import newsReducer from './news';
import registrationReducer from './registration';
import documentReducer from './document';
import startingListReducer from './startingList';
import competitionDayReducer from './competitionDay';

export default combineReducers({
    error: errorReducer,
    success: successReducer,
    auth: authReducer,
    news: newsReducer,
    registration: registrationReducer,
    document: documentReducer,
    startingList: startingListReducer,
    competitionDay: competitionDayReducer
});
