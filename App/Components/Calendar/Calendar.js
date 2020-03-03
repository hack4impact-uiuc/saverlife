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
      events: [
        {name: "Water Bill", cost: "32.24", id: "01", category:1, date: new Date().getTime() + 100000000, dotColor: "red"},
        {name: "Heating Bill", cost: "78.23", id: "02", category:1, date: new Date().getTime() + 200000000},
        {name: "Payday", cost: "153.72", id: "03", category:2, date: new Date().getTime() + 200000000},
        {name: "Dinner", cost: "19.72", id: "04", category:0, date: new Date().getTime() + 200000000},
        {name: "Groceries", cost: "50.72", id: "05", category:1, date: new Date().getTime() + 200000000},
      ]
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

  componentDidMount() {
    this.formatEvents();
  }

  formatEvents() {
    const events = this.state.events;
    let formattedEvents = {};
    for (let event of events) {
      let dateKey = event.date;
      formattedEvents[dateKey] = {marked: true, ...event};
    }


    this.setState(
      {
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