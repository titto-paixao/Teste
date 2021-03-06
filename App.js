import 'react-native-gesture-handler';
import React from 'react'
import {AppLoading} from 'expo'
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'
import App from './src/'

export default function Main(){

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return <App />
}