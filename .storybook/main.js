module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  stories: ['../components/**/index.stories.tsx'],
  webpackFinal: (config) => {
    const findCssRule = (rule) => /css/i.test(rule.test.toString())
    const findCssLoaderEntry = (useEntry) => /css-loader/i.test(useEntry.loader)
    const cssRule = config.module.rules.find(findCssRule)
    const cssLoaderEntry = cssRule.use.find(findCssLoaderEntry)
    cssLoaderEntry.options.modules = {
      auto: true,
      localIdentName: '[name]_[local]__[hash:base64:5]',
    }

    return config
  },
}
