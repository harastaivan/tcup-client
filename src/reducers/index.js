import { combineReducers } from 'redux';
import errorReducer from './error';
import authReducer from './auth';
import newsReducer from './news';
import registrationReducer from './registration';
import documentReducer from './document';
import startingListReducer from './startingList';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    news: newsReducer,
    registration: registrationReducer,
    document: documentReducer,
    startingList: startingListReducer
});
