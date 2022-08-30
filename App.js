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

import Onboarding from './Screens/Onboarding/onboarding';
import Login from './Screens/Login/Login';
import Signup from './Screens/Sign Up/signUp';
import HomeScreen from './Screens/homeScreen/homeSreen';
import TabNavigation from './Navigator';
import Category from './Screens/Category Page/Category';

function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options ={{headerShown: false}} />
        <Stack.Screen  name= "Login" component = {Login} options ={{headerShown: false}} />
        <Stack.Screen  name= "Signup" component = {Signup} options ={{headerShown: false}} />
        <Stack.Screen  name= "HomeScreen" component = {TabNavigation} options ={{headerShown: false}} />
        <Stack.Screen  name= "Category" component = {TabNavigation} options ={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  
)}
export default App;
