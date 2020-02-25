import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Article from '../../Components/Article';

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '8%'
  },
  subarticles:{
    flex: 1, flexDirection: 'row', justifyContent:'space-between', width:'55%'
  }
});

class ArticleScreen extends React.Component {
    render() {
        return (
          <ScrollView style={styles.screen}>
            <Article />
            <View style={styles.subarticles}>
              <Article />
              <Article />
            </View> 
          </ScrollView>
          
        );
    }
}
export default ArticleScreen;