import React from 'react'
import { Text, View } from 'react-native'
import styles from './ChartScreenStyle'
import { Helpers } from 'App/Theme'
import Chart from '../../Components/Chart'

export default class ChartScreen extends React.Component {
  render() {
    const labels = lastNDays(7);
    return (
      <View style={[Helpers.fillRowCenter, styles.container] }>
        <Chart data={[-10, -15, 40, 19, 32, 15, 52]} xLabels={labels}/>
      </View>
    )
  }
}

function lastNDays(n) {
  var days = [];
  for (var i = 0; i < n; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i*7);
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
