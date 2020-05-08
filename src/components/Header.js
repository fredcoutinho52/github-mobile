import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Constants from 'expo-constants'

import logo from '../assets/logoWhite.png'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24292e',
        height: 60,
        marginTop: Constants.statusBarHeight,
        marginBottom: 20,
    },

    image: {
        width: 34,
        height: 34,
        resizeMode: 'stretch',
    }
})