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
  },
  button: {
    margin: 10,
  },
});

const DateChanger = ({ date, onChooseDate }) => (
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
);
DateChanger.propTypes = {
  date: PropTypes.object,
  onChooseDate: PropTypes.func,
};

export default DateChanger;
