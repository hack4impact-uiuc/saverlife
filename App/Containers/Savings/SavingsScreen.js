import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import Style from './SavingsScreenStyle';
import ProgressBar from '../../Components/ProgressBar';

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={Style.savingsContainer}>
                <Text>My Savings</Text>
                <View style={Style.progressContainer}>
                    <Text>You've saved $5 this week. You're on track to reach $160 saved by next Wednesday!</Text>
                    <ProgressBar />
                </View>
                <View style={Style.transactionContainer}>
                    <TouchableOpacity style={Style.transactionButton}>
                        <Text style={ {color: Style.transactionButton.color} }>Add Transaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.goalButton}>
                        <Text style={ {color: Style.goalButton.color} }>Change Savings Goal</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default SavingsScreen;