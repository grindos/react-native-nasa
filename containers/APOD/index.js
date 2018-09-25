import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, View } from 'react-native';

import DateChanger from './DateChanger';
import Info from './Info';
import { selectDate, selectDescription, selectImage, selectName, selectQueriesLeft, selectLoading } from './selectors';
import chooseDate from './actions';
import Counter from './Counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

class APOD extends Component {
  componentDidMount() {
    const { onChooseDate, date } = this.props;
    onChooseDate(date.format('YYYY-MM-DD'));
  }

  render() {
    const { date, onChooseDate, image, description, name, queriesLeft, loading } = this.props;

    return (
      <View style={styles.container}>
        <Counter queriesLeft={queriesLeft} />
        <DateChanger date={date} onChooseDate={onChooseDate} />
        <Info name={name} image={image} description={description} loading={loading} />
      </View>
    );
  }
}
APOD.propTypes = {
  date: PropTypes.object,
  onChooseDate: PropTypes.func,
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  queriesLeft: PropTypes.number,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  date: selectDate,
  description: selectDescription,
  image: selectImage,
  name: selectName,
  queriesLeft: selectQueriesLeft,
  loading: selectLoading,
});

const mapDispatchToProps = {
  onChooseDate: chooseDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(APOD);
