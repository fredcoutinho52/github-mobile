import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import Header from '../../components/Header'

import styles from './styles'

export default function Home() {
    const [repositories, setRepositories] = useState([])

    const navigation = useNavigation()
    const route = useRoute()

    const user = route.params.userData

    async function loadRepositories() {
        const response = await api.get(`${user.login}/subscriptions`)

        setRepositories(response.data)
    }

    useEffect(() => {
        loadRepositories()
    }, [])

    function backToLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.currentUser}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.avatarImage} source={{ uri: user.avatar_url }}/>
                    <Text style={styles.username}>{user.login}</Text>
                </View>

                <TouchableOpacity onPress={backToLogin}>
                    <Text style={styles.btnOtherLoginText}>Change account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.repositoriesView}>
                {repositories.map(repository => (
                    <Text key={repository.id} style={styles.repositoriesNames}>
                        {user.login}/{repository.name}
                    </Text>
                ))}
            </View>
        </View>
    )
}