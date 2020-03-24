import { StyleSheet } from 'react-native'

export const Style = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#AB2287",
        backgroundColor: "#AB2287",
        borderRadius: 10,
        marginTop: 10,
        flex: 1,
        alignItems: "stretch"
    },
  })

export var getButtonStyle = function(isSelected, isLeft) {
    let background = isSelected ? "#AB2287" : "#FFFFFF"

    let style = {
        backgroundColor: background,
        width: "50%",
        padding: "3%"
    }   

    if (isLeft) {
        style.borderBottomLeftRadius = 10
        style.borderTopLeftRadius = 10
    } else {
        style.borderBottomRightRadius = 10
        style.borderTopRightRadius = 10
    }

    return style
}

export var getTextStyle = function(isSelected) {
    let color = isSelected ? "#FFFFFF" : "#AB2287"

    let style = {
        color: color,
        fontWeight: "bold",
    }   

    return style
}