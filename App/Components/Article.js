import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import {Card} from 'react-native-shadow-cards';
import { Card, Button, Icon } from 'react-native-elements'



class Article extends Component {
    render() {
        return(
            <Card image={require('../Assets/Images/TOM-Legend.png')} >
                <Text style={{marginBottom: 10}}>
                    Learn how to save money fast!!!
                </Text>
                <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: "50%"}}
                    title='Read More -->' />
            </Card>
        );
    }
}

export default Article; 