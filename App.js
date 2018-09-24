import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import APOD from './containers/APOD';

const App = () => (
  <Provider store={store}>
    <APOD />
  </Provider>
);

export default App;
