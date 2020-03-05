import { StyleSheet } from 'react-native';

export const navigationBar = StyleSheet.create({
  navigationBarContainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row"
  },
  navigationBarItem: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingTop: 5,
    borderTopWidth: 10,
    borderColor: "lightgrey"
  },
  navigationBarItemActive: {
    flex: 1,
    borderColor: "purple",
    color: "purple"
  }
});