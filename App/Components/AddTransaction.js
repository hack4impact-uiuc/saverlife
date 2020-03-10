import React, { Component } from 'react';
import { Text, Platform, StyleSheet, View, Button } from 'react-native';
// import { Button } from 'react-native-elements';
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
        <NumericInput style={styles.numericFormat}
          placeholder = "$0.00"
          type = 'currency'
          locale = 'en-US'
          currency = 'USD'
          value = {this.state.value}
          onUpdate = {(val) => this.setState({value: val})}
        />
        <Button style={styles.submitButton}
          title = 'Submit Amount'
          onPress = {() => this.setState({value: 0})}
        />
        <Text style={styles.text}>
          OR{'\n'}
          To skip this process next time
        </Text>
        <Button style={styles.linkButton}
          title = 'Link Your Bank Account'
        />
      </View>
    );
  }
}

