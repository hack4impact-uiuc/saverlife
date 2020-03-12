import React from 'react'
import { Platform, Text, View, TouchableOpacity, Button, ActivityIndicator, Image } from 'react-native'
import { Style, getButtonStyle, getButtonColor } from './RadioSelectorStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome5'


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class RadioItem extends React.Component {

    onPress = () => {
        this.props.onSelect(this.props.categoryId)
    }

    getIcon = () => {
        if (this.props.selected) {
            return <Icon solid name='check-circle' size={25} color={getButtonColor(this.props.categoryId, this.props.selected)} style={{marginRight: 15}} />
        }

        return <Icon solid name='circle' size={25} color={getButtonColor(this.props.categoryId, this.props.selected)} style={{marginRight: 15}} />
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={getButtonStyle(this.props.categoryId, this.props.selected)}>
                    {this.getIcon()}
                    <Text style={Style.text}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}