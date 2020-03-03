import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import Style from './SavingsScreenStyle';
import ProgressBar from '../../Components/ProgressBar';
import ChartScreen from '../ChartScreen/ChartScreen';

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={ {flex: 1} }>
                <View style={Style.savingsContainer}>
                    <Text>My Savings</Text>
                    <View style={Style.card}>
                        <Text>You've saved $5 this week. You're on track to reach $160 saved by next Wednesday!</Text>
                        <ProgressBar />
                    </View>
                    <View style={Style.buttonContainer}>
                        <TouchableOpacity style={Style.transactionButton}>
                            <Text style={ {color: Style.transactionButton.color} }>Add Transaction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.goalButton}>
                            <Text style={ {color: Style.goalButton.color} }>Change Savings Goal</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>Your Progress</Text>
                    <View style={ {...Style.card, ...Style.chartContainer} }>
                        <ChartScreen/>
                    </View>
                </View>

                
            </SafeAreaView>            
        );
    }
}

export default SavingsScreen;