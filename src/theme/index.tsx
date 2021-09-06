import {
    createTheme,
    useTheme as useRTheme,
} from '@shopify/restyle'

const palette = {
    white: "#FFFFFF",
    black: "#000000",
    lightGrey: "#FFFFFF",
    darkGrey: "skyblue",
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
        surface: palette.darkGrey,

        // background color in components on surface elements such as search and input fields
        surfaceField: palette.darkGrey,

        // default border color
        border: palette.darkGrey,

        // color of vertical and horizontal dividers used to separate elements
        divider: palette.darkGrey,

        // icons fill color
        icon: palette.black,
        iconPressed: palette.darkGrey,
        iconDisabled: palette.darkGrey,

        // text colors
        text: palette.black,
        textDisabled: palette.darkGrey,
        textSubdued: palette.darkGrey,

        // colors for interactive elements such as links, and indicators of
        // focus and selected states in components such checkboxes and radio buttons
        interactive: palette.darkGrey,
        interactiveDisabled: palette.darkGrey,
        focused: palette.lightGrey,
        surfaceSelected: palette.lightGrey,
        surfacePressed: palette.lightGrey,
        iconOnInteractive: palette.lightGrey,
        textOnInteractive: palette.lightGrey,

        // colors for secondary and tertiary buttons and interactive elements
        action: palette.darkGrey,
        actionDisabled: palette.darkGrey,

        // primary color for use in primary buttons, navigations tabs, selected surface color, etc..
        primary: palette.darkGrey,
        primaryDisabled: palette.darkGrey,
        primaryPressed: palette.darkGrey,
        textOnPrimary: palette.white,
        iconOnPrimary: palette.white,

        // to convey critical/dangerous/error states
        borderCritical: palette.darkGrey,
        borderCriticalSubdued: palette.darkGrey,
        borderCriticalDisabled: palette.darkGrey,
        iconCritical: palette.white,
        surfaceCritical: palette.white,
        surfaceCriticalSubdued: palette.white,
        textCritical: palette.white,
        interactiveCritical: palette.white,
        interactiveCriticalDisabled: palette.white,
        iconOnCritical: palette.white,
        textOnCritical: palette.white,

        // to convey warning states
        borderWarning: palette.darkGrey,
        borderWarningSubdued: palette.darkGrey,
        iconWarning: palette.white,
        surfaceWarning: palette.white,
        surfaceWarningSubdued: palette.white,
        textWarning: palette.white,

        // to convey success/positive states
        borderSuccess: palette.darkGrey,
        borderSuccessSubdued: palette.darkGrey,
        borderSuccessDisabled: palette.darkGrey,
        iconSuccess: palette.white,
        surfaceSuccess: palette.white,
        surfaceSuccessSubdued: palette.white,
        textSuccess: palette.white,
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
        // xs: 4,
        // s: 8,
        // m: 12,
        // l: 18,
        // xl: 24,
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
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
            color: 'text',
        },
        subheader: {
            fontFamily: fonts.primary,
            fontWeight: '600',
            fontSize: 28,
            lineHeight: 36,
            color: 'text',
        },
        body: {
            fontFamily: fonts.primary,
            fontSize: 16,
            lineHeight: 24,
            color: 'text',
        },
    },
})
export const darkTheme = createTheme({ ...lightTheme })

export type Theme = typeof lightTheme;

export const useTheme = () => useRTheme<Theme>()
