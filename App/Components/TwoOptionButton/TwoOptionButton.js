import React from 'react'
import { Platform, Text, View, TouchableOpacity, Button, ActivityIndicator, Image } from 'react-native'
import { getButtonStyle, getTextStyle, Style } from './TwoOptionButtonStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome5'


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class TwoOptionButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            leftSelected: true,
        }
    }

    onPress = (leftPressed) => {
        this.setState({
            leftSelected: leftPressed,
        })
    }

    render() {
        return (
            <View style={Style.container}>
                <TouchableOpacity style={getButtonStyle(this.state.leftSelected, true)} onPress={()=>{this.onPress(true)}}>
                    <Text style={getTextStyle(this.state.leftSelected)}>Once</Text>
                </TouchableOpacity>

                <TouchableOpacity style={getButtonStyle(!this.state.leftSelected, false)} onPress={()=>{this.onPress(false)}}>
                    <Text style={getTextStyle(!this.state.leftSelected)}>Recurring</Text>
                </TouchableOpacity>
            </View>
    )
    }
}