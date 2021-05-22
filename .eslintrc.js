module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
    ],
    globals: {
        "__dirname": "readonly",
        "args": "readonly",
        "process": "readonly"
    },
    parserOptions: {
        ecmaVersion: 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
    }
}
