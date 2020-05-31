/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import Login from './screens/Login';
import Register from './screens/Register';
import Account from './screens/Account';
import ConfigMachine from './screens/ConfigMachine';
import AnalyticsScreen from './screens/Analytics';
import Devices from './screens/Devices';


const App = () => {
  return (
    <Devices></Devices>
  );
};

const styles = StyleSheet.create({

});

export default App;
