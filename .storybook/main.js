const { propSatisfies, test } = require('ramda')

module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links'],
  stories: ['../components/**/index.stories.tsx'],
  webpackFinal: (config) => {
    const cssFileRule = propSatisfies(test(/css/i), 'test')
    const cssLoader = propSatisfies(test(/css-loader/i), 'loader')

    const loader = config.module.rules.find(cssFileRule).use.find(cssLoader)

    loader.options.modules = {
      auto: true,
      localIdentName: '[name]_[local]__[hash:base64:5]',
    }

    return config
  },
}
