import React, { Component } from 'react';
import { View, Text } from 'react-native';

import * as Progress from 'react-native-progress';

class ProgressBar extends Component {
    render() {
        return(
            <View>
                <Progress.Bar progress={0.3} width={200} />
            </View>
        );
    }
}

export default ProgressBar;