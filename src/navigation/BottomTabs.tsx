import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DevelopmentStack } from "stacks"
import { Icon } from "react-native-elements"
import { Routes } from "types"

export function BottomTabs () {
    const MainTabsNav = createBottomTabNavigator()

    return (
        <MainTabsNav.Navigator
            initialRouteName={Routes.DevelopmentStack}
            screenOptions={{ headerShown: false }}
        >
            <MainTabsNav.Screen
                name={Routes.DevelopmentStack}
                component={DevelopmentStack}
                options={{
                    title: "Dev",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name={'code'} type={'material'} color={color} size={size} />
                    ),
                }}
            />
        </MainTabsNav.Navigator>
    )
}
