import 'react-native-gesture-handler'
import React from "react"
import { RootNavigator } from "./src/navigation/RootNavigator"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import APIProvider from 'api/APIProvider'
import i18n from "localisation"

// keep this or i18n might not get bundled!
i18n.getDataByLanguage('en')

const App = () => {
    return (
        <Provider store={store}>
            <APIProvider>
                <SafeAreaProvider>
                    <RootNavigator/>
                </SafeAreaProvider>
            </APIProvider>
        </Provider>
    )
}

export default App

