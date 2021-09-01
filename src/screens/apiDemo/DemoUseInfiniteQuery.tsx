import React, { ReactElement } from "react"
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useListPosts } from "../../api/APIHooks"

export function DemoUseInfiniteQuery ():ReactElement {
    const {
        fetchNextPage,
        isFetchingNextPage,
        data,
    } = useListPosts(7, undefined)

    function renderPostCard ({ item }) {
        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity
                    onPress={() => null}
                    style={{ flex: 1 }}
                >
                    <Text>
                        {item.id}
                    </Text>
                    <Text numberOfLines={1}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderListFooter () {
        if (isFetchingNextPage) {
            return (
                <ActivityIndicator size="large" color={"blue"}/>
            )
        }
        return (<View style={{ height: 40 }}/>)
    }

    const renderEmpty = () => <ActivityIndicator size="large" color={"blue"}/>

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderPostCard}
                onEndReached={() => fetchNextPage()}
                keyExtractor={(post) => post.id.toString()}
                ListEmptyComponent={renderEmpty()}
                ListFooterComponent={renderListFooter()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
})
