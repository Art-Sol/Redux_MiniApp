import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import SingleComment from './SingleComment';
import { commentCreate, commentsLoad } from '../redux/slices/commentsSlice';

const Comments = () => {
	const comments = useSelector(state => state.commentsReducer.comments);
	const dispatch = useDispatch();

	const [textComment, setTextComment] = useState('');

	useEffect(() => {
		dispatch(commentsLoad());
		// eslint-disable-next-line
	}, [])

	const handleInput = (e) => {
		setTextComment(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = uniqid();
		dispatch(commentCreate(textComment, id));
	}

	const renderComment = (arr) => {
		return arr.length === 0 ?
		null :
		arr.map(item => {
				return <SingleComment key={item.id} comment={item}/>
			})
	}

	const singleComment = renderComment(comments);

	return (
		<div className="card-comments">
			<form className="comments-item-create" onSubmit={handleSubmit}>
				<input type="text" value={textComment} onChange={handleInput}/>
				<input type="submit" hidden/>
			</form>
			{singleComment}
		</div>
	)
}

export default Comments;