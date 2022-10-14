import { combineReducers } from "redux";
import { likesReducer } from './likesReducer';
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { loadingStatusReducer } from './loadingStatusReducer';

export const rootReducer = combineReducers({
	likesReducer,
	inputReducer,
	commentsReducer,
	loadingStatusReducer
});