import { StyleSheet } from 'react-native'

export const Style = StyleSheet.create({
    text: {
        textAlignVertical: "center",
    },
  })

export var getButtonColor = function(cardNum, isSelected) {
    if (isSelected) {
        return "#FFFFFF"
    }
    
    var color = "#2D9CDB"

    switch(cardNum) {
        case 1: 
            color = "#FFB125"
            break;
        case 2:
            color = "#6FCF97"
            break;
        case 3:
            color = "#C5C9F7"
            break;
        case 4:
            color = "#EB5757"
            break;
        case 5:
            color = "#979797"
    }

    return color
}

export var getButtonStyle = function(categoryId, isSelected) {
    let background = isSelected ? getButtonColor(categoryId, false) : "transparent"

    return  {
        padding: 10,
        margin: 10,
        minWidth: "40%",
        backgroundColor: background,
        borderRadius: 100,
        flexDirection: 'row',
    }   
}
