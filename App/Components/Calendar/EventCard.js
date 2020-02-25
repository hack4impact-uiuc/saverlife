import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {eventCardStyles} from './CalendarStyle'

export default class EventCard extends Component {
  state = {

  };

  render() {
    console.log("Loading: " + this.props.name)
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
            {this.props.name}
          </Text>
          <View style={eventCardStyles.eventLabelWrapper}>
            {this.props.labels.map(label => (
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