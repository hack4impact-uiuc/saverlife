import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LineChart from "react-native-responsive-linechart";
import {styles} from'./ChartStyle';


export default class Chart extends Component {
  //constructor(props) {}
  render() {

    const { data, xLabels } = this.props;
    // const xLabels = lastNDays(data.length);
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
        visible: false,
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
        label: { visible: true, marginBottom: 25 }
      },
      insetY: 10,
      insetX: 10
    };
    return (
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.text}>Chart</Text>
        <LineChart style={{ flex: 2 }} config={config} data={data} xLabels={xLabels}/>
      </View>
    );
  }
}

function lastNDays(n) {
  var days = [];
  for (var i = 0; i < n; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    if (i%2 == 0)
      days.push('')
    else
      days.push(formatDate(d))
  }
  return days.reverse();
}

function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  if(dd<10) { dd='0'+dd }
  if(mm<10) { mm='0'+mm }
  return mm+'/'+dd;
}

function moneyFormat(amt){
  return "$" + amt.toFixed(2);
}
