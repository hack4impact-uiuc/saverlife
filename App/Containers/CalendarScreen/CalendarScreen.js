import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import Header from './../../Components/Header/Header'
import Calendar from './../../Components/Calendar/Calendar'
import { ScrollView } from 'react-native-gesture-handler'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class CalendarScreen extends React.Component {

  render() {
    return (
      // <ScrollView>
      <View>
        <Header />
        <Calendar />
      </View>
      ///* </ScrollView> */}
    )
  }
}