import { StyleSheet } from 'react-native'

export const primaryColor = "purple";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
  },
})

export const dateInfoStyles = StyleSheet.create({
  weekInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  weekHeader: {
    fontSize: 25,
  },

  weekFooter: {
    fontSize: 13,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
})

export const categoryStyle = function(categoryId) {
  let color = '#87ffb5';

  if (categoryId == 0)
    color = '#63c3ff';
  else if (categoryId == 1)
    color = '#ff5c5c';

  return {
    width: '4%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    backgroundColor: color,
  }
}

export const eventCardStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: "white",
    borderRadius: 10,

    width: "95%",
    height: 80,
    margin: 10
  },

  eventCategory: {
    width: '4%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    backgroundColor: 'blue'
  },

  eventIconWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  eventIcon: {
    width: 74,
    height: 74,
    backgroundColor: "gray",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventInfo: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "transparent",
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
  },
  secondaryText: {
    fontSize: 15,
  },
  primaryText: {
    fontSize: 18, 
    fontWeight: "bold", 
    alignSelf: "stretch",
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
