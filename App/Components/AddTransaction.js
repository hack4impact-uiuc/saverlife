import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button } from 'react-native';
import styles from'./AddTransactionStyle';
import NumericInput from '@wwdrew/react-native-numeric-textinput'
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield';

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.00,
    };
  }

  render() {
    return (
      <View style={styles.container}>  
        
        <NumericInput style={styles.formatting}
          placeholder = "$0.00"
          type='currency'
          locale='en-US'
          currency='USD'
          value={this.state.value}
          onUpdate={(value) => this.setState({value})}
        />
        {/* <Text>Decimal Value: {value}</Text> */}
      </View>
    );
  }
}

// const styles: {
//   container: ViewStyleProp,
//   formatting: TextStyleProp
// } = StyleSheet.create({
//   container: {
//     paddingTop: '10%',
//     // paddingRight: '30%',
//     // paddingLeft: '10%',
//     borderBottomWidth: 1,
//   },
//   formatting: {
//     fontSize: 50,
//     textAlign: 'center',
//     margin: 10
//   }
// })



