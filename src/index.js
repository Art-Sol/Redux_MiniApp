import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { spamFilter } from './redux/middleware';


import './index.css';
import App from './App';

const store = createStore(rootReducer, compose(
	applyMiddleware(ReduxThunk, spamFilter),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
		
	// </React.StrictMode>
);

