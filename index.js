/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {appName} from './app.json';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? 
GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent('NYTimesApp', () => App);
