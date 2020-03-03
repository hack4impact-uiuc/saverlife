import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
// import {Card} from 'react-native-shadow-cards';
import { Card, Button, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    categoryBackground: {
      // width: '50%',
      // height: '50%',
      // backgroundColor: 'black',
      flex: 1,
      backgroundColor: '#DCDCDC',
    },
    categoryImage:{
      flexDirection: 'row',
      width: '50%',
      height: '50%',
      backgroundColor: 'white',
      alignContent:'center',
      justifyContent: 'center',
    }
});


class ArticleCategory extends Component {
    render() {
        return(
            <View style={styles.categoryBackground}>
            </View>
        );
    }
}

export default ArticleCategory; 