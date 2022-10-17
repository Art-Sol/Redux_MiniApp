import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	comments: []
}

export const commentsLoad = createAsyncThunk(
	'comments/commentsLoad',
	async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');

			if (!response.ok) {
				throw new Error()
			}

			return response.json();
		} catch (error) {
			throw error;
		}
	}
)

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		commentCreate: {
			reducer: (state, action) => {
				state.comments.unshift(action.payload)
			},
			prepare: (text, id) => {
				return { payload: { text, id }}
			}
		},
		commentUpdate: {
			reducer: (state, action) => {
				state.comments.forEach(item => {
					if (item.id === action.payload.id) {
						item.text = action.payload.text;
					}
				})
			},
			prepare: (text, id) => {
				return { payload: { text, id }}
			}
		},
		commentDelete: (state, action) => { 
			state.comments = state.comments.filter(item => item.id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(commentsLoad.fulfilled, (state, action) => {
				const loadedComments = action.payload.map(item => {
					return {
						text: item.name,
						id: item.id
					}
				})
				state.comments = loadedComments;
			})
	}
});

const { actions, reducer } = commentsSlice;

export default reducer;
export const {
	commentCreate,
	commentUpdate,
	commentDelete,
} = actions;