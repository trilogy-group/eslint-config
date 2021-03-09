module.exports = {
    extends: [
        'standard-with-typescript'
    ],
    rules: {
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'consistent-return': 'error',
        'no-empty-function': 'error',
        'no-func-assign': 'error',
        'no-shadow': 'error',
        'no-unused-labels': 'error'
    }
}
