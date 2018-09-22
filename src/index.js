import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import './CSS/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
