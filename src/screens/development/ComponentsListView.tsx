import * as React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { categoriesList } from './categoriesList'
import { Routes } from "types"

export function ComponentsListView(props: any) {
    const renderCategory = ({ item }) => (
        <View>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            {item.components.map((comp) => (
                <View key={comp.title}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.componentCard}
                        onPress={() => {
                            console.log("item.title: ", item.title)
                            console.log("comp.title: ", comp.title)
                            props.navigation.navigate(
                                Routes.ComponentView,
                                {
                                    categoryTitle: item.title,
                                    componentTitle: comp.title,
                                },
                            )
                        }}
                    >
                        <Text style={styles.componentCardTitle} numberOfLines={1}>
                            {comp.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.categoriesList}
                data={categoriesList}
                renderItem={renderCategory}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesList: {
        paddingBottom: 25,
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    categoryTitle: {
        color: 'black',
        paddingVertical: 12,
        paddingLeft: 0,
        fontSize: 18,
    },
    componentCard: {
        backgroundColor: '#2086C0',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    componentCardTitle: {
        color: 'white',
        fontWeight: '700',
    },
    container: { flex: 1 },
})
