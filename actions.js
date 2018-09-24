import axios from 'axios';
import moment from 'moment';
import { CHOOSE_DATE, NEXT_DAY, PREVIOUS_DAY } from './constants';

export const chooseDate = date => {
  const path = `https://api.nasa.gov/planetary/apod?api_key=SOadEyEkR1a6rTYs3FnNmXIIQwCojoxJtfVUQa6H&date=${date}`;
  console.log(path);
  return {
    type: CHOOSE_DATE,
    payload: axios.get(path),
  };
};

export const nextDay = () => ({
  type: NEXT_DAY,
});

export const previousDay = () => ({
  type: PREVIOUS_DAY,
});
