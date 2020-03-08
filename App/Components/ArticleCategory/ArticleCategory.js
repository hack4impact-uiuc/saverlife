import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Style from '../ArticleCategory/ArticleCategoryStyle.js';
import { TouchableHighlight } from 'react-native-gesture-handler';

class ArticleCategory extends Component {
    
    render() {
        return(
            <View style={Style.categoryBackground}>
              <View style={[Style.categoryImage, {backgroundColor: this.props.color}]} onStartShouldSetResponder={() => alert('This is the article page')} ></View> 
              <Text style={Style.categoryTitle}> {this.props.title} </Text>
            </View>
        );
    }
}

export default ArticleCategory; 