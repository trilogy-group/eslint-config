Trilogy ESLint rules to be used across all new TypeScript products.

We base our rules on the [StandardJS ruleset for TypeScript](https://standardjs.com/#typescript), as per [this ITD](https://docs.google.com/document/d/1FQK4bWzh0YqBsCG52k1AXs-ra0wjyLBl1MGwQd7byaA/edit#heading=h.rkyqn2fv7ea1).

## Submitting rule changes

If a rule needs changing, please submit a pull request.

Your request must be supported by evidence. The most compelling example is a deep dive analysing a customer defect or production failure.

We don't design for exceptions, so a quality issue should have been observed three times before a rule is changed.

## npm Setup
Create a [personal access token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and updated your `~/.npmrc` file to configure NPM to use it as follows:

~/.npmrc
```
@trilogy-group:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${PAT_TOKEN}
```

## Usage
```
npm install -D @trilogy-group/eslint-config
```

Then, extend the rules in your .eslintrc:
```json
{
  "extends": "@trilogy-group/eslint-config"
}
```
