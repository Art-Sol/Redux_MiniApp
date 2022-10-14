import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/action';

function Title(props) {
	console.log('props title >', props);

	const text = useSelector(state => state.inputReducer.text);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log('handle change >', e.target.value);
		dispatch(inputText(e.target.value));
	}

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input value={text} type="text" onChange={handleChange}/>
			</div>
			<p>{text}</p>
		</div>
	)
}

export default Title;