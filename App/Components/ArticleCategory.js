import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    categoryBackground: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    categoryImage:{
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