import React, { Component } from 'react';
import {Calendar as WixCalendar, CalendarList, Agenda} from 'react-native-calendars';
import { Text, View } from 'react-native';
import {styles} from './CalendarStyle';
import DateInfo from './DateInfo';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      selectedDate: this.getUTCTime()
    }

    this.onSelectDate = this.onSelectDate.bind(this);
    this.getUTCTime = this.getUTCTime.bind(this);
  }

  onSelectDate = (day) => {
    console.log(day.timestamp);

    this.setState({
      selectedDate: day.timestamp
    })
  }

  getUTCTime(){
    return new Date().getTime();
  }

  render() {
    return (
      <View style={styles.container}>
          <WixCalendar onDayPress={(date)=>this.onSelectDate(date)} style={{height: 400, width:400}} markedDates={this.markedDates} />
          <DateInfo timestamp={this.state.selectedDate}/>
      </View>

    );
  }
}