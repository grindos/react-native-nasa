import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  counter: {
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
