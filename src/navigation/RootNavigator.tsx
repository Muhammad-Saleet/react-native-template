import React, { useEffect, useRef } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationManager, navigationRef } from "./NavigationManager"
import { AuthStack } from "stacks"
import { BottomTabs } from "./tabs/BottomTabs"
import { useSelector } from "react-redux"

export function RootNavigator () {
    const token = useSelector((state) => state?.auth?.token)
    const routeNameRef = useRef()

    // initial state of the navigator; this does NOT mean that the navigator
    // will dynamically change state as redux state changes. This takes care
    // of the state on initial mount only
    let initialState

    if (token) {
        initialState = NavigationManager.predefinedStates.bottomTabsState
    } else {
        initialState = NavigationManager.predefinedStates.authState
    }

    useEffect(() => {
        if (token) {
            NavigationManager.resetRoot(NavigationManager.predefinedStates.bottomTabsState)
        } else {
            NavigationManager.resetRoot(NavigationManager.predefinedStates.authState)
        }
    }, [token])

    function logScreen () {
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
                screenOptions={{ presentation: "modal" }}
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
