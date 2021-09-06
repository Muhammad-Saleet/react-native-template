import 'react-native-gesture-handler'
import React, { useState } from "react"
import { RootNavigator } from "./src/navigation/RootNavigator"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import APIProvider from 'api/APIProvider'
import i18n from "localisation"
import { ThemeProvider } from "@shopify/restyle"
import { lightTheme, darkTheme } from "./src/theme"
import { LogBox } from "react-native"

// keep this or i18n might not get bundled!
i18n.getDataByLanguage('en')

// ignore warnings
LogBox.ignoreLogs(["EventEmitter.removeListener('change', ...)"])

const App = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <Provider store={store}>
            <APIProvider>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    <SafeAreaProvider>
                        <RootNavigator/>
                    </SafeAreaProvider>
                </ThemeProvider>
            </APIProvider>
        </Provider>
    )
}

export default App

