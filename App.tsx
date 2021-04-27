import React, { Fragment } from 'react'
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'

import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost'

import { StatusBar } from 'react-native'
import colors from './src/styles/colors'

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Fragment>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.green}
                translucent
            />
            <Routes />
        </Fragment>
    )
}
