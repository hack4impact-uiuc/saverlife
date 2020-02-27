import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {eventCardStyles} from './CalendarStyle'

export default class EventCard extends Component {
  state = {

  };

  getDueDateString() {
    let curDate = new Date();
    let dueDate = new Date(this.props.date);
    let numDays = dueDate.getDate() - curDate.getDate();
    let dueString = ""

    if (numDays > 0)
      dueString = "Due in " + numDays + " Day" + (numDays == 1 ? '' : 's');
    else
      dueString = "Already Paid";

    return dueString;
  }

  render() {
    console.log("Loading: " + this.props.name)
    return (
      <View style={eventCardStyles.container}>
        <View style={eventCardStyles.eventCategory} />

        <View style={eventCardStyles.eventInfo}>
          <Text style={{fontSize: 20}}>
            {this.props.name}
          </Text>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>
            ${this.props.cost}
          </Text>
          <Text style={{fontSize: 20}}>
            {this.getDueDateString()}
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