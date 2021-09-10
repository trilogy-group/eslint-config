module.exports = {
    extends: [
        'standard-with-typescript'
    ],
    rules: {
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'consistent-return': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        'no-func-assign': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-labels': 'error'
    },
    overrides: [
        {
            // unit tests
            files: [ '**/*.spec.*', '**/*.test.*' ],
            rules: {
                // unit tests need to create mocks easily, relax objectLiteralTypeAssertions
                '@typescript-eslint/consistent-type-assertions': [ 'error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' } ]
            }
        }, {
            // no-console to run on frontend 
            files: ['**/frontend/*.js', '**/frontend/*.ts'],
            rules: {
                'no-console': 'error'
            }
        }
    ]
}
