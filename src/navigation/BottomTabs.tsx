import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./HomeStack"
import {Icon} from "react-native-elements";

export function BottomTabs () {
    const MainTabsNav = createBottomTabNavigator()

    return (
        <MainTabsNav.Navigator
            initialRouteName="HomeStack"
            screenOptions={{headerShown: false}}
        >
            <MainTabsNav.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name={'code'} type={'material'} color={color} size={size} />
                    ),
                }}
            />
        </MainTabsNav.Navigator>
    )
}
