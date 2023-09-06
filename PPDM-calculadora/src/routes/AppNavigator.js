import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Calculator    from '../pages/Calculadora/calculadora.js';
import Conversor from '../pages/Conversor/conversor.js'


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculadora"
        screenOptions={{

            headerShown: false
        }}>
        <Stack.Screen name="CalculadoraN" component={Calculator} />
        <Stack.Screen name="ConversorN" component={Conversor} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;

