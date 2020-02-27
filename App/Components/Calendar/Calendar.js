import React, { Component } from 'react';
import {Calendar as WixCalendar, CalendarList, Agenda} from 'react-native-calendars';
import { Text, View } from 'react-native';
import {styles, wixCalenderStyles} from './CalendarStyle'
import DateInfo from './DateInfo';


export default class Calendar extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      selectedDate: this.getUTCTime(),
      calendarEvents: {},
      events: []
    }

    this.onSelectDate = this.onSelectDate.bind(this);
    this.getUTCTime = this.getUTCTime.bind(this);
  }

  /**
   * Lifecycle method to take events from props, formats them for the WixCalendar
   * and places them in the 'events' key of this component's state
   *
   * Accepts the prop 'events' as an array of JSON object containing a formatted
   * date pair and other optional attributes.
   */

  componentDidMount(): void {
    const events = this.props.events;
    let formattedEvents = {};
    for (let event of events) {
      let dateKey = event.date;
      formattedEvents[dateKey] = {marked: true, ...event};
    }


    this.setState(
      {
        events: this.props.events,
        calendarEvents: formattedEvents
      }
    )
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
          <WixCalendar
            markedDates={this.state.calendarEvents}
            onDayPress={(date)=>this.onSelectDate(date)}
            style={{alignSelf: "stretch"}}
           />
          <DateInfo
            timestamp={this.state.selectedDate}
            events={this.state.events}
          />
      </View>

    );
  }
}