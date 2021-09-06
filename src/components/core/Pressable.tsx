import {
    Pressable as DefaultPressable,
    PressableProps as DefaultPressableProps,
} from 'react-native'
import {
    useRestyle,
    // styles
    backgroundColor,
    opacity,
    visible,
    layout,
    spacing,
    border,
    shadow,
    position,
    backgroundColorShorthand,
    spacingShorthand,
    // props
    BackgroundColorProps,
    OpacityProps,
    VisibleProps,
    LayoutProps,
    SpacingProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    BackgroundColorShorthandProps,
    SpacingShorthandProps,
} from '@shopify/restyle'

import { Theme } from '../../theme'
import React, { useState } from "react"

const restyleFunctions = [
    backgroundColor,
    opacity,
    visible,
    layout,
    spacing,
    border,
    shadow,
    position,
    backgroundColorShorthand,
    spacingShorthand,
]

type restyleViewProps =
    BackgroundColorProps<Theme> &
    SpacingProps<Theme> &
    OpacityProps<Theme> &
    VisibleProps<Theme> &
    LayoutProps<Theme> &
    BorderProps<Theme> &
    ShadowProps<Theme> &
    PositionProps<Theme> &
    BackgroundColorShorthandProps<Theme> &
    SpacingShorthandProps<Theme>

// inherits RN pressable props. Has restyle props for its default (unpressed)
// state and for its pressed state
type PressableProps =
    DefaultPressableProps &
    restyleViewProps &
    {
        pressedStyleProps: restyleViewProps
    }

export const Pressable = ({
    onPressIn,
    onPressOut,
    pressedStyleProps,
    ...rest
} : PressableProps) => {
    const [isPressed, setIsPressed] = useState(false)

    const restyleDefaultProps = useRestyle(restyleFunctions, rest)
    const restylePressedProps = useRestyle(restyleFunctions, { ...rest, ...pressedStyleProps })

    return (
        <DefaultPressable
            {...restyleDefaultProps}
            {...(isPressed ? restylePressedProps : {})}
            onPressIn={() => {
                setIsPressed(true)
                onPressIn && onPressIn()
            }}
            onPressOut={() => {
                setIsPressed(false)
                onPressOut && onPressOut()
            }}
        />
    )
}
