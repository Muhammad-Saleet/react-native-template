import React, { ReactElement } from 'react'
import { View } from 'react-native'
import { Button } from "react-native-elements"

interface Category {
    title: string,
    components: Array<{
        title: string,
        component: ReactElement,
    }>
}

export const categoriesList: Array<Category> = [
    {
        title: 'Buttons',
        components: [
            {
                title: 'Regular',
                component: (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Button title={"Title"} onPress={() => console.log("pressed")}/>
                    </View>
                ),
            },
        ],
    },
]
