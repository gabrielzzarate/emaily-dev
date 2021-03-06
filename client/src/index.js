import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import reducers from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// development only axios helpers
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

