Trilogy ESLint rules for TypeScript to be used across all new products.

We base our rules on the [StandardJS ruleset for TypeScript](https://standardjs.com/#typescript), as per [this ITD](https://docs.google.com/document/d/1FQK4bWzh0YqBsCG52k1AXs-ra0wjyLBl1MGwQd7byaA/edit#heading=h.rkyqn2fv7ea1).

## Submitting rule changes

If a rule needs changing, please submit a pull request.

Your request must be supported by evidence. The most compelling example is a deep dive analysing a customer defect or production failure.

We don't design for exceptions, so a quality issue should have been observed three times before a rule is changed.

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
