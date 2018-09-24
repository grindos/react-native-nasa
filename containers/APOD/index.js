import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { selectDate, selectDescription, selectImage, selectName, selectQueriesLeft } from '../../selectors';

import chooseDate from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  dateChooser: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  counter: {
    marginTop: 30,
  },
});

const firstAPODDate = '1995-06-16';

const APOD = ({ date, onChooseDate, image, description, name, queriesLeft }) => (
  <View style={styles.container}>
    <Text style={styles.counter}>
      {`${queriesLeft} left`}
    </Text>
    <View style={styles.dateChooser}>
      {(date.isSameOrBefore(moment(firstAPODDate, 'YYYY-MM-DD'), 'day'))
        ? null
        : (
          <Button
            onPress={() => {
              onChooseDate(date.subtract(1, 'days').format('YYYY-MM-DD'));
            }}
            title="Previous day"
            style={styles.button}
          />
        )
      }

      <DatePicker
        style={{ width: 200 }}
        date={date.format('YYYY-MM-DD')}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={firstAPODDate}
        maxDate={moment().format('YYYY-MM-DD')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={onChooseDate}
      />
      {(moment().isSameOrBefore(date, 'day'))
        ? null
        : (
          <Button
            onPress={() => {
              onChooseDate(date.add(1, 'days').format('YYYY-MM-DD'));
            }}
            title="Next day"
            style={styles.button}
          />
        )
      }

    </View>

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
APOD.propTypes = {
  date: PropTypes.object,
  onChooseDate: PropTypes.func,
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  queriesLeft: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  date: selectDate,
  description: selectDescription,
  image: selectImage,
  name: selectName,
  queriesLeft: selectQueriesLeft,
});

const mapDispatchToProps = {
  onChooseDate: chooseDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(APOD);
