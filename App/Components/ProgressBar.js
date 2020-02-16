import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
    progressContainer: {
        backgroundColor: '#ff0000',
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

class ProgressBar extends Component {
    render() {
        return(
            <View style={styles.progressContainer}>
                <Progress.Bar progress={this.props.progress} width={null} />
                <View style={styles.textContainer}>
                    <Text>34%</Text>
                    <Text>$ 136/400</Text>
                </View>
            </View>
        );
    }
}

export default ProgressBar;