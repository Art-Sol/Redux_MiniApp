import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes, decrementLikes } from '../redux/slices/likesSlice';

function Likes() {
	const likes = useSelector(state => state.likesReducer.likes);
	const dispatch = useDispatch();

	const handleIncrementLikes = () => {
		dispatch(incrementLikes());
	}

	const handleDecrementLikes = () => {
		dispatch(decrementLikes());
	}

	return ( 
		<div className="button-controls">
			<button onClick={handleIncrementLikes}>♡ {likes}</button>
			<button onClick={handleDecrementLikes}>Dislike</button>
		</div>
	)
}

export default Likes;