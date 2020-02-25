import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: "100%",
    backgroundColor: "white"
  }}
)

export const eventCardStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "grey",
    width: "100%",
    height: 90,
    padding: 8
  },
  eventIconWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  eventIcon: {
    width: 74,
    height: 74,
    backgroundColor: "red",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventInfo: {
    flex: 5,
    alignItems: 'flex-start',
    backgroundColor: "red"
  },
  eventLabelWrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection:'row',
    flexWrap:'wrap'
  },
  eventLabel: {
    fontSize: 12,
    backgroundColor: "skyblue",
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 4,
    borderRadius: 10
  }
})

export const wixCalenderStyles = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  monthTextColor: 'blue',
  indicatorColor: 'blue',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  // textDayFontSize: 20,
  // textMonthFontSize: 20,
  // textDayHeaderFontSize: 20,
}