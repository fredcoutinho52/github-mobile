import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    currentUser: {
        width: 380,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },

    avatarImage: {
        width: 25,
        height: 25,
        marginRight: 10,
        borderRadius: 2,
    },

    username: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    btnOtherLoginText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },

    repositoriesView: {
        width: 380,
        alignSelf: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: '#d1d5da',
        borderRadius: 3,
    },

    repositoriesNames: {
        fontSize: 16,
        marginTop: 4,
        marginBottom: 4,
        color: '#0366d6',
        fontWeight: 'bold',
    }
})