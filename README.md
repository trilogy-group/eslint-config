# eng-code-rules
Repository to centralize and standardize linting rules

## Usage
To apply the coding rules hereby proposed, extend your `.eslintrc.json` with `@trilogy-group/eslint-config` or just `@trilogy-group`.

### Examples of `.eslintrc.json`
Only the scope name, as the single rule extension
```json
{
    "root": true,
    "extends": "@trilogy-group",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {}
}
```
Fully scoped named along with other rules
```json
{
    "root": true,
    "extends": [
      "standard-with-typescript",
      "@trilogy-group/eslint-config"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {}
}
```
