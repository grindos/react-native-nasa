import moment from 'moment';
import { CHOOSE_DATE, CHOOSE_DATE_FULFILLED } from './constants';

const defaultState = {
  queriesLeft: 0,
  date: moment(),
  name: '',
  picture: '',
  description: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHOOSE_DATE:
      const { date } = action.payload.data;
      return {
        ...state,
        date: moment(date, 'YYYY-MM-DD'),
      };
    case CHOOSE_DATE_FULFILLED:
      const { title, url, explanation } = action.payload.data;
      return {
        ...state,
        name: title,
        image: url,
        description: explanation,
        queriesLeft: +action.payload.headers['x-ratelimit-remaining'],
      };
    default:
      return state;
  }
};

export default reducer;
