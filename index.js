module.exports = {
    extends: [
        '../../gts',
        'netflix'
    ],
    rules: {
        'prettier/prettier': [0],
        'node/no-extraneous-import': [0],
        '@typescript-eslint/semi': [2, "never"],
        semi: [2, "never"],
        quotes: [2, "single"]
    }
}
