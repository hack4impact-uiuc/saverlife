import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {eventCardStyles, categoryStyle} from './CalendarStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { monthToString, dayToString } from './../../Util/DateUtils'

export default class EventCard extends Component {
  state = {

  };

  getDueDateString() {
    let curDate = new Date();
    let dueDate = new Date(this.props.date);
    let numDays = (dueDate.getDate() - curDate.getDate()) + 1;
    let dueString = ""

    if (numDays > 0)
      dueString = "Due in " + numDays + " Day" + (numDays == 1 ? '' : 's');
    else
      dueString = "Past Due";
    
    let dueMonth = monthToString(dueDate).substr(0, 3)
    let dueDay = dayToString(dueDate)

    dueString += " (" + dueMonth + " " + dueDay + ")"

    return dueString;
  }

  onRef = icon => {
    if (!this.state.icon) {
      this.setState({icon})
    }
  }

  render() {
    console.log("Loading: " + this.props.name)
    return (
      <View style={eventCardStyles.container}>
        {/* Cateogry color */}
        <View style={categoryStyle(this.props.category)} />

        {/* Text content */}
        <View style={{padding: 10, flex: 1, flexDirection: 'row'}}>
          <View style={eventCardStyles.eventInfo}>
            <Text style={eventCardStyles.secondaryText}>
              {this.props.name}
            </Text>

            <Text style={eventCardStyles.primaryText}>
              ${this.props.cost}
            </Text>

            <Text style={eventCardStyles.secondaryText}>
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
          
          {/* Buttons */}
          <View style={{paddingStart: 10, paddingEnd: 10}}>
            <TouchableOpacity onPress={this.onPress}>
              <Icon
                name='edit'
                size={20}
                color={"gray"}
                ref={this.onRef} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this.onPress}>
            <Icon
              name='ellipsis-v'
              size={20}
              color={"gray"}
              ref={this.onRef} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}