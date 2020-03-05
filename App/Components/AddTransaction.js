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

  fieldRef = React.createRef();
 
  onSubmit = () => {
    let { current: field } = this.fieldRef;
 
    console.log(field.value());
  };
 
  formatText = (text) => {
    console.log('text ' + text)
    if (text == '') {
      text = '0'
    }
    if (text%10 == 0)
    return (parseInt(text.replace(/[^0-9]+/g, ''))) / 100.0;
    // accounting.formatMoney(parseFloat(value) / 100)
    //return text.replace(/[^+\d]/g, '');
    if (text == '') {
      text = '0'
    }
    console.log('text ' + text)
    console.log('replaced ' + text.replace(/[^0-9]+/g, ''))
    return (parseFloat(text.replace(/[^0-9]+/g, '')) / 100);
  };

  render() {
    return (
      <View style={styles.container}>  
        <OutlinedTextField
          label='amount'
          keyboardType='phone-pad'
          formatText={this.formatText}
          onSubmitEditing={this.onSubmit}
          ref={this.fieldRef}
        />
        <NumericInput
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




