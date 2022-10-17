import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: ''
}

const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		inputText: (state, action) => { state.text = action.payload }
	}
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { inputText } = actions;