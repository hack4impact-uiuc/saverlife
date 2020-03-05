import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Style from '../ArticleCategory/ArticleCategoryStyle.js';

class ArticleCategory extends Component {
    
    render() {
        return(
            <View style={Style.categoryBackground}>
              <View style={[Style.categoryImage, {backgroundColor: this.props.color}]}></View> 
              <Text style={Style.categoryTitle}> {this.props.title} </Text>
            </View>
        );
    }
}

export default ArticleCategory; 