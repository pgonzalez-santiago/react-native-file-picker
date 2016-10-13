/**
 * index.js
 * react-native-file-picker
 *
 * Copyright © 2016 Callstack.io. All rights reserved.
 *
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class MainApp extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Example', () => MainApp));
