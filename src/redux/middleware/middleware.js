import { errorOn, errorOff } from '../slices/loadingStatusSlice';

const badWords = ['козел', 'лох'];

export const spamFilter = ({dispatch}) => (next) => (action) => {
	if (action.type === 'comments/commentCreate') {
		const hasBadWords = badWords.some(item => action.payload.text.includes(item));
		if (hasBadWords) {
			return dispatch(errorOn('Уважайте людей'));
		} else {
			dispatch(errorOff());
		}
	}
	return next(action);
}
