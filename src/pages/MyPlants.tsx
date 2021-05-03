import React, { useEffect, useState } from 'react'

import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native'
import Header from '../components/Header'

import colors from '../styles/colors'

import waterdrop from '../assets/waterdrop.png'
import { IPlantProps, removePlant, loadPlant } from '../libs/storage'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'
import fonts from '../styles/fonts'
import { PlantCardSecondary } from '../components/PlantCardSecondary'
import { Load } from '../components/Load'

export function MyPlants() {
    const [myPlants, setMyPlants] = useState<IPlantProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWatered, setNextWatered] = useState<string>()

    function handleRemove(plant: IPlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await removePlant(plant.id)

                        setMyPlants((oldData) =>
                            oldData.filter((item) => item.id !== plant.id)
                        )
                    } catch (error) {
                        Alert.alert('Não foi possível remover')
                    }
                },
            },
        ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStored = await loadPlant()

            const nextTime = formatDistance(
                new Date(plantsStored[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            )

            setNextWatered(
                `Não te esqueças de regar a ${plantsStored[0].name} a ${nextTime}.`
            )

            setMyPlants(plantsStored)
            setLoading(false)
        }
        loadStorageData()
    }, [])

    if (loading) {
        return <Load />
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image style={styles.spotlightImage} source={waterdrop} />

                <Text style={styles.spotlightText}>{nextWatered}</Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>Próximas regadas</Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary
                            handleRemove={() => {
                                handleRemove(item)
                            }}
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 10,
        backgroundColor: colors.background,
    },

    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    spotlightImage: {
        width: 60,
        height: 60,
    },

    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        textAlign: 'center',
    },

    plants: {
        flex: 1,
        width: '100%',
    },

    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20,
    },
})
