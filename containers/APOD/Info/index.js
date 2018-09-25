import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

const Info = ({ name, image, description, loading }) => loading
  ? (
    <Text>Loading...</Text>
  )
  : (
    <View>
      <Text>
        {name}
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: image }}
      />
      <Text>
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
