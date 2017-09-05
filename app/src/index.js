import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import { Provider } from 'react-redux';
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

ReactDOM.render(
<BrowserRouter> 
  <Provider store={store}>
    <App store={store}/>
  </Provider>
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
