import React, { useRef } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationManager, navigationRef } from "./NavigationManager"
import { AuthStack } from "./AuthStack"
import { BottomTabs } from "./BottomTabs"

export function RootNavigator () {
    const routeNameRef = useRef()

    // initial state of the navigator; this does NOT mean that the navigator
    // will dynamically change state as redux state changes. This takes care
    // of the state on initial mount only
    const initialState = NavigationManager.predefinedStates.authState

    async function logScreen () {
        const currentRoute = navigationRef.current.getCurrentRoute()
        const previousRouteName = routeNameRef.current
        const currentRouteName = currentRoute.name
        // const currentRouteParams = currentRoute.params

        if (previousRouteName !== currentRouteName) {
            console.log(`navigated to ${currentRouteName}`)
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName
    }

    const RootStackNav = createStackNavigator()
    return (
        <NavigationContainer
            ref={navigationRef}
            initialState={initialState}
            onReady={() =>
                (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
            }
            onStateChange={logScreen}
        >
            <RootStackNav.Navigator
                initialRouteName="AuthStack"
                screenOptions={{presentation: "modal"}}
            >
                <RootStackNav.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{
                        headerShown: false,
                        animationEnabled: false,
                    }}
                />

                <RootStackNav.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{
                        headerShown: false,
                        animationEnabled: false,
                    }}
                />
            </RootStackNav.Navigator>
        </NavigationContainer>
    )
}
