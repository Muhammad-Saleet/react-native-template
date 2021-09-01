import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { DevelopmentView, ComponentsListView, ComponentView } from "screens"
import { Routes } from "types"

export function DevelopmentStack () {
    const DevelopmentStackNav = createStackNavigator()

    return (
        <DevelopmentStackNav.Navigator
            initialRouteName={Routes.DevelopmentView}
        >
            <DevelopmentStackNav.Screen
                name={Routes.DevelopmentView}
                component={DevelopmentView}
            />

            <DevelopmentStackNav.Screen
                name={Routes.ComponentsListView}
                component={ComponentsListView}
            />

            <DevelopmentStackNav.Screen
                name={Routes.ComponentView}
                component={ComponentView}
            />
        </DevelopmentStackNav.Navigator>
    )
}
