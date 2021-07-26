import { createStore, compose, applyMiddleware } from 'redux'
import Immutable from 'immutable'
import thunk from 'redux-thunk';

// import createSagaMiddleware from 'redux-saga'
// const sagaMiddleware = createSagaMiddleware();

import reducer from './reducer'

// import saga from './saga'


// 为了让浏览器里面redux可以用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState  = Immutable.Map();

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

// sagaMiddleware.run(saga)

export default store;