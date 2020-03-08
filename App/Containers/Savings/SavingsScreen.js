import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import Style from './SavingsScreenStyle';
import ProgressBar from '../../Components/ProgressBar';
import ChartScreen from '../ChartScreen/ChartScreen';
import Card from '../../Components/Card';

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={ {flex: 1} }>
                <View style={Style.savingsContainer}>
                    <Text>My Savings</Text>
                    <Card>
                        <Text>You've saved $200. You're on track to reach $400 saved by next Wednesday!</Text>
                        <ProgressBar />
                    </Card>
                    <View style={Style.buttonContainer}>
                        <TouchableOpacity style={Style.transactionButton}>
                            <Text style={ {color: Style.transactionButton.color} }>Add Transaction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.goalButton}>
                            <Text style={ {color: Style.goalButton.color} }>Change Savings Goal</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>Your Progress</Text>
                    <Card style={Style.chartContainer}>
                        <ChartScreen/>
                    </Card>
                </View>

                
            </SafeAreaView>            
        );
    }
}

export default SavingsScreen;