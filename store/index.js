import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware())(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
