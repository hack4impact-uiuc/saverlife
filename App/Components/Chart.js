import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LineChart from "react-native-responsive-linechart";
import {styles, lineChartConfig} from'./ChartStyle';


export default class Chart extends Component {
  render() {
    const { data, xLabels, title} = this.props;
    lineChartConfig.grid.stepSize = (Math.max(data)-Math.min(data))/5;
    return (
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.text}>{title}</Text>
        <LineChart style={{ flex: 2 }} config={lineChartConfig} data={data} xLabels={xLabels}/>
      </View>
    );
  }
}
