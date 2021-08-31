import React, { createRef } from "react"
import { StackActions } from "@react-navigation/native"
import {NavigationContainerRef, NavigationState} from "@react-navigation/core";

export const navigationRef: React.Ref<NavigationContainerRef<any>> = createRef()

const authState = {
    index: 0,
    routes: [
        {
            name: "AuthStack",
            state: {
                index: 0,
                routes: [{ name: "LoginView" }],
            },
        },
    ],
}

const bottomTabsState = {
    index: 0,
    routes: [
        {
            name: "BottomTabs",
            state: {
                index: 0,
                routes: [{ name: "HomeView" }],
            },
        },
    ],
}

export const NavigationManager = {
    navigate (name: string, params: any) {
        navigationRef.current?.navigate(name, params)
    },

    push (name: string, params: any) {
        navigationRef.current?.dispatch(StackActions.push(name, params))
    },

    getRootState () {
        return navigationRef.current?.getRootState()
    },

    resetRoot (navigationState: any) {
        navigationRef.current?.resetRoot(navigationState)
    },

    getCurrentRoute () {
        return navigationRef.current?.getCurrentRoute()
    },

    addListener (event, callback) {
        return navigationRef.current?.addListener(event, callback)
    },

    predefinedStates: {
        authState,
        bottomTabsState,
    },
}
