import React, { Component } from 'react';
import { View } from 'react-native';
import LineChart from "react-native-responsive-linechart";


export default class Chart extends Component {

  render() {
    const data = [-10, -15, 40, 19, 32, 15, 52];
    const xLabels = lastNDays(data.length);
    const config = {
      line: {
        visible: true,
        strokeWidth: 1,
        strokeColor: "#54a0ff"
      },
      area: {
        visible: false
      },
      tooltip: {
        visible: true,
        labelFontSize: 10,
        labelFormatter: moneyFormat
      },
      yAxis: {
        labelColor: "#54a0ff",
        labelFormatter: moneyFormat
      },
      xAxis: {
        visible: true
      },
      insetY: 10,
      insetX: 10
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LineChart style={{ flex: 1 }} config={config} data={data} xLabels={xLabels}/>
      </View>
    );
  }
}

function lastNDays(n) {
  var days = [];
  for (var i = 0; i < n; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
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

