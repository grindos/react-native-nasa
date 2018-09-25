import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  counter: {
    paddingTop: 35,
    paddingBottom: 10,
    fontSize: 20,
  },
});

const Counter = ({ queriesLeft }) => (
  <Text style={styles.counter}>
    {`${queriesLeft} left`}
  </Text>
);
Counter.propTypes = {
  queriesLeft: PropTypes.number,
};

export default Counter;
