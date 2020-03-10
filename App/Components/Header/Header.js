import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 30, fontWeight: 'bold', padding: 10, backgroundColor: "purple"}}>Saverlife</Text>
            </View>
        );
    }
}