import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer.js';
import { booksDataReducer } from './booksDataReducer.js';

export default combineReducers({
	globalState: appStateReducer,
	booksData: booksDataReducer
});
