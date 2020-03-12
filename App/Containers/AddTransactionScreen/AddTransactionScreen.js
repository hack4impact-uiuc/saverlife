import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AddTransaction from '../../Components/AddTransaction';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Add Transaction</Text>
                <AddTransaction/>
            </SafeAreaView>
        );
    }
}