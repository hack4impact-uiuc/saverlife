import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {eventCardStyles} from './CalendarStyle'

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

  // componentDidMount(): void {
  //   const events = this.props.events;
  //   let formattedEvents = {};
  //   for (let event of events) {
  //     let dateKey = event.date;
  //     delete event["date"];
  //     formattedEvents[dateKey] = {marked: true, ...event};
  //   }
  //
  //   this.setState(
  //     {
  //       events: formattedEvents
  //     }
  //   )
  // }

  render() {

    return (
      <View style={eventCardStyles.container}>
        <View style={eventCardStyles.eventIconWrapper}>
          <View style={eventCardStyles.eventIcon}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>20</Text>
            <Text style={{fontSize: 14}}>Days</Text>
          </View>
        </View>
        <View style={eventCardStyles.eventInfo}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Value
          </Text>
          <View style={eventCardStyles.eventLabelWrapper}>
            {(this.props.labels).map(label => (
              <Text style={eventCardStyles.eventLabel} key={label.labelName}>
                {label.labelName}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  }
}