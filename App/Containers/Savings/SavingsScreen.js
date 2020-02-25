import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import ProgressBar from '../../Components/ProgressBar';

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        backgroundColor: 'red'
    },
});

class SavingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <Text>Savings</Text>
                <ProgressBar progress={0.34} />
                
            </SafeAreaView>
        );
    }
}

export default SavingsScreen;