import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import OnboardingScreen from './Screens/Onboarding/onboarding';
import Login from './Screens/Login/Login';

function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={OnboardingScreen}  options={{ headershown:false }} />
        <Stack.Screen name='Login' component={Login}  options={{ headershown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  
)}
export default App;
