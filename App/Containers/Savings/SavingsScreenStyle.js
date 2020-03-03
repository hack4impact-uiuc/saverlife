import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    savingsContainer: {
        margin: '3%',
    },
    card: {
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
        },
    },
    chartContainer: {
        height: "45%",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: "12%",
        marginBottom: "8%",
    },
    transactionButton: {
        backgroundColor: '#9E3185',
        borderRadius: 18,
        padding: "3%",
        color: '#FFFFFF'
    },
    goalButton: {
        color: '#9E3185'
    },
})