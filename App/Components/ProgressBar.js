import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './ProgressBarStyles';

import * as Progress from 'react-native-progress';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 200,
            goal: 400
        };
    }
    render() {
        return(
            <View style={Style.progressContainer}>
                <Progress.Bar style={Style.progressBar} color={Style.progressBar.color} progress={this.state.current / this.state.goal} width={null} />
                <View style={Style.textContainer}>
                    <Text>{this.state.current / this.state.goal * 100}%</Text>
                    <Text>${this.state.current} / {this.state.goal}</Text>
                </View>
            </View>
        );
    }
}

export default ProgressBar;