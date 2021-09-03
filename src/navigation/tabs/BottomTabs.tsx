import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DevelopmentStack, APIDemoStack } from "stacks"
import { Icon } from "react-native-elements"
import { Routes } from "types"
import { useTranslation } from "react-i18next"

export function BottomTabs () {
    const MainTabsNav = createBottomTabNavigator()
    const { t } = useTranslation()

    return (
        <MainTabsNav.Navigator
            initialRouteName={Routes.DevelopmentStack}
            screenOptions={{ headerShown: false }}
        >
            <MainTabsNav.Screen
                name={Routes.DevelopmentStack}
                component={DevelopmentStack}
                options={{
                    title: t("bottomTabsTitles.dev"),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name={'code'} type={'material'} color={color} size={size} />
                    ),
                }}
            />

            <MainTabsNav.Screen
                name={Routes.APIDemoStack}
                component={APIDemoStack}
                options={{
                    title: t("bottomTabsTitles.api"),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name={'api'} type={'material'} color={color} size={size} />
                    ),
                }}
            />
        </MainTabsNav.Navigator>
    )
}
