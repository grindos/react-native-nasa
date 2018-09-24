import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import moment from 'moment';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware())(createStore);

const persistedState = {
  queriesLeft: 1000,
  date: moment(),
  name: '',
  picture: '',
  description: '',
};

const store = createStoreWithMiddleware(reducer, persistedState);

export default store;
