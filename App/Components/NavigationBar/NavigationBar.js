import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../../Services/NavigationService';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {navigationBar} from './NavigationBarStyle';

function NavigationBar() {

    const routes = {
      1: 'Savings',
      2: 'MainScreen',
      3: '3',
      4: '4'
    }

    return(
      <View style={navigationBar.navigationBarContainer}>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[1], [])}>
        <Text style={{fontSize: 26}}>1</Text>
        <Text style={{fontSize: 13}}>Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[2],  [])}>
        <Text style={{fontSize: 26}}>2</Text>
        <Text style={{fontSize: 13}}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[3], [])}>
        <Text style={{fontSize: 26}}>3</Text>
        <Text style={{fontSize: 13}}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={navigationBar.navigationBarItem} onPress={() => NavigationService.navigate(routes[4], [])}>
        <Text style={{fontSize: 26}}>4</Text>
        <Text style={{fontSize: 13}}>Settings</Text>
      </TouchableOpacity>
    </View>
    );
}

export default NavigationBar;