import React, { ReactElement } from "react"
import { useDispatch } from "react-redux"
import { StyleSheet } from "react-native"
import { Button } from "react-native-elements"
import { setToken } from "../../redux/slices/authSlice"
import { SafeAreaView } from "react-native-safe-area-context"

export function LoginView (props: any):ReactElement {
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(setToken({ token: "fakeToken" }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title={"login"}
                onPress={handleLogin}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

