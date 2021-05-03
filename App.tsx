import React, { Fragment, useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'
import Routes from './src/routes'

import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost'

import { StatusBar } from 'react-native'
import colors from './src/styles/colors'
import { IPlantProps } from './src/libs/storage'

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    })

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(
            async (notification) => {
                const data = notification.request.content.data
                    .plant as IPlantProps

                console.log(data)
            }
        )

        return () => subscription.remove()

        // async function notifications() {
        //     await Notifications.cancelAllScheduledNotificationsAsync()

        //     const data = await Notifications.getAllScheduledNotificationsAsync()
        //     console.log(data)
        // }

        // notifications()
    }, [])

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
