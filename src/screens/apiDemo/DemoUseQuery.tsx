import React, { ReactElement } from "react"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { useGetPost, useUpdatePost } from "../../api/APIHooks"
import { Button } from "react-native-elements"

export function DemoUseQuery ():ReactElement {
    const { data, status, isFetching, refetch } = useGetPost(1)
    const { status: updateStatus, mutate: updatePost } = useUpdatePost()

    return (
        <SafeAreaView>
            <Text style={{ marginVertical: 10 }}>
                {`isFetching: ${isFetching}`}
            </Text>

            <Text style={{ marginVertical: 10 }}>
                {`status: ${status}`}
            </Text>

            <Text style={{ marginVertical: 10 }}>
                {JSON.stringify(data)}
            </Text>

            <Button
                title={"Refetch"}
                onPress={() => refetch()}
                containerStyle={{ marginVertical: 10 }}
                TouchableComponent={TouchableOpacity}
            />

            <Text style={{ marginTop: 40 }}>
                {`status: ${updateStatus}`}
            </Text>

            <Button
                title={"Update post"}
                // @ts-ignore
                // Note that in this demo, the post will NOT be updated,
                // but the api will act as if it did the update
                onPress={() => updatePost({
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                })}
                containerStyle={{ marginVertical: 10 }}
                TouchableComponent={TouchableOpacity}
            />
        </SafeAreaView>
    )
}
