import { configureStore } from '@reduxjs/toolkit';

import likesReducer from '../slices/likesSlice'; 
import inputReducer from "../slices/inputSlice";
import commentsReducer from "../slices/commentsSlice";
import statusReducer from '../slices/loadingStatusSlice';
import { spamFilter } from '../middleware/middleware';

const store = configureStore({
	reducer: {
		likesReducer,
		inputReducer,
		commentsReducer,
		statusReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(spamFilter),
	devTools: process.env.NODE_ENV !== 'production',
})

export default store;
