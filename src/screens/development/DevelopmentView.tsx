import React, { ReactElement } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { Routes } from "types"

export const DevelopmentView = (props: any): ReactElement => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.section}
                onPress={() => {
                    props.navigation.navigate(Routes.ComponentsListView)
                }}>
                <Text style={styles.sectionTitle}>{'Components'}</Text>
            </TouchableOpacity>

            <View style={styles.buildAndVersionContainer}>
                <Text style={styles.buildAndVersionItems}>
                    v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
                </Text>
                <Text style={styles.buildAndVersionItems}>BundleID: {DeviceInfo.getBundleId()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        position: 'relative',
        justifyContent: 'space-between',
    },
    section: {
        backgroundColor: '#2086C0',
        borderRadius: 6,
        marginVertical: 5,
        padding: 15,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white",
    },
    text: { padding: 2 },
    buildAndVersionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
    },
    buildAndVersionItems: {
        marginBottom: 4,
        color: 'grey',
        fontStyle: 'italic',
    },
})
