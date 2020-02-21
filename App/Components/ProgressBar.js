import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progressBar: {
        backgroundColor: 'rgb(239, 240, 241)',
        borderColor: 'rgb(239, 240, 241)'
    }
});

class ProgressBar extends Component {
    render() {
        return(
            <View style={styles.progressContainer}>
                <Progress.Bar style={styles.progressBar} color="rgb(150, 74, 246)" progress={this.props.progress} width={null} />
                <View style={styles.textContainer}>
                    <Text>{this.props.progress * 100}%</Text>
                    <Text>${this.props.progress * 400} / 400</Text>
                </View>
            </View>
        );
    }
}

export default ProgressBar;