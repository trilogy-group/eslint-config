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
        // AWS CDK uses constructor side effects extensively, so allow these in IaC code
        {
            files: [ '**/*.iac.*' ],
            rules: { 'no-new': 'off' }
        }
    ]
}
