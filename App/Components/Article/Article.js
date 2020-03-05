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
                    {this.props.articleTitle}
                </Text>
                <View style={Style.bottomRow}>
                    <Text style={Style.readMore}> 
                        Read More ->
                    </Text>
                    <Text style={Style.tags}> 
                        {this.props.articleTags}
                    </Text>
                </View>
            </View>
        </View>

        );
    }
}

export default Article; 