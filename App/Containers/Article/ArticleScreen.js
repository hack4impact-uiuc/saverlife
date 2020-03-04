import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Article from '../../Components/Article';
import ArticleCategory from '../../Components/ArticleCategory';


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal:'4%'
  },
  top:{
    width:'100%',
    marginLeft: 0 ,
  },
  bottom:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomItem:{
    aspectRatio: 1/1,
    width: '50%',
    padding: 5,
  },
  bottomItemInner:{
    flex: 1,
    backgroundColor: '#292929'
  },
  title:{
    fontWeight: "bold",
    marginBottom: 5,
    marginTop:15,
    color: 'grey'
  },
  categoryImage:{
    width:10,
    height:10,
    backgroundColor:'black',
  }

});

class ArticleScreen extends React.Component {
    render() {
        return (
          <ScrollView>
            <View style={styles.screen}>

              <Text style={styles.title}> Money 101</Text>


              <Article style={styles.top}></Article>


              <Text style={styles.title} > What do you want to learn about? </Text>
              <View style={styles.bottom}>
                

                <View style={styles.bottomItem}>
                  <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 

                <View style={styles.bottomItem}>
                <ArticleCategory></ArticleCategory>
                </View> 


              </View> 
              

            </View>
          </ScrollView>


          // <View style={styles.screen}>
          //   <Article></Article>
          // </View>





          
        );
    }
}
export default ArticleScreen;


