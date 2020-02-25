import React, { Component } from 'react';
import {Calendar as WixCalendar, CalendarList, Agenda} from 'react-native-calendars';
import { Text, View } from 'react-native';
import {styles, wixCalenderStyles} from './CalendarStyle'
import EventCard from './EventCard'

export default class Calendar extends Component {
  state = {
    events: {}
  };

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
      delete event["date"];
      formattedEvents[dateKey] = {marked: true, ...event};
    }

    this.setState(
      {
        events: formattedEvents
      }
    )
  }

  render() {

    return (
      <View style={styles.container}>
          <WixCalendar
            markedDates={this.state.events}
            // theme={wixCalenderStyles}
            width="100%"
          />
          <EventCard
            labels={[{labelName: "test"}, {labelName: "test two"}]}
          />
      </View>
    );
  }
}