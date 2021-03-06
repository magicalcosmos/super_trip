import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import App from './pages/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();