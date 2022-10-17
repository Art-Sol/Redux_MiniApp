import { useSelector } from 'react-redux';

import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';
import Comments from './components/Comments';
import Spin from './components/Spin';


function App() {
	const { error } = useSelector(state => state.statusReducer);

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