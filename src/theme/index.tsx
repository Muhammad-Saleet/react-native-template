import {
    createTheme,
    TextProps,
    BoxProps,
    useTheme as useRTheme,
} from '@shopify/restyle'

const palette = {
    white: "#FFFFFF",
    black: "#000000",
    lightText: "#FFFFFF",
    darkText: "#000000",
}

const fonts = {
    primary: "PTSerif",
    primaryBold: "PTSerifBold",
    primaryItalic: "PTSerifItalic",
    primaryBoldItalic: "PTSerifBoldItalic",
}

export const lightTheme = createTheme({
    colors: {
        // background color in screen components.
        background: palette.black,

        // background color in components such as Card, Modal, and Popover.
        surface: palette.veryLightGray,

        // background color in components on surface elements such as search and input fields
        surfaceField: palette.veryLightGray,

        // default border color
        border: palette.veryLightGray,

        // color of vertical and horizontal dividers used to separate elements
        divider: palette.veryLightGray,

        // icons fill color
        icon: palette.veryLightGray,
        iconPressed: palette.veryLightGray,
        iconDisabled: palette.veryLightGray,

        // text colors
        text: palette.veryLightGray,
        textDisabled: palette.veryLightGray,
        textSubdued: palette.veryLightGray,

        // colors for interactive elements such as links, and indicators of
        // focus and selected states in components such checkboxes and radio buttons
        interactive: palette.veryLightGray,
        interactiveDisabled: palette.veryLightGray,
        focused: palette.darkText,
        surfaceSelected: palette.darkText,
        surfacePressed: palette.darkText,
        iconOnInteractive: palette.darkText,
        textOnInteractive: palette.darkText,

        // colors for secondary and tertiary buttons and interactive elements
        action: palette.veryLightGray,
        actionDisabled: palette.veryLightGray,

        // primary color for use in primary buttons, navigations tabs, selected surface color, etc..
        primary: palette.veryLightGray,
        primaryDisabled: palette.veryLightGray,
        primaryPressed: palette.veryLightGray,
        textOnPrimary: palette.lightText,
        iconOnPrimary: palette.lightText,

        // to convey critical/dangerous/error states
        borderCritical: palette.veryLightGray,
        borderCriticalSubdued: palette.veryLightGray,
        borderCriticalDisabled: palette.veryLightGray,
        iconCritical: palette.lightText,
        surfaceCritical: palette.lightText,
        surfaceCriticalSubdued: palette.lightText,
        textCritical: palette.lightText,
        interactiveCritical: palette.lightText,
        interactiveCriticalDisabled: palette.lightText,
        iconOnCritical: palette.lightText,
        textOnCritical: palette.lightText,

        // to convey warning states
        borderWarning: palette.veryLightGray,
        borderWarningSubdued: palette.veryLightGray,
        iconWarning: palette.lightText,
        surfaceWarning: palette.lightText,
        surfaceWarningSubdued: palette.lightText,
        textWarning: palette.lightText,

        // to convey success/positive states
        borderSuccess: palette.veryLightGray,
        borderSuccessSubdued: palette.veryLightGray,
        borderSuccessDisabled: palette.veryLightGray,
        iconSuccess: palette.lightText,
        surfaceSuccess: palette.lightText,
        surfaceSuccessSubdued: palette.lightText,
        textSuccess: palette.lightText,
    },
    spacing: {
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
        12: 48,
        16: 64,
        20: 80,
        24: 96,
        32: 128,
        40: 160,
        48: 192,
        56: 224,
        64: 256,
        72: 288,
        80: 320,
        96: 384,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    borderRadii: {
        s: 4,
        m: 8,
        l: 12,
        xl: 16,
        max: 10000,
    },
    textVariants: {
        default: {},
        header: {
            fontFamily: fonts.primary,
            color: palette.darkText,
        },
        pressedText: { color: palette.lightText },
    },
})
export const darkTheme = createTheme({ ...lightTheme })

export type Theme = typeof lightTheme;

export const useTheme = () => useRTheme<Theme>()
