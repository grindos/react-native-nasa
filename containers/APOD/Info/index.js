import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading: {
    fontSize: 30,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const Info = ({ name, image, description, loading }) => loading
  ? (
    <Text style={styles.loading}>
      Loading...
    </Text>
  )
  : (
    <View style={styles.info}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
Info.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
};

export default Info;
