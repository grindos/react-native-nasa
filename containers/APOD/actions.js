import axios from 'axios';
import { CHOOSE_DATE } from '../../constants';

const chooseDate = date => ({
  type: CHOOSE_DATE,
  payload: axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=SOadEyEkR1a6rTYs3FnNmXIIQwCojoxJtfVUQa6H&date=${date}`,
  ),
});

export default chooseDate;
