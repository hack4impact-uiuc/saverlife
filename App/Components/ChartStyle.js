import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export const styles = StyleSheet.create({
  text: {
    ...Fonts.normal,
    textAlign: 'center',

  },
  config: {
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
      visible: true
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
})
