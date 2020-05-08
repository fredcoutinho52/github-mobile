import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 55,
        height: 55,
        resizeMode: 'stretch',
        marginBottom: 15,
    },

    input: {
        width: 380,
        borderWidth: 1,
        borderColor: '#d1d5da',
        borderRadius: 3,
        padding: 5,
        marginBottom: 15,
        fontSize: 16,
    },

    btnLogin: {
        width: 380,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24292e',
        borderRadius: 3,
    },

    btnLoginText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})