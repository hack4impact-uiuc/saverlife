import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    savingsContainer: {
        margin: '3%'
    },
    progressContainer: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#d6d7da',
        backgroundColor: '#FFFFFF',
        padding: '3%',
        marginTop: '2%',
        marginBottom: '2%',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 3
        }
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: '3%'
    },
    transactionButton: {
        backgroundColor: '#9E3185',
        borderRadius: 20,
        paddingLeft: '6%',
        paddingRight: '6%',
        justifyContent: 'center',
        color: '#FFFFFF'
    },
    goalButton: {
        justifyContent: 'center',
        color: '#9E3185'
    }
})