import { COMMENT_CREATE } from "./types"
import { errorOn } from './action';

const badWords = ['козел', 'лох'];

export const spamFilter = ({dispatch}) => (next) => (action) => {
	if (action.type === COMMENT_CREATE) {
		const hasBadWords = badWords.some(item => action.payload.text.includes(item));
		if (hasBadWords) {
			return dispatch(errorOn('Уважайте людей'))
		}
	}
	return next(action);
}
