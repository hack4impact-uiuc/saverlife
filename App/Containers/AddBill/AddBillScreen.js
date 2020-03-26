import React from 'react'
import { ScrollView, Platform, TouchableOpacity, Text, View, Button, ActivityIndicator, Image, TextInput } from 'react-native'
import { ScreenStyle } from './AddBillScreenStyle.js'
import RNPickerSelect from 'react-native-picker-select';
import RadioSelector from './../../Components/RadioSelector/RadioSelector'
import TwoOptionButton from '../../Components/TwoOptionButton/TwoOptionButton.js'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {monthToString, getDateString, dayToString } from '../../Util/DateUtils'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class AddBillScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      startDate: new Date(),
      isCalendarVisible: false,
    }
  }

  onPressSelectDate = () => {
    this.setState({
      isCalendarVisible: true
    })
  }

  onConfirmDate = (date) => {
    this.setState({
      startDate: date,
      isCalendarVisible: false,
    })
  }

  onCancel = () => {
    this.setState({
      isCalendarVisible: false
    })
  }

  render() {
    var occuranceOptions = [
      {label: "Week", value: "week"},
      {label: "Two Weeks", value: "two weeks"},
      {label: "Month", value: "month"},
    ]

    var categoryOptions = [
      {title: "Water", categoryId: 0},
      {title: "Loan/Debt", categoryId: 1},
      {title: "Electricity", categoryId: 2},
      {title: "Mortgage", categoryId: 3},
      {title: "Credit Card", categoryId: 4},
      {title: "Other", categoryId: 5},
    ]

    return (
      <ScrollView style={ScreenStyle.background}>
        <View style={ScreenStyle.container}>
          <Text style={ScreenStyle.secondaryText}>Crete a New Event</Text>
          
          <Text style={ScreenStyle.secondaryText} >Event Name</Text>
          <TextInput style={ScreenStyle.input} placeholder={"Bill Name"}/>

          <Text style={ScreenStyle.secondaryText}>Cost</Text>
          <TextInput style={ScreenStyle.input} placeholder={"$10.00"}/>

          <Text style={ScreenStyle.secondaryText}>Frequency</Text>
          <TwoOptionButton />

          <View style={ScreenStyle.rowContainer}>
            <Text style={ScreenStyle.startRowItem}>Occurs Every</Text>
            <RNPickerSelect style={ScreenStyle.picker} useNativeAndroidPickerStyle={false} onValueChange={(value) => console.log(value)} items={occuranceOptions}/>
          </View>

          <View style={ScreenStyle.rowContainer}>
            <Text style={ScreenStyle.startRowItem}>Starts On</Text>
            
            <TouchableOpacity onPress={()=>{this.onPressSelectDate()}}>
              <Text>{getDateString(this.state.startDate)}</Text>
            </TouchableOpacity>
            
            <DateTimePickerModal isVisible={this.state.isCalendarVisible} onConfirm={this.onConfirmDate} onCancel={this.onCancel}/>
          </View>

          <Text style={ScreenStyle.secondaryText}>Category</Text>
          
          <RadioSelector data={categoryOptions}/>

          <Button title="Save Event" />
          <Button title="Cancel" />

        </View>
      </ScrollView>
    )
  }
}