import React, { Component } from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import ExampleScreen from '../Example/ExampleScreen';
import SplashScreen from '../SplashScreen/SplashScreen';
import SavingsScreen from '../Savings/SavingsScreen';
import {Text} from 'react-native'

class NavigationWrapper extends Component {
  state = {
    currentScreen: <></>
  };

  componentDidMount(): void {
    switch(this.props.navigation.state.routeName) {
      case "MainScreen":
        this.setState({currentScreen: <ExampleScreen />})
        break;
      case "Savings":
        this.setState({currentScreen: <SavingsScreen />})
        break;
      default:
        console.error("invalidRoute")
        break;
    }
  }

  render() {
    return (
      <>
        {this.state.currentScreen}
        <NavigationBar route={this.props.navigation.state.routeName} />
      </>
    )
  }
}

export default NavigationWrapper;
