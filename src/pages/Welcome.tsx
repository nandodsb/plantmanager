import React from 'react'
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {
    const navigation = useNavigation()

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    tuas plantas de {'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Não esqueças mais de regar tuas plantas. Nós cuidamos de
                    lembrar-te sempre que precisares.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Text>
                        <Feather
                            name="chevron-right"
                            style={styles.buttonIcon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },

    title: {
        fontFamily: fonts.heading,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34,
    },

    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },

    image: {
        height: Dimensions.get('window').width * 0.7,
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56,
    },

    buttonIcon: {
        fontSize: 48,
        color: colors.white,
    },
})
