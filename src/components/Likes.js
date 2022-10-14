import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';



function Likes(props) {
	return ( 
		<div className="button-controls">
			<button onClick={props.incrementLikes}>♡ {props.likes}</button>
			<button onClick={props.decrementLikes}>Dislike</button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		likes: state.likesReducer.likes
	}
}

export default connect(mapStateToProps, actions)(Likes);