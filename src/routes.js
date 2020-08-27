import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'

function Routes() {
    return(
        <Stack.Navigator 
            
            initialRouteName="FirstScreen"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen
                name="FirstScreen"
                component={FirstScreen}
            />
            <Stack.Screen
                name="SecondScreen"
                component={SecondScreen}
            />
        </Stack.Navigator>
    )
}

export default Routes;