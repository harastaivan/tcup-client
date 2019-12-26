import { combineReducers } from 'redux';
import errorReducer from './error';
import authReducer from './auth';
import newsReducer from './news';
import registrationReducer from './registration';
import documentReducer from './document';

export default combineReducers({
	error: errorReducer,
	auth: authReducer,
	news: newsReducer,
	registration: registrationReducer,
	document: documentReducer
});
