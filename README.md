# eng-code-rules
Shareable ESLint rules for TypeScript to be used across all Ship Every Merge projects.

Currently, it uses the [StandardJS ruleset for TypeScript](https://standardjs.com/#typescript), as per [this ITD](https://docs.google.com/document/d/1FQK4bWzh0YqBsCG52k1AXs-ra0wjyLBl1MGwQd7byaA/edit#heading=h.rkyqn2fv7ea1).

## Usage
```
npm install @trilogy-group/eslint-config
```

Then, extend the rules in your .eslintrc:
```json
{
  "extends": "@trilogy-group/eslint-config"
}
```
