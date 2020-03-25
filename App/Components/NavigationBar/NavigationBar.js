import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../../Services/NavigationService';
import { createBottomTabNavigator } from 'react-navigation';
import {navigationBar} from './NavigationBarStyle';

// Containers
import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import SavingsScreen from 'App/Containers/Savings/SavingsScreen';

const Tab = createBottomTabNavigator();

const NavigationBar = () => {

    const routes = {
      1: 'Savings',
      2: 'MainScreen',
      3: '3',
      4: '4'
    }

    return(
      <View style={navigationBar.navigationBarContainer}>
        {/*<TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[1], [])}>*/}
        {/*  <Text style={{fontSize: 26}}>1</Text>*/}
        {/*  <Text style={{fontSize: 13}}>Savings</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[2],  [])}>*/}
        {/*  <Text style={{fontSize: 26}}>2</Text>*/}
        {/*  <Text style={{fontSize: 13}}>Articles</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[3], [])}>*/}
        {/*  <Text style={{fontSize: 26}}>3</Text>*/}
        {/*  <Text style={{fontSize: 13}}>Calendar</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[4], [])}>*/}
        {/*  <Text style={{fontSize: 26}}>4</Text>*/}
        {/*  <Text style={{fontSize: 13}}>Settings</Text>*/}
        {/*</TouchableOpacity>*/}
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ExampleScreen} />
          <Tab.Screen name="Settings" component={SavingsScreen} />
        </Tab.Navigator>
      </View>
    );
}

export default NavigationBar;