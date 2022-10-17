import { createSlice } from "@reduxjs/toolkit";

import { commentsLoad } from "./commentsSlice";

const initialState = {
	loading: false,
	error: null
}

const statusSlice = createSlice({
	name: 'loadStatus',
	initialState,
	reducers: {
		loaderOn: state => {
			state.loading = true
		},
		loaderOff: state => { state.loading = false },
		errorOn: (state, action) => { state.error = action.payload }, 
		errorOff: state => { state.error = null },
	},
	extraReducers: (builder) => {
		builder
			.addCase(commentsLoad.pending, (state) => {
				state.loading = true;
			})
			.addCase(commentsLoad.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(commentsLoad.rejected, (state) => {
				state.error = 'Ошибка API';
			})
	}
});

const { actions, reducer } = statusSlice;

export default reducer;
export const {
	loaderOn,
	loaderOff,
	errorOn,
	errorOff
} = actions;