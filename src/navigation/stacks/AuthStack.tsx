import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { LoginView } from "screens"
import { Routes } from "types"

export function AuthStack () {
    const AuthStackNav = createStackNavigator()

    return (
        <AuthStackNav.Navigator
            initialRouteName={Routes.LoginView}
        >
            <AuthStackNav.Screen
                name={Routes.LoginView}
                component={LoginView}
                options={{ headerTitle: "Login Screen", headerShown: true }}
            />
        </AuthStackNav.Navigator>
    )
}
