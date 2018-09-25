import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

const firstAPODDate = '1995-06-16';

const styles = StyleSheet.create({
  dateChooser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  datePicker: {
    flex: 1,
  },
});

const DateChanger = ({ date, onChooseDate }) => (
  <View style={styles.dateChooser}>
    <View style={styles.buttonContainer}>
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
    </View>

    <DatePicker
      style={styles.DatePicker}
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
    <View style={styles.buttonContainer}>
      {(moment().isSameOrBefore(date, 'day'))
        ? <Text />
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

  </View>
);
DateChanger.propTypes = {
  date: PropTypes.object,
  onChooseDate: PropTypes.func,
};

export default DateChanger;
