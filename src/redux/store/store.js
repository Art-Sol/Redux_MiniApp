import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';
import { spamFilter } from '../middleware/middleware';

const store = createStore(rootReducer, compose(
	applyMiddleware(ReduxThunk, spamFilter),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
