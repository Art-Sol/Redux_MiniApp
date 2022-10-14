import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./types";

const initialState = {
	comments: []
}

export const commentsReducer = (state = initialState, action) => {
	console.log('commentsReducer > ', action);
	switch (action.type) {
		case COMMENT_CREATE:
			return {
				...state,
				comments: [...state.comments, action.payload]
			}
		case COMMENT_UPDATE:
			const commentIndex = state.comments.findIndex(item => item.id === action.payload.id);
			const updatedComments = [
				...state.comments.slice(0, commentIndex),
				action.payload,
				...state.comments.slice(commentIndex + 1)
			];
			return {
				...state,
				comments: updatedComments
			}
		case COMMENT_DELETE:
			return {
				...state,
				comments: state.comments.filter(item => item.id !== action.payload)
			}
		case COMMENTS_LOAD:
			const loadedComments = action.payload.map(item => {
				return {
					text: item.name,
					id: item.id
				}
			})
			return {
				...state,
				comments: loadedComments
			}
		default:
			return state;
	}
}