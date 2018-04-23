import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import appReducer from './reducer.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }> 
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

export default store;