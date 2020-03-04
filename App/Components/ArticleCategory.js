import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
// import {Card} from 'react-native-shadow-cards';
import { Card, Button, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    categoryBackground: {
      // width: '50%',
      // height: '50%',
      // backgroundColor: 'black',
      flex: 1,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryImage:{
      // flexDirection: 'row',
      // width: '50%',
      // height: '50%',
      // backgroundColor: 'white',
      // alignContent:'center',
      // justifyContent: 'center',
      width:'70%',
      height:'70%',
      backgroundColor:'#964AF6',
      borderRadius: 100,
    },
    categoryTitle:{
      fontWeight:'bold',
      margin:5,
    }
});


class ArticleCategory extends Component {
    render() {
        return(
            <View style={styles.categoryBackground}>
              <View style={styles.categoryImage}></View> 
              <Text style={styles.categoryTitle}> Category Title </Text>
            </View>
        );
    }
}

export default ArticleCategory; 