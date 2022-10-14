import { FidgetSpinner } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Spin = () => {
	const loadingStatus = useSelector(state => state.loadingStatusReducer.loading)
	
	return (
		<div className='loader-styles'>
			<FidgetSpinner
				visible={loadingStatus}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				ballColors={['#ff0000', '#00ff00', '#0000ff']}
				backgroundColor="#F4442E"
			/>
		</div>
	)
}

export default Spin;