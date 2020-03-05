import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Article from '../../Components/Article/Article';
import ArticleCategory from '../../Components/ArticleCategory/ArticleCategory';
import Style from '../Article/ArticleScreenStyle.js';


class ArticleScreen extends React.Component {
    render() {
        return (
          <ScrollView>
            <View style={Style.screen}>

              <Text style={Style.title}> Money 101</Text>


              <Article style={Style.top}></Article>


              <Text style={Style.title} > What do you want to learn about? </Text>
              <View style={Style.bottom}>
                

                <View style={Style.bottomItem}>
                  <ArticleCategory color="#9e3285" title="Ask an Expert"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#f4aa46" title="Emergencies"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#75caee" title="Budgeting"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#7451af" title="Investing"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#c1c6ce" title="Credit"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#ce9dc2" title="Retirement"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#d04591" title="Debt"></ArticleCategory>
                </View> 

                <View style={Style.bottomItem}>
                <ArticleCategory color="#b6edea"title="Taxes"></ArticleCategory>
                </View> 


              </View> 
              

            </View>
          </ScrollView>
          
        );
    }
}
export default ArticleScreen;


