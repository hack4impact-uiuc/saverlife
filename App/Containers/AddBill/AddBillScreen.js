import React from 'react'
import { ScrollView, Platform, Text, View, Button, ActivityIndicator, Image, TextInput } from 'react-native'
import { ScreenStyle } from './AddBillScreenStyle.js'
import DropdownMenu from 'react-native-dropdown-menu';
import RadioSelector from './../../Components/RadioSelector/RadioSelector'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class AddBillScreen extends React.Component {

  render() {

    var occuranceOptions = [["Week", "Two Weeks", "Three Weeks", "Month"]]
    var categoryOptions = [
      {title: "Water", categoryId: 0},
      {title: "Loan/Debt", categoryId: 1},
      {title: "Electricity", categoryId: 2},
      {title: "Mortgage", categoryId: 3},
      {title: "Credit Card", categoryId: 4},
      {title: "Other", categoryId: 5},
    ]

    return (
      <ScrollView>
        <View style={ScreenStyle.container}>
          <Text>Crete a New Event</Text>
          
          <Text>Event Name</Text>
          <TextInput style={ScreenStyle.input}/>

          <Text>Cost</Text>
          <TextInput style={ScreenStyle.input}/>

          <Text>Frequency</Text>
          <View style={ScreenStyle.rowContainer}>
            <View style={{flex:1}}>
              <Button title="Once"/>
            </View>

            <View style={{flex:1}}>
              <Button title="Recurring"/>
            </View>
          </View>

          <View style={ScreenStyle.rowContainer}>
            <Text style={ScreenStyle.startRowItem}>Occurs Every</Text>
            <DropdownMenu style={{zIndex: 1000}} data={occuranceOptions}  />
          </View>

          <View style={ScreenStyle.rowContainer}>
            <Text style={ScreenStyle.startRowItem}>Starts On</Text>
            <DropdownMenu style={{zIndex: 3}} data={occuranceOptions} />
          </View>

          <View style={ScreenStyle.rowContainer}>
            <Text style={ScreenStyle.startRowItem}>Next Occurance</Text>
            <DropdownMenu style={{zIndex: 2}} data={occuranceOptions} />
          </View>

          <Text>Category</Text>
          
          <RadioSelector data={categoryOptions}/>

          <Button title="Save Event" />
          <Button title="Cancel" />

        </View>
      </ScrollView>
    )
  }
}