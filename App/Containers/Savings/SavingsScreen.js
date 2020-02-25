import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import ProgressBar from '../../Components/ProgressBar';

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Savings</Text>
                <ProgressBar progress={0.34} />
            </SafeAreaView>
        );
    }
}

export default SavingsScreen;