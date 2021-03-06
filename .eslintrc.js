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
        // javascript
        indent: ["error", 4, { SwitchCase: 1 }],
        "no-shadow": "error",
        "no-duplicate-imports": "error",
        "object-curly-newline":  ["error", { multiline: true }],
        "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
        "array-bracket-newline": ["error", { multiline: true }],
        "array-element-newline": ["error", "consistent"],
        "jsx-quotes": "error",
        "comma-dangle": ["error", "always-multiline"],
        "object-shorthand": "error",
        "object-curly-spacing": ["error", "always"],
        "quote-props": ["error", "as-needed"],
        semi: ["error", "never", { beforeStatementContinuationChars: "always" }],
        "no-multi-spaces": "error",
        "no-tabs": "error",
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-trailing-spaces": "error",
        "require-await": "warn",

        // typescript
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": 0,

        // react
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/no-children-prop": "off",
        "react/jsx-key": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-max-props-per-line": [2, { when: "multiline" }],
    },
}
