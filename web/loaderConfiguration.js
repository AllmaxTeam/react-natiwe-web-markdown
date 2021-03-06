const path = require('path');

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(__dirname, '../index.web.js'),
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../node_modules/react-native-markdown-view'),
    path.resolve(__dirname, '../node_modules/react-native-tabular-grid-markdown-view'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app
      plugins: ['react-native-web'],
      // The 'react-native' preset is recommended (or use your own .babelrc)
      presets: ['module:metro-react-native-babel-preset'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  imageLoaderConfiguration,
  babelLoaderConfiguration,
};
