import React from 'react'
import { Platform, Text, View, TouchableOpacity, Button, ActivityIndicator, Image } from 'react-native'
import { getButtonStyle } from './TwoOptionButtonStyle.js'
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

    onPress = () => {

    }

    render() {
        return (
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={getButtonStyle(this.state.leftSelected, true)} onPress={this.onPress}>
                        <Text>Once</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={getButtonStyle(!this.state.leftSelected, false)} onPress={this.onPress}>
                        <Text>Recurring</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}