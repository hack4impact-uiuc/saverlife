import { StyleSheet } from 'react-native'

export var getButtonStyle = function(isSelected, isLeft) {
    let background = isSelected ? "#FFFFFF" : "#AB2287"

    let style = {
        padding: 10,
        minWidth: "50%",
        backgroundColor: background,
        flexDirection: 'row',
        borderColor: "#AB2287",
        borderWidth: 2,
    }   

    if (isLeft) {
        style.borderBottomLeftRadius = 100
        style.borderTopLeftRadius = 100
    } else {
        style.borderBottomRightRadius = 100
        style.borderTopRightRadius = 100
    }

    return style
}
