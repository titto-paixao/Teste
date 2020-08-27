import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './routes'
import {StatusBar} from  'expo-status-bar'

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="dark" />
        <Routes />
      </NavigationContainer>
  );
}