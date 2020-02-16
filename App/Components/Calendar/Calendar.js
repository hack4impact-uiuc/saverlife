import React, { Component } from 'react';
import {Calendar as WixCalendar, CalendarList, Agenda} from 'react-native-calendars';
import { Text, View } from 'react-native';
import {styles} from './CalendarStyle'

export default class Calendar extends Component {

  render() {
    return (
      <View style={styles.container}>
          <WixCalendar />
      </View>
    );
  }
}