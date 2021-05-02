import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, Image, View } from 'react-native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../styles/colors'
import avatar from '../assets/avatar.png'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Header() {
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }
        loadStorageUsername()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image source={avatar} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
})
