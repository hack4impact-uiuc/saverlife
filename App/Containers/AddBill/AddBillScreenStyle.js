import { StyleSheet } from 'react-native'

export const ScreenStyle = StyleSheet.create({
  background: {
    backgroundColor: '#ededed',
    flex: 1
  },
  container: {
      padding: 15,
  },
  input: {
      height: 50,
      fontSize: 25,
      margin: 5,
  },
  picker: {
    padding: "100%",
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15
  },
  startRowItem: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  primaryText: {
    fontSize: 20,
    color: "#000000",
  },
  secondaryText: {
    fontSize: 12,
    color: "#979797",
  },
  endRowItem: {

  } 
})