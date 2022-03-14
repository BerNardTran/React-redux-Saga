// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import myReducer from './reducers';

import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/root';

const sagaMiddleware = createSagaMiddleware();

var store = createStore(
  myReducer,
  applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
  <Provider store={ store }>
      <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
serviceWorker.unregister();