module.exports = {
    settings: { react: { version: "detect" } },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
    },

    rules: {
        indent: ["warn", 4, { SwitchCase: 1 }],
        'no-shadow': 'warn',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-children-prop': 'off',
        'react/jsx-key': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        "no-duplicate-imports": "error",
        "object-curly-newline":  ["error", { multiline: true }],
        "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
        "array-bracket-newline": ["error", { multiline: true }],
        "array-element-newline": ["error", "consistent"],
    },
}
