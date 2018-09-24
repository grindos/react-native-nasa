import moment from 'moment';
import { CHOOSE_DATE, CHOOSE_DATE_FULFILLED, NEXT_DAY, PREVIOUS_DAY } from './constants';

const defaultState = {
  queriesLeft: 0,
  date: moment(),
  name: '',
  picture: '',
  description: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHOOSE_DATE_FULFILLED:
      const { date, title, url, explanation } = action.payload.data;
      console.log(date);
      return {
        ...state,
        date: moment(date, 'YYYY-MM-DD'),
        name: title,
        image: url,
        description: explanation,
        queriesLeft: action.payload.headers['x-ratelimit-remaining'],
      };
    case NEXT_DAY:
      return {
        ...state,
        date: moment(state.date).add(1, 'days'),
        description: 'next',
        name: 'next',
        picture: 'next',
      };
    case PREVIOUS_DAY:
      return {
        ...state,
        date: moment(state.date).subtract(1, 'days'),
        description: 'prev',
        name: 'prev',
        picture: 'prev',
      };
    default:
      return state;
  }
};

export default reducer;
