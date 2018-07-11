import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
const promiseMiddleware = require('redux-promise')

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware.default)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
