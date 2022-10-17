import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	likes: 0
}

const likesSlice = createSlice({
	name: 'likes',
	initialState,
	reducers: {
		incrementLikes: state => { state.likes = state.likes + 1 },
		decrementLikes: state => { state.likes = state.likes - 1 }
	},
});

const { actions, reducer } = likesSlice;

export default reducer;

export const {
	incrementLikes,
	decrementLikes
} = actions;