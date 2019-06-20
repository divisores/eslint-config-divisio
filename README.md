# eslint-config-divisio

## Documentation for ESLint shareable configs

Shareable configs are a nice way of creating a pattern for coding style :sunglasses:

- [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs)

## Installation

The best option is to install this package with all the necessary peer dependencies, so you can use:

`npx install-peerdeps --dev eslint-config-divisio`

## eslint Setup

Now configure your `.eslintrc` or `.eslintrc.js` or whatever extension you use like above:

```json
{
  "extends": "eslint-config-divisio"
}
```

And that's it for real is simple as that :squirrel:

_Note: you can still overwrite the `env`, `globals` and `parser` in your local `.eslintrc.js`, depending on which platform you're coding (react-native or react-dom)._
