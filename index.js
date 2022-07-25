/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReduxProviderWrapper from './src/HOCs/reduxProviderWraper';
// Comment test
AppRegistry.registerComponent(appName, () => ReduxProviderWrapper(App));
