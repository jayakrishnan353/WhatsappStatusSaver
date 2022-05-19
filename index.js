/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
// import App from './app';

enableScreens();
if (__DEV__) {
  import('./app/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
