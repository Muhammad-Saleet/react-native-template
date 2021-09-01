import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { APIDemoHome, DemoUseQuery,DemoUseInfiniteQuery } from "screens"
import { Routes } from "types"

export function APIDemoStack () {
    const APIDemoStackNav = createStackNavigator()

    return (
        <APIDemoStackNav.Navigator
            initialRouteName={Routes.DevelopmentView}
        >
            <APIDemoStackNav.Screen
                name={Routes.APIDemoHome}
                component={APIDemoHome}
            />

            <APIDemoStackNav.Screen
                name={Routes.DemoUseQuery}
                component={DemoUseQuery}
            />

            <APIDemoStackNav.Screen
                name={Routes.DemoUseInfiniteQuery}
                component={DemoUseInfiniteQuery}
            />
        </APIDemoStackNav.Navigator>
    )
}
