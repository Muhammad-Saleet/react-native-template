import React, { ReactElement } from "react"
import { SafeAreaView, TouchableOpacity, View } from "react-native"
import { Button } from "react-native-elements"
import { Routes } from "types"

export function APIDemoHome ({ navigation }):ReactElement {
    return (
        <SafeAreaView>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Button
                    title={"Use Query Demo"}
                    onPress={() => navigation.navigate(Routes.DemoUseQuery)}
                    containerStyle={{ marginVertical: 10 }}
                    TouchableComponent={TouchableOpacity}
                />

                <Button
                    title={"Use Infinite Query Demo"}
                    onPress={() => navigation.navigate(Routes.DemoUseInfiniteQuery)}
                    containerStyle={{ marginVertical: 10 }}
                    TouchableComponent={TouchableOpacity}
                />
            </View>
        </SafeAreaView>
    )
}
