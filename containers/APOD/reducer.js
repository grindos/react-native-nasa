import moment from 'moment';
import { CHOOSE_DATE_REJECTED, CHOOSE_DATE_PENDING, CHOOSE_DATE_FULFILLED } from '../../constants';

const defaultState = {
  queriesLeft: 0,
  date: moment(),
  name: '',
  picture: '',
  description: '',
  loading: true,
};

const APODInfo = (state = defaultState, action) => {
  switch (action.type) {
    case CHOOSE_DATE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CHOOSE_DATE_FULFILLED:
      const { date, title, url, explanation } = action.payload.data;
      return {
        ...state,
        date: moment(date, 'YYYY-MM-DD'),
        name: title,
        image: url,
        description: explanation,
        queriesLeft: +action.payload.headers['x-ratelimit-remaining'],
        loading: false,
      };
    case CHOOSE_DATE_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default APODInfo;
