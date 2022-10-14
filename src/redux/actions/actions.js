import { 
	INCREMENT, 
	DECREMENT, 
	INPUT_TEXT, 
	COMMENT_CREATE, 
	COMMENT_UPDATE, 
	COMMENT_DELETE, 
	COMMENTS_LOAD, 
	LOADER_DISPLAY_ON,
	LOADER_DISPLAY_OFF,
	ERROR_DISPLAY_ON,
	ERROR_DISPLAY_OFF
} from "./types";

export const incrementLikes = () => ({type: INCREMENT});

export const decrementLikes = () => ({type: DECREMENT});

export const inputText = (text) => ({
	type: INPUT_TEXT, 
	payload: text
});

export const commentCreate = (text, id) => ({
	type: COMMENT_CREATE,
	payload: { text, id }
}); 

export const commentUpdate = (text, id) => ({
	type: COMMENT_UPDATE,
	payload: { text, id }
}); 

export const commentDelete = (id) => ({
	type: COMMENT_DELETE,
	payload: id
})

export const loaderOn = () => ({
	type: LOADER_DISPLAY_ON
})

export const loaderOff = () => ({
	type: LOADER_DISPLAY_OFF
})

export const commentsLoad = () => (dispatch) => {
	dispatch(loaderOn());
	fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: COMMENTS_LOAD,
				payload: res
			})
		})
		.then(() => dispatch(loaderOff()))
		.catch(() => dispatch(errorOn('Ошибка API')));
}

export const errorOn = (text) => {
	return dispatch => {
	dispatch({
		type: ERROR_DISPLAY_ON,
		payload: text
	});
	
	setTimeout(() => {
		dispatch(errorOff());
	}, 3000)}
}

export const errorOff = () => ({
	type: ERROR_DISPLAY_OFF,
})