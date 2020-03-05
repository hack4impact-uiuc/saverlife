import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button} from 'react-native';
import styles from'./AddTransactionStyle';
import NumericInput from '@wwdrew/react-native-numeric-textinput'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 7,
    };
  }
  render() {
    return (
      <View style={styles.container}>  
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




