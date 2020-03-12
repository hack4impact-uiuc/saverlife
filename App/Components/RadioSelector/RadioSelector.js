import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import RadioItem from './RadioItem.js'


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

export default class RadioSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: 0,
        }
    }

    onSelect = (id) => {
        this.setState({
            selectedId: id
        })
    }

    render() {
        return (
            <View style={{flexDirection: "row", flexWrap: "wrap", alignContent: "space-between"}}>
                {(this.props.data).map(item => (
                    <RadioItem title={item.title} selected={this.state.selectedId == item.categoryId} onSelect={this.onSelect} categoryId = {item.categoryId} key={item.categoryId}/>
                ))}
            </View>
        )
    }
}