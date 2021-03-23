const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });


    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@/components/': path.resolve(__dirname, "./components/"),
          '@/lib/': path.resolve(__dirname, "./lib/"),
          '@/styles/': path.resolve(__dirname, "./styles/"),
          '@/assets/': path.resolve(__dirname, "./assets/"),
          '@/utils/': path.resolve(__dirname, "./utils/"),
          '@/queries/': path.resolve(__dirname, "./queries/"),
        },
      },
    }
  },
}