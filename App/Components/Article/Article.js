import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './ArticleStyle.js';

class Article extends Component {
    render() {
        return(
        <View style={Style.container}>
            <View style={Style.card}>
                <View style={Style.imageConatiner}>
                </View>
                <Text style={Style.title}> 
                    What's the difference between withdrawing from a 401k and taking out a 401k loan?
                </Text>
                <View style={Style.bottomRow}>
                    <Text style={Style.readMore}> 
                        Read More ->
                    </Text>
                    <Text style={Style.tags}> 
                        Emergencies, Retirement
                    </Text>
                </View>
            </View>
        </View>

        );
    }
}

export default Article; 