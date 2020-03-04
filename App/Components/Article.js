import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

var styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
    },
    card:{
        width:'100%',
        borderColor: '#d6d7da',
        borderWidth: 0.5,
        borderRadius: 5,
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
    },
    imageConatiner: {
        backgroundColor: 'grey',
        width:'100%',
        aspectRatio:2/1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title:{
        fontWeight: 'bold',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    readMore:{
        color: '#0086DA',

    },
    tags:{
        color:'grey',
    },
    bottomRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },


    
  });


class Article extends Component {
    render() {
        return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageConatiner}>
                </View>
                <Text style={styles.title}> 
                    What's the difference between withdrawing from a 401k and taking out a 401k loan?
                </Text>
                <View style={styles.bottomRow}>
                    <Text style={styles.readMore}> 
                        Read More ->
                    </Text>
                    <Text style={styles.tags}> 
                        Emergencies, Retirement
                    </Text>
                </View>
            </View>
        </View>

        );
    }
}

export default Article; 