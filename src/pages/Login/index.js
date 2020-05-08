import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import styles from './styles'

import logo from '../../assets/logoBlack.png'

export default function Login() {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    async function handleLogin() {
        const response = await api.get(username)

        navigation.navigate('Home', { userData: response.data })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo}/>

            <TextInput 
                style={styles.input}
                placeholder="Username"
                autoCorrect={false}
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
                <Text style={styles.btnLoginText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}