import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LineChart from "react-native-responsive-linechart";
import {styles} from'./ChartStyle';


export default class Chart extends Component {
  render() {
    const { data, xLabels, title} = this.props;
    const config = {
      line: {
        visible: true,
        strokeWidth: 2,
        strokeColor: "#964af6"
      },
      area: {
        visible: false
      },
      tooltip: {
        visible: true,
        labelFontSize: 10,
        labelFormatter: moneyFormat
      },
      grid: {
        visible: true,
        stepSize: (Math.max(data)-Math.min(data))/5
      },
      yAxis: {
        // labelColor: "#5822a3",
        labelFormatter: moneyFormat
      },
      xAxis: {
        visible: true
      },
      dataPoint: {
        visible: true,
        color: "#5822a3",
        radius: 4,
        label: { visible: false, marginBottom: 25 }
      },
      insetY: 10,
      insetX: 10
    };
    return (
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.text}>{title}</Text>
        <LineChart style={{ flex: 2 }} config={config} data={data} xLabels={xLabels}/>
      </View>
    );
  }
}

function moneyFormat(amt){
  return "$" + amt.toFixed(2);
}
