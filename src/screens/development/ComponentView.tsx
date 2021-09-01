import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { categoriesList } from './categoriesList'

export function ComponentView(props: any) {
    const { categoryTitle, componentTitle } = props.route.params

    const categoryObject = categoriesList.find((item) => item.title === categoryTitle)
    const componentObject = categoryObject?.components.find((item) => item.title === componentTitle)

    // place here the states to be passed to functional components
    const [someState, setSomeState] = useState(null)

    // here we map the state variables to the components
    const args = { ComponentName: [someState, setSomeState] } // a list of arguments to be passed

    return (
        <View
            style={{
                ...styles.list,
                // padding: componentTitle === 'VerticalList' ? 10 : 15,
            }}>
            {typeof componentObject?.component === 'function'
                ? componentObject.component(...args[componentObject?.title])
                : componentObject?.component}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 15,
        width: '100%',
    },
})
