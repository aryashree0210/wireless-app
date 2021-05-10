import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import SearchScreen from './Screens/SearchScreen';
import BookTransactionScreen from './Screens/BookTransactionScreen';
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}


const TabNavigator = createMaterialTopTabNavigator({
  Transaction : {screen: BookTransactionScreen},
  Search: {screen: SearchScreen}

});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
