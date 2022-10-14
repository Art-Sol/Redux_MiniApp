import { useSelector } from 'react-redux';

import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';


function App() {
	const error = useSelector(state => state.loadingStatusReducer.error);

	console.log('error >> ', error)

	const renderErrorMessage = (error) => error ? <div className='error-message'>{error}</div> : error;
	
	const errorMessage = renderErrorMessage(error);

	return (
		<div className="App">
			<div className="wrap">
			<Spin />
			<div className="card">
				{errorMessage}
				<div className="card-image">
					<img src="./sea.jpg" alt="surfing"/>
					<Title/>
					<Likes/>
				</div>
				<Comments />
			</div>
			</div>
		</div>
	);
}

export default App;