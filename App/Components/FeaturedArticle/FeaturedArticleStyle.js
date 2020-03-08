import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card:{
        width:'100%',
        borderColor: '#d6d7da',
        borderWidth: 0.5,
        borderRadius: 5,
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
    },
    imageContainer: {
        backgroundColor: 'grey',
        width:'100%',
        aspectRatio:2/1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title:{
        fontWeight: 'bold',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 2,
    },
    readMore:{
        color: '#0086DA',

    },
    tags:{
        color:'grey',
    },
    bottomRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
})