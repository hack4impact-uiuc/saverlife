import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';

import Style from './SavingsScreenStyle';
import ProgressBar from '../../Components/ProgressBar';

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Savings</Text>
                <ProgressBar progress={0.34} />
                <View style={Style.transactionContainer}>
                    <Button title="Add Transaction"/>
                    <Button title="Link Bank"/>
                </View>
            </SafeAreaView>
        );
    }
}

export default SavingsScreen;