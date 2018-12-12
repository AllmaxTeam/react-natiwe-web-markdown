/* @flow */

import React from 'react';
import { AppRegistry } from 'react-native';

import { hot } from 'react-hot-loader'

import App from './src';

// App registration and rendering
AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => hot(module)(App));

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root'),
});
